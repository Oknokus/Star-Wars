import PropTypes from 'prop-types';

import "./UiButton.css";


const UiButton = ({text, disabled, onClick} ) => {
    return(
        <button 
            onClick={onClick} 
            disabled={disabled}
            className="button">
                {text}               
        </button>
    )
};

UiButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    text: PropTypes.string
};

export default UiButton;