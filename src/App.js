import { useState } from 'react';
import './App.css';
import Dropdown from './dropdown';

function App() {

  const [selected, setSelected] = useState("");

  return (
    <div className='App' >
      <h1 className='selectedElementHeading' >{selected ? `Selected Item : ${selected}` : "No item selected"}</h1>
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
