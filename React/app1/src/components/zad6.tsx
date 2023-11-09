import React, {useState} from 'react';

const Zad6Component = () => {
    
    
    const [photoNumber,setPhotoNumber] = useState(0);
    

    const gallery = [
        "./assets/gallery/photo1.jpg",
        "./assets/gallery/photo2.jpg",
        "./assets/gallery/photo3.jpg",
        "./assets/gallery/photo4.jpg",
    ]

  

    const showNext = () => {
        setPhotoNumber(nextValue => nextValue+1);
        if(photoNumber < gallery.length - 1){
            setPhotoNumber(nextValue => nextValue+1);
        }else {
            console.log('Nie ma więcej zdjęć');
        }
        
        
    }

    const showPrevious = () => {
        if(photoNumber > 0){
            setPhotoNumber(nextValue => nextValue-1);
        }else {
            console.log('Jest to pierwsze zdjęcie, nie ma wcześniejszego');
        }
        
        
    }
    

    return (
        
        <div>
        
        <h5>{photoNumber}</h5>

            <table>
            <tr>
            <td>
                <img
                src="{{ gallery[currentPhoto].src }}"
                width="300"
                height="300"
                />
            </td>
            </tr>
            </table>
    
        
            
           
           
        </div>
    )
}

export default Zad6Component