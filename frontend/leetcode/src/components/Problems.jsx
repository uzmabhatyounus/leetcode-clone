import React, { useState,useEffect } from "react";
// import { questions1, questions2 } from "../../questions";
import "./Problems.css"
import { Link } from "react-router-dom";
import axios from "axios";
function Problems() {

    const [questions, setquestion] = useState([])
    
    async function init(){
        const response = await axios.get("http://localhost:3000/problems")
        const result = response.data;
        setquestion(result.problems)
    }
    useEffect( ()=>{
        init()
    },[]

    )

    return (
        <div className="ts-container">
    <div className="table-container">
        
        <table className="problem-table">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Title</th>
                    <th >Acceptance</th>
                    <th >Difficulty</th>
                </tr>
            </thead>
            <tbody>
                {questions.map((question) => {
                    return (
                            <tr key={question.id} >
                                <td >{question.id}</td>
                                <td >
                                    <Link to={`/problems/${question.id}`} className="problem-title">
                                        {question.title}
                                    </Link>
                                </td>
                                <td >{question.acceptance}</td>
                                  <td>
                                        <span className={`badge ${question.difficulty.toLowerCase()}`}>
                                            {question.difficulty}
                                            </span>
                                        </td>
                                    </tr>
                        )
                })}
            </tbody>
        </table>   </div>
        </div>)
}
export default Problems