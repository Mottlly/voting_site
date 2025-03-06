"use client";
import { useRouter } from "next/navigation";
import Footer from "./components/footerSite";

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen items-center justify-items-center p-8 sm:p-20 font-sans bg-[var(--background)] text-[var(--foreground)]">
      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold">Welcome to Weighted Voting</h1>
        <p className="text-lg text-gray-500">Make your voice count with our unique voting system.</p>

        <button
          onClick={() => router.push("/votes")}
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
        >
          Start Voting
        </button>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
