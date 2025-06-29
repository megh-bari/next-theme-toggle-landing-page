"use client"

import { useState } from "react"
import { Copy, Check,} from "lucide-react"

export function CTASection() {
    const [copiedCommand, setCopiedCommand] = useState(false)

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text)
        setCopiedCommand(true)
        setTimeout(() => setCopiedCommand(false), 2000)
    }

    return (
        <section className="py-16 sm:py-24 lg:py-32 px-4 bg-zinc-950/40 border-t backdrop-blur-md border-white/5">
            <div className="container mx-auto text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight px-2">
                        Ready to transform your{" "}
                        <span className="bg-gradient-to-r from-gray-400 to-purple-400 bg-clip-text text-transparent">Next.js</span>{" "}
                        {/* bg-gradient-to-r from-gray-400 to-white/10 bg-clip-text text-transparent */}
                        project?
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-2">
                        Join developers who&apos;ve streamlined their theme setup process
                    </p>

                    <div className="rounded-xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
                        <div className="relative bg-black/90 backdrop-blur-xl mb-4 max-w-4xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl hover:border-white/20 transition-all duration-300 cursor-pointer"
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
                                    <span className="text-gray-500 font-mono text-sm sm:text-base lg:text-lg select-none flex-shrink-0">$</span>
                                    <span className="text-green-400 font-mono text-sm sm:text-base lg:text-lg font-medium tracking-wide whitespace-nowrap">
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
                                    className="ml-2 sm:ml-4 p-1.5 sm:p-2 lg:p-3 rounded-xl text-gray-400 hover:text-white transition-all duration-200 focus:outline-none active:scale-95 group flex-shrink-0"
                                    aria-label={copiedCommand ? "Copied!" : "Copy command"}
                                >
                                    {copiedCommand ? (
                                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                    ) : (
                                        <Copy className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}