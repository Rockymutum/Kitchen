"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CheckoutFooter() {
    const { items, total } = useCart();

    const deliveryFee = total > 0 ? 4.5 : 0;
    const serviceFee = total > 0 ? 2.0 : 0;
    const finalTotal = total + deliveryFee + serviceFee;

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-stone-100 pb-8">
            <div className="max-w-md mx-auto flex items-center gap-4">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">Total to Pay</span>
                    <span className="text-xl font-black text-gray-900 leading-none">
                        ₹{finalTotal.toFixed(2)}
                    </span>
                </div>
                <Link
                    href="/success"
                    className="flex-1 bg-primary text-white font-bold h-14 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                    <span>Place Order</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
}
