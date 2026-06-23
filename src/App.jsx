import Header from './components/Header';
import PromoBar from './components/PromoBar';
import Hero from './components/Hero';
import ScanBooking from './components/ScanBooking';
import ProductFeatures from './components/ProductFeatures';
import ResultsAndWhy from './components/ResultsAndWhy';
import WhistleDifference from './components/WhistleDifference';
import WhistleApart from './components/WhistleApart';
import StepsAndDoctor from './components/StepsAndDoctor';
import FAQAndFooter from './components/FAQAndFooter';
import FixedBottomBar from './components/FixedBottomBar';
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
        <ResultsAndWhy />
        <WhistleDifference />
        <WhistleApart />
        <StepsAndDoctor />
        <FAQAndFooter />
      </main>
      <FixedBottomBar />
    </>
  );
}

export default App;
