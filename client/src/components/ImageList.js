import React, { useEffect, useRef } from 'react';
import Macy from 'macy';
import '../App.css'; // Or a specific CSS file for ImageList

const ImageList = () => { // Removed images prop
  const imageFiles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg']; // Added more images based on previous context
  const galleryRef = useRef(null);
  const macyInstance = useRef(null);

  useEffect(() => {
    if (galleryRef.current && imageFiles.length > 0) {
      macyInstance.current = Macy({
        container: galleryRef.current,
        trueOrder: false,
        waitForImages: false,
        margin: 24,
        columns: 3,
        breakAt: {
          1200: 5,
          940: 4,
          520: 2,
          400: 1,
        },
      });
    }

    return () => {
      if (macyInstance.current) {
        macyInstance.current.remove();
      }
    };
  }, [imageFiles.length]); // Re-run if the number of images changes, though not strictly necessary if images are static

  return (
    <div ref={galleryRef} className="image-gallery-container">
      {imageFiles.map(filename => (
        <div key={filename} className="gallery-item"> {/* Added a wrapper div for better styling if needed */}
          <img 
            src={`${process.env.PUBLIC_URL}/images/${filename}`} 
            alt={filename} 
            className="gallery-image" 
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
