"use client";

import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="fixed inset-0 overflow-hidden flex flex-col items-center justify-between pb-8 bg-stone-50">
            <div className="fixed top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>

            <main className="w-full flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-6 text-center">
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full"></div>
                    <div className="relative size-24 rounded-full bg-white border-4 border-green-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                        <span className="material-symbols-outlined text-5xl text-green-500 font-bold">
                            check
                        </span>
                    </div>
                </div>

                <h1 className="text-3xl font-black mb-2 tracking-tight text-stone-900">
                    Order Placed!
                </h1>
                <p className="text-stone-500 text-lg mb-8 max-w-xs mx-auto leading-relaxed tracking-tight">
                    Mom is starting on your meal. Sit tight, it&apos;s gonna be delicious.
                </p>

                <div className="mb-8 relative">
                    <span className="material-symbols-outlined text-[120px] text-stone-200 select-none">
                        skillet
                    </span>
                    <div className="absolute -top-4 -right-4 animate-pulse">
                        <span className="material-symbols-outlined text-4xl text-primary">
                            soup_kitchen
                        </span>
                    </div>
                </div>

                <div className="w-full max-w-sm bg-white border border-stone-100 rounded-2xl p-6 shadow-xl shadow-stone-200/50">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
                        <div className="text-left">
                            <p className="text-xs text-stone-400 uppercase tracking-wider mb-1 font-bold">
                                Order ID
                            </p>
                            <p className="font-mono text-stone-900 font-medium">#MK-8824</p>
                        </div>
                        <div className="text-right">
                            <div className="flex justify-between text-sm">
                                <span className="text-stone-900 font-black text-xl">₹44.50</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 text-left">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                            <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <div>
                            <p className="text-sm text-stone-400 mb-1 font-medium">Estimated Delivery</p>
                            <p className="text-lg font-bold text-stone-900">25 - 35 mins</p>
                            <p className="text-xs text-stone-500 mt-1 font-medium">Arriving by 7:45 PM</p>
                        </div>
                    </div>
                </div>
            </main>

            <div className="w-full px-6 space-y-4 max-w-md mx-auto">
                <Link
                    href="/history"
                    className="w-full bg-primary text-white font-bold h-14 rounded-2xl shadow-xl shadow-primary/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                    <span>Track Order</span>
                    <span className="material-symbols-outlined">map</span>
                </Link>
                <Link
                    href="/"
                    className="flex w-full bg-white text-stone-600 font-bold h-14 rounded-2xl border border-stone-200 hover:bg-stone-50 items-center justify-center transition-colors transition-transform active:scale-95"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
