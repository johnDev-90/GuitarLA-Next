
import Image from "next/image"

const Articulos = ({items}) => {
    const {name, imagen, price, cantidad} = items

    console.log(imagen)
  return (
    <div>
       <Image src={items.imagen} width={200} height={100} alt={items.name} />
       <h1>{name}</h1>
       <p>{price}</p>
       <p>{cantidad}</p>

    </div>
  )
}

export default Articulos
