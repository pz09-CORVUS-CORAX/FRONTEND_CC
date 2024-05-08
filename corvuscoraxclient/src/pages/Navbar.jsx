import React from 'react';
import { Link } from 'react-router-dom';
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
                            {/* <a className="navbar-brand page-scroll" href="index.html">Z9</a> */}
                            <Link className="navbar-brand page-scroll" to="/">Z9</Link>
                        </div>

                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav">
                                <li className="hidden active">
                                    {/* <a className="page-scroll" href="index.html">Zespół 9</a> */}
                                    <Link className="page-scroll" to="/">Zespół 9</Link>
                                </li>
                                <li>
                                    {/* <a className="page-scroll" href="about.html">O Projekcie</a> */}
                                    <Link className="page-scroll" to="/about">O Projekcie</Link>
                                </li>
                                <li>
                                    {/* <a className="page-scroll" href="team.html">Raport Semestralny Zespołu</a> */}
                                    <Link className="page-scroll" to="/team">Raport Semestralny Zespołu</Link>
                                </li>
                                <li>
                                    {/* <a class="page-scroll" href="documentation.html">Dokumentacja</a> */}
                                    <Link className="page-scroll" to="/documentation">Dokumentacja</Link>
                                </li>
                                <li>
                                    {/* <a class="page-scroll" href="calendar.html">Harmonogram</a> */}
                                    <Link className="page-scroll" to="/calendar">Harmonogram</Link>
                                </li>
                                <li>
                                    {/* <a class="page-scroll" href="gallery.html">Galeria i Multimedia</a> */}
                                    <Link className="page-scroll" to="/gallery">Galeria i Multimedia</Link>
                                </li>
                                <li>
                                    {/* <a class="page-scroll" href="gallery.html">Wypróbuj CNCodifier</a> */}
                                    <Link className="page-scroll" to="/converter">Wypróbuj CNCodifier</Link>
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