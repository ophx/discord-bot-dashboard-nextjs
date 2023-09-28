import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getUser } from "../../utils/user";

import Sidebar from "../../components/dashboard/Sidebar";
import { PieGraph } from "../../components/dashboard/Graphs";
import Header from "../../components/dashboard/Header";
import Link from "next/link";

export default async function Loading() {
    const cookieStore = cookies();
    const token = String(cookieStore.get("token")?.value);

    if (!token) {
        redirect("/");
    }

    const user = await getUser(token);

    return (
        <>
            <div className="flex">
                {/* Sidebar */}
                <div className="fixed top-0 left-0 z-[1000] w-64 h-screen">
                    <div className="h-full p-4 overflow-y-auto bg-[#1f1f1f] shadow-lg">
                        <ul className="space-y-2">
                            <li className="px-4 py-2">
                                <div className="flex items-center">
                                    <div>
                                        <div className="rounded-full shadow-lg bg-[#3f3f3f] animate-pulse mx-auto mr-2 h-[35px] w-[35px]"></div>
                                    </div>
                                    <div>
                                        <div className="flex h-2.5 w-32 rounded shadow-lg bg-[#3f3f3f] animate-pulse"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="px-4 py-2">
                                <div className="flex h-2.5 w-32 rounded shadow-lg bg-[#3f3f3f] animate-pulse"></div>
                            </li>
                            <li className="px-4 py-2">
                                <div className="flex h-2.5 w-32 rounded shadow-lg bg-[#3f3f3f] animate-pulse"></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <main className="ml-64 block w-full space-y-2">
                    {/* Header */}
                    <div className="bg-[#1f1f1f] px-4 py-2 shadow-lg">
                        <Header user={user} page="Loading..." />
                    </div>
                </main>
            </div>
        </>
    )
}