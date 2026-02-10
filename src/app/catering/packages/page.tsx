"use client";

import Header from "@/components/Header";

import BottomNav from "@/components/BottomNav";
import PackageDetailModal from "@/components/PackageDetailModal";
import { CATERING_PACKAGES } from "@/data/catering";
import { useState } from "react";

export default function AllPackagesPage() {
    const [selectedPkg, setSelectedPkg] = useState<any>(null);

    return (
        <main className="relative flex h-auto min-h-screen w-full flex-col max-w-md mx-auto bg-stone-50 shadow-2xl pb-24">
            <Header className="bg-stone-50" />


            <div className="px-6 pt-2 pb-8">


                <div className="flex flex-col gap-6">
                    {CATERING_PACKAGES.map((pkg, index) => {
                        // Layout Logic: First item is Hero, others are standard Cards
                        const isHero = index === 0;

                        return (
                            <div
                                key={pkg.id}
                                onClick={() => setSelectedPkg(pkg)}
                                className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white transition-all duration-500 ${isHero
                                    ? "shadow-2xl shadow-stone-200"
                                    : "shadow-lg shadow-stone-100 active:scale-[0.98]"
                                    }`}
                            >
                                {/* Image Section */}
                                <div
                                    className={`bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${isHero ? "h-64" : "h-48"
                                        }`}
                                    style={{ backgroundImage: `url("${pkg.image}")` }}
                                >
                                    <div className={`h-full w-full flex flex-col justify-end p-6 ${isHero
                                        ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                                        : "bg-black/20"
                                        }`}>
                                        {isHero && (
                                            <>
                                                <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase mb-1">
                                                    Most Popular Choice
                                                </span>
                                                <span className="text-white font-display text-4xl font-bold tracking-widest leading-none">
                                                    {pkg.title}
                                                </span>
                                            </>
                                        )}
                                        {!isHero && (
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                                                <span className="text-[10px] font-black text-stone-800 tracking-wider">
                                                    ₹{pkg.price}/pp
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-5">
                                    {!isHero && (
                                        <div className="mb-4">
                                            <h3 className="text-xl font-black text-stone-800 tracking-tight">{pkg.title}</h3>
                                            <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">{pkg.subtitle}</p>
                                        </div>
                                    )}

                                    {isHero && (
                                        <div className="flex justify-between items-center mb-6 pt-2">
                                            <p className="text-sm text-stone-500 font-bold uppercase tracking-wider">{pkg.subtitle}</p>
                                            <span className="text-2xl font-black text-stone-800">₹{pkg.price}<span className="text-xs font-normal text-stone-400">/pp</span></span>
                                        </div>
                                    )}

                                    <ul className="space-y-2 mb-6">
                                        {pkg.features.slice(0, isHero ? 3 : 2).map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className={`mt-1 size-1.5 rounded-full ${isHero ? "bg-primary" : "bg-stone-300"}`}></span>
                                                <span className="text-sm text-stone-600 font-medium leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                        {!isHero && pkg.features.length > 2 && (
                                            <li className="text-xs text-stone-400 font-bold italic pl-4">+ more features</li>
                                        )}
                                    </ul>

                                    <button className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]">
                                        Explore Package
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <PackageDetailModal
                isOpen={!!selectedPkg}
                onClose={() => setSelectedPkg(null)}
                pkg={selectedPkg}
            />

            <BottomNav />
        </main>
    );
}
