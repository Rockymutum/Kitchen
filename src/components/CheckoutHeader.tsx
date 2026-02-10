"use client";

import Link from "next/link";

export default function CheckoutHeader() {
    return (
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
            <div className="flex items-center justify-between p-4">
                <Link
                    href="/"
                    className="flex items-center justify-center size-10 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h1 className="text-lg font-bold tracking-tight">Checkout</h1>
                <div className="size-10"></div>
            </div>
        </div>
    );
}
