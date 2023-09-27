import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ guildName, guildIcon }: { guildName: string, guildIcon: string }) {
    return (
        <div className="fixed top-0 left-0 z-[1000] w-64 h-screen">
            <div className="h-full p-4 overflow-y-auto bg-[#1f1f1f] shadow-lg">
                <ul className="space-y-2">
                    <li className="px-4 py-2">
                        <div className="flex items-center">
                            <div>
                                <Image
                                    src={guildIcon}
                                    height={35}
                                    width={35}
                                    alt={guildName}
                                    className="rounded-full shadow-lg mx-auto mr-4"
                                />
                            </div>
                            <div>
                                <p className="text-white text-center">{guildName}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="" className="transition-all duration-200 text-gray-400 hover:text-white hover:bg-[#2f2f2f] hover:shadow-lg hover:rounded px-4 py-2 flex items-center w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                            </svg>
                            <span>Stats</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="transition-all duration-200 text-gray-400 hover:text-white hover:bg-[#2f2f2f] hover:shadow-lg hover:rounded px-4 py-2 flex items-center w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                            </svg>
                            <span>Modules</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}