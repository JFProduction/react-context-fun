import React from 'react'
import PropTypes from 'prop-types'

const CarImg = ({ styles, imgSrc }) => {
    return (
        <div className="col-sm-4"
            style={ styles }>
            <img src={ imgSrc } alt="car" />
        </div>
    )
}

CarImg.propTypes = {
    styles: PropTypes.object.isRequired,
    imgSrc: PropTypes.string.isRequired
}

export default CarImg