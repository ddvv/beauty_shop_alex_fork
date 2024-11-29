import bannerImg from '../../public/assets/img/bannerImg.png'
import Button from '../ui/Button/Button';
import '../styles/banner.css'


function Banner () {
    return (
    <>
    <section className="first-screen">
      <div className="rectangle-2"></div>
      <div
        className="rectangle-3"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>
      <div className="banner-content">
        <h1>DISCOVER YOUR INNER BEAUTY<br />WITH BLOSSOM GLOW KIT</h1>
        <p>Great gift for yourself and loved ones</p>
        <Button className="banner-button" onClick={()=>{alert('Working')}}>Shop Now</Button>
      </div>
    </section>
    </>
  );
}

export default Banner;