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
            <div className='container m-auto px-6 sm:px-6 py-4s flex justify-between items-center'>
                <span className="self-center whitespace-nowrap text-xl font-semibold pt-5"><Link href='/'>Raspel</Link></span>
                <div class='text-sm font-medium items-start text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
                    <nav>
                        <Link href='/' className={`inline-block p-4 ${router.pathname == "/" ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Home</Link>
                        <Link href='/node.js' className={`inline-block p-4 ${router.pathname == "/node.js" ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Node.js</Link>
                        <Link href='/java' className={`inline-block p-4 ${router.pathname == "/java" ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Java</Link>
                        <Link href='/portfolio' className={`inline-block p-4 ${router.pathname == "/portfolio" ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Portfolio</Link>
                    </nav>
                </div>
            </div>
            <div class="absolute top-0 right-0 pt-5 h-10 w-16">
                {renderThemeChanger()}
            </div>

        </header >
    )
}

export default Header;
