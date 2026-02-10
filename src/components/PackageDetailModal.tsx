"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PackageDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    pkg: any;
}

export default function PackageDetailModal({ isOpen, onClose, pkg }: PackageDetailModalProps) {
    const [activeTab, setActiveTab] = useState("menu");
    const [isBooked, setIsBooked] = useState(false);

    // Reset booking state when modal opens/closes or pkg changes
    useEffect(() => {
        if (isOpen) setIsBooked(false);
    }, [isOpen, pkg]);

    if (!isOpen || !pkg) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 z-[70] bg-white rounded-t-3xl h-[85vh] overflow-hidden flex flex-col md:max-w-md md:left-1/2 md:-translate-x-1/2 md:h-[80vh] md:rounded-3xl md:bottom-10"
                    >
                        {/* Header Image */}
                        <div
                            className="h-48 bg-cover bg-center relative shrink-0"
                            style={{ backgroundImage: `url("${pkg.image}")` }}
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white/90 text-xs font-bold tracking-widest uppercase mb-1 block">
                                    {pkg.subtitle}
                                </span>
                                <h2 className="text-white text-3xl font-bold">{pkg.title}</h2>
                            </div>
                        </div>

                        {/* Content Scroll */}
                        <div className="flex-1 overflow-y-auto p-6 pb-32">

                            {/* Tabs */}
                            <div className="flex gap-4 border-b border-stone-100 mb-6">
                                {['menu', 'vibe', 'details'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-2 text-sm font-bold capitalize transition-colors border-b-2 ${activeTab === tab
                                            ? "border-primary text-primary"
                                            : "border-transparent text-stone-400 hover:text-stone-600"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="space-y-6">
                                {activeTab === "menu" && (
                                    <div className="space-y-4">
                                        {pkg.features.map((item: string, i: number) => (
                                            <div key={i} className="flex gap-3">
                                                <div className="size-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-stone-800">{item}</p>
                                                    <p className="text-xs text-stone-500 mt-0.5">Premium quality selection</p>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="mt-4 p-4 border border-dashed border-stone-200 rounded-xl">
                                            <p className="text-xs text-stone-500 font-bold text-center uppercase tracking-widest mb-3">Sample Menu Items</p>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-start">
                                                    <span className="text-sm font-bold text-stone-700">Truffle Arancini</span>
                                                    <span className="text-xs bg-stone-100 px-2 py-0.5 rounded text-stone-500">Starter</span>
                                                </div>
                                                <div className="flex justify-between items-start">
                                                    <span className="text-sm font-bold text-stone-700">Slow Roasted Lamb Shoulder</span>
                                                    <span className="text-xs bg-stone-100 px-2 py-0.5 rounded text-stone-500">Main</span>
                                                </div>
                                                <div className="flex justify-between items-start">
                                                    <span className="text-sm font-bold text-stone-700">Heirloom Tomato Salad</span>
                                                    <span className="text-xs bg-stone-100 px-2 py-0.5 rounded text-stone-500">Side</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "vibe" && (
                                    <div className="grid grid-cols-2 gap-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="aspect-square bg-stone-100 rounded-xl overflow-hidden relative group">
                                                <div className="absolute inset-0 bg-stone-200 animate-pulse" />
                                                <p className="absolute bottom-2 left-2 text-[10px] font-bold text-stone-500 uppercase">Gallery Item</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "details" && (
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                            <span className="material-symbols-outlined text-stone-400">schedule</span>
                                            <span className="text-sm font-medium text-stone-600">4 Hours of Service Included</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                            <span className="material-symbols-outlined text-stone-400">inventory_2</span>
                                            <span className="text-sm font-medium text-stone-600">Setup & Cleanup Included</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                            <span className="material-symbols-outlined text-stone-400">recycling</span>
                                            <span className="text-sm font-medium text-stone-600">Eco-friendly Disposable Ware</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sticky Footer */}
                        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-stone-100 p-4 pb-8">
                            {isBooked ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border border-green-200 rounded-xl p-4 text-center"
                                >
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <div className="size-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-green-600 text-sm">check</span>
                                        </div>
                                        <p className="font-bold text-green-800">Booked Successfully!</p>
                                    </div>
                                    <p className="text-xs text-green-700">A call will be received from our team shortly.</p>
                                </motion.div>
                            ) : (
                                <button
                                    onClick={() => setIsBooked(true)}
                                    className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/95 transition-transform active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <span>Book Now</span>
                                </button>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
