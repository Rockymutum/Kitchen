"use client";

import { useCart } from "@/context/CartContext";

export default function BestSellers() {
    const { addItem } = useCart();

    const bestSellers = [
        {
            id: "sourdough-bs",
            name: "Mom&apos;s Sourdough",
            description: "Fermented for 48 hours",
            price: 6.5,
            rating: 4.9,
            reviews: 234,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuChAEsN53T4XPRCs8AfvXKTPhrwRYeJ8c_9jxAGiirVrUCp6nZHX-TI8GjgSrhqZMC33sCEP1U64LVVGFriNimOOzo70gqQErva91ovXKDqD0YC2HZe4Onbjx8jBbfMhZMtvrWp_uzAWW0oiDCj1bzdQCR85b7moOL2sB5pVgFELbDmjh2ssS0zKeUIstBprUr_LT0Fl_L4fn-fWDAmpBb2PEqos9EmhQIE7y_r7tOZcEPPh9VIh_hL_K1LrRapxvuvtV1fPe2HTow",
        },
        {
            id: "honey-roast-bs",
            name: "Honey Glazed Roast",
            description: "Slow-cooked perfection",
            price: 18.0,
            rating: 4.8,
            reviews: 189,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBEX7RYuRW-QLEI-lhjcAKNv4ARs17BYmyRKAojm6Ma1i1chC4Mv-kFqyFBBHdNSnVWSFapjAT9S_W8AoNyCfoL_SVZ81XNw7LMC8OqYQi0Pf76w2bd-r1i6WXSZE4JewBLhEPdTHdgY41YGSIjXHURyPUCK5L8vwbDMTlXSj0kxOAgboQHBdXaaJG2nB-hD7Fl04YJRpGe6kUS9bGGATTDHsqK0dH5-w7Vb9KKhavulT7az3al0G7EbHr4N56pKk0xDjDXxc1cWEE",
        },
        {
            id: "lentil-soup-bs",
            name: "Spiced Lentil Soup",
            description: "Vegan & protein-rich",
            price: 9.0,
            rating: 4.7,
            reviews: 156,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBRqPvpLdaGt89sOTJtgtQ-YruitYX-6b5YAz-bWW1Xd8IRnXVYcN7ZCcWQUELjRW8KEgFE8vpRfktVuzB-rTN9j2hmPqR_tOfJQYRQF1vd1olgerjv7zfCQ-cpfJ_qXsY9bOXX8ldXH77rdrjUdcP3LNTXpFVmcFp0oawho2UW1EJwK49NZQvkiwzeRXqm3DbLYrQe9BVFO-aZxhkJgp4Kb5tOzXJIMoKnAQPYgX3AoZNRehhTaH-XUHV22MQHLZ-vIa40Bg26Dzg",
        },
    ];

    const handleAddToCart = (item: typeof bestSellers[0]) => {
        addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description,
        });
    };

    return (
        <>
            <div className="flex items-center justify-between px-4 pt-6 pb-4">
                <h2 className="text-gray-900 text-xl font-bold tracking-tight">
                    Best Sellers
                </h2>
                <span className="text-primary text-xs font-medium">Top Rated</span>
            </div>
            <div className="px-4 space-y-4 pb-4">
                {bestSellers.map((item) => (
                    <div
                        key={item.id}
                        className="flex gap-4 p-3 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group"
                    >
                        <div
                            className="size-20 shrink-0 bg-cover bg-center rounded-xl"
                            style={{
                                backgroundImage: `url("${item.image}")`,
                            }}
                        ></div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-base line-clamp-1">{item.name}</h4>
                            <p className="text-xs text-gray-400 mb-2">{item.description}</p>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">
                                        star
                                    </span>
                                    <span className="text-xs font-bold">{item.rating}</span>
                                    <span className="text-xs text-gray-500">
                                        ({item.reviews})
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                            <span className="text-primary font-bold text-sm">
                                ₹{item.price.toFixed(2)}
                            </span>
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all group-hover:scale-110"
                            >
                                <span className="material-symbols-outlined text-base">add</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
