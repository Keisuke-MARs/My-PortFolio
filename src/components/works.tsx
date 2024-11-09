'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useFadeIn } from '@/hooks/useFadeIn'

export const works = [
    {
        id: "prowrestling",
        image: "/images/prowrestling-site.png",
        year: "2023年作成",
        type: "趣味紹介WEBサイト",
        title: "プロレスの魅力を伝えたい",
        link: "https://prowrestling.vercel.app/index.html",
        description: "プロレスの魅力を紹介するウェブサイトです。プロレスの歴史、主要な団体、有名な選手などの情報を提供しています。"
    },
    {
        id: "restaurant",
        image: "/images/restaurant-site.png",
        year: "2023年作成",
        type: "趣味紹介WEBサイト",
        title: "私の好きな飲食店",
        link: "https://web-food-pink.vercel.app/",
        description: "私のお気に入りの飲食店を紹介するウェブサイトです。各店舗の特徴、おすすめメニュー、雰囲気などを詳しく紹介しています。"
    },
    {
        id: "quesera",
        image: "/images/quesera-site.png",
        year: "2024年作成",
        type: "推し活絵日記作成サイト",
        title: "QueSera",
        link: "http://marsquesera.com/",
        description: "ファンの方々が自分の「推し」に関する絵日記を作成できるウェブアプリケーションです。思い出を記録し、共有することができます。"
    },
    {
        id: "portfolio",
        image: "/images/portfolio-site.png",
        year: "2024年作成",
        type: "ポートフォリオサイト",
        title: "KeisukeNishimura\nMy-PortFolio",
        link: "#",
        description: "私のスキル、経験、プロジェクトをまとめたポートフォリオサイトです。Web開発の技術と創造性を示すために作成しました。"
    }
]

export default function Works() {
    const { ref, isVisible } = useFadeIn()
    return (
        <section id="works" className='relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-white' ref={ref}>
            <div
                className='absolute inset-0 opacity-50'
                style={{
                    backgroundImage: `url('/images/marble-texture.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className={`relative max-w-7xl mx-auto transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className='flex items-baseline gap-4 mb-16'>
                    <h2 className='text-6xl font-serif text-gray-900'>
                        Works
                    </h2>
                    {/* <span className='text-2xl font-sans text-gray-700'>
                        制作物
                    </span> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {works.map((work) => (
                        <Link href={`/works/${work.id}`} key={work.id} className='group'>
                            <div className='space-y-4'>
                                <div className='relative w-full h-64 overflow-hidden rounded-lg border-2 border-gray-300 shadow-md'>
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className='object-cover transition-transform duration-300 group-hover:scale-105'
                                    />
                                </div>
                                <div className='space-y-2 text-center'>
                                    <p className='text-xl font-sans text-gray-900'>
                                        {work.year}
                                    </p>
                                    <p className='text-xl font-sans text-gray-900'>
                                        {work.type}
                                    </p>
                                    <h3 className='text-2xl font-serif font-medium text-gray-900 whitespace-pre-line'>
                                        {work.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}