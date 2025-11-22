import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col">
      {/* Fixed Navigation Frame */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
        <div className="pointer-events-auto">
          <Link href="/" className="text-xl md:text-2xl font-display font-bold tracking-tighter uppercase block hover:opacity-80 transition-opacity">
            Structural
          </Link>
          <div className="text-xs font-mono mt-1 opacity-60">
            IT Architecture & Systems
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 pointer-events-auto">
          <Link href="/" className={cn(
            "text-sm font-medium hover:underline underline-offset-4 transition-all cursor-pointer",
            location === "/" ? "opacity-100" : "opacity-60 hover:opacity-100"
          )}>
            Index
          </Link>
          <Link href="/about" className={cn(
            "text-sm font-medium hover:underline underline-offset-4 transition-all cursor-pointer",
            location === "/about" ? "opacity-100" : "opacity-60 hover:opacity-100"
          )}>
            Profile
          </Link>
          <Link href="/contact" className={cn(
            "text-sm font-medium hover:underline underline-offset-4 transition-all cursor-pointer",
            location === "/contact" ? "opacity-100" : "opacity-60 hover:opacity-100"
          )}>
            Contact
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
      <main className="w-full flex-grow pt-32 pb-24 px-6 md:px-12">
        {children}
      </main>
      
      {/* Global "Cool" Contact Footer */}
      <footer className="w-full bg-foreground text-background py-24 px-6 md:px-12 relative overflow-hidden mt-auto">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8">
              Initiate<br/>Sequence
            </h3>
            <p className="font-mono text-sm opacity-60 max-w-sm">
              Ready to architect your next digital infrastructure? 
              Transmit your requirements. Secure channel open.
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="block font-mono text-xs uppercase tracking-widest opacity-60 mb-2 group-focus-within:text-accent transition-colors">
                Identity / Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-background/20 py-4 text-xl md:text-2xl font-heading focus:outline-none focus:border-background transition-colors placeholder:text-background/10"
              />
            </div>
            
            <div className="group">
              <label className="block font-mono text-xs uppercase tracking-widest opacity-60 mb-2 group-focus-within:text-accent transition-colors">
                Coordinates / Email
              </label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-background/20 py-4 text-xl md:text-2xl font-heading focus:outline-none focus:border-background transition-colors placeholder:text-background/10"
              />
            </div>

            <div className="group">
              <label className="block font-mono text-xs uppercase tracking-widest opacity-60 mb-2 group-focus-within:text-accent transition-colors">
                Transmission / Message
              </label>
              <textarea 
                rows={1}
                placeholder="Brief description of architectural needs..."
                className="w-full bg-transparent border-b border-background/20 py-4 text-xl md:text-2xl font-heading focus:outline-none focus:border-background transition-colors placeholder:text-background/10 resize-none"
              />
            </div>

            <button className="group flex items-center gap-4 pt-4">
              <div className="h-12 w-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                Send Transmission
              </span>
            </button>
          </form>
        </div>
        
        {/* Footer Bottom */}
        <div className="absolute bottom-6 right-6 md:right-12 text-[10px] font-mono opacity-20">
          SYSTEM STATUS: OPERATIONAL
        </div>
      </footer>
    </div>
  );
}
