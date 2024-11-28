import Item from "../components/Item/Item"
import '../styles/newArrivals.css'

function NewArrivals () {
    return (
        <>
        <h2>NEW ARRIVALS</h2>
        <a href="/NEW ARRIVALS" className="see-all-arrivals">See All</a>
        <div className="container-arrivals">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
        </div>
        </>
    )
}
export default NewArrivals