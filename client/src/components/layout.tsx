import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      {/* Fixed Navigation Frame */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
        <div className="pointer-events-auto">
          <Link href="/" className="text-xl md:text-2xl font-display font-bold tracking-tighter uppercase block">
            Structural
          </Link>
          <div className="text-xs font-mono mt-1 opacity-60">
            IT Architecture & Systems
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 pointer-events-auto">
          <Link href="/" className={cn(
            "text-sm font-medium hover:underline underline-offset-4 transition-all",
            location === "/" ? "opacity-100" : "opacity-60 hover:opacity-100"
          )}>
            Index
          </Link>
          <Link href="/about" className={cn(
            "text-sm font-medium hover:underline underline-offset-4 transition-all",
            location === "/about" ? "opacity-100" : "opacity-60 hover:opacity-100"
          )}>
            Profile
          </Link>
          <Link href="/contact" className="text-sm font-medium opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-all">
            Contact
          </Link>
        </div>
      </nav>

      {/* Vertical Text Decoration - Left */}
      <div className="fixed left-6 md:left-12 bottom-12 hidden md:block z-40 mix-blend-difference text-white">
        <span className="writing-vertical-rl rotate-180 text-xs font-mono opacity-40 tracking-widest uppercase">
          Est. 2025 — Digital Systems
        </span>
      </div>

      {/* Main Content */}
      <main className="w-full min-h-screen pt-32 pb-24 px-6 md:px-12">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="fixed bottom-6 md:bottom-12 right-6 md:right-12 text-xs font-mono opacity-40 mix-blend-difference text-white z-40 hidden md:block">
        SCROLL FOR DISCOVERY
      </footer>
    </div>
  );
}
