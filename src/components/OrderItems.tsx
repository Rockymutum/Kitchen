"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function OrderItems() {
    const { items, updateQuantity } = useCart();

    if (items.length === 0) {
        return (
            <section className="text-center py-8">
                <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">
                    shopping_cart
                </span>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Your cart is empty</h2>
                <p className="text-gray-400 text-sm mb-4">Add some delicious items to get started!</p>
                <Link
                    href="/"
                    className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                    Browse Menu
                </Link>
            </section>
        );
    }

    return (
        <section>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Your Order</h2>
                <span className="text-xs text-primary font-medium">
                    {items.length} {items.length === 1 ? "Item" : "Items"}
                </span>
            </div>
            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex gap-4 p-3 bg-stone-50 rounded-2xl border border-stone-100 items-center"
                    >
                        <div
                            className="size-20 shrink-0 bg-cover bg-center rounded-xl"
                            style={{
                                backgroundImage: `url("${item.image}")`,
                            }}
                        ></div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 text-base truncate">
                                {item.name}
                            </h3>
                            <p className="text-gray-400 text-xs mb-2">{item.description}</p>
                            <div className="flex items-center gap-3 mt-2">
                                <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1 gap-3">
                                    <button className="text-gray-500 hover:text-primary transition-colors text-lg" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                    <button className="text-gray-500 hover:text-primary transition-colors text-lg" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <span className="font-bold text-gray-900">
                                    ₹{item.price.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
