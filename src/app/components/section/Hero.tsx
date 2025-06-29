"use client"
import { Code2, Package, Sparkles, Zap } from "lucide-react";
import CommandBlock from "./CommandBlock";
import { FadeInWrapper } from "../ui/fade-in-wrapper";

export function Hero() {
    // const scrollDown = () => {
    //     window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
    // };

    return (
        <section className="relative z-30 py-14 px-2 text-center flex items-center -mb-35 lg:-mb-35">
            <div className="container mx-auto max-w-6xl px-2 ">
                <FadeInWrapper delay={100}>
                    <div className="mb-8 flex justify-center">
                        <div className="inline-flex items-center gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border bg-black/40 border-white/20 text-white hover:bg-black/50 font-semibold cursor-pointer">
                            <span className="font-medium">Zero Configuration Required</span>
                            <Zap className="h-4 w-4 text-orange-500" />
                            <span className="inline-flex items-center"> Setup? Zapped</span>
                        </div>
                    </div>
                </FadeInWrapper>

                {/* Tagline */}
                {/* <p className="mb-6  text-lg text-gray-200">
                    <span className="font-semibold text-white">
                        No configs. Just toggle
                    </span>
                </p> */}

                {/* Main Headline */}
                <FadeInWrapper delay={200}>
                    <h1 className="mb-8 text-[30px] sm:text-4xl md:text-6xl font-bold leading-snug sm:leading-tight text-center">
                        <span className="block bg-gradient-to-r from-neutral-50 via-gray-200 to-gray-400 bg-clip-text text-transparent transition-all duration-300">
                            Theme Toggle for the
                        </span>
                        <span className="bg-gradient-to-r from-gray-200 via-gray-400/60  to-gray-400 bg-clip-text text-transparent transition-all duration-300">
                            Lazy Dev (You)
                        </span>
                    </h1>
                </FadeInWrapper>


                {/* Subtitle */}
                <FadeInWrapper delay={300}>
                    <p className="mb-8 text-[16px] md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A CLI tool that instantly sets up dark/light theme toggling in your Next.js projects + Tailwind CSS v4 with zero configuration hassle.
                    </p>
                </FadeInWrapper>

                <FadeInWrapper delay={400}>
                    <CommandBlock />
                </FadeInWrapper>



                {/* Feature Highlights */}
                <FadeInWrapper delay={500}>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 p-2 max-w-full">
                        {[
                            {
                                icon: <Zap className="w-5 h-5 text-yellow-400" />,
                                label: "One Command Setup",
                            },
                            {
                                icon: <Code2 className="w-5 h-5 text-blue-400" />,
                                label: "TypeScript & JavaScript",
                            },
                            {
                                icon: <Package className="w-5 h-5 text-green-400" />,
                                label: "Non-destructive",
                            },
                            {
                                icon: <Sparkles className="w-5 h-5 text-purple-400" />,
                                label: "Zero config needed",
                            },
                        ].map(({ icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center space-x-2 bg-white/5  backdrop-blur-sm rounded-full px-6 py-3 border border-white/5 w-full sm:w-64 justify-center"
                                style={{ minWidth: "220px" }} // Ensures a nice minimum width on all screens
                            >
                                {icon}
                                <span className="font-medium text-gray-300 text-sm sm:text-base">{label}</span>
                            </div>
                        ))}
                    </div>
                </FadeInWrapper>
                {/* Prerequisites */}
                {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16 text-sm">
                    <div className="text-center flex-1 min-w-[160px] max-w-xs w-full sm:w-auto py-3 bg-gray-900/20 rounded-xl">
                        <div className="text-lg font-bold text-white">Node.js 16+</div>
                        <div className="text-gray-400">Required</div>
                    </div>
                    <div className="text-center flex-1 min-w-[160px] max-w-xs w-full sm:w-auto py-3 bg-gray-900/20 rounded-xl">
                        <div className="text-lg font-bold text-white">Next.js App Router</div>
                        <div className="text-gray-400">Recommended</div>
                    </div>
                    <div className="text-center flex-1 min-w-[160px] max-w-xs w-full sm:w-auto py-3 bg-gray-900/20 rounded-xl">
                        <div className="text-lg font-bold text-white">npm/yarn/pnpm</div>
                        <div className="text-gray-400">Auto-detected</div>
                    </div>
                </div> */}






            </div>
        </section>
    );
}

export default Hero;