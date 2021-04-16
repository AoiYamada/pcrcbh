import { MouseEvent } from "react";
import styled from "styled-components";

import { MemberBox } from "./MemberBox";
import { allMembers } from "../constants/characterInfo";
import {
  SelectionModalActionProps,
  SelectionModalProps,
} from "../types/SelectionModal";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  cursor: pointer;
  position: fixed;
  display: ${({ isOpened }: { isOpened: boolean }) =>
    isOpened ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  max-width: 90%;
  background-color: #ffffff;
  display: flex;
  flex-basis: content;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  cursor: default;
  z-index: 200;
`;

const ItemContainer = styled.div`
  width: 100%;
  max-height: 600px;
  overflow: auto;
  display: flex;
  flex-basis: content;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  flex-basis: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ItemWrapper = styled.div`
  padding: 1px;
  opacity: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? 1 : 0.5};
`;

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
