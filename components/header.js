import Image from 'next/image'
import logo from '../public/img/vercel.png'
import Link from 'next/link'


const Header = () => {
  return (
    <header>
        <div className="contenedor">

            <Image src={logo.src} alt="Logo" width={100} height={40} />

            <nav>
                <Link href={'/'}>
                  Inicio
                </Link>

                <Link href={'/nosotros'}>
                  Nosotros
                </Link>

                <Link href={'/blogs'}>
                  Blogs
                </Link>

             
            </nav>

        </div>
    </header>
  )
}

export default Header
