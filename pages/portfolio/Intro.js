import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Intro()
{
    return (
        <>
            <p className="leading-7 text-4xl mt-5 font-medium">
                Hello. I am Robert Wachira
            </p>
            <div className='leading-7 mt-5 text-2xl'>
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
