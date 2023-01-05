import { useLocation } from "react-router";

import { PAGE_HREF } from "@Constants/Api"


export const UseQueryParams = () => {
    return new URLSearchParams(useLocation().search)
};


export const UseQueryParamsPage = () => {    
    const id = window.location.href;   
    const page = id
    .replace(PAGE_HREF,""); 

    return page;   
};


