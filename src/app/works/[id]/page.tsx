'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { works } from '@/data/works'

export default function WorkDetail() {
    const params = useParams()
    const work = works.find(w => w.id === params.id)

    if (!work) {
        return <div>Work not found</div>
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/#works" className="flex items-center text-gray-600 hover:text-gray-900 mb-8">
                    <ArrowLeft className="mr-2" />
                    Back to Works
                </Link>
                <h1 className="text-4xl font-bold mb-8 font-serif">{work.title}</h1>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <Image
                        src={work.image}
                        alt={work.title}
                        width={800}
                        height={450}
                        className="w-full object-cover h-64 sm:h-80 md:h-96"
                    />
                    <div className="p-6">
                        <p className="text-gray-600 mb-4">{work.year} | {work.type}|<span className='font-medium'>使用技術:{work.stack}</span></p>
                        <p className="text-gray-800 mb-6">{work.description}</p>
                        <Link
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            Visit Website
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}