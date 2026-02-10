"use client";

import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
    const { items, total } = useCart();

    const subtotal = total;
    const deliveryFee = subtotal > 0 ? 4.5 : 0;
    const serviceFee = subtotal > 0 ? 2.0 : 0;
    const finalTotal = subtotal + deliveryFee + serviceFee;

    if (items.length === 0) {
        return null;
    }

    return (
        <section className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="text-gray-900 font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Delivery Fee</span>
                    <span className="text-gray-900 font-medium">₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Service Fee</span>
                    <span className="text-gray-900 font-medium">₹{serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-dashed border-gray-200 pt-3 mt-3">
                    <span className="text-gray-900">Total</span>
                    <span className="text-primary">
                        ₹{finalTotal.toFixed(2)}
                    </span>
                </div>
            </div>
        </section>
    );
}
