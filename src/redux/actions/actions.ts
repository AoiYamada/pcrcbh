import { Member, MemberIds } from "../../types/Member";
import { CloseModelCallback } from "../../types/SelectionModal";
import {
  AddPartyToListAction,
  ADD_PARTY_TO_LIST,
  CloseModalAction,
  CLOSE_MODAL,
  OpenModalAction,
  OPEN_MODAL,
  RemovePartyFromListAction,
  REMOVE_PARTY_FROM_LIST,
  SelectMemberAction,
  SELECT_MEMBER,
} from "./types";

export const selectMember = (id: Member["id"]): SelectMemberAction => {
  return {
    type: SELECT_MEMBER,
    id,
  };
};

export const openModal = (
  ids: MemberIds,
  closeModalCallback: CloseModelCallback
): OpenModalAction => {
  return {
    type: OPEN_MODAL,
    isOpened: true,
    selectedIds: ids,
    closeModalCallback,
  };
};

export const closeModal = (): CloseModalAction => {
  return {
    type: CLOSE_MODAL,
    isOpened: false,
    selectedIds: [],
    closeModalCallback: (ids: MemberIds) => {},
  };
};

export const addPartyToList = (ids: MemberIds): AddPartyToListAction => {
  return {
    type: ADD_PARTY_TO_LIST,
    ids,
  };
};

export const removePartyFromList = (idx: number): RemovePartyFromListAction => {
  return {
    type: REMOVE_PARTY_FROM_LIST,
    idx,
  };
};
