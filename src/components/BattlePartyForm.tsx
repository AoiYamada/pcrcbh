import { useState } from "react";
import { DropDownSelectionContainer } from "../containers/DropDownSelectionContainer";
import { PartyContainer } from "../containers/PartyContainer";
import { BattlePartyFormProps } from "../types/Party";
import { ListItemWrapper } from "./styles/ListComponents";

export const BattlePartyForm = ({
  memberIds,
  setMemberIds,
}: BattlePartyFormProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <ListItemWrapper width="300px">
      <PartyContainer
        memberIds={memberIds}
        setMemberIds={setMemberIds}
      ></PartyContainer>
      <button
        onClick={() => (isOpened ? setIsOpened(false) : setIsOpened(true))}
      >
        {isOpened ? "^" : "v"}
      </button>
      <DropDownSelectionContainer
        setMemberIds={setMemberIds}
        isOpened={isOpened}
        closeDropDown={() => setIsOpened(false)}
      ></DropDownSelectionContainer>
    </ListItemWrapper>
  );
};
