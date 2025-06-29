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
      icon: <Folder className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Run the CLI command",
      command: "npx next-theme-toggle",
      description: "This will automatically set up everything you need",
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Start your development server",
      command: "npm run dev",
      description: "Your app now has beautiful theme switching!",
      icon: <Code2 className="w-6 h-6" />,
    },
  ]

  return (
    <section id="installation" className="py-32 px-4 border-t backdrop-blur-md  border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Quick Installation Guide</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get up and running in 3 simple steps - no configuration required
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-white">{step.icon}</div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6 text-lg">{step.description}</p>
                      <div className="bg-black/90 rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                          <code className="text-green-400 font-mono text-lg">
                            <span className="text-gray-500">$ </span>
                            {step.command}
                          </code>
                          <Button
                            size="sm"
                            onClick={() => copyToClipboard(step.command, step.step)}
                            className="bg-clip-text text-gray-400 hover:text-white transition-all duration-200 focus:outline-none active:scale-95 group"
                          >
                            {copiedStep === step.step ? (
                                        <Check className="w-5 h-5 text-green-400" />
                                    ) : (
                                        <Copy className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
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

          <div className="text-center mt-16">
            <Badge className="bg-black/20 backdrop-blur-xl text-green-400 rounded-full border-gray-400/30 text-lg px-6 py-3">
              <FileText className="w-5 h-5 mr-2" />
              That&apos;s it! Your theme toggle is ready to use
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
