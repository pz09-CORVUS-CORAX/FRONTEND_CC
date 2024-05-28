import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import './assets/styles/converter.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const backendUrl = process.env.REACT_APP_BACKEND_API_URL;
const backendUrl = import.meta.env.VITE_API_URL;
// const backendUrl = import.meta.env.VITE_TEST_API_URL;
// console.log("#1URL being sent:", `${backendUrl}/api/pdf/upload-pdf`);
// console.log("All Vite env variables:", import.meta.env); // For debugging


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

            // console.log("URL being sent:", `${backendUrl}/pdf/upload-pdf`); 
            const response = await fetch(`${backendUrl}/pdf/upload-pdf`, {
                method: 'POST',
                body: formData,
            });
            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.error || "Nieudane wczytywanie[handleSubmit]")
            }
            const { pdf_path } = await response.json();
            // console.log('pdfPath after setting in [handleSubmit]:', pdf_path);
            setPdfPath(pdf_path);
            setPdfIsLoading(false)

            // test/log added: 16:31-10-04
            // console.log('pdfPath after setting in (2)[handleSubmit:]', pdf_path);
                
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

        console.log("URL being sent:", `${backendUrl}/pdf/upload-pdf`); 
        const response = await fetch(`${backendUrl}/pdf/validate-pdf`, {
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
        // changelog; 17:47-08-05
        const drillAngle = document.querySelector('input[name="drill_angle"]').value;
        const drillActiveHeight = document.querySelector('input[name="drill_active_height"]').value;
        const drillMovementSpeed = document.querySelector('input[name="drill_movement_speed"]').value;
        // changelog; 17:58-08-05 #limits
        if (drillAngle < 1 || drillAngle > 181) {
            alert("Drill angle must be between 1 and 180");
            return; // Prevent form submission
        }
        if (drillActiveHeight < 1 || drillActiveHeight > 201) {
            alert("Drill height must be between 1 and 200");
            return; // Prevent form submission
        }
        if (drillMovementSpeed < 1 || drillMovementSpeed > 1001) {
            alert("Drill movement speed must be between 1 and 1000");
            return; // Prevent form submission
        }


        const formData = new FormData();
        formData.append('pdf_path', pdfPath);
        formData.append('drill_angle', drillAngle);
        formData.append('drill_active_height', drillActiveHeight);
        formData.append('drill_movement_speed', drillMovementSpeed);
        try {
            // console.log("URL being sent:", `${backendUrl}/pdf/upload-pdf`); 
            const response = await fetch(`${backendUrl}/pdf/convert-pdf`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log("CONVER MODE: valid")
                // theng
                setConversionStatus('success');
            // edit 01:00-17-04
                // const svgContent = await response.text();
                const gcodeContent = await response.text();
            //changelog 23:05-29-04 [download]
                // const blob = new Blob([svgContent], { type: 'image/svg+xml' });
                const blob = new Blob([gcodeContent], {type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'converted.gcode');
                document.body.appendChild(link);
                link.click();
                // Changelog; 18:10-08-05 After download:
                window.location.href = '/';
                window.location.reload(); // Force a reload
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
        console.log("Załadowano PDF. Strony:", numPages);
    }

    // console.log("pdfPath Received[before MAIN return]:", pdfPath);
    // console.log("file state/Received[before MAIN return]:", file);
    // console.log("validation status [before MAIN return", validationStatus);
    return (
        <div>
        <input type="file" onChange={handleChange} />
        {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>} 
        {pdfIsLoading && <p>Wczytuję PDF...</p>}
        
        {/* new log - pdfconversionbutton; 23:15-15-04 */}
        {validationStatus === 'success' && (
            <div className='form-container'>
                <div className='input-row'>
                    <div className='input-group'>
                        <label htmlFor="drill_angle">Kąt Rozwarcia [stopnie]</label>
                        <input 
                            type="number" 
                            name="drill_angle" 
                            id="drill_angle" 
                            placeholder="Drill Angle" 
                            defaultValue="90"
                            title="Przykładowa wartość: 90. Odpowiednio przez nas wytestowana. Kąt w jaki frez jest wyposażony."
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="drill_active_height">Wysokość robocza [mm]</label>
                        <input 
                            type="number" 
                            name="drill_active_height" 
                            id="drill_active_height" 
                            placeholder="Drill Active Height" 
                            defaultValue="30" 
                            title="Przykładowa wartosć: 30. Wysokość na jaką frez musi opaść licząc od góry."
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="drill_movement_speed">Prędkość Posuwu [mm/s]</label>
                        <input 
                            type="number" 
                            name="drill_movement_speed" 
                            id="drill_movement_speed" 
                            placeholder="Movement Speed" 
                            defaultValue="30" 
                            title="Przykładowa wartość: 30. Odpowiednio testowana przez nas"
                        />
                    </div>
                </div>
                <p className="annotation">⚠⚠ WYGENEROWANY KOD WYKORZYSTUJE 14000 RPM jako PRĘDKOŚĆ WRZECIONA ⚠⚠</p>
                <br />
                <p className="annotation">Przykładowe wartości, dokładnie przez nas przetestowane.</p>
                <br />
                <button id="convert-button" onClick={handleConversion}>Przekonwertuj na GCode</button>
            </div>
        )}
        
        {/* Only render if we have a `pdfPath` from the backend */}
        {/* {pdfPath && (  */}
        {pdfPath && validationStatus === 'success' && (
        // <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}> 
        <div className='pdf-container'>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1} 
                    className="pdf-page"
                />
                ))}
            </Document>
        </div>
        )}
        </div>              
    );
};
export default PdfPreview; 