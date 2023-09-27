import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { fetchGuildInfo, fetchGuildChannels } from "../../utils/guild";
import { getUser } from "../../utils/user";

import Sidebar from "../../components/Sidebar";
import { PieGraph } from "../../components/Graphs";

export default async function Home({ params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const token = String(cookieStore.get("token")?.value);

    if (!token) {
        redirect("/");
    }

    const guild = await fetchGuildInfo(params.id);
    const guildChannels = await fetchGuildChannels(params.id);
    
    const category = guildChannels.filter(( channel: any ) => channel.type === 4);
    const text = guildChannels.filter(( channel: any ) => channel.type === 0);
    const voice = guildChannels.filter(( channel: any ) => channel.type === 2);
    const announcement = guildChannels.filter(( channel: any ) => channel.type === 5);

    const user = await getUser(token);

    return (
        <>
            <div className="flex">
                {/* Sidebar */}
                <Sidebar guildName={guild.name} guildIcon={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=300`} />

                { /* Main */ }
                <main className="ml-64 block w-full space-y-2">
                    <div className="bg-[#1f1f1f] px-4 py-2 shadow-lg">
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <p className="text-gray-400">Dashboard / {guild.id} / Stats</p>
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
                                <Link href="/api/logout" className="transition-all duration-200 font-medium text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#1f1f1f] rounded shadow-lg p-4">
                                <p className="text-white text-xl">Members</p>
                                <div className="h-[300px] w-[300px] flex justify-center mx-auto">
                                    <PieGraph labels={["Members", "Online Members"]} labelData={[guild.approximate_member_count, guild.approximate_presence_count]} />
                                </div>
                            </div>
                            <div className="bg-[#1f1f1f] rounded shadow-lg p-4">
                                <p className="text-white text-xl">Channels</p>
                                <div className="h-[300px] w-[300px] flex justify-center mx-auto">
                                    <PieGraph labels={["Categories", "Text Channels", "Voice Channels", "Announcement Channels"]} labelData={[category.length, text.length, voice.length, announcement.length]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}