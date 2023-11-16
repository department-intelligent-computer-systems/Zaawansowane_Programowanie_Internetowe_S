import React, {useState, Component} from 'react';
import photo1 from '../assets/gallery/photo1.jpg'
import photo2 from '../assets/gallery/photo2.jpg'
import photo3 from '../assets/gallery/photo3.jpg'
import photo4 from '../assets/gallery/photo4.jpg'

type State = {
    id: number
}

class Zad6Component extends React.Component<State>  {
    
    private gallery:any = [];
    

    //const [photoNumber,setPhotoNumber] = useState(0);
    

    private photos = [
        {id:1,src:photo1,alt:'photo1'},
        {id:2,src:photo2,alt:'photo2'},
        {id:3,src:photo3,alt:'photo3'},
        {id:4,src:photo4,alt:'photo4'},
    ]
    private id: number = 0;

    // constructor(props:{}) {
    //     super(props);
    //     this.state = {id: 0}
        
    // }

    // public loadData() {
    //     this.gallery.push(this.photos);
    // }

  
    // public showNext(){
    //     if(this.id < this.gallery.length - 1){
    //         this.setState( {
    //             id: this.state.id + 1
    //         })
    //     }else [
    //         console.log('Brak dalszych zdjęć')
    //     ]
    // }

    // public showPrevious(){
    //     if(this.id > 0){
    //         this.setState( {
    //             id: this.state.id - 1
    //         })
    //     }else [
    //         console.log('Jest to pierwsze zdjęcie, nie ma wcześniejszego')
    //     ]
    // }

    // const showNext = () => {
    //     setPhotoNumber(nextValue => nextValue+1);
    //     if(photoNumber < gallery.length - 1){
    //         setPhotoNumber(nextValue => nextValue+1);
    //     }else {
    //         console.log('Nie ma więcej zdjęć');
    //     }
        
        
    // }

    // const showPrevious = () => {
    //     if(photoNumber > 0){
    //         setPhotoNumber(nextValue => nextValue-1);
    //     }else {
    //         console.log('Jest to pierwsze zdjęcie, nie ma wcześniejszego');
    //     }
        
        
    // }
    
    render() {
        return (
        
            <div>
                
                <h5>{this.id}</h5>
            
    
                <table>
                <tr>
                <td>
                    
                    <img/>
                    
                </td>
                </tr>
                </table>
        
            <div style={{flexDirection:'row',justifyContent:'space-between',width:600,backgroundColor:'red',display:'flex'}}>
            {/* <button onClick={this.loadData}>Load data</button> */}
            {/* <button onClick={showPrevious}>Poprzedni</button>
            <button onClick={showNext}>Następny</button> */}
            </div>
    
                
               
               
            </div>
        )
    }

    
}

export default Zad6Component