import React, {useState} from 'react'

export default function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [itemList, setItemList] = useState([]);

    const click = () => {
        setItemList([...itemList, inputValue]);
        setInputValue('');
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <h4>To Do</h4>

            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange}
            />
            <button onClick={click}>
                Enter
            </button>

            <ul>
                {itemList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}