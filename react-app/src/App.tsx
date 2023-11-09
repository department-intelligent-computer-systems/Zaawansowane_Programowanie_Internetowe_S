import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
const App: React.FC = () => {
  const [showName,setShowName]=useState(false);
  const handleClick=()=> {
    setShowName(true);
  };
  return (
    <div>
      <p>{showName&&'Katarzyna Blachowicz'}</p>
      <button onClick={handleClick}>Pokaz imie i nazwisko</button>
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
