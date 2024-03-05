import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from '../styles/grid.module.css'

const Tienda = ({guitarras}) => {



 
  return (
    <div>
        <Layout
        title={'Tienda'}
        description={'GitarLA - Tienda de Guitarras'}
        >
        <main className="contenedor">

          <h1 className="heading">Nuestra coleccion</h1>

        <div className={styles.grid}>
        {guitarras.map(guitarra => (

              <Guitarra
                key={guitarra.id}
                guitarra = {guitarra.attributes}
              />
              ))}
        </div>
  
        </main>
        </Layout>
    </div>
  )
}



export async function getServerSideProps(){
  const url = `${process.env.API_URL}/guitars?populate=image`
  const respuesta = await fetch(url);
  const {data: guitarras} = await respuesta.json()
 

  return{
     props:{
      guitarras
     }
  }

  
}

export default Tienda;