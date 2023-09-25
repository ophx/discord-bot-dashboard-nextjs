import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default async function Home() {
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
                  <Link href="#features" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                    See Features
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
                  className="rounded-full shadow-lg"
                />
              </div>
            </div>
            <div className="mt-4 floating text-gray-400 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </main>

      <div className="space-y-60 mb-96">
        {/* Features */}
        <main id="features" className="container mx-auto px-64">
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <Image
                  src="https://cdn.discordapp.com/attachments/1125371978228965447/1155944651283496961/image.png"
                  height={500}
                  width={550}
                  alt="DashboardPreview"
                  className="rounded shadow-lg"
                />
              </div>
              <div className="w-96">
                <p className="text-white text-4xl">Commands</p>
                <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi autem dolorem voluptas numquam, minima explicabo eaque quisquam eveniet, ut ipsum esse aspernatur quas, omnis cum! Illo quisquam placeat veniam ad.</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}