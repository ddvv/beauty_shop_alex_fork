import '../styles/blog.css';
import blogImg from '../assets/img/blog.svg'

const articles = [
    {
        id: 1,
        title: 'Cracking the Coconut Code',
        description: 'Reveal your skin’s natural glow with our Lotus Glow Kit. Nourishing body and face creams',
        image: 'https://link-to-image1.com', // Замените на реальные ссылки на изображения
    },
    {
        id: 2,
        title: 'Bloom Beauty Best of 2023',
        description: 'Bloom Beauty Best of 2023 products winners are here.',
        image: 'https://link-to-image2.com',
    },
    {
        id: 3,
        title: '7 Skincare Habits to Break Now',
        description: 'Great skincare is a long game—it doesn’t happen overnight, but little steps are made...',
        image: 'https://link-to-image3.com',
    },
];

const Blog = () => {
    return (
        <section className="on-the-blog">
            <header className="on-the-blog-header">
                <h2>On the Blog</h2>
                <a href="/blog" className="see-all-link">See All</a>
            </header>
            <div className="articles-container">
                {articles.map(article => (
                    <div key={article.id} className="article-card">
                        <img src={blogImg} alt={article.title} className="article-image" />
                        <div className="article-content">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <button className="read-more-button">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
