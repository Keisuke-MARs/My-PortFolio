'use client'

import { Award, Users, Zap } from 'lucide-react'
import { useFadeIn } from '@/hooks/useFadeIn'

export default function Strength() {
    const { ref, isVisible } = useFadeIn()
    const strengths = [
        {
            icon: <Users className="w-12 h-12" />,
            title: "コミュニケーション力",
            description: "高校1年生の頃から継続しているアルバイト経験によって磨かれたコミュニケーション能力があります。グループワークではリーダーとしてメンバーが何を伝えたいのかを把握してメンバー間のコミュニケーションを促進しました。"
        },
        {
            icon: <Award className="w-12 h-12" />,
            title: "リーダーシップ",
            description: "幼い頃からグループ活動において常にリーダーに立候補をしていました。現在も授業でのチームリーダーを2グループ、また学園祭のクラスリーダーを3年連続で務めています。"
        },
        {
            icon: <Zap className="w-12 h-12" />,
            title: "行動力",
            description: "「考えるより先に行動。」「失敗を恐れずに行動する。」をモットーに何事にも積極的に行動してきました。ハッカソンや勉強会へ参加をし、常に自分を高めることができる環境に身を置きたいと考えています。"
        }
    ]

    return (
        <section id="strength" className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
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
                    Strength
                </h2>

                <div className="space-y-16">
                    {strengths.map((strength, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex items-center gap-4 md:w-1/4">
                                <div className="flex justify-center items-center w-16">
                                    {strength.icon}
                                </div>
                                <h3 className="text-2xl font-sans text-gray-900 whitespace-pre-line">
                                    {strength.title}
                                </h3>
                            </div>

                            <div className="md:w-3/4">
                                <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                    {strength.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}