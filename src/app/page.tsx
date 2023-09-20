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
                <p className="text-white text-5xl">PepeBOT</p>
                <p className="text-gray-400 text-xl">The Best Bot For Your Discord Server!</p>
                <div className="flex gap-4 mt-2">
                  <Link href="/" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                    Dashboard
                  </Link>
                  <Link href="/" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-[#2f2f2f] hover:bg-[#3f3f3f] text-white">
                    Invite PepeBOT
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="https://cdn.discordapp.com/app-icons/1089798390398853232/d7069e17c7b2bd01ce580444ff1db5f7.png?size=300"
                  height={250}
                  width={250}
                  alt="BotLogo"
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