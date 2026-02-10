"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WelcomePage() {
    return (
        <div className="fixed inset-0 flex flex-col justify-between bg-[#FDFBF7] text-[#1C1917] p-6 overflow-hidden">

            {/* Top Branding - Clean & Minimal */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full pt-8 flex justify-center"
            >
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400">Est. 1984</span>
            </motion.div>

            {/* Centerpiece */}
            <div className="flex-1 flex flex-col items-center justify-center -mt-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="relative mb-12"
                >
                    {/* Main Logo Container - Large Rounded Square */}
                    <div className="relative size-64 bg-white rounded-[3rem] shadow-2xl shadow-orange-500/10 flex items-center justify-center border-4 border-white overflow-hidden">
                        <span className="material-symbols-outlined text-[12rem] text-primary leading-none scale-[2.5]" style={{ transform: 'scale(2.5)' }}>
                            restaurant_menu
                        </span>
                    </div>

                    {/* Floating Decorative Badge - Solid, not glass */}
                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                        className="absolute -bottom-6 -right-4 size-24 bg-[#1C1917] rounded-full flex items-center justify-center shadow-lg text-white font-bold text-center leading-tight text-xs rotate-12 border-4 border-[#FDFBF7]"
                    >
                        <div>
                            TASTE
                            <br />
                            OF
                            <br />
                            HOME
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center space-y-4 max-w-sm"
                >
                    <p className="text-stone-500 text-sm font-medium leading-relaxed tracking-wide">
                        AUTHENTIC FLAVORS • HANDCRAFTED DAILY
                    </p>
                </motion.div>
            </div>

            {/* Bottom Action Area */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="w-full pb-8 space-y-4"
            >
                <Link href="/auth" className="block w-full">
                    <button className="w-full bg-primary text-white text-lg font-bold py-5 rounded-xl hover:bg-primary/90 transition-colors duration-300 flex items-center justify-between px-8 group shadow-lg shadow-primary/20">
                        <span>Get Started</span>
                        <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">
                            east
                        </span>
                    </button>
                </Link>

                <p className="text-center text-[10px] text-stone-400 uppercase tracking-widest">
                    Made with love in your city
                </p>
            </motion.div>
        </div>
    );
}
