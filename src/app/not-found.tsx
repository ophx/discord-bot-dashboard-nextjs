import Link from "next/link";

export default function NotFound() {
  return (
    <>
      { /* Main */ }
      <main className="container mx-auto px-64">
        <div className="flex h-screen">
          <div className="m-auto w-full text-center">
            <div className="flex justify-between items-center">
              <div className="w-full">
                <p className="text-white text-5xl">Not Found!</p>
                <p className="text-gray-400 text-xl">The Page You Requested Was Not Found!</p>
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