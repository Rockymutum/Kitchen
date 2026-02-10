"use client";

import { useRouter, usePathname } from "next/navigation";

export default function ServiceToggle() {
    const router = useRouter();
    const pathname = usePathname();
    const isCatering = pathname === "/catering";

    return (
        <div className="px-4 pb-1 pt-2">
            <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-white/5 p-1.5">
                <button
                    onClick={() => router.push("/")}
                    className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold transition-all duration-200 ${!isCatering
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
                    onClick={() => router.push("/catering")}
                    className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold transition-all duration-200 ${isCatering
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
    );
}
