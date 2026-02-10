"use client";

import Link from "next/link";

export default function TrackingHeader() {
    return (
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="flex items-center p-4 justify-between">
                <Link
                    href="/"
                    className="flex items-center justify-center rounded-full size-10 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <div className="text-center">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest">
                        Estimated Arrival
                    </p>
                    <h2 className="text-gray-900 text-lg font-bold">12:45 PM</h2>
                </div>
                <button className="flex items-center justify-center rounded-full size-10 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    <span className="material-symbols-outlined">support_agent</span>
                </button>
            </div>
        </div>
    );
}
