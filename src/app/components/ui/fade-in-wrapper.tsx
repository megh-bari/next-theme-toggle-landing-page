"use client"
import type React from "react"
import { useEffect, useState } from "react"

interface FadeInWrapperProps {
    children: React.ReactNode
    delay?: number
}

export function FadeInWrapper({ children, delay = 0 }: FadeInWrapperProps) {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])

    return (
        <>
            <div
                className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
            >
                {children}
            </div>
        </>
    )

}