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
                        <p className="text-white">fsdfsdfsdfsdf</p>
                    </div>
                </main>
            </div>
        </>
    )
}