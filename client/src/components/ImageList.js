import React from 'react';
import MainForm from './MainForm';
import '../App.css'; // Or a specific CSS file for ImageList

const ImageList = ({ images }) => {
  return (
    <div className="image-list-container"> {/* Add a class for styling */}
      {images.map(item => (
        <MainForm
          key={item.BBS_NO + '-' + item.SEQ} // Create a unique key
          name={item.USER_NM}
          bbsNo={item.BBS_NO}
          title={item.TITLE}
          content={item.CONTENT}
          seq={item.SEQ}
          likeCnt={item.LIKE_CNT}
          nSrc={item.FILE_PATH}
        />
      ))}
    </div>
  );
};

export default ImageList;
