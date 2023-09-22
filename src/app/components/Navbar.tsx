import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";

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
                        token
                        ?
                        <div>
                            <div className="select-none cursor-pointer flex items-center">
                                <div>
                                    <Image
                                        src={`https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}.png?size=4096`}
                                        height={35}
                                        width={35}
                                        alt={user.user.username}
                                        className="rounded-full shadow-lg mr-2"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <span className="text-white">{user.user.username}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                        </svg>
                                </div>
                            </div>
                            <div id="dropdown" className="fixed right-1 mt-2 z-10 rounded shadow-lg px-2 py-2 bg-[#2f2f2f]">
                                <Link href="/dashboard" className="transition-all duration-150 font-medium text-gray-400 hover:text-white px-4 py-2 flex w-full rounded hover:shadow-lg hover:bg-[#3f3f3f]">
                                    Select A Server
                                </Link>
                                <Link href="/api/logout" className="transition-all duration-150 font-medium text-red-600 hover:text-red-600 px-4 py-2 flex w-full rounded hover:shadow-lg hover:bg-[#3f3f3f]">
                                    Logout
                                </Link>
                            </div>
                        </div>
                        :
                        <Link href="/api/login" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white text-sm">
                            Login With Discord
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}