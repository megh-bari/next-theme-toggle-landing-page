"use client"
import { Button } from "@/components/ui/button";
import { Github, Package, SunMoon } from "lucide-react";

export function Header() {
    const navItems = [
        { href: "#features", label: "Features" },
        { href: "#installation", label: "Installation" },
        { href: "#how-it-works", label: "How it Works" },
    ];
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
        <header className="sticky z-50 top-0 px-4 pt-5">
            <div className="z-50 w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between backdrop-blur-xs bg-white/1 border border-white/10 rounded-2xl shadow-xl">
                {/* Left */}
                <div className="flex items-center space-x-1 z-10 cursor-pointer"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <SunMoon className="h-6 w-6 text-white  -mt-[2px]" />
                    <span className="text-lg sm:text-xl ml-1 font-semibold text-white"

                    >
                        {/* Next Theme Toggle */}
                        NextToggle
                    </span>
                </div>

                {/* Center*/}
                <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => scrollToSection(item.label)}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                        >
                            {item.label}
                        </a>
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
                            <Github className="h-4 w-4 " />
                            GitHub
                        </a>
                    </Button>

                    <Button
                        className="bg-zinc-950/100 hover:bg-zinc-950/10 text-white border border-white/20 transition-all duration-200 backdrop-blur-sm text-sm px-3 py-2 sm:px-4"
                        asChild
                    >
                        <a href="https://www.npmjs.com/package/next-theme-toggle"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Package className="h-4 w-4 " />

                            <span className=" sm:inline">NPM Package</span>
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}