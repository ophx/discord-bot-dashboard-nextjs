import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-[#1f1f1f] shadow-lg p-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="https://cdn.discordapp.com/app-icons/1089798390398853232/d7069e17c7b2bd01ce580444ff1db5f7.png?size=300"
                height={35}
                width={35}
                alt="BotLogo"
                className="rounded-full shadow-lg mr-2"
              />
              <span className="text-white">PepeBOT</span>
            </Link>
          </div>
          <div className="flex gap-8">
            <Link href="/" className="transition-all duration-150 font-medium text-gray-400 hover:text-white">
              Commands
            </Link>
            <Link href="/" className="transition-all duration-150 font-medium text-gray-400 hover:text-white">
              Our Team
            </Link>
          </div>
          <div>
            <Link href="/" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white text-sm">
              Login With Discord
            </Link>
          </div>
        </div>
      </div>

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
      <div className="fixed bottom-0 w-full bg-[#1f1f1f] shadow-lg p-4">
        <p className="text-gray-400 text-sm text-center">
          Made With 💖 By
          <Link href="https://github.com/ophx" target="_blank" className="transition-all duration-150 font-medium text-gray-400 hover:text-white ml-1">
            @ophx
          </Link>
        </p>
      </div>
    </>
  )
}