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
                        <div className="m-auto w-full">
                            <div className="flex flex-col items-center justify-center">
                                <div className="rounded-full shadow-lg bg-[#1f1f1f] animate-pulse mx-auto mb-4 h-[200px] w-[200px]"></div>
                                <div className="flex h-4 w-96 rounded shadow-lg bg-[#1f1f1f] animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </main>

            {/* Footer */}
            <Footer />
        </>
    )
}