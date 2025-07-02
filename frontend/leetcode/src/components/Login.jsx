import React, { use, useState } from "react";
import "./Login.css"
function Login() {
    const [userInfo, setInfo] = useState({
        name: "",
        email: "",

        password: ""
    })
    const [click, setclick] = useState(false)

    function handleClick() {
        setclick(preValue => {
            return !click
        })
    }

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

    function handleSubmit(event) {
        event.preventDefault();
        if (click){
            console.log("Register")
        }
        else{
            console.log("log in")
        }
    }
    return (
        <div className="login-box">
            <div className="inner-box">
                <form onSubmit={handleSubmit}>
                    <h2>{click ? "Register" : "Login"}</h2>
                    {click && <input name="name" type="text" onChange={handleChange} placeholder="Name. " value={userInfo.name} />}
                    <input name="email" type="email" onChange={handleChange} placeholder="Email. " value={userInfo.email} />
                    <input name="password" type="password" onChange={handleChange} placeholder="Password" value={userInfo.password} />
                    <button
                        className="submit-button"
                        type="submit"
                    >
                        {click ? "Register" : "Sign in"}
                    </button>
                    <p>{click ? "Have a account?." : "Dont have a account?."} <a href="#" onClick={handleClick}>{click ? "Log in" : "Register"}</a></p>
                </form>
            </div>
        </div>
    )

}

export default Login