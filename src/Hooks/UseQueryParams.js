import { useLocation } from "react-router";

export const UseQueryParams = () => {
    return new URLSearchParams(useLocation().search)
};