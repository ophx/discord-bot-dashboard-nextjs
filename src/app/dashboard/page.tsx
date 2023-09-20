import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
        redirect("/");
    }

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
                                    <a href="/dashboard/:id" className="transition-all duration-150 text-center hover:bg-[#2f2f2f] hover:rounded hover:shadow-lg py-2">
                                        <Image
                                            src={`${process.env.ICON}`}
                                            height={100}
                                            width={100}
                                            alt="ServerLogo"
                                            className="rounded-full shadow-lg mx-auto mb-2"
                                        />
                                        <p className="text-white text-xl">Server Name</p>
                                        <p className="text-gray-400">0 Members</p>
                                    </a>
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