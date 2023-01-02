import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import UiButton from "@Components/UiButton/UiButton";

import "./PeopleNavigation.css";


const PeopleNavigation = ({
    getApiPeople,
    nextPage,
    previousPage,
    startPage
}) => {
    const handleChangeNext = () => getApiPeople(nextPage);
    const handleChangePrevious = () => getApiPeople(previousPage);
    return(
        <div className="container">  

            <Link to={`/people/?page=${startPage-1}`}>

            <UiButton 
            text="Previous"
            disabled={!previousPage}
            onClick={handleChangePrevious}
            classTheme={"dark"}
            />
            
            </Link>  
           

            <Link to={`/people/?page=${startPage+1}`}>

            <UiButton 
            text="Next"
            disabled={!nextPage}
            onClick={handleChangeNext}
            classTheme={"light "}
            />         

            </Link>

        </div>
    )
};

PeopleNavigation.protoTypes = {
    getApiPeople: PropTypes.func,
    nextPage: PropTypes.string,
    previousPage: PropTypes.string,
    startPage: PropTypes.number,
}

export default PeopleNavigation;

