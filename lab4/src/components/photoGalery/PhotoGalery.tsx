import React, { useState } from 'react'
import './PhotoGalery.css'


const photos = [
    require('../../utils/photo1.jpg'),
    require('../../utils/photo2.jpg'),
    require('../../utils/photo3.jpg')
];


const PhotoGalery: React.FC = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handleNextClick = () => {
        if (currentPhotoIndex < photos.length - 1) {
            setCurrentPhotoIndex(currentPhotoIndex + 1);
        }
    };

    const handlePrevClick = () => {
        if (currentPhotoIndex > 0) {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
        }
    };

    const isFirstPhoto = currentPhotoIndex === 0;
    const isLastPhoto = currentPhotoIndex === photos.length - 1;

    return (
        <div className='photo-galery'>
            <img src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} />
            <div className='photo-galery__buttons'>
                <button onClick={handlePrevClick} style={{ display: isFirstPhoto ? 'none' : 'block' }}>
                    previous
                </button>
                <button onClick={handleNextClick} style={{ display: isLastPhoto ? 'none' : 'block' }}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default PhotoGalery