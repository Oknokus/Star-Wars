import {Routes, BrowserRouter, Route } from "react-router-dom";

import Header from "@Components/Header/Header";
import routesConfig from "@Routes/RoutesConfig";

import './App.css';



const App = () => {
  return ( 
      
    <BrowserRouter>  
    <div className="wrapper">   
    <Header />

    <Routes>
    {routesConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
    </Routes> 
    </div> 
    </BrowserRouter>  
  )
};

export default App; 



