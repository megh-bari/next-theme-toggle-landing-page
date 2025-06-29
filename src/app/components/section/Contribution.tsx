import { Button } from "@/components/ui/button";
import { Github, Package, Users } from "lucide-react";

export function Contribution() {
    return (
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t backdrop-blur-md border-white/5">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight">
                    We Love Contribution{" "}
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 -mt-1 sm:-mt-2 md:-mt-3 inline text-purple-400" />
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 lg:mb-16 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                   Help make Next Theme Toggle even better by contributing new features, improving templates, or refining the CLI experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-6 lg:px-10">
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-black/5 backdrop-blur-md border border-white/20 text-white hover:text-white hover:bg-white/10 hover:border-white/30 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl transition-all duration-300 w-full sm:w-auto"
                        asChild
                    >
                        <a
                            href="https://github.com/megh-bari/next-theme-toggle#contributing"
                            target="_blank"
                        >
                            <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                            Contribute Guide
                        </a>
                    </Button>
                    <Button
                        size="lg"
                        className="bg-zinc-950/100 hover:bg-zinc-950/1 backdrop-blur-md border border-white/20 text-white hover:border-white/30 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl transition-all duration-300 w-full sm:w-auto"
                        asChild
                    >
                        <a href="https://www.npmjs.com/package/next-theme-toggle">
                            <Package className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                            NPM Package
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}