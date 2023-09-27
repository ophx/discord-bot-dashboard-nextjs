"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ guild }: { guild: any }) {
    const pathname = usePathname();

    return (
        <div className="fixed top-0 left-0 z-[1000] w-64 h-screen">
            <div className="h-full p-4 overflow-y-auto bg-[#1f1f1f] shadow-lg">
                <ul className="space-y-2">
                    <li className="px-4 py-2">
                        <div className="flex items-center">
                            <div>
                                <Image
                                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=300`}
                                    height={35}
                                    width={35}
                                    alt={guild.name}
                                    className="rounded-full shadow-lg mx-auto mr-2"
                                />
                            </div>
                            <div>
                                <p className="text-white text-center">{guild.name}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href={`/dashboard/${guild.id}`} className={`transition-all duration-200 ${pathname == `/dashboard/${guild.id}` ? "text-white bg-[#2f2f2f] shadow-lg rounded" : "text-gray-400 hover:text-white hover:bg-[#2f2f2f] hover:shadow-lg hover:rounded"} px-4 py-2 flex items-center w-full`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                            </svg>
                            <span>Stats</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}