import React from 'react'
import PropTypes from 'prop-types'

const ReduxPresenetation = ({ name, changeName }) => (
    <div>
        <p>Hello, { name } from redux!</p>
        <input type="text" 
            onChange={ e => changeName(e.target.value) } />
    </div>
)

ReduxPresenetation.propTypes = {
    name: PropTypes.string.isRequired,
    changeName: PropTypes.func.isRequired
}

export default ReduxPresenetation