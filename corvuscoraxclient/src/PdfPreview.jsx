import React, { useState } from 'react';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PdfPreview = () => {
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
            {file && (
                <div style={{ marginTop: '20px' }}>
                    <Viewer fileUrl={URL.createObjectURL(file)}>
                        <SpecialZoomLevel scale={1.5} />
                        {defaultLayoutPluginInstance => defaultLayoutPluginInstance.defaultLayoutPlugin}
                    </Viewer>
                </div>
            )}
        </div>
    );
};

export default PdfPreview;