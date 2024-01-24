import React, {useState, useEffect} from 'react'

export default function ToDoItem(props) {
    const itemList = props.itemList;
    const deleteItem = props.deleteItem;
    const changeColor = props.changeColor;

    const colorList = ['#ff6961', '#77dd77', '#fdfd96', '#84b6f4', '#fdcae1'];
    
    
    return (
        <div>
            {itemList.map((item, index) => (
                <div key={index} style={{width:'500px', lineHeight:'400%',marginBottom:'20px', backgroundColor: colorList[item.color]}}>
                    {item.item}

                    <div style={{float:'right'}}>
                        <button style={{marginRight:'10px'}} onClick={() => changeColor(index)} >
                            Change
                        </button>

                        <button onClick={() => deleteItem(index)} style={{marginRight:'10px'}}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}

        </div>
    )    
};