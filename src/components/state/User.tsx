import { useState } from "react";

type AuthUser ={
    name:string,
    email:string
}

export const User = () =>{
    const [user,setUser] = useState<AuthUser>({}as AuthUser)
    const handleLogin = () =>{
        setUser({
            name:'fajar',
            email:'fajar@gmail.com'
        })
    }
    const handleLogout = () =>{
        setUser({} as AuthUser)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>Username Is?{user?.name}</h1>
            <h1>Email is?{user?.email}</h1>
        </div>
    )
}