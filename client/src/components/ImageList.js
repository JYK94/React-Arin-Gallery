import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import '../App.css'; // Or a specific CSS file for ImageList

const ImageList = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Source of image filenames (could be a prop or fetched from an API)
  const imageFiles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpeg', '9.jpeg', '10.jpeg'];

  useEffect(() => {
    const fetchImageDimensions = async () => {
      setLoading(true);
      const loadedPhotos = [];
      let imagesProcessed = 0;

      if (imageFiles.length === 0) {
        setPhotos([]);
        setLoading(false);
        return;
      }

      imageFiles.forEach(filename => {
        const img = new Image();
        const src = `${process.env.PUBLIC_URL}/images/${filename}`;
        img.src = src;

        img.onload = () => {
          loadedPhotos.push({
            src: src,
            width: img.naturalWidth,
            height: img.naturalHeight,
          });
          imagesProcessed++;
          if (imagesProcessed === imageFiles.length) {
            setPhotos(loadedPhotos);
            setLoading(false);
          }
        };

        img.onerror = () => {
          console.error(`Error loading image: ${filename}`);
          imagesProcessed++;
          // Optionally, add a placeholder or skip
          if (imagesProcessed === imageFiles.length) {
            setPhotos(loadedPhotos); // Still update state with successfully loaded images
            setLoading(false);
          }
        };
      });
    };

    fetchImageDimensions();
  }, []); // Empty dependency array means this runs once on mount, as imageFiles is static here

  if (loading) {
    return <p>Loading images and dimensions...</p>;
  }

  if (photos.length === 0 && !loading) {
    return <p>No images found or all images failed to load.</p>;
  }

  return (
    <div className="image-gallery-container">
      <Gallery photos={photos} />
    </div>
  );
};

export default ImageList;
