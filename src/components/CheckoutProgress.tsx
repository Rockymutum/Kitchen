interface CheckoutProgressProps {
    currentStep: 1 | 2 | 3;
}

export default function CheckoutProgress({ currentStep }: CheckoutProgressProps) {
    const getStepStatus = (step: number) => {
        if (currentStep > step) return "completed";
        if (currentStep === step) return "active";
        return "pending";
    };

    return (
        <div className="px-8 py-6">
            <div className="relative flex items-center justify-between">
                {/* Progress Bar Background */}
                <div className="absolute left-0 top-4 -translate-y-1/2 w-full h-0.5 bg-stone-200 -z-10"></div>

                {/* Active Progress Bar */}
                <div
                    className="absolute left-0 top-4 -translate-y-1/2 h-0.5 bg-primary -z-10 transition-all duration-300"
                    style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                ></div>

                {/* Step 1: Basket */}
                <Step
                    number={1}
                    label="Basket"
                    status={getStepStatus(1)}
                    icon="shopping_basket"
                />

                {/* Step 2: Details */}
                <Step
                    number={2}
                    label="Details"
                    status={getStepStatus(2)}
                    icon="list_alt"
                />

                {/* Step 3: Payment */}
                <Step
                    number={3}
                    label="Payment"
                    status={getStepStatus(3)}
                    icon="payments"
                />
            </div>
        </div>
    );
}

function Step({ number, label, status, icon }: { number: number; label: string; status: "completed" | "active" | "pending"; icon: string }) {
    const isCompleted = status === "completed";
    const isActive = status === "active";

    return (
        <div className="flex flex-col items-center gap-2">
            <div
                className={`size-8 rounded-full flex items-center justify-center text-sm font-bold border-4 border-stone-50 transition-all duration-300 ${isCompleted || isActive
                    ? "bg-primary text-white"
                    : "bg-stone-200 text-gray-400"
                    } ${isActive ? "shadow-lg shadow-primary/20 scale-110" : ""}`}
            >
                {isCompleted ? (
                    <span className="material-symbols-outlined text-sm">check</span>
                ) : (
                    <span>{number}</span>
                )}
            </div>
            <span
                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-all duration-300 ${isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-stone-100 text-gray-400"
                    } ${isCompleted ? "text-primary bg-primary/10" : ""}`}
            >
                {label}
            </span>
        </div>
    );
}
