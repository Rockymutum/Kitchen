"use client";

import { useState } from "react";

export default function SpecialRequests() {
    const [note, setNote] = useState("");

    return (
        <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Mom&apos;s Note</h2>
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 focus-within:border-primary/50 transition-colors">
                <div className="flex gap-3">
                    <span className="material-symbols-outlined text-gray-400">
                        edit_note
                    </span>
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="w-full bg-transparent border-none text-sm text-gray-900 placeholder-gray-500 focus:ring-0 p-0 resize-none h-16 focus:outline-none"
                        placeholder="Any special requests? (e.g. less spicy, extra sauce)"
                    ></textarea>
                </div>
            </div>
            {note && (
                <p className="text-xs text-gray-500 mt-2 px-1">
                    {note.length} characters
                </p>
            )}
        </section>
    );
}
