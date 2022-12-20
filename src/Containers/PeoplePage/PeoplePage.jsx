import { useEffect, useState } from "react"
import { getSwapiSerwer } from "../../utils/network"
import { API_PEOPLE } from "../../Constants/Api"
import { getPeopleId, getPeopleImage }  from "../../Services/getPeopleData"
import PeopleList from "../../Components/PeopleList/PeopleList"

import "./PeoplePage.css"

const PeoplePage = () => {
    const [people, setPeople] = useState(null);
    
    const swapiSerwer = async(url) => {
        const data = await getSwapiSerwer(API_PEOPLE);
        const filmListSwapiPeople = data.results.map(({name, url}) =>{
            const id = getPeopleId(url);
            const img = getPeopleImage(id);        
    
            return {
                name,
                id,
                img
            }     
        })
        setPeople(filmListSwapiPeople);
        }
    useEffect(() => {
        swapiSerwer(API_PEOPLE);
    },[])

    return(
        <> 
       
        {people && 
         <PeopleList people={people}/>         
        }        
        </>
    )
}
      

export default PeoplePage;

























































// import { useEffect, useState } from "react"
// import { getApiServer } from "../../utils/network"
// import { API_PEOPLE } from "../../Constants/Api"
// import { getPeopleId, getPeopleImage  } from "../../Services/getPeopleData"
// import PeopleList from "../../Components/PeopleList/PeopleList"

// const PeoplePage = () => {
//     const [people, setPeople] = useState(null)
//     const swapiServer = async(url) => {    
//         const body = await getApiServer(API_PEOPLE);
// 	    const peopleList = body.results.map(({name, url}) =>{
//             const id = getPeopleId(url);
//             const img = getPeopleImage(id);
                        
//             return {
//                 name,
//                 id,
//                 img
//             }
//         })      
//         setPeople(peopleList)
//     }
//     useEffect(() => {
//         swapiServer(API_PEOPLE);
//     },[])

//     return(
//         <>
//         {people && 
//         <PeopleList people={people}/>}             
//         </>
//     )
// }

// export default PeoplePage;

























