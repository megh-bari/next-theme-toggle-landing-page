"use client"

import { useState } from "react"
// import { Button } from "@/components/ui/button"
import { Copy, Check,} from "lucide-react"

export function CTASection() {
    const [copiedCommand, setCopiedCommand] = useState(false)

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text)
        setCopiedCommand(true)
        setTimeout(() => setCopiedCommand(false), 2000)
    }

    return (
        <section className="py-32 px-4 bg-zinc-950/40 border-t backdrop-blur-md  border-white/5">
            <div className="container mx-auto text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                        Ready to transform your{" "}
                        <span className="bg-gradient-to-r from-gray-400 to-purple-400 bg-clip-text text-transparent">Next.js</span>{" "}
                        {/* bg-gradient-to-r from-gray-400 to-white/10 bg-clip-text text-transparent */}
                        project?
                    </h2>
                    <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                        Join developers who&apos;ve streamlined their theme setup process
                    </p>

                    <div className=" rounded-xl p-8  max-w-4xl mx-auto ">
                        <div className="relative bg-black/90 backdrop-blur-xl mb-4  max-w-4xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl group-hover:border-white/20 transition-all duration-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard("npx next-theme-toggle");
                            }}
                        >
                            {/* Terminal header */}
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>

                            {/* Command line */}
                            <div className="flex items-center justify-between overflow-x-auto">
                                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                                    <span className="text-gray-500 font-mono text-base sm:text-lg select-none">$</span>
                                    <span className="text-green-400 font-mono text-base sm:text-lg font-medium tracking-wide break-all">
                                        npx next-theme-toggle
                                    </span>
                                </div>

                                {/* Copy button */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        copyToClipboard("npx next-theme-toggle");
                                    }}
                                    className="ml-2 sm:ml-4 p-2 sm:p-3 rounded-xl text-gray-400 hover:text-white transition-all duration-200 focus:outline-none active:scale-95 group"
                                    aria-label={copiedCommand ? "Copied!" : "Copy command"}
                                >
                                    {copiedCommand ? (
                                        <Check className="w-5 h-5 text-green-400" />
                                    ) : (
                                        <Copy className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                    )}
                                </button>
                            </div>
                        </div>


                        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center px-10">
                            <Button
                                size="lg"
                                className="bg-zinc-950/100  backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300"
                                asChild
                            >
                                <a
                                    href="https://github.com/megh-bari/boilerkit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="h-5 w-5 mr-2 " />
                                    Contribute Guide
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300"
                                asChild
                            >
                                <a href="vscode:extension/megh.BoilerKit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Package className="h-4 w-4 " />

                                    <span className=" sm:inline">NPM Package</span>
                                </a>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
