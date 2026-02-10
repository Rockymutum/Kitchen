"use client";

import { useCart } from "@/context/CartContext";

export default function OrderNow() {
    const { addItem } = useCart();

    const menuItems = [
        {
            id: "pot-pie",
            name: "Chicken Pot Pie Box",
            description: "With side salad & dressing",
            price: 14.5,
            calories: 450,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQr6F-9Job3p-iEiCfQegZN9ybC2hXCb5SfLeE8ryxz7UbyLnlKdpEsB_qABryZkwGKwLSrzeBUlc-o52n0uqr2agzU-3tNXovU3WMWAt9DLdI4QV_4HcSK4h2OqJDNga-cgkUAV6NQvxZh5EcZStjoqDjTwZ7PRNJ_IwIN9ouyWH-tAoldPM7Y0SRFhG5nPthJizpH2iYhHXmeSla6Bu4gR0HrDYAqEsjALZ545qfZsKeOHMxQNviq9d0IFO1Y0lzS7lk2nuk90",
        },
        {
            id: "lentil-bowl",
            name: "Spiced Lentil Bowl",
            description: "Vegan protein powerhouse",
            price: 9.0,
            calories: 320,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBRqPvpLdaGt89sOTJtgtQ-YruitYX-6b5YAz-bWW1Xd8IRnXVYcN7ZCcWQUELjRW8KEgFE8vpRfktVuzB-rTN9j2hmPqR_tOfJQYRQF1vd1olgerjv7zfCQ-cpfJ_qXsY9bOXX8ldXH77rdrjUdcP3LNTXpFVmcFp0oawho2UW1EJwK49NZQvkiwzeRXqm3DbLYrQe9BVFO-aZxhkJgp4Kb5tOzXJIMoKnAQPYgX3AoZNRehhTaH-XUHV22MQHLZ-vIa40Bg26Dzg",
        },
        {
            id: "honey-roast",
            name: "Honey Glazed Roast",
            description: "Family size portion",
            price: 18.0,
            calories: 600,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBEX7RYuRW-QLEI-lhjcAKNv4ARs17BYmyRKAojm6Ma1i1chC4Mv-kFqyFBBHdNSnVWSFapjAT9S_W8AoNyCfoL_SVZ81XNw7LMC8OqYQi0Pf76w2bd-r1i6WXSZE4JewBLhEPdTHdgY41YGSIjXHURyPUCK5L8vwbDMTlXSj0kxOAgboQHBdXaaJG2nB-hD7Fl04YJRpGe6kUS9bGGATTDHsqK0dH5-w7Vb9KKhavulT7az3al0G7EbHr4N56pKk0xDjDXxc1cWEE",
        },
        {
            id: "sourdough",
            name: "Artisan Sourdough",
            description: "Fermented 48 hours",
            price: 6.5,
            calories: 210,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuChAEsN53T4XPRCs8AfvXKTPhrwRYeJ8c_9jxAGiirVrUCp6nZHX-TI8GjgSrhqZMC33sCEP1U64LVVGFriNimOOzo70gqQErva91ovXKDqD0YC2HZe4Onbjx8jBbfMhZMtvrWp_uzAWW0oiDCj1bzdQCR85b7moOL2sB5pVgFELbDmjh2ssS0zKeUIstBprUr_LT0Fl_L4fn-fWDAmpBb2PEqos9EmhQIE7y_r7tOZcEPPh9VIh_hL_K1LrRapxvuvtV1fPe2HTow",
        },
    ];

    const handleAddToCart = (item: typeof menuItems[0]) => {
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
            <div className="flex items-center justify-between px-4 pt-8 pb-4">
                <h2 className="text-gray-900 text-xl font-bold tracking-tight">
                    Order Now
                </h2>
                <div className="flex gap-2">
                    <button className="text-primary text-sm font-semibold">
                        See Menu
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-4 pb-4">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white/5 rounded-2xl overflow-hidden border border-white/5 flex flex-col group"
                    >
                        <div
                            className="relative aspect-[4/3] bg-cover bg-center"
                            style={{
                                backgroundImage: `url("${item.image}")`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold text-white flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-[12px] text-primary fill-current">
                                    local_fire_department
                                </span>
                                <span>{item.calories} kcal</span>
                            </div>
                        </div>
                        <div className="p-3 flex flex-col flex-1">
                            <h3 className="font-bold text-sm text-gray-900 leading-tight mb-1 line-clamp-1">
                                {item.name}
                            </h3>
                            <p className="text-[10px] text-gray-400 mb-3 line-clamp-1">
                                {item.description}
                            </p>
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-gray-900 font-bold">
                                    ₹{item.price.toFixed(2)}
                                </span>
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="bg-gray-100 text-gray-900 hover:bg-primary hover:text-white p-2 rounded-lg transition-colors shadow-sm active:scale-95"
                                >
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
