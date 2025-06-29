"use client"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Play } from "lucide-react"

export function DemoVideo() {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [showControls, setShowControls] = useState(false)
    const [error, setError] = useState("")

    const togglePlay = async () => {
        if (videoRef.current) {
            try {
                if (isPlaying) {
                    videoRef.current.pause()
                    setIsPlaying(false)
                } else {
                    await videoRef.current.play()
                    setIsPlaying(true)
                }
                setError("")
            } catch (err) {
                console.error("Video play failed:", err)
                setError(`Play failed: ${err.message}`)
            }
        }
    }

    const handleVideoError = (e) => {
        console.error("Video error:", e.target.error)
        setError(`Video error: ${e.target.error?.message || 'Unknown error'}`)
    }

    const handleVideoLoad = () => {
        setError("")
    }

    const handleVideoPlay = () => {
        setIsPlaying(true)
        setShowControls(true)
    }

    const handleVideoPause = () => {
        setIsPlaying(false)
    }

    const handleVideoClick = (e) => {
        // Prevent custom play button from interfering with native controls
        if (!isPlaying) {
            e.preventDefault()
            togglePlay()
        }
    }

    return (
        <section className="py-32 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">See it in action</h2>
                    <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Watch how the CLI tool transforms your Next.js project with beautiful theme switching capabilities
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Card className="bg-white/3 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden ">
                        <CardContent className="">
                            <div className="relative aspect-video  group overflow-hidden">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover rounded-t-xl" // <-- rounded corners here
                                    loop
                                    preload="metadata"
                                    playsInline
                                    poster="/image/thumbnail.png"
                                    onError={handleVideoError}
                                    onLoadedData={handleVideoLoad}
                                    onPlay={handleVideoPlay}
                                    onPause={handleVideoPause}
                                    onClick={handleVideoClick}
                                    controls={showControls}
                                    controlsList="nodownload"
                                >
                                    <source src="/video/demo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Blur and Pause Button Overlay when Paused */}
                                {!isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 rounded-t-lg pointer-events-none">
                                        <div className="absolute inset-0 bg-black/60 transition-all duration-300 rounded-t-lg pointer-events-auto" />
                                        <button
                                            className="relative z-10 group/btn cursor-pointer bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-6 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-2xl pointer-events-auto"
                                            onClick={togglePlay}
                                            aria-label="Play video"
                                        >
                                            <Play className="w-12 h-12 text-white ml-1 group-hover/btn:scale-110 transition-transform duration-200" />
                                        </button>
                                    </div>
                                )}

                                {/* Error display for debugging */}
                                {error && (
                                    <div className="absolute top-4 left-4 bg-red-500/80 text-white p-2 rounded text-sm z-20">
                                        {error}
                                    </div>
                                )}
                            </div>


                            {/* Video Info */}
                            <div className="p-8 bg-black/40  border-t border-white/5 rounded-b-xl">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white">Complete Setup Walkthrough</h4>
                                        <p className="text-gray-400">See the entire process from installation to implementation</p>
                                    </div>
                                    <Badge className="py-2 bg-white/10 text-gray-300 border-white/10">
                                        <Monitor className="w-4 h-4 mr-2" />
                                        2:30 Duration
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    )
}
