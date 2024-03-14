import styles from "../styles/curso.module.css"



const Curso = ({cursos}) => {

    const {content, image, title} = cursos.attributes;

    console.log(image.data.attributes.url)
  return (
    <section className={`${styles.cursos} curso`}>

        <style jsx>{
            `
            .curso {
                background-image: linear-gradient(to right, rgb(000/.65), rgb(000/.7)), url(${image.data.attributes.url});
            }
            `
        }

        </style>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className="heading">{title}</h2>
                <p>{content[0].children[0].text}</p>
            </div>
        </div>
      
    </section>
  )
}

export default Curso
