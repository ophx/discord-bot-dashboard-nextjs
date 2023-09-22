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

    const response = await fetch(`https://discord.com/api/guilds/${id}`, { headers, method: "GET" });
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

    return (
        <>
            {/* Navbar */}
            <Navbar />

            { /* Main */ }
                <main className="container mx-auto px-64">
                    <div className="flex h-screen">
                        <div className="m-auto w-full">
                            <div>
                                <p className="text-white text-5xl text-center mb-4">{guild.name}</p>
                            </div>
                        </div>
                    </div>
                </main>

            {/* Footer */}
            <Footer />
        </>
    )
}