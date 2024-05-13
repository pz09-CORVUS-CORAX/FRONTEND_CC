import React, {useState} from 'react';

import '../App.css'
import '../assets/styles/converter.css'
import PdfPreview from '../PdfPreview';

function Converter() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="card">
                <div className="converter">
                    <h1>PDF PdfPreview</h1>
                    <div className='span-card'></div>
                    <PdfPreview />
                </div>
            </div>
        </div>
    );
}

export default Converter;