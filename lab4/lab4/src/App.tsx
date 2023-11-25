import { useState } from "react";  
import './App.css';
import Zad1 from "./components/Zad1";
import Zad2 from "./components/Zad2";
import Zad3 from "./components/Zad3";
import Zad9_1 from "./components/Zad9_1";
import Zad9_2 from "./components/Zad9_2";
import Zad16 from "./components/Zad16";


function App() {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  const handleClick = () => {
    setShowComponent(true);
  }

  const handleClick1 = () => {
    setShowComponent(false);
  }

  return (
    <div className="App">
      <Zad1 />
      <Zad2 />
      <Zad3 />
     
      <Zad9_1 ShowComponent={handleClick} />
      {showComponent === true ? <Zad9_2 HideComponent={handleClick1}/> : null}

      <Zad16 />
      
    </div>
  );
}

export default App;
