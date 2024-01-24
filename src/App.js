import React, {useState} from 'react'

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

  function changeColor(target) {
    const updatedItemList = itemList.map((item, i) => {
      if (i === target) {
        return {...item, color: (item.color + 1) % 5}
      } 
      else {
        return item;
      }
    });
    setItemList(updatedItemList);
  }

  function modifyItem({target, newItem}) {
    const updatedItemList = itemList.map((item, i) => {
      if (i === target) {
        return {item: newItem, color: item.color}
      } 
      else {
        return item;
      }
    });
    setItemList(updatedItemList);
  };


  return (
    <div className="App" style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'60px'}}>
      <ToDoInput addItem={addItem}>
      </ToDoInput>

      <ToDoItem itemList={itemList} deleteItem={deleteItem} changeColor={changeColor} modifyItem={modifyItem}>
      </ToDoItem>
    </div>
  );
}
 
export default App;