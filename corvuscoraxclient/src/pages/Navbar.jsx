import React from 'react';
import '../assets/styles/Navbar.css';
import '../assets/styles/style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className='container'>
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand page-scroll" href="index.html">Z9</a>
                </div>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                    <li className="hidden active">
                        <a className="page-scroll" href="index.html">Zespół 9</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="about.html">O Projekcie</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="team.html">Raport Semestralny Zespołu</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="documentation.html">Dokumentacja</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="calendar.html">Harmonogram</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="gallery.html">Galeria i Multimedia</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>  
  );
}

export default Navbar;