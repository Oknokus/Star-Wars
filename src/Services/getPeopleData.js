import { 
    SWAPI_PEOPLE, SWAPI_SERVER, HTTPS,     
    URL_IMG_PERSON, GUIDE_IMG_EXTENSION 
} from "../Constants/Api"

const getId = (url, category) => {
    const id = url
    .replace(HTTPS+SWAPI_SERVER+category, "")
    .replace(/\//g, "");    
    return id;
}
export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`

