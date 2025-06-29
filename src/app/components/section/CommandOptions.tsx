import { Card, CardContent } from "@/components/ui/card"
import { Terminal } from "lucide-react"

export function CommandOptions() {
  const commands = [
    {
      command: "npx next-theme-toggle",
      description: "Default installation with full Tailwind CSS setup",
      recommended: true,
    },
    {
      command: "npx next-theme-toggle --no-tailwind",
      description: "Skip Tailwind CSS setup (if you have custom configuration)",
      recommended: false,
    },
    {
      command: "npx next-theme-toggle -T",
      description: "Short flag for skipping Tailwind CSS setup",
      recommended: false,
    },
  ]

  return (
    <section className="py-32 px-4 border-t backdrop-blur-md  border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Command Options</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Flexible installation options for different project setups
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {commands.map((cmd, index) => (
            <Card
              key={index}
              className={`bg-black/20 backdrop-blur-xl border-white/5 shadow-xl transition-all duration-300 ${
                cmd.recommended ? "ring-1 ring-green-400/80" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        cmd.recommended ? "bg-green-400/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      <Terminal className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      {cmd.recommended && (
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="bg-black/90 rounded-xl p-4 border border-white/20 mb-4">
                      <code className="text-green-400 font-mono text-lg">
                        <span className="text-gray-500">$ </span>
                        {cmd.command}
                      </code>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{cmd.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
