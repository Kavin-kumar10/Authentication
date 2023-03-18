import React, { useState,useContext } from "react";
import './Login.scss';
import LogoLogin from '../../Assets/Login.svg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ListContext } from "../../Context";



const Login = ({setAuthorized}) =>{
    const Navigate = useNavigate();

    //States from context
    const[Users,setUsers,User,setUser] = useContext(ListContext);

    //handleChange
    const handleChange = (e) =>{
       const {name,value} = e.target;
       setUser((prev)=>{
            return {...prev,[name]:value}
       })
       console.log(User);
    }

    //handleSubmit
    const handleCheck = (e) =>{
        e.preventDefault();
        setUser(
            {
                Username:'',
                Email:'',
                Password:''
            }
        );
        const userReq = Users.find((user)=>user.Email == User.Email && user.Password == User.Password);
        if(userReq){
            setAuthorized(true);
            Navigate("/Home");
        }
        else{
            alert("Invalid Email or Password");
        }
    }
    return(
        <div className="Login">
            <div className="img">
                <img src={LogoLogin} alt="logo" />
            </div>
            <div className="Contain">
                <form action="#" onSubmit={handleCheck}>
                    <h1>LOGIN</h1>
                    <p>You're details are kept confidential</p>
                    <div className="elem">
                        <label htmlFor="Email">Email:</label>
                        <input type="email"id="Email" name="Email" value={User.Email} onChange={handleChange} placeholder="abc@gmail.com"/>
                    </div>
                    <div className="elem">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="Password" value={User.Password} onChange={handleChange} placeholder="Password"/>
                    </div>
                    <div className="btn">
                        <button type="submit">SUBMIT</button>
                        <button type="reset">RESET</button>
                    </div>
                    <p style={{opacity:1,textDecoration:"none",margin:"0px"}}><Link to='/SignUp'>Don't have an Account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login