import '../styles/quiz.css';
import mask from '../assets/img/mask.svg'

const SkinQuiz = () => {
    return (
        <section className="skin-quiz">
            <div className="skin-quiz-content">
                <div className="skin-quiz-image">
                    <img src={mask} alt="Skin Quiz" />
                </div>
                <div className="skin-quiz-text">
                    <h2>The Skin Quiz</h2>
                    <p>Meet the quiz that will curate a routine just as unique as you are.</p>
                    <button className="explore-button">Explore More</button>
                </div>
                
            </div>
        </section>
    );
};

export default SkinQuiz;
