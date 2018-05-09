import React, { Component } from 'react';
import MyContext from '../../MyContext';
class Tester extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    ({ name, changeName }) => (

                        <div>
                            { name }<br/>
                            <input style={{ marginTop: 10 }}
                                type="text" onChange={changeName} />
                        </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}

export default Tester;