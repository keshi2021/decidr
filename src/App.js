import './App.css';
import { useState } from 'react';
import AddItem from './components/AddItem';

function App() {
  const [listContainer,setListContainer]=useState([]);
  const [selectedItem,setSelectedItem]=useState("");
  const selectItem=()=>{
    const random=Math.floor(Math.random()*listContainer.length);
    setSelectedItem(listContainer[random]);
  }
  return (
    <div className="App">
      <header className="App-header">Decidr</header>


      <AddItem
      listContainer={listContainer} 
      setListContainer={setListContainer} />
      <div className="selectedItem">
      {selectedItem}
      </div>
      <button onClick={selectItem}>Select an Item</button>
      
      
      
    </div>
  );
}

export default App;
