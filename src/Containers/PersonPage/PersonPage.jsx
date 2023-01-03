import { useEffect, useState } from "react";

import { getSwapiServer } from "../../utils/network";
import { SWAPI_CATEGORY_PEOPLE_PERSON_PATH } from "@Constants/Api";
import WithErrorApi from "@HocHelpers/WithErrorApi";
import { UseQueryParamsPage } from "@Hooks/UseQueryParams";
import { getPeopleImage } from "../../Services/getPeopleData"

import "./PersonPage.css";

const PersonPage = ({setErrorApi}) => {  
    const [personState, setPersonState] = useState(null); 
    const [personPhoto, setPersonPhoto] = useState(null); 

    const pageId = UseQueryParamsPage(); 
   
    useEffect(()=> {
       (async() => {
           const result = await getSwapiServer(`${SWAPI_CATEGORY_PEOPLE_PERSON_PATH}/${pageId}`);                    
           const img = getPeopleImage(pageId);

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
            skin_color                      
        }) => {               
            return {
                name,
                birth_year,
                eye_color,
                gender,
                height,
                mass,
                skin_color,                                            
            } 
                       
        });        
        setPersonPhoto(getPeopleImage(pageId));       
        setPersonState(personList);
        setErrorApi(false);
          
    } else {
        setErrorApi(true);
    }
       })()
   },[])
        
    return(        
        <div className="personPage_container">
                     
        {personState &&  
        <ul> {
            personState.map(({ 
                name,
                birth_year,
                eye_color,
                gender,
                height,
                mass,
                skin_color,                                
            }) =>                
                
                <li className="list__itemPerson" key={name}>                                        
                    <p>name: {name}</p>
                    <p>birth_year: {birth_year}</p>
                    <p>eye_color: {eye_color}</p>
                    <p>gender: {gender}</p>
                    <p>height: {height}</p>
                    <p>mass: {mass}</p> 
                    <p>skin_color: {skin_color}</p>                      
                </li>    
            )            
        }           
        </ul>
        }   
        </div>
    )    
}


export default WithErrorApi(PersonPage);