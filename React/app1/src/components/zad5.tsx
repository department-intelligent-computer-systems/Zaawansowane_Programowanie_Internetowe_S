import React, {useState} from 'react';

const Zad5Component = () => {
    
    
    const [value,setValue] = useState(0);
    


  

    const toggleButton = (v:number) => {
        
        
        setValue(count => count + v);
        
    }
    

    return (
        
        <div>
        
        <p>{value}</p>
            
               <button onClick={()=>toggleButton(2)}>+2</button>
               <button onClick={()=>toggleButton(-2)}>-2</button>
           
        </div>
    )
}

export default Zad5Component