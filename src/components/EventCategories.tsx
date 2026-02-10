"use client";

import { useState } from "react";

export default function EventCategories() {
    const [selected, setSelected] = useState("all");

    const categories = [
        { id: "all", icon: "all_inclusive", label: "All Events" },
        { id: "weddings", icon: "celebration", label: "Weddings" },
        { id: "birthdays", icon: "cake", label: "Birthdays" },
        { id: "corporate", icon: "business_center", label: "Corporate" },
        { id: "private", icon: "restaurant", label: "Private" },
    ];

    return (
        <div className="bg-white border-b border-gray-100">
            <div className="flex overflow-x-auto gap-4 px-6 py-4 no-scrollbar">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        onClick={() => setSelected(category.id)}
                        className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group"
                    >
                        <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${selected === category.id
                                ? "bg-primary/10 border-2 border-primary"
                                : "bg-gray-50 group-hover:bg-gray-100"
                                }`}
                        >
                            <span
                                className={`material-symbols-outlined text-2xl ${selected === category.id
                                    ? "text-primary"
                                    : "text-gray-500"
                                    }`}
                            >
                                {category.icon}
                            </span>
                        </div>
                        <span
                            className={`text-xs font-medium ${selected === category.id
                                ? "font-bold text-primary"
                                : "text-gray-500 group-hover:text-[#181311]"
                                }`}
                        >
                            {category.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
