// import React from 'react';
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import NewArrivals from './components/NewArrivals';
import BestSallers from './components/BestSallers';
import BlossomGlowKit from './components/BlossomGlowKit'
import BlossomIMG1 from './assets/img/IMAGE1.svg';
import BlossomIMG2 from './assets/img/IMAGE.svg';
import Blog from "./components/Blog"
import Quiz from "./components/SkinQuiz"
// import InstSection from "./components/InstSection"


function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <NewArrivals/>
    <BestSallers/>
    <BlossomGlowKit 
        title="Blossom Glow Kit"
        description="Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract provide deep hydration and rejuvenation. Suitable for all skin types, vegan, cruelty-free, eco-friendly."
        image={BlossomIMG1} reverse={undefined}/>
    <BlossomGlowKit 
        title="Floral Essence Masks Sets" 
        description="Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine." 
        image={BlossomIMG2} 
        reverse
    />
    <Blog/>
    <Quiz/>
    {/* <InstSection/> */}
    </>
  );
}

export default App;
