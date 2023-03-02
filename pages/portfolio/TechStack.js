export default function TechStack()
{
    return (
        <section className='container mx-auto md:px-20 py-16 items-center justify-center'>
            <p className="text-4xl gap-5 mb-4 font-medium leading-7">TechStacks</p>
            <h3 className="text-center text-2xl mt-8">
                This is the list of the TechStack that I have experience in:
            </h3>
            <div className="grid grid-cols-3 gap-8 group relative mt-12 items-center justify-center pl-44 sm:pl-20">
                <div>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                        className="h-28"
                        href=''
                    />
                    <p className="text-2xl mt-4 pr-48 sm:pr-20">Java</p>
                </div>
                <div>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                        className="h-28"
                        href='https://nextjs.org/'
                    />
                    <p className="text-2xl mt-4 pr-44 sm:pr-20">Next.js</p>
                </div>
                <div>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                        className="h-28"
                        href='https://kubernetes.io/'
                    />
                    <p className="text-2xl mt-4 pr-44 sm:pr-20">Kubernetes</p>
                </div>
                <div>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        className="h-28"
                        href='https://nodejs.org/en/'
                    />
                    <p className="text-2xl mt-4 pr-44 sm:pr-20">Node.js</p>
                </div>
                <div>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        className="h-28"
                        href='https://www.mongodb.com/'
                    />
                    <p className="text-2xl mt-4 pr-44 sm:pr-20">MongoDB</p>
                </div>
                <div>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                        className="h-28"
                        href='https://graphql.org/'
                    />
                    <p className="text-2xl mt-4 pr-44 sm:pr-20">GraphQL</p>
                </div>

            </div>
        </section>
    )
}
