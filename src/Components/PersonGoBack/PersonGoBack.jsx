import { useNavigate } from 'react-router-dom';

import  arrowLeft  from "@Statick/arrowLeft.png"

import "./PersonGoBack.css"

const PersonGoBack = () => { 
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <a
            href="#"
            onClick={handleGoBack} 
            className="link"         
        >        
        <img className='link__img' src={arrowLeft} alt="" />  
            <span>Go back</span>
            
        </a>
        )
}

export default PersonGoBack;