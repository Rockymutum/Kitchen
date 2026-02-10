export default function OrderProgress() {
    return (
        <div className="relative pl-2">
            <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-gray-200"></div>

            <div className="relative flex items-center gap-6 mb-8 opacity-50">
                <div className="relative z-10 flex items-center justify-center size-10 rounded-full bg-white border-2 border-primary text-primary shadow-[0_0_10px_rgba(238,91,43,0.3)]">
                    <span className="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                    <h3 className="font-bold text-base text-gray-900">Order Received</h3>
                    <p className="text-xs text-gray-500">10:23 AM</p>
                </div>
            </div>

            <div className="relative flex items-center gap-6 mb-8">
                <div className="relative z-10 flex items-center justify-center size-10 rounded-full bg-primary text-white shadow-[0_0_20px_rgba(238,91,43,0.6)] animate-pulse">
                    <span className="material-symbols-outlined text-xl">skillet</span>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">In the Kitchen</h3>
                    <p className="text-xs text-gray-600">Preparing fresh ingredients</p>
                </div>
            </div>

            <div className="relative flex items-center gap-6 mb-8 opacity-30">
                <div className="relative z-10 flex items-center justify-center size-10 rounded-full bg-gray-100 border-2 border-gray-300 text-gray-400">
                    <span className="material-symbols-outlined text-sm">moped</span>
                </div>
                <div>
                    <h3 className="font-bold text-base text-gray-900">With Driver</h3>
                    <p className="text-xs text-gray-500">Estimated 12:30 PM</p>
                </div>
            </div>

            <div className="relative flex items-center gap-6 opacity-30">
                <div className="relative z-10 flex items-center justify-center size-10 rounded-full bg-gray-100 border-2 border-gray-300 text-gray-400">
                    <span className="material-symbols-outlined text-sm">home_pin</span>
                </div>
                <div>
                    <h3 className="font-bold text-base text-gray-900">Arrived</h3>
                    <p className="text-xs text-gray-500">Enjoy your meal!</p>
                </div>
            </div>
        </div>
    );
}
