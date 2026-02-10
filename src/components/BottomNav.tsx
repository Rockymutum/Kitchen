"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white to-transparent z-50">
            <div className="mx-auto max-w-md bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full flex items-center justify-around px-6 py-3 shadow-lg">
                <Link
                    href="/"
                    className={`flex flex-col items-center justify-center size-12 transition-colors ${pathname === "/" ? "text-primary" : "text-gray-500 hover:text-gray-900"}`}
                >
                    <span className={`material-symbols-outlined ${pathname === "/" ? "fill-current" : ""}`}>
                        storefront
                    </span>
                </Link>
                <Link
                    href="/catering"
                    className={`flex flex-col items-center justify-center size-12 transition-colors ${pathname.startsWith("/catering") ? "text-primary" : "text-gray-500 hover:text-gray-900"}`}
                >
                    <span className={`material-symbols-outlined ${pathname.startsWith("/catering") ? "fill-current" : ""}`}>
                        restaurant
                    </span>
                </Link>
                <Link
                    href="/history"
                    className={`flex flex-col items-center justify-center size-12 transition-colors ${pathname === "/history" ? "text-primary" : "text-gray-500 hover:text-gray-900"}`}
                >
                    <span className={`material-symbols-outlined ${pathname === "/history" ? "fill-current" : ""}`}>
                        receipt_long
                    </span>
                    {pathname === "/history" && (
                        <span className="absolute top-4 right-1.5 size-2 bg-primary rounded-full border-2 border-white"></span>
                    )}
                </Link>
                <Link
                    href="/profile"
                    className={`flex flex-col items-center justify-center size-12 transition-colors ${pathname === "/profile" ? "text-primary" : "text-gray-500 hover:text-gray-900"}`}
                >
                    <span className={`material-symbols-outlined ${pathname === "/profile" ? "fill-current" : ""}`}>
                        person
                    </span>
                </Link>
            </div>
            <div className="h-4"></div>
        </div>
    );
}
