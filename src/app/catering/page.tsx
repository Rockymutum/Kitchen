import Header from "@/components/Header";
import CateringHero from "@/components/CateringHero";
import EventGallery from "@/components/EventGallery";
import CateringPackages from "@/components/CateringPackages";
import Testimonial from "@/components/Testimonial";
import ContactCTA from "@/components/ContactCTA";
import BottomNav from "@/components/BottomNav";

export default function CateringPage() {
    return (
        <main className="relative flex h-auto min-h-screen w-full flex-col max-w-md mx-auto bg-white shadow-2xl">
            <Header noMargin className="bg-white" />
            <CateringHero />
            <div className="px-6 py-10 bg-white">
                <p className="text-[#181311] text-lg md:text-xl font-normal leading-relaxed text-center italic">
                    &quot;From intimate dinners to grand celebrations, we bring the warmth
                    of home cooking to your table.&quot;
                </p>
            </div>
            <EventGallery />
            <CateringPackages />
            <Testimonial />
            <ContactCTA />

            <BottomNav />
        </main>
    );
}
