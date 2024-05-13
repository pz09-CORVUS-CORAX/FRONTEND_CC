import React from 'react';
import '../assets/styles/style_1.css';
import '../assets/styles/style_2.css';
import '../assets/styles/style.css';
import '../assets/styles/Navbar.css';
import pdfIcon from '../../public/images/pdf.png'

function ReportItem({ name, downloadLink, filename }) {
    return (
        <div className="col-lg-2 col-md-6 wow fadeInUp">
            <div className="member">
                <div className="member-info" style={{ textAlign: 'center' }}>
                    <div className="member-info-content" style={{ textAlign: 'center' }}>
                        <a href={downloadLink} download={filename}>
                            <img src={pdfIcon} height="50px" alt="" />
                        </a>
                    </div>
                    <p style={{ textAlign: 'center', fontSize: 'small', margin: '5px' }}>
                        {name}
                    </p>
                </div>
            </div>
        </div>
    );
}

function TeamReports() {
    const reports = [
        { name: 'Raport semestralny Zespołu IX', downloadLink: 'raporty/zespol.pdf', filename: 'Raport_Zespolu.pdf' },
        { name: 'Raport Kierownika - Jakub Biliński', downloadLink: 'raporty/kierownik.pdf', filename: 'Raport_kierownika.pdf' },
        { name: 'Jakub Żegliński', downloadLink: 'raporty/zeglin.pdf', filename: 'Raport_Jakub_Zeglinski.pdf' },
        { name: 'Szymon Wojciechowski', downloadLink: 'raporty/wojciechowski.pdf', filename: 'Raport_Szymon_Wojciechowski.pdf' },
        { name: 'Hubert Kaszuba', downloadLink: 'raporty/kaszuba.pdf', filename: 'Raport_Hubert_Kaszuba.pdf' },
        { name: 'Michał Ryżyk', downloadLink: 'raporty/ryzyk.pdf', filename: 'Raport_Michal_Ryzyk.pdf' },
      ];
    return (
        <section id="raports">
            <div className="container">
                <div className="section-header wow fadeInUp">
                    <h3>Raporty Semestralne</h3>
                </div>
                <div className="row">
                    {reports.map((report) => (
                        <ReportItem key={report.name} {...report} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamReports;