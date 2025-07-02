import React, { useState } from "react";
import { questions1, questions2 } from "../../questions";
import "./Problems.css"
import { Link } from "react-router-dom";
function Problems() {

    const [questions, setquestion] = useState(questions1)
    console.log(questions)
    function p1() {
        setquestion(questions1)
    }

    function p2() {
        setquestion(questions2)
    }
    return (
        <div className="ts-container">
    <div className="table-container">
        {/* <button onClick={p1}>1</button>
        <button onClick={p2}>2</button> */}
        
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