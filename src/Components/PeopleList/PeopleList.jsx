import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
 
import "./PeopleList.css";

const PeopleList = (({peopleState}) => {
    return(
        <>
        {peopleState && 
        <ul className="list__container"> {
            peopleState.map(({name, id, img}) =>
                <li className="list__item" key={id}>
                    <Link to={`/people/${id}`}>
                    <img className="person__photo" src={img} alt={name} />
                    <p>{name}</p>
                    </Link>
                </li>    
            )            
        }           
        </ul>
        }   
        </>
    )
});

PeopleList.propTypes = {
    peopleState: PropTypes.array
};

export default PeopleList;






























































