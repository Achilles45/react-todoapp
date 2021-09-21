import React from 'react'
import PropTypes from 'prop-types'


const InputButton = ({
    //Bring in the props for the button here
    type,
    className,
    value
}) => {
    return (
        <input type={ type }
        className={ className }
        value={ value } />
    )
}

//Check PropsTypes
InputButton.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

InputButton.defaultProps = {
    type: "submit"
}

export default InputButton;