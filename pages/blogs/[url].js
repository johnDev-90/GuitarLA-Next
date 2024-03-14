
import Layout from "@/components/layout";
import styles from "../../styles/blog.module.css"
import { dateFormater } from "@/utils/helpers";
import Image from "next/image";

const Blog = ({blogs}) => {
  const {Title, image, publishedAt, contenido} = blogs[0].attributes;
  return (
    <Layout
    title={`Blog - ${Title} `}
    >
        <article className={`${styles.post} ${styles['mt-3']}`} >
            <Image src={image.data.attributes.url} width={1000} height={400} alt={`Imagen de ${Title}`} />
              <div className={styles.contenido}>
                <h3>{Title}</h3>
                <p className={styles.fecha}>{dateFormater(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
        
              </div>
              </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}){
   const respuesta = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=image`)
   const {data: blogs} = await respuesta.json()


  
 return{
  props:{
    blogs,
  }
 }

}

export default Blog;
