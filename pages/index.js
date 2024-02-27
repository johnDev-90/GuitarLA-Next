import Link from "next/link";
import Layout from "@/components/layout";
export default function Home() {

  console.log('hola')
  return (

    <>
   <Layout
   title={'Inicio'}
   description={'Blog de musica, venta de guitarra y mas'}
   >
   <h1>Hola mundo </h1>
    <Link href={'/nosotros'}>Nosotros</Link>
   </Layout>
    
    </>
  
  );
}
