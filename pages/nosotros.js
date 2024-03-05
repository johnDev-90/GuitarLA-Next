

import Layout from "@/components/layout"
import Image from "next/image"
import nosotrosImg from "../public/img/test.jpg"
import styles from "../styles/Nosotros.module.css"

const nosotros = () => {
  return (
   
        <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, guitarLA, tienda de musica '}
        >
        <main className='contendor'>
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
             <Image src={nosotrosImg} width={800}  alt="imgage nosotros" />

             <div>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, 
               mi vitae vulputate sollicitudin, ante dui placerat magna, at placerat 
               risus velit vel dui. Pellentesque habitant morbi tristique senectus et netus 
               et malesuada fames ac turpis egestas. Morbi arcu nunc, fringilla condimentum blandit 
               quis, laoreet ut purus. Nullam quis nunc in nulla cursus consequat id pretium nibh. 
              elit libero aliquet ipsum, vel lacinia erat 
               diam in enim. Sed et tincidunt augue.
               </p>

               <p>
               Sed mollis velit massa, quis pharetra nisl egestas nec. Nunc sit amet luctus massa, nec fermentum 
               felis. Sed arcu mauris, consectetur sit amet ex ut, mattis fringilla enim. Sed at ultricies neque, 
               a congue ante. Sed dignissim ipsum non auctor pellentesque. Vestibulum vulputate neque suscipit imperdiet 
               imperdiet. Ut placerat felis sed eleifend porta.
               </p>
                
             </div>
          </div>


        </main>
        </Layout>
      
   
  )
}

export default nosotros


