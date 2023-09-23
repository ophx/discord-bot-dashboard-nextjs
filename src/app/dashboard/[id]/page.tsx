import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

async function fetchGuildInfo(id: string) {
    const headers = {
        "Authorization": `Bot ${process.env.CLIENT_TOKEN}`,
    }

    const response = await fetch(`https://discord.com/api/guilds/${id}?with_counts=true`, { headers, method: "GET" });
    if (response.ok) {
        return await response.json();
    }
}

export default async function Home({ params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const token = String(cookieStore.get("token")?.value);

    if (!token) {
        redirect("/");
    }

    const guild = await fetchGuildInfo(params.id);
    console.log(guild);

    return (
        <>
            {/* Navbar */}
            <Navbar />

            { /* Main */ }
            <main className="container mx-auto px-64">
                <div className="flex h-screen">
                    <div className="m-auto w-full">
                        <div className="flex items-center">
                            <div>
                                <Image
                                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=300`}
                                    height={150}
                                    width={150}
                                    alt={guild.name}
                                    className="rounded-full shadow-lg mx-auto mr-4"
                                />
                            </div>
                            <div>
                                <p className="text-white text-5xl">{guild.name}</p>
                                <p className="text-gray-400 text-2xl mb-4">Owner ID: {guild.owner_id}</p>
                            </div>
                        </div>
                        <div className="border-b border-[#1f1f1f] mt-4 mb-4"></div>
                        <div className="space-y-10">
                            <div>
                                <p className="text-white text-2xl mb-2">Stats</p>
                                <div className="grid grid-cols-5 gap-4">
                                    <div>
                                        <p className="text-white text-xl text-center">Custom Invite</p>
                                        <p className="text-gray-400 text-center">{guild.vanilty_url_code ? `discord.gg/${guild.vanilty_url_code}` : "None"}</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl text-center">Members</p>
                                        <p className="text-gray-400 text-center">{guild.approximate_member_count}</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl text-center">Members Online</p>
                                        <p className="text-gray-400 text-center">{guild.approximate_presence_count}</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl text-center">Roles</p>
                                        <p className="text-gray-400 text-center">{guild.roles.length}</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl text-center">Stickers</p>
                                        <p className="text-gray-400 text-center">{guild.stickers.length}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-white text-2xl mb-2">Modules</p>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="transition-all duration-150 bg-[#1f1f1f] hover:bg-[#2f2f2f] rounded shadow-lg p-4 cursor-pointer flex justify-between items-center">
                                        <div>
                                            <p className="text-white text-xl">Welcome</p>
                                            <p className="text-gray-400">Edit Your Servers Welcome Channel & Message!</p>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}