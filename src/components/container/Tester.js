import React from 'react';
import MyContext from '../../MyContext';

export default function Tester(props) {
    return (
        <MyContext.Consumer>
        { 
            ({name, changeName}) => (
                <div>
                    { name }<br />
                    <input style={{ marginTop: 10 }}
                        onChange={ changeName } />
                </div>
            )
        }
        </MyContext.Consumer>
    )
}