import Layout from "@/components/layout"
import styles from "..//styles/carrito.module.css"
import Image from "next/image"
import Articulos from "@/components/Articulos"



const carrito = ({carritto}) => {

    console.log(carritto)
  return (
   <Layout
   title={'Carrito'}
   >

<main className="contenedor">
    <h1 className="heading">Carrito</h1>

    <div className={styles.contenido}>
        <div className="contenedor">
            <h2>Articulos</h2>

            <div>
                {carritto?.map(items => (
                   <Articulos
                   key={items.id}
                   items ={items}
                   />
                ))}
            </div>
        </div>

    <aside className={styles.resumen}>
        <h3>Resumen del pedido</h3>
        <p>Total a pagar: </p>

    </aside>

    </div>


   
</main>

   </Layout>

        
      
    
  )
}

export default carrito
