
import { useRouter } from "next/router";


const producto = ({data}) => {

    const {description, name, price, image} = data
    const paragraphText = description[0].children[0].text;
 

    const router = useRouter()
    console.log(router);
  return (
    <div className={styles.guitarra}>
    <Image src={image.data.attributes.formats.medium.url} alt={`imagen guitarra ${name}`} width={600} height={400} />
    <div className={styles.contenido}>
      <h3>{name}</h3>
      <p className={styles.descripcion}>{paragraphText}</p>
      <p className={styles.precio}>{price}</p>
      <Link className={styles.enlace}>
       Agregar al carrito
      </Link>
    </div>
  </div>
  )
}

export async function getServerSideProps({query:{url}}){


    console.log(url)

 
    const respuesta = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    const {data} = await respuesta.json();

  console.log(data)

    return {
        props:{
            data
        }
    }
}

export default producto;
