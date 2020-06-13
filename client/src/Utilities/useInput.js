import React, { useState } from 'react';

const useInput = InitialState => {
    const [state, setState] = useState(initialState)
    const handleChange = updatedValue => {
        setState(updatedValue)
        console.log('js: Utilities: useInput: handleChange: state', state)
    }
    return [state, setState, handleChange]
}

export default useInput;