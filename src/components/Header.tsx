"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useScrollDirection } from "@/hooks/useScrollDirection";

interface HeaderProps {
    noMargin?: boolean;
    className?: string;
    isSticky?: boolean;
    onSearchClick?: () => void;
}

export default function Header({ noMargin = false, className = "", isSticky = true, onSearchClick }: HeaderProps) {
    const { itemCount } = useCart();
    const scrollDirection = useScrollDirection();

    // If not controlling its own sticky behavior (isSticky=false), we disable the scroll transform logic
    const stickyClass = isSticky
        ? `sticky top-0 z-50 transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`
        : "";

    return (
        <div
            className={`transition-colors ${stickyClass} ${noMargin ? "" : "mb-4"} ${className}`}
        >
            <div className="flex items-center p-4 pb-3 justify-between">
                <div className="flex-1">
                    <p className="text-xs text-primary font-medium uppercase tracking-wider">
                        Welcome back
                    </p>
                    <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight">
                        Mom&apos;s Kitchen
                    </h2>
                </div>
                <div className="flex gap-2 items-center">
                    <Link
                        href="/checkout"
                        className="relative flex items-center justify-center size-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 size-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                    <button
                        onClick={onSearchClick}
                        className="flex items-center justify-center size-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        aria-label="Search"
                    >
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <Link href="/profile">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary cursor-pointer hover:scale-105 transition-transform"
                            aria-label="Profile picture"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4NDPqkgu9HSNOaz7jnNTZy6DigGQTUF9uDs5U-xBsUNyLFx9n48vFeihsnwCB4CpJS3NqZ9K6K2RjHylp2DiXcr3K4hHlvChXORryj0eHkZOJhiEG6bjc6MbaD_ZSH6l4a7XRUbQwj10hC1QWw_VgkIn7Tqzx-ycfhk_WFR7AGyKT-PvTfZEm9eDSfwJFjbXZnMd7ZW8yWXbX_6wydwWaClt28W0Wwodtg3W2AsbTQGEV8im2R6Iq0GvKviiXgjrPdspTEBzoEmw")',
                            }}
                        ></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
