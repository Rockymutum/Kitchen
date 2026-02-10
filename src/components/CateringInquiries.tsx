export default function LiveMap() {
    return (
        <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-50 mt-2">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "radial-gradient(#d1d5db 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            ></div>

            <div className="absolute top-1/2 left-0 w-full h-3 bg-gray-200 -rotate-6"></div>
            <div className="absolute top-0 right-1/3 h-full w-3 bg-gray-200 rotate-12"></div>

            <div className="absolute top-1/3 right-1/3 translate-x-1/2 translate-y-2 flex flex-col items-center">
                <div className="relative flex items-center justify-center size-8 bg-primary rounded-full shadow-lg shadow-black/20 z-20">
                    <span className="material-symbols-outlined text-white text-sm">
                        moped
                    </span>
                </div>
                <div className="w-2 h-2 bg-primary rotate-45 -mt-1 z-10"></div>
                <div className="w-12 h-4 bg-gray-300/40 rounded-[100%] blur-sm -mt-1"></div>
            </div>

            <div className="absolute bottom-8 left-8 flex flex-col items-center opacity-50">
                <div className="size-3 bg-primary rounded-full shadow-[0_0_10px_rgba(238,91,43,0.6)]"></div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-gray-200 p-3 rounded-xl flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
                            <span className="material-symbols-outlined text-lg">person</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium uppercase">
                            Your Driver
                        </p>
                        <h4 className="text-sm font-bold text-gray-900">Michael T.</h4>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="size-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                        <span className="material-symbols-outlined text-base">call</span>
                    </button>
                    <button className="size-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                        <span className="material-symbols-outlined text-base">chat</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
