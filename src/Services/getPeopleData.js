import { 
    VISUALGUIDE_CATEGORY_PEOPLE_IMG, 
    SWAPI_CATEGORY_PEOPLE_PATH,
    VISUALGUIDE_EXTENTION 
} from "../Constants/Api"


export const getIdImage = (url, category) => {
    const id = url
    .replace(SWAPI_CATEGORY_PEOPLE_PATH, "")
    .replace(/\//g,"");    

    return id;
};


export const getPeopleIdImg = (url) => 
    getIdImage(url, SWAPI_CATEGORY_PEOPLE_PATH);

export const getPeopleImage = (id) => `${VISUALGUIDE_CATEGORY_PEOPLE_IMG}/${id+VISUALGUIDE_EXTENTION}`  
  








