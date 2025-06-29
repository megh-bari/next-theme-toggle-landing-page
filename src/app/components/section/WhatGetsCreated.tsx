import { Card, CardContent } from "@/components/ui/card"
import { FileText, Folder, Settings } from "lucide-react"

export function WhatGetsCreated() {
    const createdFiles = [
        {
            icon: <Folder className="w-8 h-8" />,
            title: "Components Structure",
            files: [
                "src/app/components/ThemeToggle.tsx",
                "src/app/components/layout/Header.tsx",
                "src/app/components/ExampleCard.tsx",
            ],
            description: "Complete component structure with theme toggle functionality",
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Updated Files",
            files: [
                "layout.tsx - Wrapped with ThemeProvider",
                "page.tsx - Updated with new components",
                "globals.css - Custom CSS variants and transitions",
            ],
            description: "Existing files are updated to integrate theme functionality",
        },
        {
            icon: <Settings className="w-8 h-8" />,
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
        <section className="py-32 px-4 bg-zinc-950/40 border-t backdrop-blur-md  border-white/5">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">What Gets Created</h2>
                    <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Complete file structure and configuration for theme switching
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {createdFiles.map((section, index) => (
                        <Card
                            key={index}
                            className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl hover:bg-white/5 transition-all duration-300"
                        >
                            <CardContent className="p-8">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="text-white">{section.icon}</div>
                                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed">{section.description}</p>
                                <div className="space-y-3">
                                    {section.files.map((file, fileIndex) => (
                                        <div key={fileIndex} className="bg-black/50 rounded-lg p-3 border border-white/10">
                                            <code className="text-green-400 text-sm">{file}</code>
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
