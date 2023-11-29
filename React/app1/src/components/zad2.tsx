import React, {useState} from 'react';

const SecondComponent = () => {
    
    let favLinks = [
        {name:'Instagram',url:'https://www.instagram.com'},
        {name:'Demotywatory',url:'https://demotywatory.pl'},
        {name:'Rtv Euro Agd',url:'https://www.euro.com.pl'},
        {name:'Media Expert',url:'https://www.mediaexpert.pl'},
        {name:'Jbzd',url:'https://jbzd.com.pl'}
    ]

    const [isButtonClicked,setIsButtonClicked] = useState({isListShown:true,title:'Lista ukryta'});
    const [clickedLink,setClickedLink] = useState(false);
    

    const toggleButton = () => {
        const newState = {
            title: isButtonClicked.isListShown ? "Pokaż liste": 'Lista ukryta',
            isListShown: !isButtonClicked.isListShown
        }
        setIsButtonClicked(newState);
    }

    const changeColorOne = () => {
        setClickedLink(!clickedLink);
    }

    return (
        
        <div>
        {isButtonClicked.isListShown ? (
            <div>
           
           {favLinks.map((link) => {
               return (
                   <ul>
                       <li>
                          <a href={link.url} style={{color: clickedLink === true ? "red" : ''}} onClick={()=> changeColorOne()}>{link.name}</a>
                       </li>
                   </ul>
               )
           })}



           
            </div>
        ):null} 
        <div>
               <button onClick={toggleButton}>{isButtonClicked.title}</button>
           </div>
        </div>
    )
}

export default SecondComponent