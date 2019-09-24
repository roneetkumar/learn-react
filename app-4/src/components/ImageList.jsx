import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image, index) =>
        <ImageCard image={image} key={index} />
    )

    return (
        <div className='image-list'>
            {images}
        </div>
    )
}

export default ImageList;
