"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Terminal, FileText, Folder, Code2 } from "lucide-react"

export function InstallationGuide() {
  const [copiedStep, setCopiedStep] = useState<string | null>(null)

  const copyToClipboard = async (text: string, step: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedStep(step)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  const installationSteps = [
    {
      step: "1",
      title: "Navigate to your Next.js project",
      command: "cd your-nextjs-project",
      description: "Make sure you're in your Next.js project directory",
      icon: <Folder className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "2",
      title: "Run the CLI command",
      command: "npx next-theme-toggle",
      description: "This will automatically set up everything you need",
      icon: <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "3",
      title: "Start your development server",
      command: "npm run dev",
      description: "Your app now has beautiful theme switching!",
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ]

  return (
    <section id="installation" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-4 border-t backdrop-blur-md border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white px-4">
            Quick Installation Guide
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            Get up and running in 3 simple steps - no configuration required
          </p>
        </div>

        <div className="max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {installationSteps.map((step, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl">
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    {/* Mobile: Step number and icon side by side */}
                    <div className="flex items-center space-x-3 sm:hidden">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="text-white flex items-center">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Desktop: Step number only */}
                    <div className="hidden sm:block flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg sm:text-xl">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Desktop: Icon and title side by side */}
                      <div className="hidden sm:flex sm:items-center space-x-3 mb-3 sm:mb-4">
                        <div className="text-white flex items-center">
                          {step.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                          {step.title}
                        </h3>
                      </div>
                      
                      {/* Mobile: Title only (icon already shown above) */}
                      <h3 className="text-lg font-bold text-white leading-tight mb-3 sm:hidden">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {step.description}
                      </p>
                      <div className="bg-black/90 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                        <div className="flex items-center justify-between gap-2">
                          <code className="text-green-400 font-mono text-sm sm:text-base lg:text-lg flex-1 min-w-0 break-all">
                            <span className="text-gray-500">$ </span>
                            {step.command}
                          </code>
                          <Button
                            size="sm"
                            onClick={() => copyToClipboard(step.command, step.step)}
                            className="bg-clip-text text-gray-400 hover:text-white transition-all duration-200 focus:outline-none active:scale-95 group flex-shrink-0 p-2 sm:px-3"
                          >
                            {copiedStep === step.step ? (
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <Badge className="bg-black/20 backdrop-blur-xl text-green-400 rounded-full border-gray-400/30 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              That&apos;s it! Your theme toggle is ready to use
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}