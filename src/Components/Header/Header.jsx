import { NavLink } from "react-router-dom"

import "./Header.css";

const Header = () => {
    return (
        <div className="container">
            <ul className="list__container">
                <li>
                <NavLink to="/"  exact="true">Home</NavLink>
                </li>
                <li>
                <NavLink to="/people/?page=1"  exact="true">People</NavLink>
                </li>
                <li>
                <NavLink to="/not-found" exact="true">Not found</NavLink>
                </li>
            </ul>            
        </div>
    )  
}

export default Header;
