import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

import "./PeopleNavigation.css"


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
            <button 
            onClick={handleChangePrevious} 
            disabled={!previousPage}
            className="buttons">PREVIOUS</button>
            </Link>         
            <Link to={`/people/?page=${startPage+1}`}>
            <button 
            onClick={handleChangeNext} 
            disabled={!nextPage}
            className="buttons">NEXT</button>
            </Link>
        </div>
    )
}

PeopleNavigation.protoTypes = {
    getApiPeople: PropTypes.func,
    nextPage: PropTypes.string,
    previousPage: PropTypes.string,
    startPage: PropTypes.number,
}

export default PeopleNavigation;

