
import Link from "next/link"
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
      <footer className={styles.footerContainer}>
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

            <p>All rigths reserve {new Date().getFullYear()}</p>
      </footer>
  )
}

export default Footer
