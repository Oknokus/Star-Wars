import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

import { queryUrlFilms } from "@utils/network"

import "./FilmsPage.css" 

 
const FilmsPage = ({ personFilms }) => {
    const [filmList, setFilmList] = useState([])
    useEffect(()=> {        
        (
            async() => {
            const response = await queryUrlFilms(personFilms);
            
            setFilmList(response);
        }
        )()
    },[personFilms])

    return( 
        <>
        <ul className='list__container'>
            {filmList
                .sort((a, z) => a.episode_id - z.episode_id)
                .map(({ title, episode_id }) =>
                    <li className='list__item' key={episode_id}>
                        <span className='item__episode'>Episode {episode_id}</span>
                        <span className='item__colon'> : </span>
                        <span className='item__title'>{title}</span>
                    </li>
                )
            }
        </ul>
        </>    
    )       
}

FilmsPage.propTypes = {
    personFilms: PropTypes.array
}

export  default FilmsPage;