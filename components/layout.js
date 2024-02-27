import Head from "next/head"

const Layout = ({children, title = '', description = ''}) => {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
       <h1>Desde el Lay out</h1>
      {children}
    </>
  )
}

export default Layout
