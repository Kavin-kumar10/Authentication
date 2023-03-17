import React,{useState,useContext} from "react";
import "./SignUp.scss"
import LogoSignUp from '../../Assets/SignUp.svg';
import { ListContext } from "../../Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SignUp = () =>{
    const Navigate = useNavigate();

    //Context use
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
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUsers((prev)=>{
            return [...prev,User];
        })
        localStorage.setItem('user',JSON.stringify(Users));
        setUser({Username:'',Email:'',Password:''});
        console.log(Users);
        Navigate('/Login');
    }


    return(
        <div className="SignUp">
            <div className="Contain">
                <form action="#" onSubmit={handleSubmit}>
                    <h1>SignUp</h1>
                    <p>You're details are kept confidential</p>
                    <div className="elem">
                        <label htmlFor="Username">UserName:</label>
                        <input type="text" id="Username" name="Username" value={User.Username} onChange={handleChange} placeholder="UserName"/>
                    </div>
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
                    <p style={{opacity:1,textDecoration:"none",margin:"0px"}}><Link to='/Login'>Already have an Account</Link></p>

                </form>
            </div>
            <div className="img">
                <img src={LogoSignUp} alt="SignUp" />
            </div>
        </div>
    )
}


export default SignUp