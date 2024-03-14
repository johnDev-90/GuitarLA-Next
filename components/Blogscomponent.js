import Image from "next/image"
import Link from "next/link"
import styles from "../styles/blog.module.css"
import { dateFormater } from "@/utils/helpers"


const Blogscomponent = ({post}) => {

  const {Title, contenido, image, url, publishedAt} = post.attributes

  console.log(image.data.attributes.formats.medium.url)
  return (
    <article >

      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen de ${Title}`} />

      <div className={styles.contenido}>
        <h3>{Title}</h3>
        <p className={styles.fecha}>{dateFormater(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`/blogs/${url}`}>
         Leer Post
        </Link>
      </div>
    </article>
  )
}

export default Blogscomponent
