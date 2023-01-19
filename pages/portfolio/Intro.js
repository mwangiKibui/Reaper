import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Intro()
{
    return (
        <>
            <p className="text-xl sm:text-2xl">
                Welcome
            </p>
            <Typewriter
                onInit={(typewriter) =>
                {
                    typewriter.typeString('Raspel has been created.')
                        .callFunction(() =>
                        {
                            console.log('String typed out!');
                        })
                        .pauseFor(100)
                        .deleteAll()
                        .callFunction(() =>
                        {
                            console.log('All strings were deleted');
                        })
                        .typeString('Raspel has been built using Next.js')
                        .pauseFor(100)
                        .deleteAll()
                        .typeString('This is an ongoing project.')
                        .pauseFor(100)
                        .deleteAll()
                        .start();
                }}
            />

        </>
    )
}
