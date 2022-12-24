import {Routes, BrowserRouter, NavLink, Route } from "react-router-dom"

import PeoplePage from '@Containers/PeoplePage/PeoplePage';
import HomePage from '@Containers/HomePage/HomePage';

import './App.css';


const App = () => {
  return ( 
    <>
    
    <BrowserRouter>
   
    <NavLink to="/"  exact="true">Home</NavLink>
    <NavLink to="/people"  exact="true">People</NavLink>


    <Routes>
    <Route path="/"  exact="true" element={<HomePage/>}  />
    <Route path="/people"  exact="true" element={<PeoplePage/>}  />
    </Routes> 
    </BrowserRouter> 
   
    </>
  )
}

export default App; 



