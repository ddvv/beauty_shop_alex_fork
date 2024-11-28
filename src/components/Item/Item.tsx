import '../Item/item.css'
import cream from '../../../public/assets/img/cream.png'

function Item () {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={cream} alt="Soft Finish Product" />
                <button className="wishlist-btn">❤️</button>
            </div>
            <div className="product-info">
                <h3 className="product-name">Soft Finish</h3>
                <p className="product-description">All Around Safe Block Sun Milk SPF50+/PA++</p>
                <p className="product-price">$25</p>
                <button className="add-to-bag-btn">Add To Bag</button>
            </div>
        </div>
    )
}

export default Item



