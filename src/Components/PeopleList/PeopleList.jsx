import PropTypes from 'prop-types';

import "./PeopleList.css";

const PeopleList = (({peopleState}) => {
    return(
        <>
        {peopleState && 
        <ul className="list__container"> {
            peopleState.map(({name, id, img}) =>
                <li className="list__item" key={id}>
                    <img className="person__photo" src={img} alt={name} />
                    {name}
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
}

export default PeopleList;






























































