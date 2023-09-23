"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function UserDropdown({ user }: { user: any }) {
    const [ active, setActive ] = useState(false);

    return (
        <div>
            <div onClick={() => setActive((prev) => !prev)} className="select-none cursor-pointer flex items-center">
                <div>
                    <Image
                        src={`https://cdn.discordapp.com/avatars/${user?.user?.id}/${user?.user?.avatar}.png?size=4096`}
                        height={35}
                        width={35}
                        alt={user?.user?.username}
                        className="rounded-full shadow-lg mr-2"
                    />
                </div>
                <div className="flex items-center">
                    <span className="text-white">{user?.user?.username}</span>
                    {
                        active
                        ?
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white ml-2">
                                <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                            </svg>
                        )
                        :
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white ml-2">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        )
                    }
                </div>
            </div>
            {active && (
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    className="fixed right-1 w-48 mt-2 z-10 rounded shadow-lg px-2 py-2 bg-[#2f2f2f]"
                >
                    <Link href="/dashboard" className="transition-all duration-150 font-medium text-gray-400 hover:text-white px-4 py-2 flex w-full rounded hover:shadow-lg hover:bg-[#3f3f3f]">
                        Select A Server
                    </Link>
                    <Link href="/dashboard/me" className="transition-all duration-150 font-medium text-gray-400 hover:text-white px-4 py-2 flex w-full rounded hover:shadow-lg hover:bg-[#3f3f3f]">
                        View Your Profile
                    </Link>
                    <Link href="/api/logout" className="transition-all duration-150 font-medium text-red-600 hover:text-red-600 px-4 py-2 flex w-full rounded hover:shadow-lg hover:bg-[#3f3f3f]">
                        Logout
                    </Link>
                </motion.div>
            )}
        </div>          
    )
}