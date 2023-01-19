import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import Link from "next/link"



const Header = () =>
{
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
            <div className='container mx-auto px-6 sm:px-6 py-4s flex justify-between items-center'>
                <span className="font-bold text-lg tracking-tight whitespace-nowrap"><Link href='/'>Raspel</Link></span>
            </div>
            <div class="absolute top-0 right-0 h-16 w-16">
                {renderThemeChanger()}
            </div>
            <div class='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
                <Link href='/' class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Home</Link>
                <Link href='/articles' class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Articles</Link>
                <Link href='/portfolio' class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Portfolio</Link>
                <Link href='/contact' class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contact</Link>
            </div>
        </header >
    )
}

export default Header;
