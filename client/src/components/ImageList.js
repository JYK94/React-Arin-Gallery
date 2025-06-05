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
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    // Function to get the count of images in the public/images directory
    const getImageCount = async () => {
      try {
        let count = 1;
        const checkImage = async (index) => {
          const img = new Image();
          const src = `${process.env.PUBLIC_URL}/images/${index}.jpg`;
          
          return new Promise((resolve) => {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = src;
          });
        };

        // Find the maximum number of images (up to 1000 to prevent infinite loops)
        while (count <= 1000) {
          const exists = await checkImage(count);
          if (!exists) break;
          count++;
        }

        // Generate array of existing image filenames
        const files = Array.from({ length: count - 1 }, (_, i) => `${i + 1}.jpg`);
        setImageFiles(files);
        return files;
      } catch (error) {
        console.error('Error checking images:', error);
        return [];
      }
    };

    const fetchImageDimensions = async () => {
      setLoading(true);
      const files = await getImageCount();
      
      if (files.length === 0) {
        setPhotos([]);
        setLoading(false);
        return;
      }

      const loadedPhotos = [];
      let imagesProcessed = 0;

      files.forEach(filename => {
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
          if (imagesProcessed === files.length) {
            setPhotos(loadedPhotos);
            setLoading(false);
          }
        };

        img.onerror = () => {
          console.error(`Error loading image: ${filename}`);
          imagesProcessed++;
          if (imagesProcessed === files.length) {
            setPhotos(loadedPhotos);
            setLoading(false);
          }
        };
      });
    };

    fetchImageDimensions();
  }, []);

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
