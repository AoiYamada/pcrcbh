import { useState } from "react";

import "./App.css";
import { PartyContainer } from "./containers/PartyContainer";

function App() {
  // const [modalIsOpen, setIsOpen] = useState(false);
  const [addPartyIds, setAddPartyIds] = useState<number[]>([]);
  const [party1Ids, setParty1Ids] = useState<number[]>([]);
  const [party2Ids, setParty2Ids] = useState<number[]>([]);
  const [party3Ids, setParty3Ids] = useState<number[]>([]);
  const [compensate1Ids, setCompensate1Ids] = useState<number[]>([]);
  const [compensate2Ids, setCompensate2Ids] = useState<number[]>([]);
  const [compensate3Ids, setCompensate3Ids] = useState<number[]>([]);

  return (
    <div className="App">
      <main>
        <PartyContainer
          memberIds={addPartyIds}
          setMemberIds={setAddPartyIds}
        ></PartyContainer>
        <PartyContainer
          memberIds={party1Ids}
          setMemberIds={setParty1Ids}
        ></PartyContainer>
        <PartyContainer
          memberIds={compensate1Ids}
          setMemberIds={setCompensate1Ids}
        ></PartyContainer>
        <PartyContainer
          memberIds={party2Ids}
          setMemberIds={setParty2Ids}
        ></PartyContainer>
        <PartyContainer
          memberIds={compensate2Ids}
          setMemberIds={setCompensate2Ids}
        ></PartyContainer>
        <PartyContainer
          memberIds={party3Ids}
          setMemberIds={setParty3Ids}
        ></PartyContainer>
        <PartyContainer
          memberIds={compensate3Ids}
          setMemberIds={setCompensate3Ids}
        ></PartyContainer>
      </main>
    </div>
  );
}

export default App;
