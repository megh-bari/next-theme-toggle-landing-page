import { Card, CardContent } from "@/components/ui/card"
import { Code, ChevronRight, Cog, FileText } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-4 bg-zinc-950/40 border-t backdrop-blur-md  border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">How it works</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Understanding the magic behind the one-command setup
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* How it Works Process */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">1. Project Detection</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                    <span>Scans for Next.js project structure</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                    <span>Detects package manager (npm/yarn/pnpm)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                    <span>Identifies app directory structure</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                    <span>Checks existing Tailwind CSS setup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <Cog className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">2. Smart Installation</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                    <span>Installs required dependencies automatically</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                    <span>Configures Tailwind CSS v4 if needed</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                    <span>Sets up PostCSS configuration</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                    <span>Adds CSS variables and transitions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">3. Component Generation</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-purple-400 flex-shrink-0" />
                    <span>Creates ThemeToggle component</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-purple-400 flex-shrink-0" />
                    <span>Generates Header with toggle integration</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-purple-400 flex-shrink-0" />
                    <span>Updates layout.tsx with ThemeProvider</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-purple-400 flex-shrink-0" />
                    <span>Creates example components</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Flow Diagram */}
          <div className="mt-16">
            <Card className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-center text-white">Installation Flow</h3>
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-blue-400 font-bold text-xl">1</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Scan Project</h4>
                    <p className="text-gray-400 text-sm">Detect structure & dependencies</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-green-400 font-bold text-xl">2</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Install Deps</h4>
                    <p className="text-gray-400 text-sm">Add required packages</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-purple-400 font-bold text-xl">3</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Generate Files</h4>
                    <p className="text-gray-400 text-sm">Create components & config</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-yellow-400 font-bold text-xl">✓</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Ready!</h4>
                    <p className="text-gray-400 text-sm">Theme toggle working</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
