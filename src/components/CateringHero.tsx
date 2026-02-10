export default function CateringHero() {
    return (
        <div className="relative w-full">
            <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden w-full min-h-[380px]"
                style={{
                    backgroundImage:
                        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQUjJ3ZLrkuN4Mz3NxwFC-aR4UmGxklbVOqokO2YBCsZRWONoYKChu01RnYg5v2uF3bSBzM-SeAq7XdRqs7z2k43FRg7nozHblGFD_xaaPYoxCNr7MY-DasxnEpILn3WOrlymd0IdjmvrmRaLlzE9ZAun1Hdg_mxEZp7bUrrRFLndWvv7BP3vSQ6Bh5GoJ5JMiHXa-YRmyg09eDli5jyw6wzws47hkOZ6HdGR3iT_UYAoIN7Sw-6ZuAa6vXjYZh661PuOxLy6VHRw")',
                }}
            >
                <div className="flex flex-col p-6 pb-8">
                    <span className="text-white/90 text-sm font-medium tracking-widest uppercase mb-2">
                        Mom&apos;s Kitchen Events
                    </span>
                    <h1 className="text-white tracking-tight text-4xl font-bold leading-tight mb-4 drop-shadow-sm">
                        Unforgettable Feasts for Every Occasion
                    </h1>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 self-start px-6 py-2 rounded-full text-sm font-bold transition-all">
                        Request Quote
                    </button>
                </div>
            </div>
        </div>
    );
}
