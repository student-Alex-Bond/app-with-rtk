import React from 'react';

const InputField = ({text, handleSubmit, handleInput}) => {

    return (
        <label>
            <input value={text}
                   onChange={(event) => handleInput(event.currentTarget.value)}
            />
            <button onClick={handleSubmit}>Add Tod</button>
        </label>
    );
};

export default InputField;