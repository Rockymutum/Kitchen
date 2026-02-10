"use client";

import { useCart } from "@/context/CartContext";

interface SpecialItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const SPECIALS_DATA: SpecialItem[] = [
    {
        id: 1,
        name: "Auntie's Pot Pie",
        description: "Creamy chicken & garden veggies",
        price: 14.50,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQr6F-9Job3p-iEiCfQegZN9ybC2hXCb5SfLeE8ryxz7UbyLnlKdpEsB_qABryZkwGKwLSrzeBUlc-o52n0uqr2agzU-3tNXovU3WMWAt9DLdI4QV_4HcSK4h2OqJDNga-cgkUAV6NQvxZh5EcZStjoqDjTwZ7PRNJ_IwIN9ouyWH-tAoldPM7Y0SRFhG5nPthJizpH2iYhHXmeSla6Bu4gR0HrDYAqEsjALZ545qfZsKeOHMxQNviq9d0IFO1Y0lzS7lk2nuk90"
    },
    {
        id: 2,
        name: "Spiced Lentil Soup",
        description: "Hearty, vegan, and soul-warming",
        price: 9.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRqPvpLdaGt89sOTJtgtQ-YruitYX-6b5YAz-bWW1Xd8IRnXVYcN7ZCcWQUELjRW8KEgFE8vpRfktVuzB-rTN9j2hmPqR_tOfJQYRQF1vd1olgerjv7zfCQ-cpfJ_qXsY9bOXX8ldXH77rdrjUdcP3LNTXpFVmcFp0oawho2UW1EJwK49NZQvkiwzeRXqm3DbLYrQe9BVFO-aZxhkJgp4Kb5tOzXJIMoKnAQPYgX3AoZNRehhTaH-XUHV22MQHLZ-vIa40Bg26Dzg"
    },
    {
        id: 3,
        name: "Mama's Lasagna",
        description: "Layers of cheese, meat, and love",
        price: 16.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC7EHRWYeCXlAQNmcOSCqeddL8PUfw3LvQ-_vjB5ApBK-gYu96eLv1KAcQMD-c68Bk8qptViYN7I-KyODOfKOZ-09MN7gHC6X7vsLZUtoyk5lC1Sl69D-3SDoTZJXrLP1zi_uRX_X1rDxYVMmOZi9VpyXs-tD11FbwGtkZuqZVdcHqSvTMA7YxGLRx2XbTjZImkuc2pDXfUsfjPJX9ibe5y4sFTRGaAzY_qwccD-hnHg6cfQ6U70zqc1KKa5PlRUaQ_rpG9_fszAI"
    },
    {
        id: 4,
        name: "Rustic Tomato Basil",
        description: "Fresh vine tomatoes & heavy cream",
        price: 8.50,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh8f_dgIAQ_AsAs2c8SW8T8uw67WsvaSocRWEJb5igh4GWYmqUVjp7011PaqWp9q1M23zCYgmhR98FYocU4KqgrNLbviOT2Io0xaUcgG5F4BVoo2VxJs6JAW0gzytl9PVLqH0od1CQqmgrZ1VYPeBCRpfyzkDtr20qfNtx3lYWiVgPb0Z8o-QqfJEzBF0GwGYNhj5Qaq2s10q4t0o4ouqdt1-YPQDTsjwdAmQ9xtEwXusKgUgwQF471OEhRKKGJGahWn9VM7w7QH4"
    },
    {
        id: 5,
        name: "Sunday Roast",
        description: "Slow-cooked beef with root veg",
        price: 22.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEX7RYuRW-QLEI-lhjcAKNv4ARs17BYmyRKAojm6Ma1i1chC4Mv-kFqyFBBHdNSnVWSFapjAT9S_W8AoNyCfoL_SVZ81XNw7LMC8OqYQi0Pf76w2bd-r1i6WXSZE4JewBLhEPdTHdgY41YGSIjXHURyPUCK5L8vwbDMTlXSj0kxOAgboQHBdXaaJG2nB-hD7Fl04YJRpGe6kUS9bGGATTDHsqK0dH5-w7Vb9KKhavulT7az3al0G7EbHr4N56pKk0xDjDXxc1cWEE"
    }
];

export default function DailySpecials() {
    const { addItem } = useCart();

    const handleAddToCart = (item: SpecialItem) => {
        addItem({
            id: `special-${item.id}`, // Unique ID for special items
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description,
        });
    };

    return (
        <section>
            <div className="flex items-center justify-between px-4 pt-6 pb-2">
                <h2 className="text-gray-900 text-xl font-bold tracking-tight">
                    Daily Specials
                </h2>
                {/* View All removed as per request */}
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-4">
                {SPECIALS_DATA.map((item) => (
                    <div
                        key={item.id}
                        className="min-w-[260px] bg-white/5 rounded-2xl overflow-hidden border border-white/5 snap-start"
                    >
                        <div
                            className="h-40 bg-cover bg-center"
                            aria-label={item.description}
                            style={{ backgroundImage: `url("${item.image}")` }}
                        ></div>
                        <div className="p-4 relative"> {/* Added relative positioning here */}
                            <h3 className="font-bold text-lg mb-1 text-gray-900">{item.name}</h3>
                            <p className="text-gray-400 text-xs mb-3 truncate">
                                {item.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2"> {/* New div for prices */}
                                    <span className="text-primary font-bold text-lg">₹{item.price.toFixed(2)}</span>
                                    <span className="text-gray-400 line-through text-sm mt-1">₹{(item.price * 1.2).toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-colors"
                                >
                                    <span className="material-symbols-outlined">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
