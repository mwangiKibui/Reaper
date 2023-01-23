import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
// import useRouter from 'next/router'

const Layout = ({ children, pageMeta }) =>
{
    // const router = useRouter();

    const meta = {
        title: 'Raspel',
        description: 'Visit Raspel to gain more information on how to implement various functions and use various languages in your coding career.',
        type: 'website',
        ...pageMeta,
    }
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <meta property="og:url" content={`http://localhost:3000${router.asPath}`} /> */}
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content={"A Coding Skill Guide"} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <link rel="icon" href="raspel2.ico" />
            </Head>

            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 sm:px-6">{children}</main>
                <div className='absolute inset-x-0 bottom-0 h-16'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout;
