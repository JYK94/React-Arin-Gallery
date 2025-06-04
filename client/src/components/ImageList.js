import React from 'react';
import '../App.css'; // Or a specific CSS file for ImageList

const ImageList = () => { // Removed images prop
  const imageFiles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg']; // Added more images based on previous context
  return (
    <div className="image-gallery-container">
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
