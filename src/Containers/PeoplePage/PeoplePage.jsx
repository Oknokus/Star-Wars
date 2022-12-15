import { useEffect, useState } from "react"
import {getApiServer} from "../../utils/network"
import { API_PEOPLE } from "../../Constants/Api"

import  "./PeoplePage.css"


const PeoplePage = () => {
    const [people, setPeople] = useState(null)
    const getServer = async(url) => {
        const result = await getApiServer(API_PEOPLE)
	    const peopleList = result.results.map(({name, url}) => {
            return{
                name,
                url
            }
        })
        setPeople(peopleList)
    }
    
    useEffect(() => {
        getServer()
        },[]);
    
    
    return(
        <>
        {people && (<ul>   
            {people.map(({name, url}) =>
                <li key={name}>{name}</li>
           )}       
       </ul>)}        
        </>
    )
}


export default PeoplePage;


















































