import React from 'react';
import '../assets/styles/style_1.css';
import '../assets/styles/style_2.css';
import '../assets/styles/style.css';
import '../assets/styles/Navbar.css';

function IndexPage() {
    return (
      <div className="home-team">
        <div className="home-container03">
          <div className="home-project-container">
            <h6 className="home-text04"><span>Nasz Projekt</span></h6>
            {/* Here provide a photo/logo + ref to a converter page */}
          </div>
          <div className="home-container04">
            <h6 className="home-text04"><span>Nasz Zespół</span></h6>
          </div>
          <div className="home-container05">
            <img
              alt="opiekunCzarkowski"
              src='src/assets/images/Opiekun.jpg' // Adjust path if needed
              className="home-image1"
            />
            <span className="home-text06">Krzysztof Czarkowski</span>
            <span className="home-text07">Opiekun zespołu</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default IndexPage;