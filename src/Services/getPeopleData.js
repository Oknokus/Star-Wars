import { 
    SWAPI_CATEGORY_PEOPLE_PATH,
    VISUALGUIDE_CATEGORY_PEOPLE_IMG, 
    VISUALGUIDE_EXTENTION,
    SWAPI_URL_REPLACE,
    SWAPI_PARAM
} from "@Constants/Api";

export const getPeopleDataId = (url) => {
    const pos = url.lastIndexOf(SWAPI_PARAM);
    const pageNumber = Number(url.slice(pos+SWAPI_PARAM.length, url.length))
    
    return pageNumber;
} 

export const getPeopleData = (url) => {
    const id = url
    .replace(SWAPI_CATEGORY_PEOPLE_PATH, "")  
   .replace(SWAPI_URL_REPLACE, "")
   .replace(/\//g, "")

    return id;
};
 
export const getPeopleIdImg = (url) => {
    return getPeopleData(url);
};


export const getPeopleImage = (id) => {
    return `${VISUALGUIDE_CATEGORY_PEOPLE_IMG}/${id+VISUALGUIDE_EXTENTION}`
};


































