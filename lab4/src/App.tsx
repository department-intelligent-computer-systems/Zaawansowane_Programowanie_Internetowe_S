import React from 'react';
import './App.css';
import ShowName from './components/showName/ShowName';
import FavoriteLinks from './components/favoriteLinks/FavoriteLinks';
import Counter from './components/counter/Counter';
import PhotoGalery from './components/photoGalery/PhotoGalery';

function App() {
  return (
    <div className="app">
      <div className='app__show-name'>
        <ShowName />
      </div>
      <div className='app__favorite-links'>
        <FavoriteLinks />
      </div>
      <div className='app__counter'>
        <Counter />
      </div>
      <div className='app__photo-galery'>
        <PhotoGalery/>
      </div>
    </div>

  );
}

export default App;
