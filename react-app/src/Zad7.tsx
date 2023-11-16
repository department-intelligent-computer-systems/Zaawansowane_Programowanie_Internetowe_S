import React, {useState} from "react";
import './App.css';

const Gallery = () => {
    const images = [
        'https://img.wprost.pl/img/tatry-widoczne-z-sokolicy-w-pieninach/b1/a6/e58a6a258ba7f0a0bd2a46f63c87.jpeg',
        'https://ocdn.eu/pulscms-transforms/1/C5Qk9kpTURBXy9kNTJiNDBmOWNjZjg4NTliZDAwNDAwMTFkYTMzNTlmMy5qcGeTlQPNBFkAzRaOzQywkwXNAxTNAbyTCaYxYTQzMmIG3gABoTAG/jesien-na-podhalu.avif',
        'https://i.content4travel.com/cms/img/u/kraj/1/gory_0.jpg?version=1',
        'https://1.bp.blogspot.com/-O5dxPSw-z5I/T56EjjoMYnI/AAAAAAAAHr0/XNInjmUb1L4/s1600/100_1187.JPG'
    ];

    const [currentImageIndex, setCurrentImageIndex]=useState(0);

    const handleNextClick = () =>{
        if (currentImageIndex <images.length -1){
        setCurrentImageIndex(currentImageIndex+1);
    } else {
        alert('To jest ostatnie zdjęcie');
    }
};
const handlePrevClick = () => {
    if (currentImageIndex>0){
        setCurrentImageIndex(currentImageIndex-1);
    }else {
        alert('To jest pierwsze zdjęcie');
    }
};

const isFirstImage = currentImageIndex ===0;
const isLastImage = currentImageIndex === images.length -1;
return (
    <div>
        <img src={images[currentImageIndex]} alt={`Zdjecie ${currentImageIndex + 1}`} />
    <div>
        <button onClick={handlePrevClick} disabled={isFirstImage}>Lewo</button>
        <button onClick={handleNextClick} disabled={isLastImage}> Prawo</button>
    </div>
    </div>
);
};
function GalleryShow1(){
    return(
        <div className="App">
            <header className="App-header">
                <h1>Galleria Zdjęć</h1>
                <Gallery />
            </header>
        </div>
    );
}
export default GalleryShow1
