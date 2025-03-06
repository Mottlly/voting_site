import Image from "next/image";

export default function Footer() {
  return (
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
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a className="hover:underline hover:underline-offset-4" href="/about">
          About
        </a>
        <a className="hover:underline hover:underline-offset-4" href="/contact">
          Contact
        </a>
      </div>
    </footer>
  );
}
