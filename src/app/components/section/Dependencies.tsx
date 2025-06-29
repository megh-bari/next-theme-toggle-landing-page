import { Card, CardContent } from "@/components/ui/card"
import { Package, Palette, Sun } from "lucide-react"

export function Dependencies() {
  const dependencies = [
    {
      icon: <Sun className="w-8 h-8" />,
      name: "next-themes",
      description: "Theme switching logic with system preference detection",
      version: "Latest",
      purpose: "Core theme management",
    },
    {
      icon: <Package className="w-8 h-8" />,
      name: "lucide-react",
      description: "Beautiful icons for sun/moon theme toggle button",
      version: "Latest",
      purpose: "UI icons",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      name: "tailwindcss",
      description: "Utility-first CSS framework for styling",
      version: "v4+",
      purpose: "Styling framework",
    },
  ]

  return (
    <section className="py-32 px-4 border-t backdrop-blur-md  border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Dependencies</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Minimal, carefully selected dependencies for maximum performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {dependencies.map((dep, index) => (
            <Card
              key={index}
              className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl hover:bg-white/5 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="text-white mb-6 flex justify-center">{dep.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{dep.name}</h3>
                <div className="bg-black/30 rounded-lg px-3 py-1 mb-4 inline-block">
                  <span className="text-green-400 text-sm font-mono">{dep.version}</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{dep.description}</p>
                <div className="text-gray-400 text-sm">
                  <span className="font-semibold">Purpose:</span> {dep.purpose}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-black/20 backdrop-blur-xl border border-white/5 rounded-full px-8 py-4 text-lg font-bold">
            <Package className="w-6 h-6 mr-3 text-white" />
            <span className="text-white">All dependencies are automatically installed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
