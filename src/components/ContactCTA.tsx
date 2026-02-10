export default function ContactCTA() {
    return (
        <div className="px-4 pb-8 pt-4 bg-white">
            <div className="bg-stone-50 rounded-xl shadow-xl p-6 border border-gray-200 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
                <div className="mb-4 relative">
                    <div
                        className="w-16 h-16 rounded-full border-2 border-white shadow-md bg-cover bg-center"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ5mr9O9E4TVf_k59I_EbwYVXsxZ1dNc0UA5S5aQ2TLElJDnu5bZzVEShKLgTVha1GBe78bgMOvJOaLxqS-LSJfSX3ZedD593I_9r_Su2RP3MX6TC7Tr5Mkq9aFn5grqalVVCIyWLvsMlWJacE8Un3rmamYX7iSVHvGU-UNK8X9SnOxcNYdnEMc8pbHLpZ0_mJd7TxAzPvrfcxvBbj7zP08aZciOzw8LZAsHqlo5-qv30mNJ7gwBQPQqh_zD1mwL-Ac6Hbx44hVjU")',
                        }}
                    ></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-[#181311] mb-1">
                    Plan with Mom
                </h3>
                <p className="text-sm text-gray-500 mb-6 px-4">
                    Not sure what fits your event? Let&apos;s chat about menus, dietary
                    needs, and custom themes.
                </p>
                <div className="flex flex-col gap-3 w-full">
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e3300b] px-5 py-3 text-base font-bold text-white transition-colors hover:bg-[#c92a09]">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                        Call Us for Custom Menu
                    </button>

                </div>
            </div>
        </div>
    );
}
