import React, { useState } from "react";
import {questions} from './api';
import './accordian.css';
import MyAccordian from './MyAccordian';

const Accordian = () => {
    const [data , setData] = useState(questions);
    return(
        <>
        <section className="main-div">
        {data.map((currElem) => {
            const {id} = currElem;
            return <MyAccordian key={id}{...currElem} />;
        })}
        </section>
        </>
    )
}

export default Accordian;