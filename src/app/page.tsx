"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "./components/footerSite";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 sm:px-12">
        <Image
          src="/logo.jpg"
          alt="App Logo"
          width={200} // Slightly larger for better presence
          height={200}
          className="mb-6 rounded-lg shadow-lg"
          priority
        />

        <h1 className="text-5xl font-bold leading-tight">Weighted Voting</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-lg">
          Make your voice count with our unique voting system.
        </p>

        <button
          onClick={() => router.push("/votes")}
          className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg transition"
        >
          Start Voting
        </button>
      </main>

      <Footer />
    </div>
  );
}

