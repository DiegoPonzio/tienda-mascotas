import Head from "next/head";

export default function PageLayout({children, title = 'Componente'}){

    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="componente recetas - Diego Ruiz Ponzio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>🐶 Tienda de mascotas 😸</header>
            <main>{children}</main>
            <style jsx>{`
            
                header{
                    padding: 20px;
                }

            `}</style>
        </>
    )

}