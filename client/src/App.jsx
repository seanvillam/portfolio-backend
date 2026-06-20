import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "../MainRouter";

const App = () => {
    return (
        // The BrowserRouter component is used to enable routing in the application
        // The MainRouter component contains the different routes for the application
        <BrowserRouter>
        <MainRouter /> 
        </BrowserRouter>
    );
}
export default App;