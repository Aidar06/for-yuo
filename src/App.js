import './App.css';
import './styles/style.scss'
import Header from "./componenents/header";
import Hero from "./componenents/hero/hero";
import Features from "./componenents/features/features";
import Count from "./componenents/count/count";
import Technology from "./componenents/technology/technology";
import Speed from "./componenents/speed/speed";
import Dark from "./componenents/dark/dark";
import Pricing from "./componenents/pricing/pricing";
import Test from "./componenents/test/test";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
        <Features/>
        <Count/>
        <Technology/>
        <Speed/>
        <Dark/>
        <Pricing/>
        <Test/>
    </>
  );
}

export default App;
