import Item from "../Item/Item"
import style from "./css/style.css"

const ItemList =({products}) => {
  return (
    <div className="productos" >
        {products.map(prod =><Item key={prod.id}{...prod}/>)} 
    </div>
  );
}

export default ItemList