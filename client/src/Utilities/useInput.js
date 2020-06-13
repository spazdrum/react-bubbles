import React, { useState } from 'react';

const useInput = (props) => {
    const [state, setState] = useState(props)
    const handleChange = updatedValue => {
        setState(updatedValue)
        console.log('js: Utilities: useInput: handleChange: state', state)
    }
    return [state, setState, handleChange]
}

export default useInput;