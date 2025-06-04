import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import '../App.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const styles = {
  galleryContainer: {
    padding: '10px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  imageWrapper: {
    position: 'relative',
    margin: '8px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '8px',
  },
  masonryGrid: {
    display: 'flex',
    marginLeft: '-8px',
    width: 'auto',
  },
  masonryColumn: {
    paddingLeft: '8px',
    backgroundClip: 'padding-box',
  },
};

const ImageList = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Source of image filenames (could be a prop or fetched from an API)
  const imageFiles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];

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

  // 이미지의 종횡비를 고려한 스타일 계산
  const getImageStyle = (width, height) => {
    const aspectRatio = width / height;
    return {
      ...styles.image,
      aspectRatio: aspectRatio,
    };
  };

  return (
    <div style={styles.galleryContainer}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
        style={styles.masonryGrid}
        columnAttrs={{
          className: 'masonry-grid_column',
          style: styles.masonryColumn,
        }}
      >
        {photos.map((photo, index) => (
          <div key={index} style={styles.imageWrapper}>
            <img 
              src={photo.src} 
              alt={`Gallery item ${index + 1}`}
              style={getImageStyle(photo.width, photo.height)}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </div>
  )
};

export default ImageList;
