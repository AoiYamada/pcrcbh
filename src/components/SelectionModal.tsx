import { MouseEvent } from "react";

import { MemberBox } from "./MemberBox";
import { allMembers } from "../constants/characterInfo";
import {
  SelectionModalActionProps,
  SelectionModalProps,
} from "../types/SelectionModal";
import {
  ButtonContainer,
  ItemContainer,
  ItemWrapper,
  Modal,
  Overlay,
} from "./styles/ModalComponents";

export const SelectionModal = ({
  isOpened,
  selectedIds,
  closeModal,
  closeModalCallback,
  setModalSelection,
}: SelectionModalProps & SelectionModalActionProps) => {
  const selectedIdsMap = new Map(selectedIds.map((id) => [id, true]));

  const handleMemberBoxClicked = (id: number) => (
    e: MouseEvent<HTMLElement>
  ) => {
    e.stopPropagation();

    const selectedCount = selectedIds.length;

    if (selectedIdsMap.delete(id)) {
      setModalSelection(Array.from(selectedIdsMap.keys()));
      return;
    }

    if (selectedCount >= 5) {
      return;
    }

    setModalSelection([...selectedIds, id].sort((a, b) => a - b));
  };

  const handleClose = () => {
    closeModalCallback(selectedIds);
    closeModal();
  };

  return (
    <Overlay isOpened={isOpened} onClick={handleClose}>
      <Modal
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ItemContainer>
          {allMembers.map((member) => (
            <ItemWrapper
              isSelected={selectedIdsMap.has(member.id)}
              key={member.id}
              onClick={handleMemberBoxClicked(member.id)}
            >
              {MemberBox(member)}
            </ItemWrapper>
          ))}
        </ItemContainer>
        <ButtonContainer>
          <button onClick={handleClose}>選擇</button>
        </ButtonContainer>
      </Modal>
    </Overlay>
  );
};
