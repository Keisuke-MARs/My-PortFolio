'use client'

import { Mail, Instagram } from 'lucide-react'
import Link from 'next/link'
import { useFadeIn } from '@/hooks/useFadeIn'
import { useState, useEffect } from 'react'

export default function Contact() {
    const { ref, isVisible } = useFadeIn()
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        if (isVisible) {
            setIsAnimating(true)
            const timer = setTimeout(() => {
                setIsAnimating(false)
            }, 2000) // 5000から2000に変更
            return () => clearTimeout(timer)
        }
    }, [isVisible])

    return (
        <section id="contact" className="relative min-h-screen w-full bg-white" ref={ref}>
            {/* Content Container */}
            <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                <h2 className="text-6xl font-serif text-gray-900 mb-16">
                    Contact
                </h2>

                <div className="space-y-8">
                    {/* Email */}
                    <div className="flex items-center gap-8">
                        <Mail className="w-16 h-16" />
                        <Link
                            href="mailto:mtcs_drsp@icloud.com"
                            className="text-2xl font-sans hover:underline"
                        >
                            mtcs_drsp@icloud.com
                        </Link>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-center gap-8">
                        <Instagram className="w-16 h-16" />
                        <Link
                            href="https://instagram.com/kei_110000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-sans hover:underline"
                        >
                            @kei_110000
                        </Link>
                    </div>
                </div>
            </div>

            {/* Wave Shape and Copyright */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 200"
                    className="w-full h-auto transition-all duration-300 ease-in-out"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 100L48 87.5C96 75 192 50 288 54.2C384 58.3 480 91.7 576 95.8C672 100 768 75 864 70.8C960 66.7 1056 83.3 1152 87.5C1248 91.7 1344 83.3 1392 79.2L1440 75V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V100Z"
                        fill="black"
                    >
                        {isAnimating && (
                            <animate
                                attributeName="d"
                                dur="0.2s" // 0.5sから0.2sに変更
                                repeatCount="10" // 10のまま（2秒 / 0.2秒 = 10回）
                                values="
                                M0 100L48 87.5C96 75 192 50 288 54.2C384 58.3 480 91.7 576 95.8C672 100 768 75 864 70.8C960 66.7 1056 83.3 1152 87.5C1248 91.7 1344 83.3 1392 79.2L1440 75V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V100Z;
                                M0 50L48 60C96 70 192 90 288 95C384 100 480 90 576 85C672 80 768 80 864 90C960 100 1056 120 1152 115C1248 110 1344 80 1392 65L1440 50V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V50Z;
                                M0 100L48 87.5C96 75 192 50 288 54.2C384 58.3 480 91.7 576 95.8C672 100 768 75 864 70.8C960 66.7 1056 83.3 1152 87.5C1248 91.7 1344 83.3 1392 79.2L1440 75V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V100Z"
                            />
                        )}
                    </path>
                </svg>
                <div className="bg-black text-white py-8 px-4 text-center">
                    <p className="font-serif">
                        All Rights Reserved 2024 © Keisuke Nishimura
                    </p>
                </div>
            </div>
        </section>
    )
}