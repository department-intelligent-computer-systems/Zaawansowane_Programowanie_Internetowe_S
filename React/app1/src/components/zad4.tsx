import React, {useState} from 'react';

const Zad4Component = () => {
    
    let favLinks = [
        {name:'Instagram',url:'https://www.instagram.com'},
        {name:'Demotywatory',url:'https://demotywatory.pl'},
        {name:'Rtv Euro Agd',url:'https://www.euro.com.pl'},
        {name:'Media Expert',url:'https://www.mediaexpert.pl'},
        {name:'Jbzd',url:'https://jbzd.com.pl'}
    ]

    const [isButtonClicked,setIsButtonClicked] = useState(false);
    const [value,setValue] = useState(0);
    


  

    const toggleButton = (v:number) => {
        
        
        setValue(count => count + v);
        
    }
    

    return (
        
        <div>
        
        <p>{value}</p>
            
               <button onClick={()=>toggleButton(1)}>+</button>
               <button onClick={()=>toggleButton(-1)}>-</button>
           
        </div>
    )
}

export default Zad4Component