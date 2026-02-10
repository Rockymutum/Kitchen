"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StoryPage() {
    return (
        <main className="min-h-screen bg-stone-50 pb-24">
            {/* Hero Section */}
            <header className="relative h-[70vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDntsuGtD5fRIiuQxVuD9D0xk_nhr8AHza1lG0u3gEKvWFZAsz46-JlWk_KvIXMYI0tfFI8gKm-bp6_PP5iwBngzZ1IMggxveZiALjR0X39eQAiADBmCXc-YhSJSiPAyHBeBczfEX906lTwunemKqoRkGqhWjhBX2ntuRci2bFfNBfb8ybTkXzrpeWyMXXPr2OEKEQKkDcILFC1ef9WQ9ntvtwxosR7NhTlTTo3Hw8_xCrcHnlBrile7RRTNwxbDPE0oShcleKTZjs")',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-50" />

                    {/* Back Button */}
                    <Link
                        href="/"
                        className="absolute top-6 left-6 z-20 size-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors text-white"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 pb-16 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-orange-600 text-white rounded-full">
                            Featured Dish
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tight leading-none mb-4">
                            Mom&apos;s Story: <br />
                            <span className="text-orange-700">Spices of Home</span>
                        </h1>
                        <p className="max-w-xl text-lg font-medium text-stone-600">
                            A culinary journey through generations, served on a single plate.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Narrative Content */}
            <article className="px-6 md:px-12 max-w-4xl mx-auto space-y-16">

                {/* Chapter 1 */}
                <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                    <div className="md:sticky md:top-24">
                        <h2 className="text-2xl font-bold text-stone-900 mb-2">The Beginning</h2>
                        <div className="h-1 w-12 bg-orange-500 rounded-full" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-stone-700 leading-relaxed font-serif text-lg"
                    >
                        <p>
                            It started in a small kitchen in 1984.<br />
                            Where roasted garlic meets simmering tomatoes.<br />
                            It wasn't just lunch—it was a language.
                        </p>
                        <p>
                            Every Sunday morning, a ritual begins.<br />
                            Pestle hitting mortar.<br />
                            Spices measured by feeling, not spoons.<br />
                            "Listen to the pot," Mom would say.
                        </p>
                    </motion.div>
                </section>

                {/* Visual Intermission */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRqPvpLdaGt89sOTJtgtQ-YruitYX-6b5YAz-bWW1Xd8IRnXVYcN7ZCcWQUELjRW8KEgFE8vpRfktVuzB-rTN9j2hmPqR_tOfJQYRQF1vd1olgerjv7zfCQ-cpfJ_qXsY9bOXX8ldXH77rdrjUdcP3LNTXpFVmcFp0oawho2UW1EJwK49NZQvkiwzeRXqm3DbLYrQe9BVFO-aZxhkJgp4Kb5tOzXJIMoKnAQPYgX3AoZNRehhTaH-XUHV22MQHLZ-vIa40Bg26Dzg")',
                        }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-6 left-6 text-white font-medium italic">
                        Fresh ingredients, hand-picked daily.
                    </div>
                </motion.div>

                {/* Chapter 2 */}
                <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                    <div className="md:sticky md:top-24">
                        <h2 className="text-2xl font-bold text-stone-900 mb-2">The Secret</h2>
                        <div className="h-1 w-12 bg-orange-500 rounded-full" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-stone-700 leading-relaxed font-serif text-lg"
                    >
                        <p>
                            The secret isn't in the sauce.<br />
                            It's in the patience.
                        </p>
                        <p>
                            Twelve hours of slow roasting.<br />
                            Vine-ripened San Marzano tomatoes.<br />
                            Basil plucked at dawn.<br />
                            A labor of love that refuses to cut corners.
                        </p>
                    </motion.div>
                </section>



            </article>

            {/* Footer CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-stone-200 z-50">
                <div className="max-w-md mx-auto flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-stone-500 font-bold uppercase">Price</span>
                        <span className="text-xl font-black text-primary">₹18.50</span>
                    </div>
                    <Link
                        href="/"
                        className="flex-1 bg-primary text-white text-center py-3 rounded-xl font-bold hover:bg-primary/90 transition-transform active:scale-95"
                    >
                        Order Now
                    </Link>
                </div>
            </div>
        </main>
    );
}
