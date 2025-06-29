"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Play } from "lucide-react";
import Image from "next/image";
import Player from "@vimeo/player";

export function DemoVideo() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [vimeoInstance, setVimeoInstance] = useState<Player | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false); // Track if video has ever been played
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;
        let localInstance: Player | null = null;

        const setupVimeo = async () => {
            try {
                if (!iframeRef.current) return;

                localInstance = new Player(iframeRef.current);

                if (!isMounted) return;

                setVimeoInstance(localInstance);
                localInstance.setVolume(1).catch(() => { });
                localInstance.setLoop(false).catch(() => { });

                localInstance.on("play", () => {
                    if (isMounted) {
                        setIsPlaying(true);
                        setHasStarted(true); // Mark that video has been played
                        setError("");
                    }
                });

                localInstance.on("pause", () => {
                    if (isMounted) setIsPlaying(false);
                });

                localInstance.on("error", (err: { message?: string }) => {
                    if (isMounted) setError(`Video error: ${err.message || "Unknown error"}`);
                });
            } catch (err: unknown) {
                if (err && typeof err === "object" && "message" in err) {
                    setError(`Failed to initialize Vimeo player: ${(err as { message?: string }).message}`);
                } else {
                    setError("Failed to initialize Vimeo player.");
                }
            }
        };

        setupVimeo();

        return () => {
            isMounted = false;
            localInstance?.unload();
        };
    }, []);

    const handleToggle = async () => {
        if (!vimeoInstance) return;

        try {
            if (isPlaying) {
                await vimeoInstance.pause();
            } else {
                await vimeoInstance.play();
            }
            setError("");
        } catch (err: unknown) {
            if (err && typeof err === "object" && "message" in err) {
                setError(`Toggle error: ${(err as { message?: string }).message || "Unknown error"}`);
            } else {
                setError("Toggle error: Unknown error");
            }
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (!isPlaying) {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white px-4">
                        See it in action
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
                        Watch how the CLI tool transforms your Next.js project with beautiful theme switching capabilities
                    </p>
                </div>

                <div className="max-w-2xl sm:max-w-4xl lg:max-w-6xl mx-auto">
                    <Card className="bg-white/3 p-3 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative aspect-video group overflow-hidden">
                                <iframe
                                    ref={iframeRef}
                                    src="https://player.vimeo.com/video/1097279949?h=28c0db27de&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                    allowFullScreen
                                    title="next-theme-toggle-demo"
                                    className="w-full h-full object-cover rounded-t-lg sm:rounded-t-xl"
                                    tabIndex={-1}
                                    onClick={handleOverlayClick}
                                />

                                {/* Show thumbnail overlay if video hasn't started yet */}
                                {!hasStarted && (
                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 rounded-t-lg sm:rounded-t-xl pointer-events-none">
                                        <Image
                                            src="/image/thumbnail.png"
                                            alt="Video thumbnail"
                                            fill
                                            className="absolute inset-0 object-cover rounded-t-lg sm:rounded-t-xl pointer-events-auto"
                                            draggable={false}
                                        />
                                        <div className="absolute inset-0 bg-black/60 transition-all duration-300 rounded-t-lg sm:rounded-t-xl pointer-events-auto" />
                                        <button
                                            className="relative z-10 group/btn cursor-pointer bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 lg:p-6 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-2xl pointer-events-auto"
                                            onClick={handleToggle}
                                            aria-label="Play video"
                                        >
                                            <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white ml-0.5 sm:ml-1 group-hover/btn:scale-110 transition-transform duration-200" />
                                        </button>
                                    </div>
                                )}

                                {/* Show play button when video is paused (but has been started) */}
                                {hasStarted && !isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 rounded-t-lg sm:rounded-t-xl pointer-events-none">
                                        
                                        <button
                                            className="relative z-10 group/btn cursor-pointer bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 lg:p-6 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-2xl pointer-events-auto"
                                            onClick={handleToggle}
                                            aria-label="Play video"
                                        >
                                            <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-md text-white ml-0.5 sm:ml-1 group-hover/btn:scale-110 transition-transform duration-200" />
                                        </button>
                                    </div>
                                )}

                                {error && (
                                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500/80 text-white p-2 rounded text-xs sm:text-sm z-20 max-w-[calc(100%-1rem)] sm:max-w-none">
                                        {error}
                                    </div>
                                )}
                            </div>

                            <div className="p-4 sm:p-6 lg:p-8 bg-black/40 border-t border-white/5 rounded-b-lg sm:rounded-b-xl">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                                    <div className="space-y-1 sm:space-y-2">
                                        <h4 className="text-lg sm:text-xl font-bold text-white">
                                            Complete Setup Walkthrough
                                        </h4>
                                        <p className="text-sm sm:text-base text-gray-400">
                                            See the entire process from installation to implementation
                                        </p>
                                    </div>
                                    <Badge className="py-2 px-3 bg-white/10 text-gray-300 border-white/10 self-start sm:self-center">
                                        <Monitor className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                        <span className="text-xs sm:text-sm">2:52 Duration</span>
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}