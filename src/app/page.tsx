import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollAnimation from "./components/ScrollAnimation";

import { fetchBotGuilds } from "./utils/guild";

export default async function Home() {
  const botGuilds = await fetchBotGuilds();

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
                    Get Started
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
            <div className="mt-4 floating text-gray-400 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* ... */}
      <ScrollAnimation>
        <div className="bg-[#1f1f1f] shadow-lg p-4">
          <div className="container mx-auto px-64 w-1/2">
            <p className="text-white text-2xl text-center">{process.env.CLIENT_NAME} Is Trusted And Used By More Than {botGuilds.length} Servers</p>
          </div>
          <div className="container mx-auto px-64">
            <Marquee className="fixed top-14">
              <div className="flex gap-4">
                {botGuilds.map((guild: any) => (
                  <div key={guild.id} className="bg-[#2f2f2f] rounded shadow-lg p-4">
                    <div className="flex items-center">
                      <div>
                        {
                          guild.icon
                          ?
                          (
                            <Image
                              src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=300`}
                              height={50}
                              width={50}
                              alt={guild.name}
                              className="rounded-full shadow-lg mx-auto mr-4"
                            />
                          )
                          :
                          (
                            <div className="bg-[#3f3f3f] flex justify-center items-center rounded-full shadow-lg mx-auto mr-4 h-[50px] w-[50px]">
                              <span className="text-white text-sm">{guild.name.match(/\b(\w)/g).join("")}</span>
                            </div>
                          )
                        }
                      </div>
                      <div>
                        <p className="text-white truncate">{guild.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </ScrollAnimation>

      <div className="space-y-60 mt-44 container mx-auto px-64">
        {/* Features */}
        <ScrollAnimation>
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
                <p className="text-white text-4xl">User Friendly Dashboard!</p>
                <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi autem dolorem voluptas numquam, minima explicabo eaque quisquam eveniet, ut ipsum esse aspernatur quas, omnis cum! Illo quisquam placeat veniam ad.</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="w-96">
                <p className="text-white text-4xl">Lots Of Commands...</p>
                <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi autem dolorem voluptas numquam, minima explicabo eaque quisquam eveniet, ut ipsum esse aspernatur quas, omnis cum! Illo quisquam placeat veniam ad.</p>
              </div>
              <div>
                <Image
                  src="https://cdn.discordapp.com/attachments/1125371978228965447/1155944651283496961/image.png"
                  height={500}
                  width={550}
                  alt="DashboardPreview"
                  className="rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
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
                <p className="text-white text-4xl">And More!</p>
                <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi autem dolorem voluptas numquam, minima explicabo eaque quisquam eveniet, ut ipsum esse aspernatur quas, omnis cum! Illo quisquam placeat veniam ad.</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Ready */}
        <ScrollAnimation>
          <div className="p-4 mb-8">
            <div className="container mx-auto px-64">
              <p className="text-white text-2xl text-center">{process.env.CLIENT_DESC}</p>
              <p className="flex justify-center mt-2">
                <Link href="/api/invite" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                  Invite {process.env.CLIENT_NAME}
                </Link>
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}