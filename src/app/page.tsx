import Image from "next/image";
import WeightedVoting from "../app/components/vote_list";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <WeightedVoting />
      </main>

      {/* Custom Styled Footer */}
      <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 px-8 flex flex-col items-center gap-4">
        {/* Powered by Next.js */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          Powered by
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={18}
            priority
          />
        </div>

        {/* Custom Links */}
        <div className="flex gap-6 flex-wrap justify-center text-sm">
          <a
            className="hover:underline hover:underline-offset-4"
            href="https://github.com/Mottlly/voting_site"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
          <a
            className="hover:underline hover:underline-offset-4"
            href="https://mottlly.github.io/PortfolioWebsite/"
          >
            My Portfolio
          </a>
          <a
            className="hover:underline hover:underline-offset-4"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
