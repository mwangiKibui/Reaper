import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'
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
                {/* <div className="p-2 w-full pt-2 mt-8 border-t border-gray-200 text-center bottom-0 position:relative">
                    <span className="inline-flex bottom-0 position:relative ">
                        <a className="ml-4 text-gray-500 ">
                            <Link href='https://twitter.com/robawn'>
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                        </a>
                        <a className="ml-4 text-gray-500">
                            <Link href="https://github.com/Robert-Wachira">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" height="27">
                                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </Link>
                        </a>
                    </span>

                </div> */}
                <Footer />
            </div>
        </>
    )
}

export default Layout;
