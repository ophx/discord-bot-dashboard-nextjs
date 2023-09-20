import Link from "next/link";

export default function Footer() {
    return (
        <div className="fixed bottom-0 w-full bg-[#1f1f1f] shadow-lg p-4">
            <p className="text-gray-400 text-sm text-center">
                Made With 💖 By
                <Link href="https://github.com/ophx" target="_blank" className="transition-all duration-150 font-medium text-gray-400 hover:text-white ml-1">
                    @ophx
                </Link>
            </p>
        </div>
    )
}