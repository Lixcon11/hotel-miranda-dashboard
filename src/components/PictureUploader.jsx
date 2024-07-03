import React, { useState } from 'react';
import styled from 'styled-components';

const PictureUploader = ( {name} ) => {
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
    <ImageDisplayer>
      <div>
        {image ? 
          <img src={image} alt="Profile"/>
         : (
          <div>
            No Image
          </div>
        )}
      </div>
      <input type="file" accept="image/*" id="file-input" name={name} onChange={handleImageChange}/>
      <label htmlFor="file-input">
        Upload Photo
      </label>
    </ImageDisplayer>
  );
};

const ImageDisplayer = styled.div`
text-align: center;
margin-top: 20px;

    div {
        margin-bottom: 10px;

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }

        div {
            width: 150px;
            height: 150px;
            border-radius: 50%;
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
        border-radius: 5px;
    }

`


export { PictureUploader }