import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Intro()
{
    return (
        <>
            <p className="text-xl sm:text-2xl absolute left-0 top-40 h-16 w-16">
                Welcome
            </p>
            <div className='absolute left-0 top-55 h-16 w-70'>
                <Typewriter
                    onInit={(typewriter) =>
                    {
                        typewriter.typeString('Raspel has been created.')
                            .pauseFor(100)
                            .deleteChars(8)
                            .typeString(' built using Next.js')
                            .pauseFor(100)
                            .deleteAll()
                            .typeString('This is an ongoing project.')
                            .pauseFor(100)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        loop: true
                    }}
                />
            </div>

        </>
    )
}
