import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

import WithErrorApi from "@HocHelpers/WithErrorApi"
import PeopleList from  "@Components/PeopleList/PeopleList"
import { getSwapiServer } from "@utils/network"
import { getPeopleImage, getPeopleIdImg } from "@Services/getPeopleData";
import { SWAPI_CATEGORY_PEOPLE_PATH } from "@Constants/Api" 

import "./PeoplePage.css"

const PeoplePage = ({setErrorApi}) => {
    const [peopleState, setPeopleState] = useState(null);   

    const getApiPeople = async() => {
        const data = await getSwapiServer(SWAPI_CATEGORY_PEOPLE_PATH);

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
            setErrorApi(false)                         
        }       
        else {
            setErrorApi(true)
        }
    } 
    useEffect(() => {
        getApiPeople()
    },[]);

    return(              
        <>
            <h1 className='header__text'>Navigation</h1>
            <PeopleList peopleState={peopleState} />      
        </>              
    )
}


PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}


export default WithErrorApi(PeoplePage);





