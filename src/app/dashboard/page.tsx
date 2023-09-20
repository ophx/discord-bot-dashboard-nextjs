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