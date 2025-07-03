import React, { use, useState } from "react";
import "./Login.css"
import axios from "axios";
import {Link} from "react-router-dom"


function Signup() {
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
        const response = await axios.post("http://localhost:3000/signup",{
            username:userInfo.email,
            password:userInfo.password
        })
        const result = response.data
        console.log(result);
        alert(result.msg)



        event.preventDefault();

        
    }
    return (
        <div className="login-box">
            <div className="inner-box">
        
                    <h2>Register</h2>
                    <input name="email" type="text" onChange={handleChange} placeholder="Email. " value={userInfo.email} />
                    <input name="password" type="password" onChange={handleChange} placeholder="Password" value={userInfo.password} />
                    <button
                        className="submit-button"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Register
                    </button>
                    <p>Have a account?. <Link to={"/login"}>Log in</Link></p>
            </div>
        </div>
    )

}

export default Signup