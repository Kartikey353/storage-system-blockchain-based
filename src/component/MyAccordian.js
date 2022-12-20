import React, { useState } from "react";
import './myaccordian.css';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { BsFileEarmarkMinus } from 'react-icons/bs';
import { TbFileDownload } from 'react-icons/tb';
import { MdDelete } from 'react-icons/md';

const MyAccordian = ({question , answer}) => {
    const [show , setShow] = useState(false);
    return(
        <>
        <div className="main-heading">
            <p onClick={() => setShow(!show)}>{show? <BsFileEarmarkMinus /> : <AiOutlineFileAdd />}</p>
            <h3>{question}</h3>
            <p className="left"><MdDelete /></p>
        </div>
        <div className="answers">
            {show && <p>{answer} <TbFileDownload /></p>}
        </div>
        </>
    ) 
}

export default MyAccordian;