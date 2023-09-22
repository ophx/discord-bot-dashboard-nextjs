import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";

import UserDropdown from "./UserDropdown";

async function getUser(access_token: string) {
    const headers = {
        "Authorization": `Bearer ${access_token}`,
    }

    const response = await fetch("https://discord.com/api/oauth2/@me", { headers, method: "GET" });
    if (response.ok) {
        return await response.json();
    }
}

export default async function Navbar() {
    const cookieStore = cookies();
    const token = String(cookieStore.get("token")?.value);

    let user;
    if (token) {
        user = await getUser(token);
    }

    return (
        <div className="fixed top-0 w-full bg-[#1f1f1f] shadow-lg p-4">
            <div className="flex justify-between items-center">
                <div>
                    <Link href="/" className="flex items-center">
                        <Image
                            src={`${process.env.ICON}`}
                            height={35}
                            width={35}
                            alt={`${process.env.CLIENT_NAME}`}
                            className="rounded-full shadow-lg mr-2"
                        />
                        <span className="text-white">{process.env.CLIENT_NAME}</span>
                    </Link>
                </div>
                <div className="flex gap-8">
                    <Link href="/team" className="transition-all duration-150 font-medium text-gray-400 hover:text-white">
                        Our Team
                    </Link>
                </div>
                <div>
                    {
                        user
                        ?
                        (
                            <UserDropdown user={user} />
                        )
                        :
                        (
                            <Link href="/api/login" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white text-sm">
                                Login With Discord
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}