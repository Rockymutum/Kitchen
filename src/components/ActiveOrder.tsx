export default function KitchenView() {
    return (
        <div className="px-4 py-2">
            <div className="relative overflow-hidden rounded-3xl h-[280px] shadow-2xl border border-white/5 bg-background-dark">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDntsuGtD5fRIiuQxVuD9D0xk_nhr8AHza1lG0u3gEKvWFZAsz46-JlWk_KvIXMYI0tfFI8gKm-bp6_PP5iwBngzZ1IMggxveZiALjR0X39eQAiADBmCXc-YhSJSiPAyHBeBczfEX906lTwunemKqoRkGqhWjhBX2ntuRci2bFfNBfb8ybTkXzrpeWyMXXPr2OEKEQKkDcILFC1ef9WQ9ntvtwxosR7NhTlTTo3Hw8_xCrcHnlBrile7RRTNwxbDPE0oShcleKTZjs")',
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start z-10">
                    <div className="flex items-center gap-2 mb-3 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                            Live Kitchen View
                        </span>
                    </div>
                    <h1 className="text-2xl font-bold leading-tight mb-1 text-white shadow-sm">
                        Mom is hand-stretching your dough right now.
                    </h1>
                    <p className="text-gray-300 text-sm">Prepared with love by Chef Maria</p>
                </div>
            </div>
        </div>
    );
}
