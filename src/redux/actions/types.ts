import { MemberIds } from "../../types/Member";
import { CloseModelCallback } from "../../types/SelectionModal";

// Modals
export const SET_MODAL_SELECTION = "SET_MODAL_SELECTION";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// Parties
export const ADD_PARTY_TO_LIST = "ADD_PARTY_TO_LIST";
export const REMOVE_PARTY_FROM_LIST = "REMOVE_PARTY_FROM_LIST";

export type SetModalSelectionAction = {
  type: typeof SET_MODAL_SELECTION;
  ids: MemberIds;
};

export type OpenModalAction = {
  type: typeof OPEN_MODAL;
  isOpened: true;
  selectedIds: MemberIds;
  closeModalCallback: CloseModelCallback;
};

export type CloseModalAction = {
  type: typeof CLOSE_MODAL;
  isOpened: false;
  selectedIds: MemberIds;
  closeModalCallback: CloseModelCallback;
};

export type AddPartyToListAction = {
  type: typeof ADD_PARTY_TO_LIST;
  ids: MemberIds;
};

export type RemovePartyFromListAction = {
  type: typeof REMOVE_PARTY_FROM_LIST;
  idx: number;
};

export const setModalSelection = (ids: MemberIds): SetModalSelectionAction => {
  return {
    type: SET_MODAL_SELECTION,
    ids,
  };
};
