import Item from "../ui/Item"
import '../styles/newArrivals.css'

function NewArrivals () {
    return (
        <>
        <h2>NEW ARRIVALS</h2>
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