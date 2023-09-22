import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Loading() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            { /* Main */ }
            <main className="container mx-auto px-64">
                <div className="flex h-screen">
                    <div className="flex items-center">
                        <div>
                            <div className="rounded-full shadow-lg bg-[#1f1f1f] animate-pulse mx-auto mr-4 h-[150px] w-[150px]"></div>
                        </div>
                        <div>
                            <div className="flex h-4 w-96 rounded shadow-lg bg-[#1f1f1f] animate-pulse"></div>
                        </div>
                    </div>
                    <div className="border-b border-[#1f1f1f] mt-4 mb-4"></div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}