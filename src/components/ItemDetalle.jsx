

const ItemDetalle = ({item}) => {
  return (
    <div className="container">
        <div className="detalleProductos">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">{item.categoria}</p>
                <p className="precio">${item.precio}</p>
            </div>

        </div>

    </div>
  )
}

export default ItemDetalle