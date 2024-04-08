import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import samplePDF from './pdfresizer.com-pdf-crop.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfPreview = () => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [fileKey, setFileKey] = useState(0);
    const [pdfPath, setPdfPath] = useState(null);
    const [pdfIsLoading, setPdfIsLoading ] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const handleChange = async (event) => {
        const selectedFile = event.target.files[0];
        console.log("File Selected:", selectedFile);
        setFile(selectedFile);
        console.log("file state after setFile:", file);  // Verify state change
        
        // const formData = new FormData(); 
        // console.log('File before append:', file); // Log file details
        // formData.append('file', selectedFile);

        // console.log("Before submission (detailed):", formData.get('file'), file);  // More Detail!
        // console.log(formData); // Log the entire FormData structure
      

        setFileKey(fileKey + 1);
        handleSubmit(event);
    };

    const handleSubmit = async () => {
        // event.preventDefault();

        setUploadError(null);
        setPdfIsLoading(true);

        const formData = new FormData();
        formData.append('file', file);

    console.log("file state inside handleSubmit:", file); 
    console.log("Before submission:", file, formData.get('file'));
    console.log(formData.get('file')); // Inspect the file data
    console.log(formData); // Inspect the entire FormData structure

        try {
            const response = await fetch('http://localhost:5000/pdf/upload-pdf', {
                method: 'POST',
                body: formData,
            });
            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.error || "Nieudane wczytywanie")
            }

            const data = await response.json();
            const filePath = data.pdf_path;
            setPdfIsLoading(false)
            setPdfPath(filePath);

        } catch (error) {
            console.error("Error communicating with backend:", error);
            setPdfIsLoading(false);
            setUploadError(error.message);
        }
    }; 

    useEffect(() => {
        if(file) {
            handleSubmit();
        }
    }, [file]);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        console.log("PDF Loaded. Pages:", numPages);
    }

    return (
        <div>
        <input type="file" onChange={handleChange} />
        {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>} 
        {pdfIsLoading && <p>Loading PDF...</p>}
       
       {/* Only render if we have a `pdfPath` from the backend */}
        {pdfPath && ( 
          <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}> 
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        )}
      </div>
      );
    };

export default PdfPreview;