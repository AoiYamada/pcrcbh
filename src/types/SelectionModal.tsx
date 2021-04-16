import { MemberIds } from "./Member";

export type SelectionModalProps = {
  isOpened: boolean;
  selectedIds: MemberIds;
  closeModalCallback: CloseModelCallback;
};

export type SelectionModalActionProps = {
  openModal: (ids: MemberIds, closeModalCallback: CloseModelCallback) => void;
  closeModal: () => void;
  setModalSelection: (ids: MemberIds) => void;
};

export type CloseModelCallback = (ids: MemberIds) => void;
