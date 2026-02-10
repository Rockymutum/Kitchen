"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfileMenu() {
    const router = useRouter();

    const handleComingSoon = (feature: string) => {
        alert(`${feature} is coming soon!`);
    };

    const handleLogout = () => {
        // Clear the auth cookie
        document.cookie = "auth_token=; path=/; max-age=0";
        // Redirect to welcome page
        window.location.href = "/welcome";
    };

    return (
        <div className="px-4 py-6 space-y-4">
            <div className="space-y-3">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2">
                    Account
                </h3>
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 divide-y divide-gray-200">
                    <button onClick={() => handleComingSoon("Personal Information")} className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <span className="material-symbols-outlined">badge</span>
                            </div>
                            <div className="text-left">
                                <p className="text-gray-900 font-medium">Personal Information</p>
                                <p className="text-xs text-gray-500">Name, Phone, Email</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
                            chevron_right
                        </span>
                    </button>
                    <button onClick={() => handleComingSoon("Saved Addresses")} className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div className="text-left">
                                <p className="text-gray-900 font-medium">Saved Addresses</p>
                                <p className="text-xs text-gray-500">Home, Office</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
                            chevron_right
                        </span>
                    </button>
                    <button onClick={() => handleComingSoon("Payment Methods")} className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                                <span className="material-symbols-outlined">credit_card</span>
                            </div>
                            <div className="text-left">
                                <p className="text-gray-900 font-medium">Payment Methods</p>
                                <p className="text-xs text-gray-500">Visa ending in 4242</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>
            <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2">
                    Activity
                </h3>
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 divide-y divide-gray-200">
                    <Link href="/history" className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                <span className="material-symbols-outlined">receipt_long</span>
                            </div>
                            <div className="text-left">
                                <p className="text-gray-900 font-medium">Order History</p>
                                <p className="text-xs text-gray-500">Delivery &amp; Catering</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
                            chevron_right
                        </span>
                    </Link>
                    <button onClick={() => handleComingSoon("Favorite Dishes")} className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                <span className="material-symbols-outlined fill-current">
                                    favorite
                                </span>
                            </div>
                            <div className="text-left">
                                <p className="text-gray-900 font-medium">Favorite Dishes</p>
                                <p className="text-xs text-gray-500">12 items saved</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>
            <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2">
                    App Settings
                </h3>
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 divide-y divide-gray-200">
                    <button onClick={() => handleComingSoon("Settings")} className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-full bg-gray-500/10 flex items-center justify-center text-gray-400">
                                <span className="material-symbols-outlined">settings</span>
                            </div>
                            <div className="text-left">
                                <p className="text-gray-900 font-medium">Settings</p>
                                <p className="text-xs text-gray-500">Notifications, Dark Mode</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
                            chevron_right
                        </span>
                    </button>
                    <button onClick={() => handleComingSoon("Help & Support")} className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-full bg-gray-500/10 flex items-center justify-center text-gray-400">
                                <span className="material-symbols-outlined">headset_mic</span>
                            </div>
                            <div className="text-left">
                                <p className="text-gray-900 font-medium">Help &amp; Support</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>
            <div className="pt-4 pb-8">
                <button onClick={handleLogout} className="w-full py-4 text-primary font-bold text-sm tracking-wide bg-primary/5 border border-primary/20 rounded-2xl hover:bg-primary/10 transition-colors">
                    Log Out
                </button>
                <p className="text-center text-[10px] text-gray-500 mt-4">
                    Version 2.4.0 • Mom&apos;s Kitchen Inc.
                </p>
            </div>
        </div>
    );
}
