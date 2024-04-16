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
        // log 16-04:18:28
    const [conversionStatus, setConversionStatus] = useState(null);

    const handleChange = async (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile.type !== 'application/pdf') {
            alert('Please select a valid PDF file');
            return; 
        }

        console.log("File Selected[hanldeChange]:", selectedFile);
        setFile(selectedFile);
        console.log("file state after setFile[handleChange]:", file);
        
        setFileKey(fileKey + 1);
    };

    const handleSubmit = async () => {
        if (!file) return;
        console.log('File size before sending[handleSubmit]:', file.size); 
        setUploadError(null);
        setPdfIsLoading(true);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('http://127.0.0.1:5000/pdf/upload-pdf', {
                method: 'POST',
                body: formData,
            });
            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.error || "Nieudane wczytywanie[handleSubmit]")
            }
            const { pdf_path } = await response.json();
            console.log('pdfPath after setting in [handleSubmit]:', pdf_path);
            setPdfPath(pdf_path);
            setPdfIsLoading(false)

            // test/log added: 16:31-10-04
            console.log('pdfPath after setting in (2)[handleSubmit:]', pdf_path);
                
            //changed log 18:10-10-04
            await validatePDF(file, pdf_path);
        } catch (error) {
            console.error("Error communicating with backend[handleSubmit]:", error);
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

    const validatePDF = async (pdfPath) => {
        console.log('pdfPath received by & send in [validatePDF]:', pdfPath);
        // console.log('file in [validatePDF] - file:', file);
        const formData = new FormData();
        // formData.append('file', file);
        formData.append('pdf_path', pdfPath);

        const response = await fetch('http://127.0.0.1:5000/pdf/validate-pdf', {
            method: 'POST',
            body: formData
        });

        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "File validation failed[validatePDF]!");
        }

        // new log 21:56-11-04
        const validationResult = await response.json();
        setValidationStatus(validationResult.isValid ? 'success' : 'error');        
        // log 16:03-14-04
        return response;
    }
    // new log: init22:58-15-04
    const handleConversion = async () => {
        // when conversion starts
        setConversionStatus('pending');
        // given
        console.log('pdfPath received by & send in [conversionHandler]:', pdfPath);
        const formData = new FormData();
        formData.append('pdf_path', pdfPath);
        try {
            const response = await fetch('http://127.0.0.1:5000/pdf/convert-pdf', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log("CONVER MODE: valid")
                // then
                setConversionStatus('success');
            } else {
                console.error("Conversion failed:", response.statusText);
            }
        } catch(error) {
            console.error("Error during conversion:", error);
        } finally {
            setConversionStatus('failed');
        }
        
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        // setNumPages(numPages);
        console.log("PDF Loaded. Pages:", numPages);
    }

    console.log("pdfPath Received[before MAIN return]:", pdfPath);
    console.log("file state/Received[before MAIN return]:", file);
    console.log("validation status [before MAIN return", validationStatus);
    return (
        <div>
        <input type="file" onChange={handleChange} />
        {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>} 
        {pdfIsLoading && <p>Loading PDF...</p>}
        
        {/* new log - pdfconversionbutton; 23:15-15-04 */}
        {validationStatus === 'success' && (
            <button id="convert-button" onClick={handleConversion}>Convert to SVG & continue</button>
        )}
        
        {/* Only render if we have a `pdfPath` from the backend */}
        {/* {pdfPath && (  */}
        {pdfPath && validationStatus === 'success' && (
        // <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}> 
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
        </Document>
        )}
        </div>              
    );
};

export default PdfPreview; 