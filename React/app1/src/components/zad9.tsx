import React, {useState} from 'react';


const Zad9SecondComponent = () => {


    const texts:string = 'Nowy tekst';

    let inSecondTitle = 'Ukryj pierwszy';
    const [isFirstClicked,setIsFirstClicked] = useState(false);
    const [isSecondClicked,setIsSecondClicked] = useState(false);
    const handleClick = () => {
        setIsFirstClicked(isFirstClicked => !isFirstClicked)
        setIsSecondClicked(prevState => !prevState)
        
    }







    return (
        <div>
            <h3 style={{color:'black'}}>{texts}</h3>

            {isFirstClicked ? (
                <div style={{display:'none'}}>
                    <Zad9Component/>
                </div>
                
            ):null}
            <button onProgress={handleClick}>{isFirstClicked ? "Hide component": "ShowComponent"}</button>
            <h3 style={{color:'black'}}>{isFirstClicked? "On":"OFF"}</h3>
        </div>
    )
}


const Zad9Component = () => {
    
    
    const [enabled,setEnabled] = useState(false);
    


  

    const toggleButton = () => {
        
        
        setEnabled(prev => !prev);
        
    }
    

    return (
        
        <div>
            
        
            {enabled ? (
                
                <div>
                    <Zad9SecondComponent/>
                </div>
            ):null}
            
            <button onClick={()=>toggleButton()}>Przejdź do 2 komponentu</button>
            <h3>1 komponent</h3>
            <h3>{enabled? "Włączony" : "Wyłączony"}</h3>
           
        </div>
    )
}

export default Zad9Component