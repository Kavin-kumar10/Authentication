import React from "react";
import Confetti from "react-confetti";
import { Navigate } from "react-router-dom";
import "./Home.scss";

const Home = ({Authorized}) =>{
    if(!Authorized){
        return <Navigate to="/Login"/>;
    }
    return(
        <div className="Home">
            <Confetti/>
            <h1>Login Successfull ...!</h1>
            <p>Welcome to our community...! </p>
        </div>
    )
}

export default Home