import '../styles/inst.css';
import iamageInst from '../assets/img/forInst.svg'


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

const InstagramSection = () => {
    return (
        <section className="instagram-section">
            <div className="header">
                <div className="line"></div>
                <h2 className="title">Share How You Blossomed with <span className="hashtag">#BloomBeauty</span></h2>
                <a href="/see-all" className="see-all">See All</a>
                <div className="line"></div>
            </div>

            <div className="image-grid">
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image} alt="Instagram post" className="image" />
                        {/* <div className="overlay">
                            <button className="button">See In</button>
                            <button className="button buy-now">Buy Now</button>
                        </div> */}
                    </div>
                ))}
            </div>
            <button className="follow-us">Follow Us</button>
        </section>
    );
};

export default InstagramSection;
