
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import styles from '../../styles/guitarras.module.css'
import Image from "next/image";
import { useState } from "react";



const producto = ({guitar, agregarCarrito}) => {


  const [cantidad, setCantidad] = useState(0)

  console.log(cantidad)

   const {name, description, image, price, } = guitar[0].attributes

  function handleSubmit(e){
    e.preventDefault();

    if (!cantidad > 0) {

      alert('Aun no agregas nada al carrito')
      return;
    }

    
    const guitarraSelected = {
      id:guitar[0].id,
      imagen: image.data.attributes.formats.medium.url,
      name,
      price,
      cantidad
    }

    agregarCarrito(guitarraSelected)

  }
 

    const router = useRouter()
    console.log(guitar[0].attributes.name);
  return (
    <Layout
    title={`Guitarra ${name}`}
    >
         <div className={styles.guitarra}>
      <Image src={image.data.attributes.formats.medium.url} alt={`imagen guitarra ${name}`} width={600} height={400} />
      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description[0].children[0].text}</p>
        <p className={styles.precio}>{price}</p>

        <form
        onSubmit={ (e)=> handleSubmit(e)}
        className={styles.formulario}>
          <label htmlFor="cantidad">Cantidad</label>

          <select onChange={ (e) => setCantidad(Number(e.target.value))} id="cantidad">
            <option value={"0"}>-- Seleccione --</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>

          </select>
          <input  type="submit" value={'Agregar al carrito'} />
        </form>

      </div>
    </div>
    </Layout>
    

  )
}




export async function getServerSideProps({query: {url}}){

    console.log(url)

  

    const respuesta = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    const {data: guitar} = await respuesta.json();
   

    return {
        props:{
            guitar,
           
        }
    }
}

export default producto;
