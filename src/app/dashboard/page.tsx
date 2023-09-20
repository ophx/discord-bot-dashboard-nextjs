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
                            <p className="text-white text-5xl text-center">Select A Server</p>
                        </div>
                    </div>
                </div>
            </main>

        {/* Footer */}
        <Footer />
        </>
    )
}