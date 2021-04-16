import { MouseEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import { MemberBox } from "./MemberBox";
import { allMembers } from "../constants/characterInfo";
import { useState } from "react";

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
  display: ${({ modalIsOpen }: { modalIsOpen: boolean }) =>
    modalIsOpen ? "flex" : "none"};
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

export const SelectionModal = (
  modalIsOpen: boolean,
  // afterOpenModal: (
  //   setIsSelectedStates: Dispatch<SetStateAction<boolean[]>>
  // ) => void,
  closeModal: (ids: number[]) => void
) => {
  const [isSelectedStates, setIsSelectedStates] = useState<boolean[]>(
    allMembers.map(() => false)
  );

  const handleMemberBoxClicked = (idx: number) => (
    e: MouseEvent<HTMLElement>
  ) => {
    e.stopPropagation();

    const selectedCount = isSelectedStates.filter((isSelected) => isSelected)
      .length;

    setIsSelectedStates([
      ...isSelectedStates.slice(0, idx),
      !isSelectedStates[idx] && selectedCount < 5,
      ...isSelectedStates.slice(idx + 1),
    ]);
  };

  const handleClose = () =>
    closeModal(
      isSelectedStates.reduce<number[]>((ids, isSelected, idx) => {
        if (isSelected) {
          ids.push(allMembers[idx].id);
        }

        return ids;
      }, [])
    );
  return (
    <Overlay modalIsOpen={modalIsOpen} onClick={handleClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ItemContainer>
          {allMembers.map((member, idx) => (
            <ItemWrapper
              isSelected={isSelectedStates[idx]}
              key={`selection-${member.id}`}
              onClick={handleMemberBoxClicked(idx)}
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
