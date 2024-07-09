import React, { useState } from 'react';
import styled from 'styled-components';
import { BedImage, ImageProfile } from '../styles/ImageProfile';

const PictureUploader = ( {name, isBed} ) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };

  return (
    <ImageDisplayer $isBed={isBed}>
      <div>
        {image ? 
          isBed ? <BedImage src={image} alt="Bed"/> : <ImageProfile src={image} alt="Profile"/>
         : (
          <div>
            No Image
          </div>
        )}
      </div>
      <input type="file" accept="image/*" id={`file-input-${name}`} name={name} onChange={handleImageChange}/>
      <label htmlFor={`file-input-${name}`}>
        Upload Photo
      </label>
    </ImageDisplayer>
  );
};

const ImageDisplayer = styled.div`
text-align: center;
margin-top: 20px;
margin-bottom: 20px;

    div {
        margin-bottom: 20px;
        display: flex;
        justify-content: center;

        div {
            width: ${props => props.$isBed === true ? "250px": "150px"};
            height: 150px;
            border-radius: ${props => props.$isBed === true ? "10%": "50%"};
            background-color: #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #fff;
        }
    }

    input {
        display: none;
    }

    label {
        cursor: pointer;
        background-color: #135846;
        color: #fff;
        padding: 10px 20px;
        border-radius: 12px;
    }

`


export { PictureUploader }