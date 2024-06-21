import Item from "./Item"


const ItemList = ({productos, titulo}) => {
  return (
    <div className="container">
        <h2 className="tituloProductos">{titulo}</h2>

        <div className="productos">
            {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList