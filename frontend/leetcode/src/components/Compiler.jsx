import React,{useState} from "react";
import "./Compiler.css"
import Submission from "./Submission";
import axios from "axios";

function Compiler(props){
    const id = props.data
    const [code,setcode] = useState("")
    function handleChange(event){
        const value = event.target.value
        setcode(value)
    }

      async function handleSubmit(event) {
            const response = await axios.post("http://localhost:3000/submissions",{
                id:id,
                submission:code,
            },
            {
                headers:{
                    "authorization":localStorage.getItem("token")
                }
            })
            const result = response.data
            console.log(result);

            event.preventDefault();
    
            
        } 


    return (
        <div>
            <h1>Code Here -</h1>
            <textarea className="compiler" name="compiler" id="" onChange={handleChange} value={code}></textarea>
            <button type="submit" className="compiler-btn" onClick={handleSubmit}>submit</button>
        </div>
    )
}



export default Compiler