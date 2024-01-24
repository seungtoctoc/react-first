import React, {useState, useEffect} from 'react'

export default function ToDoItem(props) {
    const itemList = props.itemList;
    const deleteItem = props.deleteItem;

    const colorList = ['light'];
    

    return (
        <div>
            {itemList.map((item, index) => (
                <div key={index} style={{width:'500px', lineHeight:'400%',marginBottom:'20px', backgroundColor:corlorList[item.color]}}>
                    {item.item}

                    <div style={{float:'right'}}>
                        <button style={{marginRight:'10px'}}>
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