import React, { MouseEventHandler } from 'react';

type ButtonClickHandler = MouseEventHandler<HTMLButtonElement>

const clickHandler: ButtonClickHandler = (mouseEvent) => {
    console.log('mouse Event Occured')
}

const doubleClickHandler: ButtonClickHandler = (mouseEvent) => {
    window.alert('double click event')
}

const MyButton = () => {
    return (
        <button onClick={clickHandler} onDoubleClick={doubleClickHandler} style={{backgroundColor: 'rgba(255,255,255,0.6)', color:'#000'}}>Double Click This!</button>
    );
}

export { MyButton }