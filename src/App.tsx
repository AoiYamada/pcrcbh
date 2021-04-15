import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Party } from "./components/Party";
import { characterInfo } from "./constants/characterInfo";
import { SelectionModal } from "./components/SelectionModal";

function App() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ids, setIds] = useState<number[]>([]);
  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  // references are now sync'd and can be accessed.
  // subtitle.style.color = "#f00";
  // }

  function closeModal(ids: number[]) {
    setIsOpen(false);
    setIds(ids);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Party(
          ids.map((id) => characterInfo[id]),
          openModal
        )}
      </header>
      <main></main>
      {SelectionModal(modalIsOpen, closeModal)}
    </div>
  );
}

export default App;
