import { useLocation } from "react-router";

import { PAGE_HREF } from "@Constants/Api"


export const UseQueryParams = () => {
    return new URLSearchParams(useLocation().search)
};


export const UseQueryParamsPage = (url) => {    
    const id = document.location.href;
    const pageId = id.replace(PAGE_HREF, "");        

    return pageId;    
};


