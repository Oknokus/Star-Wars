import PropTypes from 'prop-types';

import "./PersonInfo.css"

const PersonInfo = (({personState}) => {
    return (
        <>
        {personState &&         
        <ul> {
            personState.map(({ 
                name,
                birth_year,
                eye_color,
                gender,
                height,
                mass,
                skin_color                          
            }) =>  
                <li className="list__itemPerson" key={name}> 
                    <h1>{name}</h1>
                    <p>Birth year: {birth_year}</p>
                    <p>Eye color: {eye_color}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Mass: {mass}</p> 
                    <p>Skin color: {skin_color}</p>                      
                </li>    
            )            
        }           
        </ul>
        }   </>
    )
})

PersonInfo.propTypes = {
    personState: PropTypes.array
};

export default PersonInfo;