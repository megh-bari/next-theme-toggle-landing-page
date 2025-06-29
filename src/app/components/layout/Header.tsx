"use client"
import { Button } from "@/components/ui/button";
import { Github, Package, SunMoon } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import { useCallback } from "react";

export function Header() {
    const navItems = [
        { id: "features", label: "Features" },
        { id: "installation", label: "Installation" },
        { id: "how-it-works", label: "How it Works" },
    ];

    const getLenis = () => (window as typeof window & { lenis?: Lenis }).lenis;

    const handleSmoothScroll = useCallback(
        (e: React.MouseEvent<HTMLElement>, href: string) => {
            e.preventDefault();
            const target = document.querySelector(`#${href}`) as HTMLElement | null;
            if (target) {
                const lenis = getLenis();
                if (lenis) {
                    // Enhanced Lenis scroll with smoother easing
                    lenis.scrollTo(target, {
                        offset: -20,
                        duration: 1.4, // Reduced for better performance
                        easing: (t: number) => 1 - Math.pow(1 - t, 3), // Simpler easing
                        immediate: false,
                        lock: false, // Allow user control
                    });
                } else {
                    // Fallback with improved native smooth scroll
                    const headerHeight = 100; // Adjust based on your header height
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                }
            }
        },
        []
    );

    const handleScrollToTop = useCallback(() => {
        const lenis = getLenis();
        if (lenis) {
            lenis.scrollTo(0, {
                offset: 0,
                duration: 1.5, // Faster for better dev performance
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
                immediate: false,
                lock: false,
            });
        } else {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            });
        }
    }, []);

    return (
        <header className="sticky z-50 top-0 px-4 pt-5">
            <div className="z-50 w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between backdrop-blur-xs bg-white/1 border border-white/10 rounded-2xl shadow-xl">
                {/* Left */}
                <div 
                    className="flex items-center space-x-1 z-10 cursor-pointer transition-all duration-200 hover:opacity-90"
                    onClick={handleScrollToTop}
                >
                    <SunMoon className="h-6 w-6 text-white -mt-[2px]" />
                    <span className="text-lg sm:text-xl ml-1 font-semibold text-white">
                        NextToggle
                    </span>
                </div>

                {/* Center*/}
                <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={(e) => handleSmoothScroll(e, item.id)}
                            className="text-gray-300 hover:text-white transition-all duration-300 ease-out text-sm font-medium bg-transparent border-none cursor-pointer relative group"
                        >
                            {item.label}
                            {/* Add subtle hover effect */}
                            <span className="absolute inset-x-0 -bottom-1 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </button>
                    ))}
                </nav>

                {/* Right */}
                <div className="flex items-center space-x-2 sm:space-x-4 z-10">
                    <Button
                        variant="ghost"
                        className="hidden sm:flex bg-white/1 backdrop-blur-md border border-white/20 text-white hover:text-white hover:bg-white/10 transition-all duration-200"
                        asChild
                    >
                        <a
                            href="https://github.com/megh-bari/next-theme-toggle"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="h-4 w-4" />
                            GitHub
                        </a>
                    </Button>

                    <Button
                        className="bg-zinc-950/100 hover:bg-zinc-950/10 text-white border border-white/20 transition-all duration-200 backdrop-blur-sm text-sm px-3 py-2 sm:px-4"
                        asChild
                    >
                        <a 
                            href="https://www.npmjs.com/package/next-theme-toggle"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Package className="h-4 w-4" />
                            <span className="sm:inline">NPM Package</span>
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}