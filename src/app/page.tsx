"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "./components/footerSite";

export default function Home() {
  const router = useRouter();

  // Voting options with images & routes
  const votingOptions = [
    { title: "Ranked Choice", image: "/rcv_logo.jpg", route: "/votes/ranked" },
    { title: "Approval Voting", image: "/approval-voting.jpg", route: "/votes/approval" },
    { title: "Two-Round Runoff", image: "/two-round-runoff.jpg", route: "/votes/runoff" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Main Content Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 sm:px-12">
        {/* App Logo */}
        <Image
          src="/logo.jpg"
          alt="App Logo"
          width={200}
          height={200}
          className="mb-6 rounded-lg shadow-lg"
          priority
        />

        {/* Welcome Text */}
        <h1 className="text-5xl font-bold leading-tight">Weighted Voting</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-lg">
          Select a voting method to get started.
        </p>

        {/* Voting Option Buttons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {votingOptions.map((option) => (
            <button
              key={option.title}
              onClick={() => router.push(option.route)}
              className="relative group flex flex-col items-center justify-center w-full max-w-xs bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 shadow-lg"
            >
              {/* Voting Image */}
              <Image
                src={option.image}
                alt={option.title}
                width={300}
                height={200}
                className="object-cover w-full h-48"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-all duration-300"></div>

              {/* Voting Title */}
              <div className="py-4 text-lg font-semibold text-white">
                {option.title}
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
