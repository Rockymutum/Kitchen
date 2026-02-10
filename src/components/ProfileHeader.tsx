export default function ProfileHeader() {
    return (
        <div className="relative bg-white">
            <div className="h-32 bg-gradient-to-b from-primary/20 to-transparent"></div>
            <div className="px-6 -mt-16 flex flex-col items-center pb-6">
                <div className="relative">
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-full size-28 border-4 border-white shadow-xl"
                        aria-label="Profile picture of Alex"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4NDPqkgu9HSNOaz7jnNTZy6DigGQTUF9uDs5U-xBsUNyLFx9n48vFeihsnwCB4CpJS3NqZ9K6K2RjHylp2DiXcr3K4hHlvChXORryj0eHkZOJhiEG6bjc6MbaD_ZSH6l4a7XRUbQwj10hC1QWw_VgkIn7Tqzx-ycfhk_WFR7AGyKT-PvTfZEm9eDSfwJFjbXZnMd7ZW8yWXbX_6wydwWaClt28W0Wwodtg3W2AsbTQGEV8im2R6Iq0GvKviiXgjrPdspTEBzoEmw")',
                        }}
                    ></div>
                    <button className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-4 border-white">
                        <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                </div>
                <h1 className="mt-4 text-2xl font-bold text-gray-900 tracking-tight">
                    Alex Johnson
                </h1>
                <p className="text-gray-400 text-sm">Member since 2021</p>
            </div>
        </div>
    );
}
