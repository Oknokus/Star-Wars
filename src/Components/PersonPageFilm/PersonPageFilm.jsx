import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { queryPathUrlFilms } from "@utils/network";

import "./PersonPageFilm.css";

const PersonPageFilm = ({ personFilms }) => {
    const[filmLIst, setFilmList] = useState([])
    
    
    useEffect(()=> {
        (async() => {
            const resultUrl =  await queryPathUrlFilms(personFilms);             
           
            setFilmList(resultUrl);
        })()
    },[ personFilms ])


    return(
        <div className='wrapper'>
                <ul className='list__container'>
                    {filmLIst
                        .sort((a, z) => (a.episode_id  - z.episode_id))
                        .map(({ title, episode_id }) =>
                            <li className='list__item' key={episode_id}>
                                <span className='item__episode'>Episode {episode_id}</span>
                                <span className='item__colon'> : </span>
                                <span className='item__title'>{title}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
    )
}

PersonPageFilm.propTypes = {
    personFilms: PropTypes.array
};

export default PersonPageFilm;