import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Intro()
{
    return (
        <>
            <p className="text-2xl sm:text-2xl absolute left-0 top-40 h-16">
                Hello. I am Robert Wachira
            </p>
            <div className='absolute left-0 mt-5 h-16 w-70 text-xl'>
                <Typewriter
                    onInit={(typewriter) =>
                    {
                        typewriter.typeString('I am an aspiring Back-end developer.')
                            .pauseFor(100)
                            .deleteAll()
                            .typeString('I also have skills on the Front-end sector')
                            .pauseFor(100)
                            .deleteAll()
                            .typeString('Below is an overview of my journey')
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
