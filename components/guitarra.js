import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/guitarras.module.css'

const Guitarra = ({guitarra}) => {
 
 const {description, name, price, image, url} = guitarra

 const paragraphText = description[0].children[0].text;
 console.log(image.data.attributes.formats.small.url)


  return (
    <div className={styles.guitarra}>
      <Image src={image.data.attributes.formats.medium.url} alt={`imagen guitarra ${name}`} width={600} height={400} />
      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{paragraphText}</p>
        <p className={styles.precio}>{price}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>
        Ver producto
        </Link>
      </div>
    </div>
  )
}

export default Guitarra

