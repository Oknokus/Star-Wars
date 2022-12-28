import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

import WithErrorApi from "@HocHelpers/WithErrorApi"
import PeopleList from  "@Components/PeopleList/PeopleList"
import PeopleNavigation from "@Components/PeopleNavigation/PeopleNavigation"
import { getSwapiServer } from "@utils/network"
import { getPeopleImage, getPeopleIdImg, getPeopleDataId } from "@Services/getPeopleData";
import { SWAPI_CATEGORY_PEOPLE_PATH } from "@Constants/Api" 
import { UseQueryParams } from "@Hooks/UseQueryParams" 

import "./PeoplePage.css"

const PeoplePage = ({setErrorApi}) => {
    const [peopleState, setPeopleState] = useState(null);  
    const [nextPage, setNextPage] = useState(null);  
    const [previousPage, setPreviousPage] = useState(null);  
    const [startPage, setStartPage] = useState(1);
     
    const query = UseQueryParams();  
    const queryPage = query.get("page")


    const getApiPeople = async(url) => {
        const data = await getSwapiServer(url);         
         
      
        if(data) {
            const peopleList = data.results.map(({name, url}) => {   
                const id = getPeopleIdImg(url);
                const img = getPeopleImage(id);  

                return {
                    name,
                    id,
                    img                             
                }
            }); 
            setPeopleState(peopleList);            
            setNextPage(data.next);
            setPreviousPage(data.previous);
            setStartPage(getPeopleDataId(url))
            setErrorApi(false); 
                         
        }       
        else {
            setErrorApi(true);
        }
    } 
    useEffect(() => {        
        getApiPeople(SWAPI_CATEGORY_PEOPLE_PATH+queryPage);
    },[]);

    return(              
        <>         
            <PeopleNavigation
            getApiPeople={getApiPeople}
            nextPage={nextPage}
            previousPage={previousPage}
            startPage={startPage}    
            />
            <PeopleList peopleState={peopleState} />      
        </>              
    )
}


PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}


export default WithErrorApi(PeoplePage);





