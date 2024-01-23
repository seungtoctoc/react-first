import React, {useEffect, useState} from 'react';

export default function Blink({text}) {
    const [showText, setShowText] = useState(true);

    // useEffect(() => {
    //     const timeoutId = setInterval(() => {
    //         setShowText(showText => !showText);
    //     }, 1000)

    //     return () => {clearInterval(timeoutId)}
    // }, [])

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <button style={{margin:'5px', width:'100px'}} onClick={() => {
                setShowText(!showText);
            }}>
                click
            </button>
            
            {showText? text : null}
        
        </div>
    )
}