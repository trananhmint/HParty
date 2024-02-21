import React, { useState } from 'react'
import './CSS/ContractPageByPH.css';
import Contrast from '../Components/Contrast/Contrast';
import ContractPage from './ContractPage';
export const ContractPageByPH = () => {
    const [file, setFile] = useState("");
    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        console.log(file);
    }

    return (
        <div className='contract-by-party-host'>
            <form className='formStyle' onSubmit={submitImage}>
                <h4>Upload PDF </h4> <br />
                <input
                    type='file'
                    className='form-control'
                    accept='application/pdf'
                    required
                    onChange={(e)=>{setFile(e.target.files[0])}}
                />
                <br/>
                <button className='btn btn-primary' type='submit'>
                    Submit
                </button>
            </form>
            <Contrast pdfFile={file}/>
        </div>
    )
}

export default ContractPageByPH;