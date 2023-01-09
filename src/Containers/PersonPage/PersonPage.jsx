import React, { useEffect, useState, Suspense } from "react";
import PropTypes from 'prop-types';

import { getSwapiServer } from "@utils/network";
import { SWAPI_CATEGORY_PEOPLE_PERSON_PATH } from "@Constants/Api";
import WithErrorApi from "@HocHelpers/WithErrorApi";
import { UseQueryParamsPage } from "@Hooks/UseQueryParams";
import { getPeopleImage } from "@Services/getPeopleData";
import UiLoading from "@Components/UiLoading/UiLoading"

import PersonPhoto from "@Components/PersonPhoto/PersonPhoto";
import PersonInfo from "@Components/PersonInfo/PersonInfo";  
import PersonGoBack from "@Components/PersonGoBack/PersonGoBack";


import "./PersonPage.css";

const PersonPageFilm = React.lazy(()=> import("@Components/PersonPageFilm/PersonPageFilm"));







const PersonPage = ({ setErrorApi }) => {  
    const [personState, setPersonState] = useState(null); 
    const [personPhoto, setPersonPhoto] = useState(null); 
    const [personFilms, setPersonFilms] = useState([]); 

    const pageId = UseQueryParamsPage();   
        
   
    useEffect(()=> {
       (
        async() => { 
        const result = await getSwapiServer(`${SWAPI_CATEGORY_PEOPLE_PERSON_PATH}/${pageId}`);

           if(result) { 
           const arr = [];                        
           arr.push(result);          
           
           const personList = arr.map(({          
            name,
            birth_year,
            eye_color,
            gender,
            height,
            mass,
            skin_color,
            films                              
        }) => 
        {               
            return {
                name,
                birth_year,
                eye_color,
                gender,
                height,
                mass,
                skin_color,
                films                                                                    
            }                        
        });        
        setPersonPhoto(getPeopleImage(pageId));       
        setPersonState(personList);
        
        if(result.films) {       
            setPersonFilms(result.films)
        };
                  
        setErrorApi(false);           
    } else {
        setErrorApi(true);
    }
       })()
   },[])
        
    return(  
        <>                  
        <div className="link-go_back">
         <PersonGoBack />
        </div>   
        
        <div className="personPage_container">  
                    
        <div>        
         { personPhoto && <PersonPhoto personPhoto={personPhoto}/> }        
        </div>

        { personState && <PersonInfo personState={personState} /> }
        
        { personFilms && (
            <Suspense fallback={ <UiLoading /> }>
                <PersonPageFilm personFilms={personFilms} />
            </Suspense> )
        }

        </div>
        </>
    )    
}

PersonPage.propTypes = {   
    setErrorApi: PropTypes.func
};


export default WithErrorApi(PersonPage);