
import Link from "next/link"
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
      <footer className={styles.footerContainer}>
         <div className={`contenedor ${styles.contenido}`}>
         <nav className={styles.navegacion}>
                <Link  href={'/'}>
                  Inicio
                </Link>

                <Link  href={'/nosotros'}>
                  Nosotros
                </Link>

                <Link href={'/blogs'}>
                  Blogs
                </Link>

                <Link href={'/tienda'}>
                  Tienda
                </Link>

              
            </nav>

            <p className={styles.copyrigth}>All rigths reserve {new Date().getFullYear()}</p>
         </div>
      </footer>
  )
}

export default Footer
