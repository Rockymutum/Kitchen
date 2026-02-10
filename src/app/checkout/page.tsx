"use client";

import { useState } from "react";
import CheckoutHeader from "@/components/CheckoutHeader";
import CheckoutProgress from "@/components/CheckoutProgress";
import OrderItems from "@/components/OrderItems";
import SpecialRequests from "@/components/SpecialRequests";
import DeliveryDetails from "@/components/DeliveryDetails";
import OrderSummary from "@/components/OrderSummary";
import PaymentMethods from "@/components/PaymentMethods";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
// import CheckoutFooter removed - integrated into steps

export default function CheckoutPage() {
    const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
    const { items, total } = useCart();
    // Simple fee calculation for demo
    const deliveryFee = 4.5;
    const serviceFee = 2.0;
    const finalTotal = total + deliveryFee + serviceFee;

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3);
    };

    if (items.length === 0 && currentStep === 1) {
        return (
            <main className="pb-8 bg-white h-screen flex flex-col">
                <CheckoutHeader />
                <div className="flex-1 flex flex-col items-center justify-center px-4">
                    <OrderItems />
                </div>
            </main>
        );
    }

    return (
        <main className="bg-stone-50 min-h-screen font-sans flex flex-col">
            <CheckoutHeader />

            <div className="pt-4">
                <CheckoutProgress currentStep={currentStep} />
            </div>

            <div className="px-4 flex-1 flex flex-col gap-6 mt-2 pb-4">
                {/* Step 1: Basket */}
                {currentStep === 1 && (
                    <div className="flex-1 flex flex-col gap-6 animate-in slide-in-from-right-4 fade-in duration-300">
                        <OrderItems />

                        {/* Step 1 Footer */}
                        <div className="sticky bottom-0 left-0 right-0 -mx-4 p-4 bg-white border-t border-stone-100 z-50 mt-auto">
                            <div className="max-w-md mx-auto flex items-center gap-4">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-medium">Total</span>
                                    <span className="text-xl font-black text-gray-900 leading-none">
                                        ₹{finalTotal.toFixed(2)}
                                    </span>
                                </div>
                                <button
                                    onClick={nextStep}
                                    className="flex-1 bg-primary text-white font-bold h-14 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                                >
                                    <span>Proceed to Details</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Details */}
                {currentStep === 2 && (
                    <div className="flex-1 flex flex-col gap-6 animate-in slide-in-from-right-4 fade-in duration-300">
                        <div className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100">
                            <DeliveryDetails />
                        </div>
                        <div className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Mom&apos;s Note</h3>
                            <SpecialRequests />
                        </div>

                        {/* Step 2 Footer */}
                        <div className="sticky bottom-0 left-0 right-0 -mx-4 p-4 bg-white border-t border-stone-100 z-50 mt-auto">
                            <div className="max-w-md mx-auto flex gap-3">
                                <button
                                    onClick={prevStep}
                                    className="w-14 h-14 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-stone-200 transition-colors"
                                >
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="flex-1 bg-primary text-white font-bold h-14 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                                >
                                    <span>To Payment</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Payment */}
                {currentStep === 3 && (
                    <div className="flex-1 flex flex-col gap-6 animate-in slide-in-from-right-4 fade-in duration-300">
                        <div className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Price Details</h3>
                            <OrderSummary />
                        </div>
                        <div className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100">
                            <PaymentMethods />
                        </div>

                        {/* Step 3 Footer */}
                        <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-stone-100 z-50 mt-auto">
                            <div className="max-w-md mx-auto flex gap-3">
                                <button
                                    onClick={prevStep}
                                    className="w-14 h-14 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-stone-200 transition-colors"
                                >
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </button>
                                <Link
                                    href="/success"
                                    className="flex-1 bg-green-600 text-white font-bold h-14 rounded-2xl shadow-xl shadow-green-600/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                                >
                                    <span>Place Order</span>
                                    <span className="material-symbols-outlined">check</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
