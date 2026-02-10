"use client";

import Header from "@/components/Header";
import FeaturedDish from "@/components/FeaturedDish";
import DailySpecials from "@/components/DailySpecials";
import UnifiedMenu from "@/components/UnifiedMenu";
import BottomNav from "@/components/BottomNav";
import SearchFilterBar from "@/components/SearchFilterBar";
import { useState, useRef, useEffect } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVegMode, setIsVegMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        // Only close if search query is empty
        if (!searchQuery) {
          setIsSearchOpen(false);
        }
      }
    }

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen, searchQuery]);

  return (
    <main
      className={`h-screen overflow-hidden transition-[padding] duration-300 ease-in-out ${isSearchOpen ? "pt-[150px]" : "pt-[90px]"
        }`}
    >
      {/* Unified Sticky Header Container */}
      <div
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 pt-safe ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <Header
          noMargin
          isSticky={false}
          className="bg-white"
          onSearchClick={toggleSearch}
        />
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <SearchFilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isVegMode={isVegMode}
            setIsVegMode={setIsVegMode}
            isSticky={false}
          />
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="h-full overflow-y-auto pb-24">
        {/* Hide Featured and Specials when searching to mimic Zomato's search behavior */}
        {!searchQuery && (
          <>
            <FeaturedDish />
            <DailySpecials />
          </>
        )}

        <UnifiedMenu
          searchQuery={searchQuery}
          isVegMode={isVegMode}
        />
      </div>
      <BottomNav />
    </main>
  );
}
