import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '@heroicons/react/solid'
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
                <Sun className="w-7 h-7" role="button" onClick={() => setTheme('light')} />
            )
        }
        else
        {
            return (
                <Moon className="w-7 h-7" role="button" onClick={() => setTheme('dark')} />
            );
        }
    };
    return (
        <header className='border-b border-gray-100 dark:border-gray-700'>
            <div className="container mx-auto px-4 sm:px-6 py-4">
                <p>
                    {/* <image src="/raspel.ico" className='flex items-center space-x-1 text-green-600'></image> */}
                    <span className="font-bold text-lg tracking-tight whitespace-nowrap"><Link href='/'>Raspel</Link></span>
                </p>
            </div>
            <div className='container flex justify-between items-center'>
                {renderThemeChanger}
            </div>
        </header>
    )
}

export default Header;
