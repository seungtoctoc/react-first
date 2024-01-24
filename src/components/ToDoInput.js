import React, {useState} from 'react'

export default function ToDoInput({addItem}) {
    const [inputValue, setInputValue] = useState('');

    function click() {
        if (inputValue.trim() !== '') {
            addItem({item:inputValue, color:0})
            setInputValue('');
        }
    }

    return (
        <div>
            <h4>To Do</h4>

            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            
            <button onClick={click}>
                Enter
            </button>
        </div>
    )
}