"use client";

import { useState } from "react";
import PackageDetailModal from "./PackageDetailModal";
import { CATERING_PACKAGES } from "@/data/catering";
import Link from "next/link";

export default function CateringPackages() {
    const [selectedPkg, setSelectedPkg] = useState<any>(null);

    return (
        <div className="bg-stone-50 py-10">
            <div className="px-6 mb-6 flex justify-between items-end">
                <h3 className="text-[#181311] text-2xl font-bold leading-tight">
                    Curated Packages
                </h3>
                <Link href="/catering/packages">
                    <span className="text-primary text-sm font-bold cursor-pointer hover:underline">
                        View All
                    </span>
                </Link>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
                {CATERING_PACKAGES.slice(0, 3).map((pkg) => (
                    <div
                        key={pkg.id}
                        onClick={() => setSelectedPkg(pkg)}
                        className={`snap-center shrink-0 w-[280px] bg-white rounded-xl overflow-hidden flex flex-col relative cursor-pointer active:scale-95 transition-transform ${pkg.popular
                            ? "shadow-xl shadow-primary/5 border-2 border-primary/20"
                            : "shadow-md border border-gray-100"
                            }`}
                    >
                        {pkg.popular && (
                            <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide z-10">
                                Popular
                            </div>
                        )}
                        <div
                            className="h-32 bg-gray-200 bg-cover bg-center"
                            style={{ backgroundImage: `url("${pkg.image}")` }}
                        >
                            <div className="h-full w-full bg-black/30 flex items-center justify-center">
                                <span className="text-white font-display text-2xl font-bold tracking-widest drop-shadow-md">
                                    {pkg.title}
                                </span>
                            </div>
                        </div>
                        <div
                            className={`p-5 flex flex-col flex-1 ${pkg.popular ? "bg-primary/[0.02]" : ""
                                }`}
                        >
                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">
                                {pkg.subtitle}
                            </p>
                            <ul className="text-[#181311] text-sm space-y-2 mb-6 flex-1">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-base">
                                            check
                                        </span>{" "}
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-lg font-bold text-[#181311]">
                                    ₹{pkg.price}
                                    <span className="text-xs font-normal text-gray-500">/pp</span>
                                </span>
                                <button className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <PackageDetailModal
                isOpen={!!selectedPkg}
                onClose={() => setSelectedPkg(null)}
                pkg={selectedPkg}
            />
        </div>
    );
}
