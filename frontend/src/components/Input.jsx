import React from 'react';

import './Input.css';

const Input = ({ inputState, setInput }) => {
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <input className='input-users-search' type='text' value={inputState} placeholder='Digite um nome...' onChange={handleInputChange}></input>
    )
}

export default Input;