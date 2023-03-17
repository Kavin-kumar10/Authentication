import React,{useState,useEffect,createContext} from "react";

export const ListContext = createContext();

export const ListProvider = (props) =>{
    const [User,setUser] = useState({
        Username:'',
        Email:'',
        Password:''
    });
    const [Users,setUsers] = useState([]);
    
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('user'));
        if(data){
            setUsers(data);
        }
    },[])
    return(
        <div>
            <ListContext.Provider value={[Users,setUsers,User,setUser]}>
                {props.children}
            </ListContext.Provider>
        </div>
    )
}