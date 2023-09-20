import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      { /* Main */ }
      <main className="container mx-auto px-64">
        <div className="flex h-screen">
          <div className="m-auto w-full">
            <div>
              <p className="text-white text-5xl text-center">Our Team</p>
              <p className="text-gray-400 text-xl text-center mb-4">The People That Made PepeBOT Possible</p>
              <div className="grid grid-cols-3 gap-4">
                <Link href="https://github.com/ophx" target="_blank" className="bg-[#1f1f1f] rounded shadow-lg p-4">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src="https://avatars.githubusercontent.com/u/69017612?v=4"
                        height={80}
                        width={80}
                        alt="avatar"
                        className="rounded-full shadow-lg mr-4"
                      />
                    </div>
                    <div>
                      <p className="text-white text-xl">ophx</p>
                      <p className="text-gray-400">Lead Developer</p>
                    </div>
                  </div>
                </Link>
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