import { combineReducers } from "redux";
import { SelectionModalProps } from "../types/SelectionModal";
import {
  SetModalSelectionAction,
  SET_MODAL_SELECTION,
  OPEN_MODAL,
  OpenModalAction,
  CloseModalAction,
  CLOSE_MODAL,
} from "./actions";

const selectionModalInitState: SelectionModalProps = {
  isOpened: false,
  selectedIds: [],
  closeModalCallback: (ids) => {},
};

const modalReducer = (
  state = selectionModalInitState,
  action: SetModalSelectionAction | OpenModalAction | CloseModalAction
): SelectionModalProps => {
  const { type } = action;
  switch (type) {
    case SET_MODAL_SELECTION:
      const { ids } = action as SetModalSelectionAction;

      return {
        ...state,
        selectedIds: ids,
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
