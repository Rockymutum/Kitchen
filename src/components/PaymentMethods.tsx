"use client";

import { useState } from "react";

interface PaymentMethod {
    id: string;
    name: string;
    icon: string;
    description: string;
}

const PAYMENT_METHODS: PaymentMethod[] = [
    {
        id: "card",
        name: "Credit/Debit Card",
        icon: "credit_card",
        description: "Visa, Mastercard, Amex",
    },
    {
        id: "upi",
        name: "UPI / Wallet",
        icon: "account_balance_wallet",
        description: "Google Pay, PhonePe, Paytm",
    },
    {
        id: "cod",
        name: "Cash on Delivery",
        icon: "payments",
        description: "Pay when you receive",
    },
];

export default function PaymentMethods() {
    const [selectedMethod, setSelectedMethod] = useState<string>("card");

    return (
        <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Payment Method</h2>
            <div className="space-y-3">
                {PAYMENT_METHODS.map((method) => (
                    <div
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${selectedMethod === method.id
                                ? "bg-primary/5 border-primary shadow-sm"
                                : "bg-white border-stone-200 hover:border-stone-300"
                            }`}
                    >
                        <div
                            className={`size-10 rounded-full flex items-center justify-center shrink-0 ${selectedMethod === method.id
                                    ? "bg-primary text-white"
                                    : "bg-stone-100 text-stone-500"
                                }`}
                        >
                            <span className="material-symbols-outlined">{method.icon}</span>
                        </div>
                        <div className="flex-1">
                            <h3
                                className={`font-bold text-base ${selectedMethod === method.id ? "text-primary" : "text-gray-900"
                                    }`}
                            >
                                {method.name}
                            </h3>
                            <p className="text-xs text-gray-400">{method.description}</p>
                        </div>
                        <div
                            className={`size-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === method.id
                                    ? "border-primary bg-primary"
                                    : "border-stone-300"
                                }`}
                        >
                            {selectedMethod === method.id && (
                                <span className="material-symbols-outlined text-[14px] text-white">
                                    check
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Payment Security Note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-stone-400">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span className="text-xs font-medium">Payments are secure and encrypted</span>
            </div>
        </section>
    );
}
