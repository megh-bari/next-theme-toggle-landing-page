import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CommandBlock() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async (text:string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-4 py-4 sm:py-6 mb-3 sm:mb-4">
            <div className="w-full max-w-lg sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl">
                {/* Command Block */}
                <div
                    className="group relative cursor-pointer transform transition-all duration-300"
                    onClick={() => copyToClipboard("npx next-theme-toggle")}
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 rounded-xl sm:rounded-2xl blur opacity-2 group-hover:opacity-10 transition-opacity duration-300"></div>

                    {/* Main container */}
                    <div className="relative bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-2xl group-hover:border-white/20 transition-all duration-300">
                        {/* Terminal header */}
                        <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                            <div className="flex items-center space-x-1.5 sm:space-x-2">
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Command line */}
                        <div className="flex items-center justify-between overflow-x-auto">
                            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                                <span className="text-gray-500 font-mono text-sm sm:text-base md:text-lg select-none flex-shrink-0">$</span>
                                <span className="text-green-400 font-mono text-sm sm:text-base md:text-lg font-medium tracking-wide truncate sm:break-all">
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
                                className="ml-2 sm:ml-3 md:ml-4 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl text-gray-400 hover:text-white transition-all duration-200 focus:outline-none active:scale-95 group flex-shrink-0"
                                aria-label={copied ? "Copied!" : "Copy command"}
                            >
                                {copied ? (
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
    );
}