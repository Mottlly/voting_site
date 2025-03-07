"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "./components/footerSite";

export default function Home() {
  const router = useRouter();

  const votingOptions = [
    { title: "Ranked Choice", image: "/rcv_logo.jpg", route: "/votes/ranked" },
    { title: "Approval Voting", image: "/approval_logo.jpg", route: "/votes/approval" },
    { title: "Two-Round Runoff", image: "/runoff_logo.jpg", route: "/votes/runoff" },
  ];

  return (
    <div className="flex flex-col h-screen bg-[var(--background)] text-[var(--foreground)] items-center">
      {/* Main Content Section */}
      <main className="flex flex-1 flex-col justify-center items-center text-center px-6 sm:px-12 max-w-4xl w-full">
        {/* App Logo */}
        <Image
          src="/logo.jpg"
          alt="App Logo"
          width={200}
          height={200}
          className="mb-6 sm:mb-12 rounded-lg shadow-lg"
          priority
        />

        {/* Welcome Text */}
        <h1 className="text-5xl font-bold leading-tight">Weighted Voting</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-lg">
          Select a voting method to get started.
        </p>

        {/* Voting Options */}
        <div className="mt-6 w-full max-w-3xl">
          <div className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 scrollbar-hide">
            {votingOptions.map((option) => (
              <button
                key={option.title}
                onClick={() => router.push(option.route)}
                className="relative group flex flex-col items-center justify-center w-64 sm:w-full bg-[var(--background)] border border-white rounded-lg overflow-hidden transition-all duration-300 shadow-lg flex-shrink-0 sm:flex-shrink"
              >
                <Image
                  src={option.image}
                  alt={option.title}
                  width={250}
                  height={160}
                  className="object-contain w-full h-40"
                />

                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>

                <div className="py-3 text-md font-semibold text-white">
                  {option.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
