import styled from "styled-components";

export const Overlay = styled.div`
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

export const Modal = styled.div`
  max-width: 80%;
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
  user-select: none;
  z-index: 200;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  max-height: 350px;
  overflow: auto;
  display: flex;
  flex-basis: content;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  flex-basis: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  padding: 1px;
  opacity: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? 1 : 0.5};
`;
