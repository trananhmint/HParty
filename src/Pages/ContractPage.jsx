import React from 'react';
import './CSS/ContractPage.css'
import Contrast from '../Components/Contrast/Contrast';
import Footer from '../Components/Footer/Footer';
import TitleBar from '../Components/TitleBar/TitleBar';

export const ContractPage = (props) => {

const title = 'contract';
console.log(props.pdf);
  return (
    <div className='contract-page'>
      <TitleBar title={title}/>
      <Contrast pdfFile = {props.pdf} />
      <Footer/>
    </div>
  );
}

export default ContractPage;