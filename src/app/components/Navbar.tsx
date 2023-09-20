import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
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
                    <Link href="/team" className="transition-all duration-150 font-medium text-gray-400 hover:text-white">
                        Our Team
                    </Link>
                </div>
                <div>
                    <Link href="/api/login" className="transition-all duration-150 px-4 py-2 rounded shadow-lg bg-blue-600 hover:bg-blue-700 text-white text-sm">
                        Login With Discord
                    </Link>
                </div>
            </div>
        </div>
    )
}