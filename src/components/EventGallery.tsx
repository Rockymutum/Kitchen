export default function EventGallery() {
    return (
        <div className="flex flex-col gap-4 px-4 pb-8">
            <h3 className="text-[#181311] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-2">
                Gallery of Events
            </h3>
            <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1 row-span-2 flex flex-col gap-3">
                    <div
                        className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg min-h-[280px] relative"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmejVZQgrtfNZ52VkXtLba2hTkuhyPCCl5OlULjZdOzaLS9zh4asqzi7Vigdx-hOB7Xe0AA5dYRwSHeFt7CHwfQeqOdBR2BFOa9XA6pYwR233X9pLfheC1i3BOYMjFeuG-wgBS3TVv9u2f2ML3mdNqIceHr_Eiy6cMO22ZQtMZ0z_bQzmDO8RGWQlOo4CZm6zxAW2UdEh1ecKoeRsCek-CwayOSvvdDSlK2GbH6mUXZm7G7bocdhRS9qCFC3fKxZaW1XLrBzFDTV0")',
                        }}
                    >
                        <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium uppercase tracking-wide">
                            Corporate
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-3">
                    <div
                        className="w-full h-32 bg-center bg-no-repeat bg-cover rounded-lg relative"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXo9kRb7OKoO39cD9FYHtmQsqdFPhrMWmFUmNW-MJkWYAaIYtEJ3QWd5yWqNZjLad_qJYlFhw9KsqtVnUUzbQpXrPu5-UXPWT8rWs6xFZlZl_eDFQQ3vCskSKry7n5CkeCr9FemvhPZIQKhjAkgVLrBfyCiFGPepONYTsFXmzI4Kn8lhJiaIxtzSdLWX9Itha1WF6ZlytqqQNqLkHK80mt2_mVXxuI0-5aYdhowc1ubbTLYe1iJ_RSW7fOqBkAveFSs5fDtXQlhHM")',
                        }}
                    >
                        <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium uppercase tracking-wide">
                            Parties
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-3">
                    <div
                        className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-lg relative"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBh8f_dgIAQ_AsAs2c8SW8T8uw67WsvaSocRWEJb5igh4GWYmqUVjp7011PaqWp9q1M23zCYgmhR98FYocU4KqgrNLbviOT2Io0xaUcgG5F4BVoo2VxJs6JAW0gzytl9PVLqH0od1CQqmgrZ1VYPeBCRpfyzkDtr20qfNtx3lYWiVgPb0Z8o-QqfJEzBF0GwGYNhj5Qaq2s10q4t0o4ouqdt1-YPQDTsjwdAmQ9xtEwXusKgUgwQF471OEhRKKGJGahWn9VM7w7QH4")',
                        }}
                    >
                        <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium uppercase tracking-wide">
                            Private Dinners
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col gap-3">
                    <div
                        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg relative group overflow-hidden"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgsovrl0b6UzJGzQzuGR06g5yZ3LP7lMbMNyL-PpS6xsNIj_EVnd4HjBaI7XJtWZ0VY3FdnzOIYV_PDAiDeVfPeyARypGw-Wy_mGwtbNk6BtKPObP_73cFjNRWuDGzpI3laIccxx2tSTj3s5uUJQv2UXgD40dhcJVT58IpUOgoBbESXFyJAOPc3rI2jxUz_aGVQGUSl1wrqEGKL80C-GpPaD_A_5xCrpS8zMAI0If5HLbCGfS6cTth-PYvo-KtC0iTyvrX6jN8_z4")',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                        <div className="absolute bottom-3 left-4 text-white font-medium text-sm flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">
                                location_on
                            </span>{" "}
                            Napa Valley Weddings
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
