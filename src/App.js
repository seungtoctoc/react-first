import React, {useState} from 'react'

import logo from './logo.svg';
import './App.css';

import ToDoInput from './components/ToDoInput';
import ToDoItem from './components/ToDoItem';

function App() {
  const [itemList, setItemList] = useState([]);

  function addItem({item, color}) {
    const updatedItemList = [...itemList, {item:item, color:color}]
    setItemList(updatedItemList);


  };

  function deleteItem(target) {
    const updatedItemList = itemList.filter((_, index) => index !== target);
    setItemList(updatedItemList);
  }



  return (
    <div className="App" style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'60px'}}>

      <ToDoInput addItem={addItem}>
      </ToDoInput>

      <ToDoItem itemList={itemList} deleteItem={deleteItem}>
      </ToDoItem>
      
    </div>
  );
}

export default App;