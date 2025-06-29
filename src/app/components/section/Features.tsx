import { Card, CardContent } from "@/components/ui/card"
import { Zap, Palette, Smartphone, RotateCcw, Code, Sparkles } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "One-command setup",
      description: "Get up and running in seconds with a single npx command",
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      title: "Tailwind CSS v4 auto-config",
      description: "Automatically configures Tailwind CSS for perfect theme switching",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      title: "Responsive design",
      description: "Works flawlessly across all devices and screen sizes",
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-cyan-400" />,
      title: "Smooth transitions",
      description: "Beautiful animations that make theme switching delightful",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "TypeScript & JavaScript",
      description: "Full support for both TypeScript and JavaScript projects",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: "Beautiful components",
      description: "Pre-built components that look great out of the box",
    },
  ]

  return (
    <section id="features" className="py-32 px-4 bg-zinc-950/40 border-t backdrop-blur-md  border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Carefully crafted features that make theme switching effortless and beautiful
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl hover:bg-white/5 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="mb-4 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-3 text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
