import React from 'react';
import '../assets/styles/style_1.css';
import '../assets/styles/style_2.css';
import '../assets/styles/style.css';
import '../assets/styles/Navbar.css';


function DownloadItem({ fileType, filePath, fileName, description }) {
  return (
    <div className="col-lg-2 col-md-6 wow fadeInUp">
      <div className="member">
        <div className="member-info">
          <div className="member-info-content" style={{ textAlign: 'center' }}>
            <a href={filePath} download={fileName}>
              <img src={`images/${fileType}.png`} height="50px" alt={fileType} /> 
            </a>
          </div>
          <p style={{ textAlign: fileType === 'git' ? 'left' : 'center', fontSize: 'small', margin: '5px' }}>
            {description}
          </p>
        </div>
      </div>
    </div>  
  );
}

function Documentation() {
  const downloadItems = [ // Array to store download item data
    { fileType: 'cpp', filePath: 'functions/czyszczenie.cpp', fileName: 'Czyszczenie.cpp', description: 'Funkcja do wyrównywania powierzchni materiału' },
    { fileType: 'pdf', filePath: 'functoins/instrukcja.pdf', fileName: 'Instrukcja.pdf', description: 'Dokumentacja z instrukcją do tworzenia bloków żywicznych'},
    { fileType: 'git', filePath: 'https://github.com/pz09-CORVUS-CORAX', fileName: '', description: 'Strona github projektu' }
  ];

  return (
    <section id="raports">
      <div className="container">
        <div className="section-header wow fadeInUp">
          <h3>Pliki do pobrania</h3>
        </div>
        <div className="row">
          {downloadItems.map((item) => (
            <DownloadItem key={item.filePath} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Documentation;
