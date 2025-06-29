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
        <div className="flex items-center justify-center px-2 sm:px-4 md:px-8 py-6 mb-4">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
                {/* Command Block */}
                <div
                    className="group relative cursor-pointer transform transition-all duration-300"
                    onClick={() => copyToClipboard("npx next-theme-toggle")}
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 rounded-2xl blur opacity-2 group-hover:opacity-10 transition-opacity duration-300"></div>

                    {/* Main container */}
                    <div className="relative bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl group-hover:border-white/20 transition-all duration-300">
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
                                aria-label={copied ? "Copied!" : "Copy command"}
                            >
                                {copied ? (
                                    <Check className="w-5 h-5 text-green-400" />
                                ) : (
                                    <Copy className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
