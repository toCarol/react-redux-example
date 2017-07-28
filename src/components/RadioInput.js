import React from 'react';
import PropTypes from 'prop-types';
class RadioInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { label, name, value, id, onChange, defaultValue } = this.props;
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input type="radio" 
                    id={id} 
                    name={name} 
                    value={value} 
                    onChange={onChange} 
                    checked={defaultValue === value ? true : false} 
                />
            </div>
        )
    }
}
RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};
export default RadioInput;