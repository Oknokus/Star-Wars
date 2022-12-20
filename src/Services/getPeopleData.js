import { 
    API_PEOPLE, 
    WISUAL_GUIDE_API_PEOPLE_IMG,
    WISUAL_GUIDE_DISPENSATION 
} from "../Constants/Api"


const getId = (url, category) => {
    const id = url
    .replace(API_PEOPLE, "")
    .replace(/\//g, "");

    return id;
}


export const getPeopleId = (url) => getId(url, API_PEOPLE) ;
export const getPeopleImage = (id) => `${WISUAL_GUIDE_API_PEOPLE_IMG}/${id+WISUAL_GUIDE_DISPENSATION}`  
