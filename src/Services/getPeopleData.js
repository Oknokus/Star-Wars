import { 
    SWAPI_CATEGORY_PEOPLE_PATH,
    VISUALGUIDE_CATEGORY_PEOPLE_IMG, 
    VISUALGUIDE_EXTENTION 
} from "@Constants/Api";


const getPeopleData = (url) => {
    const id = url
    .replace(SWAPI_CATEGORY_PEOPLE_PATH, "")
    .replace(/\//g,"");

    return id;
};
 
export const getPeopleIdImg = (url) => {
    return getPeopleData(url);
};


export const getPeopleImage = (id) => {
    return `${VISUALGUIDE_CATEGORY_PEOPLE_IMG}/${id+VISUALGUIDE_EXTENTION}`
};


































