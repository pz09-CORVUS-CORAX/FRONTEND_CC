import React, {useState} from 'react';

import '../App.css'
import PdfPreview from '../PdfPreview';

function Converter() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/Converter.jsx</code> and save to test HMR
                </p>
                <p className="read-the-docs">
                    Click on the logos to learn more
                </p>
                <div className="converter">
                    <h1>PDF PdfPreview</h1>
                    <PdfPreview />
                </div>
            </div>
        </div>
    );
}

export default Converter;