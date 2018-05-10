import React from 'react';
import MyContext from '../../contexts/MyContext';

// Usually presentations should be functional components
// and shouldn't hold state (if state is held here, it will
// be UI state, not data state)
export default function ContextPresentation(props) {
    return (
        <MyContext.Consumer>
        {
            // Extrapolate the name and changeName()
            // properties from the context
            ({ name, changeName }) => (
                <div style={{ marginTop: 10 }}>
                    Hello, { name } from the Context!<br />
                    <input style={{ marginTop: 10 }}
                        onChange={ changeName } />
                </div>
            )
        }
        </MyContext.Consumer>
    )
}