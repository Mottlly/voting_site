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
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] items-center w-full overflow-x-hidden">
      {/* Main Content Section */}
      <main className="flex flex-1 flex-col justify-center items-center text-center px-4 sm:px-8 max-w-4xl w-full">
        {/* App Logo */}
        <Image
          src="/logo.jpg"
          alt="App Logo"
          width={200}
          height={200}
          className="mb-6 sm:mb-10 rounded-lg shadow-lg w-1/2 sm:w-1/3 lg:w-1/4 max-w-[200px]"
          priority
        />

        {/* Welcome Text */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Weighted Voting</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-lg">
          Select a voting method to get started.
        </p>

        {/* Voting Options */}
        <div className="mt-6 w-full max-w-3xl flex flex-wrap justify-center gap-4">
          {votingOptions.map((option) => (
            <button
              key={option.title}
              onClick={() => router.push(option.route)}
              className="relative group border border-white rounded-lg overflow-hidden transition-all duration-300 shadow-lg"
            >
              {/* Image with dynamic width */}
              <div className="relative w-[90vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] max-w-[250px] aspect-[5/3]">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>

              <div className="py-3 text-md font-semibold text-white text-center w-full">
                {option.title}
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Footer Component */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
