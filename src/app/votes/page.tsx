import WeightedVoting from "../components/vote_list";
import Footer from "../components/footerSite";

export default function VotePage() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen items-center justify-items-center p-8 sm:p-20 font-sans bg-[var(--background)] text-[var(--foreground)]">
      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <WeightedVoting />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

