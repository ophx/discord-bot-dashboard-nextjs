import Navbar from "../components/Navbar";

export default function Loading() {
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
                                    <div className="text-center py-2 flex flex-col items-center">
                                        <div className="rounded-full shadow-lg bg-[#3f3f3f] animate-pulse mx-auto mb-2 h-[100px] w-[100px]"></div>
                                        <div className="flex h-2.5 w-full rounded shadow-lg bg-[#3f3f3f] animate-pulse mb-2"></div>
                                    </div>
                                    <div className="text-center py-2 flex flex-col items-center">
                                        <div className="rounded-full shadow-lg bg-[#3f3f3f] animate-pulse mx-auto mb-2 h-[100px] w-[100px]"></div>
                                        <div className="flex h-2.5 w-full rounded shadow-lg bg-[#3f3f3f] animate-pulse mb-2"></div>
                                    </div>
                                    <div className="text-center py-2 flex flex-col items-center">
                                        <div className="rounded-full shadow-lg bg-[#3f3f3f] animate-pulse mx-auto mb-2 h-[100px] w-[100px]"></div>
                                        <div className="flex h-2.5 w-full rounded shadow-lg bg-[#3f3f3f] animate-pulse mb-2"></div>
                                    </div>
                                    <div className="text-center py-2 flex flex-col items-center">
                                        <div className="rounded-full shadow-lg bg-[#3f3f3f] animate-pulse mx-auto mb-2 h-[100px] w-[100px]"></div>
                                        <div className="flex h-2.5 w-full rounded shadow-lg bg-[#3f3f3f] animate-pulse mb-2"></div>
                                    </div>
                                    <div className="text-center py-2 flex flex-col items-center">
                                        <div className="rounded-full shadow-lg bg-[#3f3f3f] animate-pulse mx-auto mb-2 h-[100px] w-[100px]"></div>
                                        <div className="flex h-2.5 w-full rounded shadow-lg bg-[#3f3f3f] animate-pulse mb-2"></div>
                                    </div>
                                    <div className="text-center py-2 flex flex-col items-center">
                                        <div className="rounded-full shadow-lg bg-[#3f3f3f] animate-pulse mx-auto mb-2 h-[100px] w-[100px]"></div>
                                        <div className="flex h-2.5 w-full rounded shadow-lg bg-[#3f3f3f] animate-pulse mb-2"></div>
                                    </div>
                                    <div className="text-center py-2 flex flex-col items-center">
                                        <div className="rounded-full shadow-lg bg-[#3f3f3f] animate-pulse mx-auto mb-2 h-[100px] w-[100px]"></div>
                                        <div className="flex h-2.5 w-full rounded shadow-lg bg-[#3f3f3f] animate-pulse mb-2"></div>
                                    </div>
                                    <div className="text-center py-2 flex flex-col items-center">
                                        <div className="rounded-full shadow-lg bg-[#3f3f3f] animate-pulse mx-auto mb-2 h-[100px] w-[100px]"></div>
                                        <div className="flex h-2.5 w-full rounded shadow-lg bg-[#3f3f3f] animate-pulse mb-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}