import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

export default function TerminalLoadingInterface() {
    const [typedText, setTypedText] = useState("")
    const [visible, setVisible] = useState(false)
    const command = " next-theme-toggle"

    useEffect(() => {
        setVisible(true)
        let index = 0
        const typingInterval = setInterval(() => {
            if (index <= command.length) {
                setTypedText(command.substring(0, index))
                index++
            } else {
                clearInterval(typingInterval)
            }
        }, 80)
        return () => clearInterval(typingInterval)
    }, [])

    return (
        <div
            className={`fixed inset-0 bg-black flex items-center justify-center p-4 z-50 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
            <div className="w-full max-w-4xl lg:max-w-3xl">
                <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center px-4 py-3 bg-black/90 backdrop-blur-xl border-b border-white/10 rounded-t-2xl">
                        <Terminal className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-300 text-sm font-medium">Terminal</span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 font-mono bg-black/90 backdrop-blur-xl border border-white/10 border-t-0 text-sm rounded-b-2xl">
                        {/* Command Line */}
                        <div className="flex items-center space-x-2">
                            <span className="text-green-400">❯</span>
                            <span>
                                <span className="text-purple-400">npx</span>
                                <span className="text-gray-300"> </span>
                                <span className="text-green-400">{typedText.replace(' ', '')}</span>
                                <span className="animate-pulse text-white">|</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
