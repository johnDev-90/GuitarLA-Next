import Image from 'next/image'
import logo from '../public/img/vercel.png'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import carritoImg from "../public/img/carrito.png"


const Header = () => {

    const [route, setRoute] = useState('');

    const router = useRouter()

   useEffect(() => {

    setRoute(router.pathname)

   },[router])

    


  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>

           <Link href={'/'}>
           <Image src={logo.src} alt="Logo" width={100} height={40} />
           </Link>

            <nav className={styles.navegacion}>
                <Link className={route === '/'? styles.selected: ''} href={'/'}>
                  Inicio
                </Link>

                <Link className={route === '/nosotros'? styles.selected: ''} href={'/nosotros'}>
                  Nosotros
                </Link>

                <Link className={route === '/blogs'? styles.selected: ''} href={'/blogs'}>
                  Blogs
                </Link>

                <Link className={route === '/tienda'? styles.selected: ''} href={'/tienda'}>
                  Tienda
                </Link>

                <Link href={'/carrito'}>
                     <Image src={carritoImg} width={25}  />
                
                </Link>

             
            </nav>

        </div>
    </header>
  )
}

export default Header
