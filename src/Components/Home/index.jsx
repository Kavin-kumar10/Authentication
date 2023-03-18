import React from "react";
import Confetti from "react-confetti";
import "./Home.scss";

const Home = () =>{
    return(
        <div className="Home">
            <Confetti/>
            <h1>Login Successfull ...!</h1>
            <p>Welcome to our community...! </p>
        </div>
    )
}

export default Home