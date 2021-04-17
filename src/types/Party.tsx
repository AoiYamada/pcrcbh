import { Dispatch, SetStateAction } from "react";
import { MemberIds } from "./Member";
import { CloseModelCallback } from "./SelectionModal";

export type PartyProps = {
  memberIds: MemberIds;
  setMemberIds?: Dispatch<SetStateAction<MemberIds>>;
};

export type PartyActionProps = {
  openModal?: (ids: MemberIds, closeModalCallback: CloseModelCallback) => void;
};
