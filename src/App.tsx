import { useState } from "react";
import styled, { css } from "styled-components";

import "./App.css";
import { BattlePartyForm } from "./components/BattlePartyForm";
import { AddPartyFormContainer } from "./containers/AddPartyFormContainer";
import { BookmarkContainer } from "./containers/BookmarkContainer";
import { PartyContainer } from "./containers/PartyContainer";
import { SelectionModalContainer } from "./containers/SelectionModalContainer";

const fullSizeStyle = css`
  width: 100%;
  height: 100%;
`;

const LRSplitMain = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftMain = styled.div`
  ${fullSizeStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LeftUpMain = styled.div`
  ${fullSizeStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 200px;
  border: solid 1px 1px 0px 1px;
`;

const LeftDownMain = styled.div`
  ${fullSizeStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  overflow: auto;
`;

const RightMain = styled.div`
  ${fullSizeStyle}
  border: solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [addPartyIds, setAddPartyIds] = useState<number[]>([]);
  const [party1Ids, setParty1Ids] = useState<number[]>([]);
  const [party2Ids, setParty2Ids] = useState<number[]>([]);
  const [party3Ids, setParty3Ids] = useState<number[]>([]);
  // const [compensate1Ids, setCompensate1Ids] = useState<number[]>([]);
  // const [compensate2Ids, setCompensate2Ids] = useState<number[]>([]);
  // const [compensate3Ids, setCompensate3Ids] = useState<number[]>([]);

  return (
    <div className="App">
      <LRSplitMain>
        <LeftMain>
          <LeftUpMain>
            <AddPartyFormContainer
              memberIds={addPartyIds}
              setMemberIds={setAddPartyIds}
            ></AddPartyFormContainer>
          </LeftUpMain>
          <LeftDownMain>
            <BookmarkContainer></BookmarkContainer>
          </LeftDownMain>
        </LeftMain>
        <RightMain>
          <BattlePartyForm
            memberIds={party1Ids}
            setMemberIds={setParty1Ids}
          ></BattlePartyForm>
          {/* <BattlePartyForm
          memberIds={compensate1Ids}
          setMemberIds={setCompensate1Ids}
        ></BattlePartyForm> */}
          <BattlePartyForm
            memberIds={party2Ids}
            setMemberIds={setParty2Ids}
          ></BattlePartyForm>
          {/* <BattlePartyForm
          memberIds={compensate2Ids}
          setMemberIds={setCompensate2Ids}
        ></BattlePartyForm> */}
          <BattlePartyForm
            memberIds={party3Ids}
            setMemberIds={setParty3Ids}
          ></BattlePartyForm>
          {/* <BattlePartyForm
          memberIds={compensate3Ids}
          setMemberIds={setCompensate3Ids}
        ></BattlePartyForm> */}
        </RightMain>
      </LRSplitMain>
      <footer>
        <SelectionModalContainer></SelectionModalContainer>
      </footer>
    </div>
  );
}

export default App;
