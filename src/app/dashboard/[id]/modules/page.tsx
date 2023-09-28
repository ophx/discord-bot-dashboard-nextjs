import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { fetchGuildInfo } from "../../../utils/guild";
import { getUser } from "../../../utils/user";

import Sidebar from "../../../components/dashboard/Sidebar";
import Header from "../../../components/dashboard/Header";

export default async function Home({ params }: { params: { id: string }}) {
    const cookieStore = cookies();
    const token = String(cookieStore.get("token")?.value);

    if (!token) {
        redirect("/");
    }

    const guild = await fetchGuildInfo(params.id);

    const user = await getUser(token);

    const placeholder = [...Array(20)];

    return (
        <>
            <div className="flex">
                {/* Sidebar */}
                <Sidebar guild={guild} />

                <main className="ml-64 block w-full space-y-2">
                    {/* Header */}
                    <div className="bg-[#1f1f1f] px-4 py-2 shadow-lg">
                        <Header user={user} page="Modules" />
                    </div>

                    {/* Main */}
                    <div className="p-4">
                        <div className="grid grid-cols-4 gap-4">
                            {placeholder.map((a: any, i: any) => (
                                <div key={i} className="bg-[#1f1f1f] rounded shadow-lg p-4">
                                    <p className="text-white text-xl">Lorem</p>
                                    <p className="text-gray-400">Lorem ipsum dolor sit</p>
                                    <Link href="" className="flex mt-1 transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                                        Lorem
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}