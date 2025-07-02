import React from "react";
import "./Questions.css"
function Question(props){
    const question = props.data
    const qInput = question.examples[0].input.nums
    const qOutput = question.examples[0].output
    const qTarget = question.examples[0].input.target;
    return (
        <div className="question-wrapper">
            <h1 className="question-title">{question.id}<span>. </span>{question.title}</h1>
            <div className="question-description">
            <p>{question.question}</p>
            <p>{question.description}</p>
            </div>
            <div>
            <hr/>
            
            <h3>Example. </h3>
            <pre><strong>Input:</strong> nums = {JSON.stringify(qInput)}, target = {qTarget}
<br />
<strong>Output:</strong> {JSON.stringify(qOutput)}
            </pre>
            </div>

        </div>
    )

}


export default Question