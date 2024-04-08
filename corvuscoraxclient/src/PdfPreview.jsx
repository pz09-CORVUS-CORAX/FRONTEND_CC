import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import samplePDF from './pdfresizer.com-pdf-crop.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfPreview = () => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    return (
        <div>
          <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
          </Document>
        </div>
      );
    };

//     return (
//         <div>
//             <input type="file" onChange={handleChange} />
//             {file ? (
//                 <div style={{ marginTop: '20px' }}>
//                     <Document file={URL.createObjectURL(file)} onLoadSuccess={onDocumentLoadSuccess}>
//                         {Array.from(new Array(numPages), (el, index) => {
//                             <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//                         })}
//                     </Document>
//                 </div>
//             ) : ( //default to the sample pdf)
//                 <div style={{ marginTop: '20px' }}>
//                     <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
//                         {Array.from(new Array(numPages), (el, index) => {
//                             <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//                         })}
//                     </Document>
//                 </div>
//             )}
//         </div>
//     );
// };
export default PdfPreview;