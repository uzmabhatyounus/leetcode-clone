import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import Question from "./Question"
import "./Submission.css"
import Compiler from "./Compiler";
import axios from "axios"
function Submission(){
    const { id } = useParams();
       const [question, setquestion] = useState([])
        
        async function init(){
            const response = await axios.get(`http://localhost:3000/problems/${id}`)
            const result = response.data;
            setquestion(result)

        }
        useEffect( ()=>{
            init()
        },[]
    
        )
    
    




    return(
        <div className="tb-back">
            
            <div>
            <Question data={question}/>
            </div>
            <div style={{height:"100vh",margin:"0",padding:"0"}}>
            <Compiler id={question.id}/>
            </div>
        </div>
    )

}


export default Submission