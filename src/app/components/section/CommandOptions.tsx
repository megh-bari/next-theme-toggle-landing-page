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
    <section className="py-16 sm:py-24 lg:py-32 px-4 border-t backdrop-blur-md border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">Command Options</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            Flexible installation options for different project setups
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {commands.map((cmd, index) => (
            <Card
              key={index}
              className={`bg-black/20 backdrop-blur-xl border-white/5 shadow-xl transition-all duration-300 ${
                cmd.recommended ? "ring-1 ring-green-400/80" : ""
              }`}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  <div className="flex-shrink-0 self-start sm:self-auto">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                        cmd.recommended ? "bg-green-400/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      {cmd.recommended && (
                        <span className="bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="bg-black/90 rounded-xl p-3 sm:p-4 border border-white/20 mb-3 sm:mb-4 overflow-x-auto">
                      <code className="text-green-400 font-mono text-sm sm:text-base lg:text-lg whitespace-nowrap">
                        <span className="text-gray-500">$ </span>
                        {cmd.command}
                      </code>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">{cmd.description}</p>
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