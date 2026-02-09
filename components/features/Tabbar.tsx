"use client";


import Link from "next/link";

export default function Tabbar( { currentTab } : { currentTab : string } ) {
    const tabs = ["Home", "Products", "Contact"];
    return (
        <div className="w-full z-50 sticky top-5 flex flex-row items-center justify-evenly gap-2">
            {tabs.map((tab) => (
                <Link
                    key={tab}
                    href={tab === "Home" ? "/" : `/${tab}`}
                    className={`text-foreground backdrop-blur-md rounded-2xl text-[12px] px-3 py-1 transition-all ${
                        currentTab === tab 
                            ? "bg-red-500 text-white font-medium shadow-sm" 
                            : "bg-[#ffffff50]"
                    }`}
                >
                    {tab}
                </Link>
            ))}
        </div>
    )
}