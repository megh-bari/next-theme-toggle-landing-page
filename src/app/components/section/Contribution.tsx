import { Button } from "@/components/ui/button";
import { Github, Package, Users } from "lucide-react";

export function Contribution() {
    return (
        <section className="py-32 px-4 border-t backdrop-blur-md  border-white/5">
            <div className="container mx-auto max-w-4xl text-center">
                {/* <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-full text-primary">
                        <Users className="h-12 w-12   text-purple-400" />
                    </div>
                </div> */}
                <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                    We Love Contribution {" "}
                    <Users className="h-14 -mt-3 w-14 inline text-purple-400" />
                </h2>
                <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                   Help make Next Theme Toggle even better by contributing new features, improving templates, or refining the CLI experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-10">

                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-black/5 backdrop-blur-md border border-white/20 text-white hover:text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300"
                        asChild
                    >
                        <a
                            href="https://github.com/megh-bari/next-theme-toggle#contributing"
                            target="_blank"
                        >
                            <Github className="h-5 w-5 mr-2" />
                            Contribute Guide
                        </a>
                    </Button>
                    <Button
                        size="lg"
                        className="bg-zinc-950/100 hover:bg-zinc-950/1  backdrop-blur-md border border-white/20 text-white  hover:border-white/30 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300"
                        asChild
                    >
                        <a href="https://www.npmjs.com/package/next-theme-toggle">
                            <Package className="h-5 w-5 mr-2" />
                            NPM Package
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
