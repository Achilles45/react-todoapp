import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TextInputGroup = ({
    //Bring in the props here
    label,
    type,
    placeholder,
    value,
    name,
    onChange,
    error
}) => {
    return (
        <div className="form-group">
            <label htmlFor={ name }>{ label }</label>
            <input type={ type }
            className= { classNames("form-control", { "is-invalid": error } )}
            name={ name }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
            />
            { error && <div className="invalid-feedback">{ error }</div>}
        </div>
    )
}

//PropTypes
TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onchange: PropTypes.func,
    error: PropTypes.string
};

//Default Props
TextInputGroup.defaultProps = {
    type: "text"
}

export default TextInputGroup;