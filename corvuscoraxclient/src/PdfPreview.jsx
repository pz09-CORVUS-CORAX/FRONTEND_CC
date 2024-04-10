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
    const [validationStatus, setValidationStatus] = useState(null);

    const handleChange = async (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile.type !== 'application/pdf') {
            alert('Please select a valid PDF file');
            return; 
        }

        console.log("File Selected:", selectedFile);
        setFile(selectedFile);
        console.log("file state after setFile:", file);  // Verify state change
        
        setFileKey(fileKey + 1);
        // handleSubmit(event);
        // if(!pdfPath) {
        //     await handleSubmit();
        // }
        
    };

    const handleSubmit = async () => {
        // event.preventDefault();
        if (!file) {
            return;
        }
        console.log('File size before sending:', file.size); 
        setUploadError(null);
        setPdfIsLoading(true);

        const formData = new FormData();
        formData.append('file', file);

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
                
            try {
                // before it was 'selectedFile'
                const validationResult = await validatePDF(file, filePath);
                setValidationStatus(validationResult.isValid ? 'success' : 'error')
            } catch(error) {
                console.error("Validation error:", error);
                setValidationStatus('error');
            }
        } catch (error) {
            console.error("Error communicating with backend:", error);
            setPdfIsLoading(false);
            setUploadError(error.message);
        }
        console.dir(file);  // Inspect the entire file object
        console.dir(formData); // Inspect the entire FormData object

        setFile(null);
    }; 

    useEffect(() => {
        if(file) {
            handleSubmit();
        }
    }, [file]);
    // useEffect(() => {
    //     if (file && pdfPath) {
    //         const doValidation = async() => {
    //             const validationResult = await validatePDF(file, pdfPath);
    //             setValidationStatus(validationResult.isValid ? 'success':'error');
    //         };
    //         doValidation();
    //     }
    // },[file, pdfPath]);

    const validatePDF = async (file, pdfPath) => {
        console.log('pdfPath in validatePDF:', pdfPath);
        console.log('file in validatePDF:', file);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('pdf_path', pdfPath);

        const response = await fetch('http://localhost:5000/pdf/validate-pdf', {
            method: 'POST',
            body: formData
        });

        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "File validation failed!");
        }
        return await response.json();
    }


    const onDocumentLoadSuccess = ({ numPages }) => {
        // setNumPages(numPages);
        console.log("PDF Loaded. Pages:", numPages);
    }

    console.log("pdfPath Received:", pdfPath);
    return (
        <div>
        {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
        </Document> */}

        <input type="file" onChange={handleChange} />
        {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>} 
        {pdfIsLoading && <p>Loading PDF...</p>}
        
        

       {/* Only render if we have a `pdfPath` from the backend */}
        {/* {pdfPath && (  */}
        {validationStatus === 'success' && (
        // <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
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