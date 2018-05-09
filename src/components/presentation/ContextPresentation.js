import React from 'react';
import MyContext from '../../contexts/MyContext';

export default function ContextPresentation(props) {
    return (
        <MyContext.Consumer>
        {
            // extrapolate the name and changeName
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