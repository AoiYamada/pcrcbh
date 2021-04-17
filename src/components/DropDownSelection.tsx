import styled from "styled-components";
import { DropDownProps } from "../types/DropDownProps";
import { Party } from "./Party";
import { ListItemWrapper } from "./styles/ListComponents";

const DropDownWrapper = styled.div`
  width: 290px;
  min-height: 60px;
  position: absolute;
  display: ${({ isOpened }: { isOpened: boolean }) =>
    isOpened ? "flex" : "none"};
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 10px;
  z-index: 10;
  transform: translate(-5px, 60px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DropDownSelection = ({
  items,
  setMemberIds,
  isOpened,
  closeDropDown,
}: DropDownProps) => {
  return (
    <DropDownWrapper isOpened={isOpened}>
      {items.length ? (
        items.map((ids, idx) => (
          <ListItemWrapper
            key={idx}
            onClick={() => {
              setMemberIds(ids);
              closeDropDown();
            }}
          >
            <Party memberIds={ids}></Party>
          </ListItemWrapper>
        ))
      ) : (
        <div>Empty</div>
      )}
    </DropDownWrapper>
  );
};
