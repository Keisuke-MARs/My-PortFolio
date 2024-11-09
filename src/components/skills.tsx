'use client'

import { Coffee, Network } from 'lucide-react'
import Image from 'next/image'
import { useFadeIn } from '@/hooks/useFadeIn'

export default function Skills() {
    const { ref, isVisible } = useFadeIn()
    const skills = [
        {
            icon: <Coffee className="w-12 h-12" />,
            name: "Java",
            description: "2023年Oracle認定Javaプログラマ SE Bronze取得。中級者レベルで扱うことができます。jsp,Servlet,Daoを使用したWEBアプリケーション、システム開発の経験があります。"
        },
        {
            icon: (
                <Image
                    src="/images/python-logo.png"
                    alt="Python"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                />
            ),
            name: "Python",
            description: "PandasやNumpy,Scikit-LearnなどのAIライブラリを用いた機械学習、プログラミングの経験があります。現在、ラズベリーパイの制御プログラムを作成中です。"
        },
        {
            icon: (
                <div className="relative w-12 h-12">
                    <Image
                        src="/images/web-stack.png"
                        alt="Web Development"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </div>
            ),
            name: "WebDesing\nWebDevelopment",
            description: "HTML,CSS,JavaScriptを用いたフロントエンド作成を行うことができます。シンプルでかつ見る人の目を惹くようなデザインになるよう心掛けています。現在、React,Next.js,TypeScriptを学習し将来はWEBアプリケーションエンジニアになれるよう日々研鑽を積んでいます"
        },
        {
            icon: (
                <Image
                    src="/images/aws-logo.png"
                    alt="AWS"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                />
            ),
            name: "AWS",
            description: "AWSを利用したインフラ構築、WEBサイトの運用経験があります。EC2やRDS,VPCなどの主要サービスを扱えています。現在、AWS認定クラウドプラクティショナーの年内取得に向けて勉強しています。"
        },
        {
            icon: <Network className="w-12 h-12" />,
            name: "ネットワーク",
            description: "ネットワークの基礎知識から応用情報技術者試験レベルのネットワークの知識があります。また、Cisco Packet Tracerを用いた仮想的なネットワーク構築の経験があります。"
        }
    ]

    return (
        <section id="skills" className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
            {/* Marble-like background overlay */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `url('/images/marble-texture.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div className={`relative max-w-7xl mx-auto transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-6xl font-serif text-gray-900 mb-12">
                    Skills
                </h2>

                <div className="space-y-16">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex items-center gap-4 md:w-1/4">
                                <div className="flex justify-center items-center w-16">
                                    {skill.icon}
                                </div>
                                <h3 className="text-2xl font-sans font-medium text-gray-900 whitespace-pre-line">
                                    {skill.name}
                                </h3>
                            </div>

                            <div className="md:w-3/4">
                                <p className="text-lg font-serif text-gray-700 leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}