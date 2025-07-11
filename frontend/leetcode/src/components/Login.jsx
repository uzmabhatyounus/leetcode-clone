import React, { use, useState } from "react";
import {Link} from "react-router-dom"
import "./Login.css"
import axios from "axios";


function Login() {
    const [userInfo, setInfo] = useState({
        email: "",
        password: ""
    })



    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name
        return setInfo((preValue) => {
            return {
                ...preValue,
                [name]: value

            }
        })
    }

    async function handleSubmit(event) {
        const response = await axios.post("http://localhost:3000/login",{
            username:userInfo.email,
            password:userInfo.password
        })
        const result = response.data
        localStorage.setItem("token",result.token)
        console.log(result);



        event.preventDefault();

        
    } 
    return (
        <div className="login-box">
            <div className="inner-box">
                    <h2>Login</h2>
                    <input name="email" type="text" onChange={handleChange} placeholder="Email. " value={userInfo.email} />
                    <input name="password" type="password" onChange={handleChange} placeholder="Password" value={userInfo.password} />
                    <button
                        className="submit-button"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sign in
                    </button>
                    <p>Dont have a account?. <Link to={"/signup"}>Register</Link></p>
            </div>
        </div>
    )

}

export default Login