import React from 'react';
import Header from './components/Header';
import PromoBar from './components/PromoBar';
import Hero from './components/Hero';
import ScanBooking from './components/ScanBooking';
import ProductFeatures from './components/ProductFeatures';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <PromoBar />
      <main className="whistle-main">
        <Hero />
        <ScanBooking />
        <ProductFeatures />
      </main>
    </>
  );
}

export default App;
