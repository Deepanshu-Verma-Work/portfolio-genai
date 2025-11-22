import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      {/* Fixed Navigation Frame */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-start text-foreground mix-blend-difference">
        <div className="pointer-events-auto">
          <Link href="/">
            <a className="text-xl md:text-2xl font-display font-bold tracking-tighter uppercase block text-white hover:opacity-80 transition-opacity">
              Structural
            </a>
          </Link>
          <div className="text-xs font-mono mt-1 opacity-60 text-white">
            IT Architecture & Systems
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 pointer-events-auto">
          <Link href="/">
            <a className={cn(
              "text-sm font-medium hover:underline underline-offset-4 transition-all text-white",
              location === "/" ? "opacity-100" : "opacity-60 hover:opacity-100"
            )}>
              Index
            </a>
          </Link>
          <Link href="/about">
            <a className={cn(
              "text-sm font-medium hover:underline underline-offset-4 transition-all text-white",
              location === "/about" ? "opacity-100" : "opacity-60 hover:opacity-100"
            )}>
              Profile
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-sm font-medium opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-all text-white">
              Contact
            </a>
          </Link>
        </div>
      </nav>

      {/* Vertical Text Decoration - Left */}
      <div className="fixed left-6 md:left-12 bottom-12 hidden md:block z-40 mix-blend-difference text-white pointer-events-none">
        <span className="writing-vertical-rl rotate-180 text-xs font-mono opacity-40 tracking-widest uppercase">
          Est. 2025 — Digital Systems
        </span>
      </div>

      {/* Main Content */}
      <main className="w-full min-h-screen pt-32">
        {children}
      </main>
    </div>
  );
}
