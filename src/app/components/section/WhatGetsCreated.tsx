import { Card, CardContent } from "@/components/ui/card"
import { FileText, Folder, Settings } from "lucide-react"

export function WhatGetsCreated() {
    const createdFiles = [
        {
            icon: <Folder className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Components Structure",
            files: [
                "src/app/components/ThemeToggle.tsx",
                "src/app/components/layout/Header.tsx",
                "src/app/components/ExampleCard.tsx",
            ],
            description: "Complete component structure with theme toggle functionality",
        },
        {
            icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Updated Files",
            files: [
                "layout.tsx - Wrapped with ThemeProvider",
                "page.tsx - Updated with new components",
                "globals.css - Custom CSS variants and transitions",
            ],
            description: "Existing files are updated to integrate theme functionality",
        },
        {
            icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Configuration",
            files: [
                "postcss.config.mjs - Configured for Tailwind v4",
                "CSS variables for theme colors",
                "Smooth transition effects",
            ],
            description: "Complete configuration for seamless theme switching",
        },
    ]

    return (
        <section className="py-16 sm:py-24 lg:py-32 px-4 bg-zinc-950/40 border-t backdrop-blur-md border-white/5">
            <div className="container mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">What Gets Created</h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
                        Complete file structure and configuration for theme switching
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {createdFiles.map((section, index) => (
                        <Card
                            key={index}
                            className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl hover:bg-white/5 transition-all duration-300 md:col-span-1 lg:col-span-1"
                        >
                            <CardContent className="p-6 lg:p-8">
                                <div className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                                    <div className="text-white flex-shrink-0">{section.icon}</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">{section.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">{section.description}</p>
                                <div className="space-y-2 lg:space-y-3">
                                    {section.files.map((file, fileIndex) => (
                                        <div key={fileIndex} className="bg-black/50 rounded-lg p-2 sm:p-3 border border-white/10">
                                            <code className="text-green-400 text-xs sm:text-sm break-all">{file}</code>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )
}