import { combineReducers } from "redux";
import { SelectionModalProps } from "../types/SelectionModal";
import {
  OPEN_MODAL,
  OpenModalAction,
  CloseModalAction,
  CLOSE_MODAL,
  SelectMemberAction,
  SELECT_MEMBER,
} from "./actions";

const selectionModalInitState: SelectionModalProps = {
  isOpened: false,
  selectedIds: [],
  closeModalCallback: (ids) => {},
};

const modalReducer = (
  state = selectionModalInitState,
  action: SelectMemberAction | OpenModalAction | CloseModalAction
): SelectionModalProps => {
  const { type } = action;
  switch (type) {
    case SELECT_MEMBER:
      const { id } = action as SelectMemberAction;
      const selectedIdsMap = new Map(state.selectedIds.map((id) => [id, true]));
      const selectedCount = state.selectedIds.length;

      if (selectedIdsMap.delete(id)) {
        return {
          ...state,
          selectedIds: Array.from(selectedIdsMap.keys()),
        };
      }

      if (selectedCount >= 5) {
        return state;
      }

      return {
        ...state,
        selectedIds: [...state.selectedIds, id].sort((a, b) => a - b),
      };
    case OPEN_MODAL:
    case CLOSE_MODAL:
      const { isOpened, selectedIds, closeModalCallback } = action as
        | OpenModalAction
        | CloseModalAction;
      return {
        ...state,
        isOpened,
        selectedIds,
        closeModalCallback,
      };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  modal: modalReducer,
});
