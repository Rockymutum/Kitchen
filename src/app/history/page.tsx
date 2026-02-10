import TrackingHeader from "@/components/HistoryHeader";
import KitchenView from "@/components/ActiveOrder";
import OrderProgress from "@/components/PastOrders";
import LiveMap from "@/components/CateringInquiries";
import BottomNav from "@/components/BottomNav";

export default function HistoryPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <TrackingHeader />
            <KitchenView />
            <div className="flex-1 flex flex-col px-4 py-4 gap-6">
                <OrderProgress />
                <LiveMap />
            </div>
            <BottomNav />
        </main>
    );
}
