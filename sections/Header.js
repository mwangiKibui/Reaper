import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import Link from "next/link"
import { useRouter } from 'next/router'



const Header = () =>
{
    const router = useRouter();

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() =>
    {
        setMounted(true)
    }, [])

    const renderThemeChanger = () =>
    {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark')
        {
            return (
                <SunIcon
                    className="w-7 h-7"
                    role="button"
                    onClick={() => setTheme('light')} />
            )
        }
        else
        {
            return (
                <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme('dark')} />
            );
        }
    }
    return (
        <header className='border-b border-gray-100 dark:border-gray-700'>
            <div className='xl:container xl:mx-auto flex flex-col'>
                <div className='container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center'>
                    <span className="flex title-font font-medium items-center mb-4 md:mb-0 ml-3 text-2xl"><Link href='/'>Raspel</Link></span>
                    <div className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
                        <nav >
                            <Link href='/' className={`inline-block p-4 ${router.pathname == "/" ? "text-blue-600 text-xl border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 text-xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Home</Link>
                            <Link href='/frontend' className={`inline-block p-4 ${router.pathname == "/frontend" ? "text-blue-600 text-xl border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 text-xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>FrontEnd</Link>
                            <Link href='/backend' className={`inline-block p-4 ${router.pathname == "/backend" ? "text-blue-600 text-xl border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 text-xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>BackEnd</Link>
                            <Link href='/it' className={`inline-block p-4 ${router.pathname == "/it" ? "text-blue-600 text-xl border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 text-xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>IT</Link>
                            <Link href='/portfolio' className={`inline-block p-4 ${router.pathname == "/portfolio" ? "text-blue-600 text-xl border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 text-xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Portfolio</Link>
                        </nav>
                    </div>
                </div>
                <div className='absolute top-0 right-0 pt-5 h-10 w-56'>
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="absolute top-0 right-0 pt-5 h-10 w-16">
                    {renderThemeChanger()}
                </div>
            </div>

        </header >
    )
}

export default Header;
