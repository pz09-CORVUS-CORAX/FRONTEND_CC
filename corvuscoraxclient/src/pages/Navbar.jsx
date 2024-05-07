import React from 'react';
import '../assets/styles/style_1.css';
import '../assets/styles/style_2.css';
import '../assets/styles/style.css';
import '../assets/styles/Navbar.css';

function Navbar() {
    return (
        <div>
            <div className="home-container">
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
                <div class="home-header">
                    <div class="home-bg"></div>
                    <div class="home-container01">
                        <img
                            alt="image"
                            src="/src/assets/images/BG1.jpg"
                            class="home-image"
                        />
                        <div class="home-container02">
                            <h1 class="home-text"><span>CNCodifier</span></h1>
                                <span class="home-text02">
                                    <span></span>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;