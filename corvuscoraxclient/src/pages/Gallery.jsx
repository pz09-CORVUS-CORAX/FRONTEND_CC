import React, { useCallback, useEffect, useState } from "react";
import '../assets/styles/style_1.css';
import '../assets/styles/style_2.css';
import '../assets/styles/style.css';
import '../assets/styles/Navbar.css';
import '../assets/styles/gallery.css';

// import 'lightbox2/dist/css/lightbox.min.css';  
import 'react-18-image-lightbox/style.css';
import Lightbox from 'react-18-image-lightbox';
// global = globalThis || window; 

function GalleryItem({ imageNumber }) {
  const [isOpen, setIsOpen] = useState(false);

  // const openLightbox = useCallback(() => setIsOpen(true), []);
  const openLightbox = useCallback((event) => {
    event.stopPropagation(); // Stop event bubbling
    setIsOpen(true);
  }, []);
  const closeLightbox = () => setIsOpen(false);

  return (
    <div>
      <img
        src={`/images/${imageNumber}.jpg`}
        alt={`Image ${imageNumber}`}
        className={`img${imageNumber}`}
        onClick={openLightbox } 
      />

      {isOpen && (
        <Lightbox
          mainSrc={`/images/${imageNumber}.jpg`}
          enableZoom={true}
          imageWidth="800px"
          imageHeight="600px"
          onCloseRequest={closeLightbox}
        />
      )}
    </div>
  );
}

function Gallery() {
  return (
    <div className="gallerycontainer">
      {[...Array(40)].map((_, index) => (
        <GalleryItem key={index + 1} imageNumber={index + 1} />
      ))}
    </div>
  );
}

export default Gallery;


// #ionicons
// #jquery
// #bootstrap@4.3.1
// #lightbox2

// #react-icons
// #react-18-image-lightbox <3