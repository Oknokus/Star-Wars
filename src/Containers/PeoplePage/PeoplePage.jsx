import { getSwapiServer } from "../../utils/network"
import { SWAPI_CATEGORY_PEOPLE_PATH } from "../../Constants/Api" 
import { useEffect, useState } from "react";
import { getPeopleImage, getPeopleIdImg } from "../../Services/getPeopleData";
import PeopleList from  "../../Components/PeopleList/PeopleList"
import { WithErrorApi } from "../../HocHelpers/WithErrorApi";
 
const PeoplePage = ({ setErrorApi }) => {
    const [peopleState, setPeopleState] = useState(null);   

    const getApiPeople = async(url) => {
        const data = await getSwapiServer(SWAPI_CATEGORY_PEOPLE_PATH);

        if(data) {
            const peopleList = data.results.map(({name, url}) => {   
                const id = getPeopleIdImg(url)
                const img = getPeopleImage(id)          
                return {
                    name,
                    id,
                    img            
                }
            }); 
            setPeopleState(peopleList);
            setErrorApi(false);
        }       
        else {
            setErrorApi(true);
        }
        
    } 
    useEffect(() =>{
        getApiPeople()
    },[]);

    return(              
        <>
            <h1>NAVIGATION</h1>
            {<PeopleList peopleState={peopleState} />}       
        </>              
    )
}

export default WithErrorApi(PeoplePage);





