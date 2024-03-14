
import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from "../styles/grid.module.css"
import Blogscomponent from "@/components/Blogscomponent";
import Curso from "@/components/curso";


export default function Home({guitarras, blogs, cursos}) {

  console.log(cursos)
   
  
  console.log(guitarras)
  console.log(blogs)
 
  return (

    <>
   <Layout
   title={'Inicio'}
   description={'Blog de musica, venta de guitarra y mas'}
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

    
    <Curso
      cursos = {cursos}
    />


   <section className="contenedor">
   <h1 className='heading'>Blogs</h1>
            <div className={styles.grid}>
              {blogs?.map(post =>(
                
                <Blogscomponent
                key={post.id}
                post = {post}

                />
              ))}
            </div>
      
   </section>
   </Layout>
    
    </>
  
  );
}

export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitars?populate=image`
  const urlBlogs = `${process.env.API_URL}/blogs?populate=image`
  const urlCurso = `${process.env.API_URL}/course?populate=image`

  const [resGuitarras, resBlogs, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlBlogs),
    fetch(urlCurso)
  ])

  const [{data: guitarras}, {data: blogs}, {data: cursos}] = await Promise.all([
    resGuitarras.json(),
    resBlogs.json(),
    resCurso.json()
  ])


  return{
    props:{
      guitarras,
      blogs,
      cursos

    }
  }
}
