import React from "react"
import { SocialIcon } from 'react-social-icons'

export default function Footer()
{
    return (
        <>
            <footer className="px-4 sm:px-6 py-6 flex justify-between sticky bottom-0">
                <p className="items-center justify-center text-xl text-gray-500 align-middle">
                    © {new Date().getFullYear()} Raspel.
                </p>
                <div className="flex flex-row items-center">
                    <SocialIcon
                        url='https://twitter.com/robawn'
                        fgColor="gray"
                        bgColor="transparent"
                    />
                    <SocialIcon
                        url='https://github.com/Robert-Wachira'
                        fgColor="gray"
                        bgColor="transparent"
                    />
                </div>

            </footer>
        </>
    )

}
