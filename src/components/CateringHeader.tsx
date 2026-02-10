"use client";

import { useState } from "react";

export default function CateringHeader() {
    const [serviceType, setServiceType] = useState<"delivery" | "catering">("catering");

    return (
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="flex items-center justify-between px-4 pt-3 pb-3">
                <div className="flex flex-col flex-1 mr-4 cursor-pointer">
                    <div className="flex items-center gap-1 text-primary mb-0.5">
                        <span
                            className="material-symbols-outlined text-[18px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            location_on
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase">
                            Home
                        </span>
                    </div>
                    <div className="flex items-center gap-1 group">
                        <span className="text-[#181311] text-sm font-bold truncate max-w-[200px]">
                            123 Maple Street, SF
                        </span>
                        <span className="material-symbols-outlined text-sm text-gray-400 group-hover:text-primary transition-colors">
                            expand_more
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                    <button className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary relative hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                            shopping_bag
                        </span>
                        <span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-primary rounded-full ring-1 ring-white"></span>
                    </button>
                </div>
            </div>
            <div className="px-4 pb-3">
                <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-stone-100/50 p-1.5">
                    <button
                        onClick={() => setServiceType("delivery")}
                        className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold transition-all duration-200 ${serviceType === "delivery"
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        <span className="material-symbols-outlined text-base mr-1">
                            moped
                        </span>
                        <span className="truncate">Delivery</span>
                    </button>
                    <button
                        onClick={() => setServiceType("catering")}
                        className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold transition-all duration-200 ${serviceType === "catering"
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        <span className="material-symbols-outlined text-base mr-1">
                            restaurant
                        </span>
                        <span className="truncate">Catering</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
