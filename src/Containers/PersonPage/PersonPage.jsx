import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { getSwapiServer } from "@utils/network";
import { SWAPI_CATEGORY_PEOPLE_PERSON_PATH } from "@Constants/Api";
import WithErrorApi from "@HocHelpers/WithErrorApi";
import { UseQueryParamsPage } from "@Hooks/UseQueryParams";
import { getPeopleImage } from "@Services/getPeopleData";

import PersonInfo from "@Components/PersonInfo/PersonInfo";
import PersonPhoto from "@Components/PersonPhoto/PersonPhoto";
import PersonGoBack from "@Components/PersonGoBack/PersonGoBack";
import FilmsPage from "@Components/FilmsPage/FilmsPage"


import "./PersonPage.css";

const PersonPage = ({setErrorApi}) => {  
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
        }) => {               
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
        <PersonPhoto personPhoto={personPhoto}/> 
        </div>

        <PersonInfo personState={personState} />
        <FilmsPage personFilms={personFilms} />   
        </div>
        </>
    )    
}

PersonPage.propTypes = {   
    setErrorApi: PropTypes.func
}


export default WithErrorApi(PersonPage);