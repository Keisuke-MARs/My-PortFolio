'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Github } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

export default function AboutMe() {
    const { ref, isVisible } = useFadeIn()
    return (
        <section
            id="about"
            className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8"
            ref={ref}
        >
            <div
                className="absolute inset-0 opacity-30 bg-gradient-to-br from-gray-50 to-gray-200"
            />

            <div className={`relative max-w-7xl mx-auto transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                <h2 className="text-6xl font-serif text-gray-900 mb-12">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
                        <div className="relative w-full max-w-xs">
                            <Image
                                src="/images/profile-image.jpg"
                                alt="Keisuke Nishimura"
                                width={320}
                                height={400}
                                className="rounded-lg shadow-lg object-contain"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 lg:w-3/4 space-y-6 md:pl-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-3xl font-medium text-gray-900 mb-2 sm:mb-0">
                                西村 圭裕 Keisuke Nishimura
                            </h3>
                            <div className="flex gap-4">
                                <Link href="https://instagram.com/kei_110000" className="text-gray-600 hover:text-gray-900">
                                    <Instagram size={24} />
                                </Link>
                                <Link href="https://github.com/Keisuke-MARs" className="text-gray-600 hover:text-gray-900">
                                    <Github size={24} />
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-700 text-lg pl-4">
                            <p>2003年6月15日生、鹿児島県鹿児島市出身。</p>
                            <p>
                                鹿児島県立開陽高等学校卒業後、KCS鹿児島情報専門学校
                                大学併修科、北海道情報大学通信教育部経営情報学部経営ネットワーク学科に入学。在学中。専門学校ではプログラム言語、システム開発、開発手法、データ分析、
                                ネットワーク、データベース、クラウドなどIT全般について学び、大学では一般教養について学ぶ。
                                <br />
                                現在、個人でAWS,React,Next.js,TypeScriptについて勉強中。
                                <br />
                                座右の銘は「やってみなくちゃ分からない。分からなかったらやってみよう。」
                                <br />
                            </p>
                        </div>
                        <div className='space-y-4 text-gray-600 text-lg pl-4'>
                            <h2 className='text-2xl font-medium text-gray-900 mb-2 sm:mb-0'>
                                インターンシップ経歴
                            </h2>
                            <p>
                                2024年8月:SCSKニアショアシステムズ株式会社5Daysインターンシップ
                            </p>
                            <p>
                                2024年9月:株式会社トヨタ車体研究所3Daysインターンシップ
                            </p>
                        </div>
                        <div className='space-y-4 text-gray-600 text-lg pl-4'>
                            <h2 className='text-2xl font-medium text-gray-900 mb-2 sm:mb-0'>
                                取得資格
                            </h2>
                            <p>
                                2023年2月:SEA/J主催 情報セキュリティ技術認定 基礎コース(CSBM)
                            </p>
                            <p>
                                2023年5月:基本情報技術者試験
                            </p>
                            <p>
                                2023年5月:情報セキュリティマネジメント試験
                            </p>
                            <p>
                                2023年5月:Oracle認定JavaプログラマSE Bronze
                            </p>
                            <p>
                                2024年12月:応用情報技術者試験
                            </p>
                        </div>

                        <div className="flex justify-end pt-8">
                            <Link
                                href="#contact"
                                className="group flex items-center text-gray-900 hover:text-gray-600 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                Contact
                                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}