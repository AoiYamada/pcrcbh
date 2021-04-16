import { useState, Dispatch, SetStateAction } from "react";

import "./App.css";
import { Party } from "./components/Party";
import { characterInfo } from "./constants/characterInfo";
import { SelectionModal } from "./components/SelectionModal";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [addPartyIds, setAddPartyIds] = useState<number[]>([]);
  const [party1Ids, setParty1Ids] = useState<number[]>([]);
  const [party2Ids, setParty2Ids] = useState<number[]>([]);
  const [party3Ids, setParty3Ids] = useState<number[]>([]);
  const [compensate1Ids, setCompensate1Ids] = useState<number[]>([]);
  const [compensate2Ids, setCompensate2Ids] = useState<number[]>([]);
  const [compensate3Ids, setCompensate3Ids] = useState<number[]>([]);

  const setterMap: { [key: string]: Dispatch<SetStateAction<number[]>> } = {
    addPartyIds: setAddPartyIds,
    party1Ids: setParty1Ids,
    party2Ids: setParty2Ids,
    party3Ids: setParty3Ids,
    compensate1Ids: setCompensate1Ids,
    compensate2Ids: setCompensate2Ids,
    compensate3Ids: setCompensate3Ids,
  };

  const partyMap: { [key: string]: number[] } = {
    addPartyIds,
    party1Ids,
    party2Ids,
    party3Ids,
    compensate1Ids,
    compensate2Ids,
    compensate3Ids,
  };

  const [bindingParty, setBindingParty] = useState<string>("addPartyIds");

  const openModal = (bindingState: string) => () => {
    setIsOpen(true);
    setBindingParty(bindingState);
  };

  // const afterOpenModal = (
  //   setIsSelectedStates: Dispatch<SetStateAction<boolean[]>>
  // ) => {
  //   const activeIdMap: { [key: number]: boolean } = partyMap[
  //     bindingCloseSetter
  //   ].reduce((activeIds, id) => ({ ...activeIds, [id]: true }), {});

  //   setIsSelectedStates(allMembers.map(({ id }) => activeIdMap[id] || false));
  // };

  const closeModal = (ids: number[]) => {
    setIsOpen(false);
    setterMap[bindingParty](ids);
  };

  const getCharacterInfo = (id: number) => characterInfo[id];

  return (
    <div className="App">
      <main>
        {Party(addPartyIds.map(getCharacterInfo), openModal("addPartyIds"))}
        {Party(party1Ids.map(getCharacterInfo), openModal("party1Ids"))}
        {Party(
          compensate1Ids.map(getCharacterInfo),
          openModal("compensate1Ids")
        )}
        {Party(party2Ids.map(getCharacterInfo), openModal("party2Ids"))}
        {Party(
          compensate2Ids.map(getCharacterInfo),
          openModal("compensate2Ids")
        )}
        {Party(party3Ids.map(getCharacterInfo), openModal("party3Ids"))}
        {Party(
          compensate3Ids.map(getCharacterInfo),
          openModal("compensate3Ids")
        )}
      </main>
      {SelectionModal(modalIsOpen, closeModal)}
    </div>
  );
}

export default App;
