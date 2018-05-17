import React from 'react'

const ForwardedRefPresentation = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text"
                ref={ ref }
                { ...props } />
        </div>
    )
})

export default ForwardedRefPresentation