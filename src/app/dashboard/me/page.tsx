import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

async function getUser(access_token: string) {
    const headers = {
        "Authorization": `Bearer ${access_token}`,
    }

    const response = await fetch("https://discord.com/api/oauth2/@me", { headers, method: "GET" });
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

    let user;
    if (token) {
        user = await getUser(token);
    }

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
                                    src={`https://cdn.discordapp.com/avatars/${user?.user?.id}/${user?.user?.avatar}.png?size=300`}
                                    height={150}
                                    width={150}
                                    alt={user?.user?.username}
                                    className="rounded-full shadow-lg mx-auto mr-4"
                                />
                            </div>
                            <div>
                                <p className="text-white text-5xl">{user?.user?.username}</p>
                                <p className="text-gray-400 text-2xl mb-4">ID: {user?.user?.id}</p>
                            </div>
                        </div>
                        <div className="border-b border-[#1f1f1f] mt-4 mb-4"></div>
                        <div className="space-y-10">
                            <div></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}