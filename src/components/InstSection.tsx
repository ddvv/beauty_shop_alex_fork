import '../styles/inst.css';
import iamageInst from '../../public/assets/img/soft_finish.png'



const InstagramSection = () => {
  const images = [
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
];

  return (
      <div className="gallery-container">
      <header className="gallery-header">
        <span>SHARE HOW YOU BLOSSOMED WITH </span>
        <span className="hashtag">#BLOOMBEAUTY</span>
      </header>
      <div className="gallery-subheader">
        <a href="#">See All</a>
      </div>
      <div className="gallery-images">
        {images.map((src, index) => (
          <div className="gallery-image" key={index}>
            <img src={src} alt={`Gallery image ${index + 1}`} />
            <div className="overlay">
              <button className="overlay-button">See In</button>
              <button className="overlay-button buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      <button className="gallery-button">Follow Us</button>
    </div>
  );
};

export default InstagramSection;
