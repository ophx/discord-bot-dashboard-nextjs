import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/Navbar";

export default function NotFound() {
  return (
    <>
      {/* Navbar */}
    <Navbar />

      { /* Main */ }
      <main className="container mx-auto px-64">
        <div className="flex h-screen">
          <div className="m-auto w-full text-center">
            <div className="flex justify-between items-center">
              <div className="w-full">
                <p className="text-white text-5xl">Oops...Page Not Found!</p>
                <p className="text-gray-400 text-xl">The Page You Requested Was Not Found!</p>
                <p className="text-gray-400 text-xl">If You Think This Was A Mistake, Please Contact Us.</p>
                <div className="flex gap-4 mt-2 justify-center">
                  <Link href="/" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                    Go Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}