"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rating?: number;
    reviews?: number;
    calories?: number;
    isBestSeller?: boolean;
    isVeg: boolean;
}

const MENU_DATA: { [key: string]: MenuItem[] } = {
    "Best Sellers": [
        {
            id: "sourdough-bs",
            name: "Mom's Sourdough",
            description: "Fermented for 48 hours, crusty perfection",
            price: 6.5,
            rating: 4.9,
            reviews: 234,
            isBestSeller: true,
            isVeg: true,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChAEsN53T4XPRCs8AfvXKTPhrwRYeJ8c_9jxAGiirVrUCp6nZHX-TI8GjgSrhqZMC33sCEP1U64LVVGFriNimOOzo70gqQErva91ovXKDqD0YC2HZe4Onbjx8jBbfMhZMtvrWp_uzAWW0oiDCj1bzdQCR85b7moOL2sB5pVgFELbDmjh2ssS0zKeUIstBprUr_LT0Fl_L4fn-fWDAmpBb2PEqos9EmhQIE7y_r7tOZcEPPh9VIh_hL_K1LrRapxvuvtV1fPe2HTow",
        },
        {
            id: "honey-roast-bs",
            name: "Honey Glazed Roast",
            description: "Slow-cooked family size portion",
            price: 18.0,
            rating: 4.8,
            reviews: 189,
            calories: 600,
            isBestSeller: true,
            isVeg: false,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEX7RYuRW-QLEI-lhjcAKNv4ARs17BYmyRKAojm6Ma1i1chC4Mv-kFqyFBBHdNSnVWSFapjAT9S_W8AoNyCfoL_SVZ81XNw7LMC8OqYQi0Pf76w2bd-r1i6WXSZE4JewBLhEPdTHdgY41YGSIjXHURyPUCK5L8vwbDMTlXSj0kxOAgboQHBdXaaJG2nB-hD7Fl04YJRpGe6kUS9bGGATTDHsqK0dH5-w7Vb9KKhavulT7az3al0G7EbHr4N56pKk0xDjDXxc1cWEE",
        },
    ],
    "Recommended": [
        {
            id: "pot-pie",
            name: "Chicken Pot Pie Box",
            description: "Golden flaky crust, creamy filling",
            price: 14.5,
            calories: 450,
            isVeg: false,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQr6F-9Job3p-iEiCfQegZN9ybC2hXCb5SfLeE8ryxz7UbyLnlKdpEsB_qABryZkwGKwLSrzeBUlc-o52n0uqr2agzU-3tNXovU3WMWAt9DLdI4QV_4HcSK4h2OqJDNga-cgkUAV6NQvxZh5EcZStjoqDjTwZ7PRNJ_IwIN9ouyWH-tAoldPM7Y0SRFhG5nPthJizpH2iYhHXmeSla6Bu4gR0HrDYAqEsjALZ545qfZsKeOHMxQNviq9d0IFO1Y0lzS7lk2nuk90",
        },
        {
            id: "lentil-bowl",
            name: "Spiced Lentil Bowl",
            description: "Vegan protein powerhouse, served hot",
            price: 9.0,
            calories: 320,
            isVeg: true,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRqPvpLdaGt89sOTJtgtQ-YruitYX-6b5YAz-bWW1Xd8IRnXVYcN7ZCcWQUELjRW8KEgFE8vpRfktVuzB-rTN9j2hmPqR_tOfJQYRQF1vd1olgerjv7zfCQ-cpfJ_qXsY9bOXX8ldXH77rdrjUdcP3LNTXpFVmcFp0oawho2UW1EJwK49NZQvkiwzeRXqm3DbLYrQe9BVFO-aZxhkJgp4Kb5tOzXJIMoKnAQPYgX3AoZNRehhTaH-XUHV22MQHLZ-vIa40Bg26Dzg",
        },
    ]
};

const CATEGORIES = Object.keys(MENU_DATA);

// Zomato-style Dietary Icon
const DietaryIcon = ({ isVeg }: { isVeg: boolean }) => (
    <div className={`mt-1 size-3.5 border-[2px] rounded-sm flex items-center justify-center flex-shrink-0 ${isVeg ? "border-green-600" : "border-red-600"}`}>
        <div className={`size-1.5 rounded-full ${isVeg ? "bg-green-600" : "bg-red-600"}`} />
    </div>
);

interface UnifiedMenuProps {
    searchQuery: string;
    isVegMode: boolean;
}

export default function UnifiedMenu({ searchQuery, isVegMode }: UnifiedMenuProps) {
    const { addItem } = useCart();

    return (
        <section className="bg-stone-50">
            {/* Menu List */}
            <div className="px-4 space-y-10">
                {CATEGORIES.map((category) => {
                    // Filter items based on toggle and search
                    const categoryItems = MENU_DATA[category].filter(item => {
                        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
                        const matchesVeg = isVegMode ? item.isVeg : true;

                        return matchesSearch && matchesVeg;
                    });

                    if (categoryItems.length === 0) return null;

                    return (
                        <div key={category} id={`category-${category}`} className="scroll-mt-48">
                            <h3 className="text-xl font-black text-stone-900 mb-4 flex items-center gap-2">
                                {category}
                                <div className="h-px flex-1 bg-stone-200"></div>
                            </h3>

                            <motion.div
                                className="space-y-6"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                {categoryItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        className="relative bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex gap-4"
                                        variants={{
                                            hidden: { y: 20, opacity: 0 },
                                            show: { y: 0, opacity: 1 }
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Image */}
                                        <div
                                            className="size-28 shrink-0 bg-cover bg-center rounded-xl"
                                            style={{ backgroundImage: `url("${item.image}")` }}
                                        >
                                            {item.isBestSeller && (
                                                <span className="absolute -top-2 -left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-yellow-200">
                                                    BESTSELLER
                                                </span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col min-w-0">
                                            <div className="flex justify-between items-start mb-1 gap-2">
                                                <h4 className="font-bold text-stone-900 text-base leading-tight">{item.name}</h4>
                                                <DietaryIcon isVeg={item.isVeg} />
                                            </div>

                                            {/* Metadata */}
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {item.rating && (
                                                    <div className="flex items-center gap-0.5 bg-green-50 px-1.5 py-0.5 rounded text-[10px] font-bold text-green-700 border border-green-100">
                                                        <span className="material-symbols-outlined text-[10px]">star</span>
                                                        {item.rating}
                                                        <span className="text-green-600 font-normal">({item.reviews})</span>
                                                    </div>
                                                )}
                                                {item.calories && (
                                                    <div className="flex items-center gap-0.5 bg-orange-50 px-1.5 py-0.5 rounded text-[10px] font-bold text-orange-700 border border-orange-100">
                                                        <span className="material-symbols-outlined text-[10px]">local_fire_department</span>
                                                        {item.calories}
                                                    </div>
                                                )}
                                            </div>

                                            <p className="text-stone-500 text-sm leading-snug line-clamp-2 mb-3">
                                                {item.description}
                                            </p>

                                            {/* Actions */}
                                            <div className="mt-auto flex items-center justify-between">
                                                <span className="text-lg font-black text-stone-900">
                                                    ₹{item.price.toFixed(2)}
                                                </span>
                                                <button
                                                    onClick={() => addItem(item as any)}
                                                    className="bg-primary text-white font-bold text-sm px-4 py-2 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-transform active:scale-95"
                                                >
                                                    ADD
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
