import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { fetchGuildInfo, fetchGuildChannels } from "../../utils/guild";
import { getUser } from "../../utils/user";

import Sidebar from "../../components/dashboard/Sidebar";
import { PieGraph } from "../../components/dashboard/Graphs";
import Header from "../../components/dashboard/Header";

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
                <Sidebar guild={guild} />

                <main className="ml-64 block w-full space-y-2">
                    {/* Header */}
                    <div className="bg-[#1f1f1f] px-4 py-2 shadow-lg">
                        <Header user={user} />
                    </div>

                    {/* Main */}
                    <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#1f1f1f] rounded shadow-lg p-4">
                                <p className="text-white text-xl">Basic Server Info</p>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <p className="text-gray-400">
                                            Vanity URL
                                            <br />
                                            <span className="text-white">{guild.vanity_url_code ? `discord.gg/${guild.vanity_url_code}` : "No Custom Code"}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">
                                            Roles
                                            <br />
                                            <span className="text-white">{guild.roles.length}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">
                                            Emojis
                                            <br />
                                            <span className="text-white">{guild.emojis.length}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">
                                            Stickers
                                            <br />
                                            <span className="text-white">{guild.stickers.length}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">
                                            Boost Level
                                            <br />
                                            <span className="text-white">{guild.premium_tier}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">
                                            Boosts
                                            <br />
                                            <span className="text-white">{guild.premium_subscription_count}</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
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