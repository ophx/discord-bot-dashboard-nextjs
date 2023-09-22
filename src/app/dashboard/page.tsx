import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

async function fetchGuilds(access_token: string) {
    const headers = {
        "Authorization": `Bearer ${access_token}`,
    }

    const response = await fetch("https://discord.com/api/users/@me/guilds", { headers, method: "GET" });
    if (response.ok) {
        return await response.json();
    }
}

async function fetchBotGuilds() {
    const headers = {
        "Authorization": `Bot ${process.env.CLIENT_TOKEN}`,
    }

    const response = await fetch("https://discord.com/api/users/@me/guilds", { headers, method: "GET" });
    if (response.ok) {
        return await response.json();
    }
}

export default async function Home() {
    const cookieStore = cookies();
    const token = String(cookieStore.get("token")?.value);

    if (!token) {
        redirect("/");
    }

    const guilds = await fetchGuilds(token);
    const botGuilds = await fetchBotGuilds();
    const mutualGuilds = guilds.filter((guild: any) => botGuilds.some((botGuild: any) => botGuild.id === guild.id));

    return (
        <>
            {/* Navbar */}
            <Navbar />

            { /* Main */ }
            <main className="container mx-auto px-64">
                <div className="flex h-screen">
                    <div className="m-auto w-full">
                        <div>
                            <p className="text-white text-5xl text-center mb-4">Select A Server</p>
                            <div className="bg-[#1f1f1f] rounded shadow-lg p-4">
                                <div className="grid grid-cols-4 gap-4">
                                    {mutualGuilds.map((guild: any) => (
                                        guild.permissions === 2147483647 &&
                                        <div key={guild.id} className="transition-all duration-150 text-center hover:bg-[#2f2f2f] hover:rounded hover:shadow-lg py-2">
                                            <Link href={`/dashboard/${guild.id}`}>
                                                <Image
                                                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=300`}
                                                    height={100}
                                                    width={100}
                                                    alt={guild.name}
                                                    className="rounded-full shadow-lg mx-auto mb-2"
                                                />
                                                <p className="text-white text-xl truncate">{guild.name}</p>
                                                <p className="text-gray-400 truncate">0 Members</p>
                                            </Link>
                                        </div>
                                    ))}
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