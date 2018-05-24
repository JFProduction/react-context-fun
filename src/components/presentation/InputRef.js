import React from 'react'

const InputRef = React.forwardRef((props, ref) => {
    // ref comes from the parent, and can be used there
    return (
        <input ref={ ref }
            { ...props } />
    )
})

export default InputRef