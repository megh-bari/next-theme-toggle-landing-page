import { Card, CardContent } from "@/components/ui/card"
import { Package, Palette, Sun } from "lucide-react"

export function Dependencies() {
  const dependencies = [
    {
      icon: <Sun className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      name: "next-themes",
      description: "Theme switching logic with system preference detection",
      version: "Latest",
      purpose: "Core theme management",
    },
    {
      icon: <Package className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      name: "lucide-react",
      description: "Beautiful icons for sun/moon theme toggle button",
      version: "Latest",
      purpose: "UI icons",
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      name: "tailwindcss",
      description: "Utility-first CSS framework for styling",
      version: "v4+",
      purpose: "Styling framework",
    },
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 border-t backdrop-blur-md border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">Dependencies</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            Minimal, carefully selected dependencies for maximum performance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {dependencies.map((dep, index) => (
            <Card
              key={index}
              className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl hover:bg-white/5 transition-all duration-300 sm:col-span-1 lg:col-span-1"
            >
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="text-white mb-4 lg:mb-6 flex justify-center">{dep.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 lg:mb-3">{dep.name}</h3>
                <div className="bg-black/30 rounded-lg px-3 py-1 mb-3 lg:mb-4 inline-block">
                  <span className="text-green-400 text-sm font-mono">{dep.version}</span>
                </div>
                <p className="text-gray-300 mb-3 lg:mb-4 leading-relaxed text-sm sm:text-base">{dep.description}</p>
                <div className="text-gray-400 text-xs sm:text-sm">
                  <span className="font-semibold">Purpose:</span> {dep.purpose}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <div className="inline-flex items-center bg-black/20 backdrop-blur-xl border border-white/5 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold">
            <Package className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-white" />
            <span className="text-white">All dependencies are automatically installed</span>
          </div>
        </div>
      </div>
    </section>
  )
}