
import Link from "next/link"
import Layout from "@/components/layout"

const nosotros = () => {
  return (
    <div>
        <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, guitarLA, tienda de musica '}
        >
        <h1>Nosotros</h1>
        <Link href={'/'}>Home</Link>
        </Layout>
      
    </div>
  )
}

export default nosotros


