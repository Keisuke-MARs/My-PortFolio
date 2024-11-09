'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] })

export default function MainVisual() {
    const [, setActiveSection] = useState('about')
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'works', 'strength', 'contact']
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (currentSection) {
                setActiveSection(currentSection)
            }

            // メインビジュアルをスクロールしたかどうかをチェック
            setIsScrolled(window.scrollY > window.innerHeight * 0.8)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className={`relative h-screen w-full overflow-hidden ${caveat.className}`}>
                <Image
                    src="/images/トップ背景.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black opacity-60" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">
                        Keisuke Nishimura
                    </h1>
                    <p className="text-3xl md:text-4xl font-medium tracking-wide">
                        My-Portfolio
                    </p>
                </div>
            </div>
            <nav className={`fixed z-50 transition-all duration-300 ease-in-out ${caveat.className} ${isScrolled
                ? 'top-4 right-4 bg-black bg-opacity-80 rounded-2xl shadow-xl'
                : 'bottom-10 left-1/2 transform -translate-x-1/2'
                }`}>
                <div className={`px-6 py-3 backdrop-filter backdrop-blur-md ${isScrolled ? 'rounded-xl' : 'bg-black bg-opacity-20 rounded-full'
                    }`}>
                    <ul className="flex space-x-6 md:space-x-12">
                        {[
                            { id: 'about', label: 'About Me' },
                            { id: 'skills', label: 'Skills' },
                            { id: 'works', label: 'Works' },
                            { id: 'strength', label: 'Strength' },
                            { id: 'contact', label: 'Contact' }
                        ].map(({ id, label }) => (
                            <li key={id}>
                                <Link
                                    href={`#${id}`}
                                    className={`text-2xl md:text-3xl font-medium text-white transition-colors hover:text-gray-300 ${isScrolled ? 'text-xl md:text-2xl' : ''
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}