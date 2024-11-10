import Item from "../ui/Item"
import '../styles/bestSallers.css'

function BestSallers () {
    return (
        <>
        <h2>BEST SALLERS</h2>
        <div className="container-sallers">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        </>
    )
}
export default BestSallers