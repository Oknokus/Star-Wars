import { useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import loaderWhite from "../../Statick/loader-white.svg";
import loaderBlue from "../../Statick/loader-blue.svg";
import loaderBlack from "../../Statick/loader-black.svg"

import "./UiLoading.css"


const UiLoading = ({ 
                    theme="white",
                    isShadow=true,
                    classes 
                }) => {
    const[themeLoader, setthemeLoader] = useState(null);
   

    useEffect(() => {
        switch(theme) {
            case "black": setthemeLoader(loaderBlack); break;
            case "blue": setthemeLoader(loaderBlue); break;
            case "white": setthemeLoader(loaderWhite); break;
            default: setthemeLoader(loaderBlack); 
        }
        },[]);

    return(<div className="loading_container">
        <h1 className="">LoAdInG</h1>
        <img 
        className={cn("loading",isShadow && "isShadow", classes)}
        src={ themeLoader } 
        alt="Loading" 
        />
        </div>
    )    
}


UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes : PropTypes.string
};

export default UiLoading;