import React from 'react';
import Header from './component/Header';
import Product from './component/Product';
import WhyWe from './component/WhyWe';

import './App.scss'
function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <WhyWe />
      <div className='back-ground-reviews'></div>
    </div>
  );
}

export default App;
