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
                <Sun
                    className="w-7 h-7"
                    role="button"
                    onClick={() => setTheme('light')} />
            )
        }
        else
        {
            return (
                <Moon className="w-7 h-7" role="button" onClick={() => setTheme('dark')} />
            );
        }
    }
    return (
        <header className='border-b border-gray-100 dark:border-gray-700'>
            <div className='container mx-auto px-6 sm:px-6 py-4s flex justify-between items-center'>
                <span className="font-bold text-lg tracking-tight whitespace-nowrap"><Link href='/'>Raspel</Link></span>
            </div>
            {renderThemeChanger}
        </header>
    )
}

export default Header;
