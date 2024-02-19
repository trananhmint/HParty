import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PDF from '../Assets/CBP.pdf';
import './Contrast.css';
import { Link } from 'react-router-dom';
function Contrast( props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='pdf-contract'>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document className="document" file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false} />
            );

          })}

      </Document>
      <Link to='/alerts' style={{textDecoration:'none'}}>
        <button className='contract-button'>Signed</button>
      </Link>

    </div>
  );
}

export default Contrast;