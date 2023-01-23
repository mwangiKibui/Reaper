import Layout from "../../sections/Layout";
import Link from "next/link"
// import { getSortedPostsData } from '../../lib/posts';

export default function Node({ posts })
{
    return (
        <>
            <Layout pageMeta={{
                title: 'Node.js Articles',
                description: 'Node.js Articles'
            }}>

                <div class="pt-20">
                    <h1 class="text-center text-2xl font-bold text-gray-800">Node.js Articles</h1>
                </div>

                <section x-data="xData()" class="bg-gray-100 dark:bg-gray-900 py-10 px-12">


                    <div
                        class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <template x-for="post in posts">


                            <div
                                class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
                                x-for="(post, index) in posts">


                                <a _href="link" class="cursor-pointer">
                                    <figure>

                                        <img
                                            src="post.image + '?auto=format&fit=crop&w=400&q=50'"
                                            class="rounded-t h-72 w-full object-cover" />

                                        <figcaption class="p-4">


                                            <p
                                                class="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                                                x-text="post.title">


                                            </p>


                                            <small
                                                class="leading-5 text-gray-500 dark:text-gray-400"
                                                x-text="post.description">
                                            </small>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </template>
                    </div>
                </section>

                <script>
                    function xData() {
                        /**
                         * Shuffle an array
                         * @param {Array} array
                         * @source https://stackoverflow.com/a/2450976/6940144
                         */
                        function shuffle(array)
                        {
                            let currentIndex = array.length,
                                randomIndex;

                            // While there remain elements to shuffle.
                            while (currentIndex != 0)
                            {
                                // Pick a remaining element.
                                randomIndex = Math.floor(Math.random() * currentIndex);
                                currentIndex--;

                                // And swap it with the current element.
                                [array[currentIndex], array[randomIndex]] = [
                                    array[randomIndex],
                                    array[currentIndex],
                                ];
                            }

                            return array;
                        }
                    }

                    const posts = [
                    {`
                            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
                            title: "5 Easy Tips That Will Make Your Latte Art Flourish",
                            description:
                            "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
                        `},
                    {`
                            image: "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed",
                        title: "Coffee Roasting Basics: Developing Flavour by Roasting",
                        description:
                        "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
                `},
                    {`
                            image:
                        "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
                        title: "Latte vs. Flat White - What is the Difference?",
                        description:
                        "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
                `},
                    {`
                            image:
                        "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
                        title: "Creating the Perfect Espresso Recipe",
                        description:
                        "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
                `},
                    ];
                    };

                    return {
                        posts: [
                    ...shuffle(posts),
                    ...shuffle(posts),
                    ...shuffle(posts),
                    ...shuffle(posts),
                    ...shuffle(posts),
                    ],
            };
        }
                </script>


            </Layout >
        </>
    )
}
