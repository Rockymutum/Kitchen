"use client";

import { useState } from "react";

export default function DeliveryDetails() {
    const [deliveryTime, setDeliveryTime] = useState<"asap" | "schedule">("asap");

    return (
        <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Delivery Details</h2>
            <div className="bg-stone-100 p-1 rounded-xl flex mb-4">
                <button
                    onClick={() => setDeliveryTime("asap")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all ${deliveryTime === "asap"
                        ? "bg-white text-primary shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                        }`}
                >
                    <span
                        className={`material-symbols-outlined text-sm ${deliveryTime === "asap" ? "fill-current" : ""
                            }`}
                    >
                        bolt
                    </span>
                    <span className="text-sm font-bold">ASAP (45m)</span>
                </button>
                <button
                    onClick={() => setDeliveryTime("schedule")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all ${deliveryTime === "schedule"
                        ? "bg-white text-primary shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                        }`}
                >
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span className="text-sm font-medium">Schedule</span>
                </button>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex items-start gap-4">
                <div className="bg-white p-2 rounded-full text-primary shrink-0 shadow-sm border border-stone-100">
                    <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-gray-900">Home</h4>
                        <button className="text-primary text-xs font-semibold hover:underline">
                            Edit
                        </button>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        2464 Royal Ln. Mesa, New Jersey 45463
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Note: Gate code 1234</p>
                </div>
            </div>
        </section>
    );
}
