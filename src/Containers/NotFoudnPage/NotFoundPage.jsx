import { useLocation } from "react-router"
import NotFoundImg from "../../Statick/NotFoundImg.png"

import "./NotFoundPage.css"

const NotFoundPage = () => {
    let location = useLocation();
    return(
        <>
            <img className="img" src={NotFoundImg} alt="error 404" />
                <p className="text">No math for: { location.pathname}</p>
        </>
    )
} 

export default NotFoundPage;