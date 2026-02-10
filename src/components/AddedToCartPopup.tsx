"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * AddedToCartPopup
 * 
 * A sleek, animated popup that appears when an item is added to the cart.
 * Features a drawing checkmark animation and a smooth slide-up effect.
 */
export default function AddedToCartPopup({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {

    // Auto-close after a few seconds
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 25
                        }}
                        className="bg-white/95 backdrop-blur-sm border border-stone-100 text-stone-900 rounded-[2rem] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center gap-3 min-w-[150px]"
                    >
                        {/* Animated Checkmark Circle */}
                        <div className="relative flex items-center justify-center size-14">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.05, type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute inset-0 bg-orange-500 rounded-full opacity-10"
                            />
                            <svg
                                viewBox="0 0 24 24"
                                className="size-8 text-orange-500 stroke-current stroke-[3]"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <motion.path
                                    d="M20 6L9 17L4 12"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                                />
                            </svg>
                        </div>

                        <span className="font-extrabold text-base text-center leading-none">Added to Cart</span>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
