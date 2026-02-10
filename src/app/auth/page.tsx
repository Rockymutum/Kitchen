"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock auth logic
        console.log("Authenticating...");

        // Set a mock session cookie
        document.cookie = "auth_token=mock_token; path=/; max-age=86400";

        setTimeout(() => {
            router.push("/");
        }, 800);
    };

    return (
        <div className="fixed inset-0 z-[9999] h-[100dvh] w-full bg-[#fcfbf9] flex flex-col items-center justify-center p-6 overflow-hidden pt-safe pb-safe">
            {/* Ambient Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none" />



            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md relative z-10"
            >
                {/* Brand Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex items-center justify-center size-20 rounded-2xl bg-white shadow-xl shadow-orange-500/10 mb-6 mx-auto"
                    >
                        <span className="material-symbols-outlined text-[2.5rem] text-primary">restaurant_menu</span>
                    </motion.div>
                    <h1 className="text-4xl font-black text-stone-900 tracking-tight mb-2">
                        Mom&apos;s Kitchen
                    </h1>
                    <p className="text-stone-500 text-lg font-medium">
                        Taste the warmth of home.
                    </p>
                </div>

                {/* Auth Card */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100 relative overflow-hidden">
                    {/* Toggle Slider */}
                    <div className="relative flex bg-stone-100 p-1.5 rounded-2xl mb-8">
                        {/* Animated slider background */}
                        <motion.div
                            className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm"
                            layout
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{
                                left: isLogin ? "6px" : "calc(50%)"
                            }}
                        />

                        <button
                            type="button"
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 relative z-10 py-3 text-sm font-bold transition-colors ${isLogin ? "text-stone-900" : "text-stone-500"}`}
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 relative z-10 py-3 text-sm font-bold transition-colors ${!isLogin ? "text-stone-900" : "text-stone-500"}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <AnimatePresence mode="popLayout">
                            {!isLogin && (
                                <motion.div
                                    key="name-field"
                                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                    animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
                                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="group relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary transition-colors material-symbols-outlined">
                                            person
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-stone-50 border-2 border-transparent text-stone-900 text-base font-medium rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-stone-400"
                                            required={!isLogin}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="group relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary transition-colors material-symbols-outlined">
                                mail
                            </span>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-stone-50 border-2 border-transparent text-stone-900 text-base font-medium rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-stone-400"
                                required
                            />
                        </div>

                        <div className="group relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary transition-colors material-symbols-outlined">
                                lock
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-stone-50 border-2 border-transparent text-stone-900 text-base font-medium rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-stone-400"
                                required
                            />
                        </div>

                        {isLogin && (
                            <div className="flex justify-end">
                                <button type="button" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-primary text-white text-base font-bold py-4 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all mt-4"
                        >
                            {isLogin ? "Log In" : "Create Account"}
                        </motion.button>
                    </form>

                    <div className="mt-8 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-stone-100"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-4 text-stone-400 font-bold tracking-wider">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                // Set mock auth cookie for Google login
                                document.cookie = "auth_token=mock_google_token; path=/; max-age=86400";
                                router.push("/");
                            }}
                            className="flex-1 flex items-center justify-center gap-2 py-3 border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors"
                        >
                            <svg className="size-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors">
                            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.56-2.09-.48-3.08.06-1.54.85-2.93-.19-3.8-1.41-2.14-2.99-1.84-7.57 2.06-9.15 1.76-.71 3.1-.2 4.14.7.77.67 2.05.77 3.08-.23 1.03-1 2.58-.8 4.24-.03 2.15 1 3.2 3.1 3.36 3.63-.03.05-1.96 1.05-2.19 4.13-.23 3.08 2.09 4.29 2.18 4.33-.27 1.05-1.12 3.43-2.67 4.94-1.32 1.28-2.68 1.4-4.24 2.68zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-stone-400 font-medium px-8">
                    By continuing, you agree to our
                    <a href="#" className="underline decoration-stone-300 hover:text-stone-600 ml-1">Terms of Service</a> &
                    <a href="#" className="underline decoration-stone-300 hover:text-stone-600 ml-1">Privacy Policy</a>
                </div>
            </motion.div>
        </div>
    );
}
