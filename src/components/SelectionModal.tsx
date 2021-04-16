import { MouseEvent, useCallback } from "react";

import { MemberBox } from "./MemberBox";
import { allMembers } from "../constants/characterInfo";
import {
  SelectionModalActionProps,
  SelectionModalProps,
} from "../types/SelectionModal";
import {
  ButtonContainer,
  ItemsContainer,
  ItemWrapper,
  Modal,
  Overlay,
} from "./styles/ModalComponents";

export const SelectionModal = ({
  isOpened,
  selectedIds,
  closeModal,
  closeModalCallback,
  selectMember,
}: SelectionModalProps & SelectionModalActionProps) => {
  const selectedIdsMap = new Map(selectedIds.map((id) => [id, true]));

  const handleMemberBoxClicked = useCallback(
    (id: number) => (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      selectMember(id);
    },
    [selectMember]
  );

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
        <ItemsContainer>
          {allMembers.map(({ id }, idx) => (
            <ItemWrapper
              isSelected={selectedIdsMap.has(id)}
              key={idx}
              onClick={handleMemberBoxClicked(id)}
            >
              {MemberBox(id, idx)}
            </ItemWrapper>
          ))}
        </ItemsContainer>
        <ButtonContainer>
          <button onClick={handleClose}>選擇</button>
        </ButtonContainer>
      </Modal>
    </Overlay>
  );
};
