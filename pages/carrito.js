import Layout from "@/components/layout"
import styles from "../styles/carrito.module.css"
import Image from "next/image"
import { formatearDinero } from "@/utils/helpers"
import { useEffect, useState } from "react"





const carrito = ({carrito, actualizarCantidad}) => {
    const [totalApagar, setTotalPagar] = useState(0)
   
   useEffect(() => {
    const calculo = carrito.reduce( (acumulador, producto) => acumulador + (producto.cantidad * producto.price),0 )
    setTotalPagar(calculo)

   }, [carrito])



   console.log(totalApagar)
  

  return (
   <Layout
   title={'Carrito'}
   >



<main className="contenedor">
    <h1 className="heading">Carrito</h1>

    <div className={styles.contenido}>
        <div className={styles.carrito}>
            <h2>Articulos</h2>
        {carrito.length === 0? 'Carrito esta vacio': (

            carrito.map(producto =>(

                <div key={producto.id} className={styles.producto}>
                    <div>
                        <Image src={producto.imagen} width={250} height={100} alt={producto.name} />
                    </div>
                    <div>
                        <p className={styles.name}>{producto.name}</p>

                    <div className={styles.cantidad}>
                        <p>Cantidad</p>
                        <select 
                        className={styles.select}
                        onChange={(e) => actualizarCantidad({
                            id:producto.id,
                            cantidad : e.target.value
                        })}
                        defaultValue={producto.cantidad}
                        >
                        <option value={"0"}>-- Seleccione --</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        </select>



                    </div>

                        <p className={styles.precio}><span>{formatearDinero(producto.price)}</span></p>
                        <p className={styles.subtotal}>Subtotal: <span>{formatearDinero(producto.cantidad * producto.price)}</span></p>
                    </div>


                </div>

                
            ))
        )}
      
            
        </div>

    <aside className={styles.resumen}>
        <h3>Resumen del pedido</h3>
        <p>Total a pagar: {formatearDinero(totalApagar)} </p>

    </aside>

    </div>


   
</main>

   </Layout>

        
      
    
  )
}

export default carrito
