import { useScrollDirection } from "@/hooks/useScrollDirection";

interface SearchFilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    isVegMode: boolean;
    setIsVegMode: (isVeg: boolean) => void;
    className?: string;
    isSticky?: boolean;
}

export default function SearchFilterBar({ searchQuery, setSearchQuery, isVegMode, setIsVegMode, className = "", isSticky = true }: SearchFilterBarProps) {
    const scrollDirection = useScrollDirection();

    const stickyClass = isSticky
        ? `sticky z-40 transition-all duration-300 ${scrollDirection === "down" ? "top-0" : "top-[60px]"}`
        : "";

    return (
        <div className={`bg-transparent px-4 pb-3 ${stickyClass} ${className}`}>
            <div className="bg-white p-2 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3">
                {/* Search Bar */}
                <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary font-bold">
                        search
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-2 py-2 bg-transparent border-none text-stone-900 placeholder-stone-400 focus:ring-0 text-sm font-medium h-10"
                    />
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-8 bg-stone-200"></div>

                {/* Veg Mode Toggle (Compact) */}
                <button
                    onClick={() => setIsVegMode(!isVegMode)}
                    className="flex items-center gap-2 pl-2"
                >
                    <span className={`material-symbols-outlined text-xl ${isVegMode ? "text-green-600" : "text-stone-300"}`}>
                        eco
                    </span>
                    <div className={`w-9 h-5 rounded-full transition-colors relative ${isVegMode ? 'bg-green-500' : 'bg-stone-300'}`}>
                        <div className={`absolute top-0.5 left-0.5 size-4 bg-white rounded-full transition-transform shadow-sm ${isVegMode ? 'translate-x-4' : 'translate-x-0'}`} />
                    </div>
                </button>
            </div>
        </div>
    );
}
