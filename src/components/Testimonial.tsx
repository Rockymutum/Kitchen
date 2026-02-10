export default function Testimonial() {
    return (
        <div className="px-8 py-12 bg-white text-center relative overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{
                    backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdoXecBjphDR3DUFyiEDub0acQZnYHhCvj0aegHgyQ6t4FpMa7UuywF2khvJly33zZjDAnEQxAcAh-ubi1E2YAyz_AEPPx6ahWg_MAx_7e9wrfTh-gtJZ8_00GfyvlBKcFaXY66WYXESLFlr2pb7Rj7-JmgPgGoieQZHUqX2Bl4BC8PN6QiB6XOdXQNTc91af4FfHyM7f78IZW90YEwv0APFF88N_bmIgj4w3k50TchLW0G3oXt6O1NMXG8QDcr8Cd90bqqSfsn9g")',
                }}
            ></div>
            <span className="material-symbols-outlined text-primary/40 text-4xl mb-4">
                format_quote
            </span>
            <p className="text-xl md:text-2xl text-[#181311] font-display italic mb-6">
                &quot;Mom&apos;s Kitchen catered our annual corporate retreat and
                everyone raved about the food. It felt personal and professional.&quot;
            </p>
            <div className="flex flex-col items-center">
                <div
                    className="w-12 h-12 rounded-full bg-gray-300 mb-2 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBE9feFDdl_gWy5hHRW-KqK_Fcs7VR8n8jdSRNi5NogUjImXEfNTZcO-j4iBliK-Rds7r2Srn0o-c2pw1hwDUawFIMR4bjyVakIw-FhLDnTze2SrEQvLEdscGaLH3t9p2AipS4pBoXf-VwsmF_zH7aCwiUnx3GNdSfzBN_qWVieQ8C0dzRGRKmlX5lae3J-33nHtlI-TUeUVr7-75gngmXL4ePEsKSSXOOTBpcGkttWZKiphd52czoUoVunvcmcvHMy8457fJqotTA")',
                    }}
                ></div>
                <p className="text-sm font-bold text-[#181311] uppercase tracking-wider">
                    TechStart Inc.
                </p>
                <p className="text-xs text-gray-500">Holiday Party 2023</p>
            </div>
        </div>
    );
}
