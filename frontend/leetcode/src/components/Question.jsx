import React from "react";
import "./Questions.css"
function Question(props){
    const question = props.data
    console.log(question)

    const qInput = question.exampleInput
    const qOutput = question.exampleOutput
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
            <pre><strong>Input:</strong> {qInput}
<br />
<strong>Output:</strong> {qOutput}
            </pre>
            </div>

        </div>
    )

}


export default Question