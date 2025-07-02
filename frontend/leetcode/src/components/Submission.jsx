import React from "react";
import { useParams } from 'react-router-dom';
import { questions1,questions2 } from "../../questions";
import Question from "./Question"

function Submission(){
    const { id } = useParams();
    console.log(id)

    const question = questions1.find((q)=>{ return q.id == id})


    return(
        <div>
            <Question data={question}/>
        </div>
    )

}


export default Submission