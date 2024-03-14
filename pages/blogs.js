import React from 'react'
import Layout from '@/components/layout'
import Blogscomponent from '@/components/Blogscomponent'
import styles from "../styles/grid.module.css"

const Blogs = ({blogs}) => {

  return (
    <div>
        <Layout 
        title={'Blogs'}
        description={'GuitarLA - Blogs'}
        >
           <main className='contenedor'>
            <h1 className=''>Blogs</h1>
            <div className={styles.grid}>
              {blogs?.map(post =>(
                
                <Blogscomponent
                key={post.id}
                post = {post}

                />
              ))}
            </div>
           </main>
            
        </Layout>
      
    </div>
  )
}


export async function getStaticProps(datos){
  const url = `${process.env.API_URL}/blogs?populate=image`
  const respuesta = await fetch(url);
  const {data: blogs} = await respuesta.json()
 
 
  return{
     props:{
      blogs
     }
  }

  
}

export default Blogs
