import React from 'react';
import MyContext from '../../MyContext';

function Tester(props) {
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

export default Tester;