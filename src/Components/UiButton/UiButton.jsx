import PropTypes from 'prop-types';

import "./UiButton.css";


const UiButton = ({text, disabled, onClick, classTheme} ) => {
    return(
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={`button ` + classTheme}>
                {text}               
        </button>
    )
};

UiButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    classTheme: PropTypes.string
};

export default UiButton;