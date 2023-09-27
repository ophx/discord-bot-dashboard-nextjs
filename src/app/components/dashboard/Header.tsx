"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ user }: { user: any }) {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-between w-full">
            <div>
                <p className="text-gray-400">{pathname}</p>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/dashboard" className="transition-all duration-200 hover:bg-[#2f2f2f] hover:shadow-lg hover:rounded px-4 py-2 flex w-full">
                    <div className="flex items-center">
                        <div>
                            <Image
                                src={`https://cdn.discordapp.com/avatars/${user?.user?.id}/${user?.user?.avatar}.png?size=4096`}
                                height={35}
                                width={35}
                                alt={user?.user?.username}
                                className="rounded-full shadow-lg mr-2"
                            />
                        </div>
                        <div>
                            <p className="text-white">{user?.user?.username}</p>
                        </div>
                    </div>
                </Link>
                <Link href="/api/logout" className="transition-all duration-200 font-medium text-red-500 hover:text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}