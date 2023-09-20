import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      { /* Main */ }
      <main className="container mx-auto px-64">
        <div className="flex h-screen">
          <div className="m-auto w-full">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white text-5xl">{process.env.CLIENT_NAME}</p>
                <p className="text-gray-400 text-xl">{process.env.CLIENT_DESC}</p>
                <div className="flex gap-4 mt-2">
                  <Link href="/api/login" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started!
                  </Link>
                  <Link href="/api/invite" target="_blank" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-[#2f2f2f] hover:bg-[#3f3f3f] text-white">
                    Invite {process.env.CLIENT_NAME}
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src={`${process.env.ICON}`}
                  height={250}
                  width={250}
                  alt={`${process.env.CLIENT_NAME}`}
                  className="rounded-full shadow-lg floating"
                />
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