import Link from "next/link";

export default function FeaturedDish() {
    return (
        <div className="@container px-4 pb-2 pt-0">
            <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-2xl min-h-[320px] shadow-2xl relative"
                aria-label="Large plate of steaming homemade lasagna with fresh basil"
                style={{
                    backgroundImage:
                        'linear-gradient(0deg, rgba(34, 21, 16, 0.9) 0%, rgba(34, 21, 16, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDntsuGtD5fRIiuQxVuD9D0xk_nhr8AHza1lG0u3gEKvWFZAsz46-JlWk_KvIXMYI0tfFI8gKm-bp6_PP5iwBngzZ1IMggxveZiALjR0X39eQAiADBmCXc-YhSJSiPAyHBeBczfEX906lTwunemKqoRkGqhWjhBX2ntuRci2bFfNBfb8ybTkXzrpeWyMXXPr2OEKEQKkDcILFC1ef9WQ9ntvtwxosR7NhTlTTo3Hw8_xCrcHnlBrile7RRTNwxbDPE0oShcleKTZjs")',
                }}
            >
                <div className="flex flex-col p-6">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded w-max mb-2">
                        Featured Dish
                    </span>
                    <p className="text-white tracking-tight text-3xl font-bold leading-tight mb-2">
                        Mom&apos;s Story: Spices of Home
                    </p>
                    <p className="text-gray-300 text-sm font-normal leading-relaxed line-clamp-2 mb-4">
                        Cooking with love since 1984. Every spice tells a story of home,
                        passed down through generations.
                    </p>
                    <Link href="/story">
                        <button className="bg-primary text-white font-bold text-sm py-2.5 px-6 rounded-lg w-max hover:bg-primary/90 transition-colors cursor-pointer">
                            Read Full Story
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
