export const works = [
    {
        id: "prowrestling",
        image: "/images/prowrestling-site.png",
        year: "2023年作成",
        type: "趣味紹介WEBサイト",
        title: "プロレスの魅力を伝えたい",
        stack: "HTML,CSS,JavaScript",
        link: "https://prowrestling.vercel.app/index.html",
        description: "「趣味を紹介する」をテーマに授業でWEBサイトを制作しました。私の好きなプロレスラー、ベストバウト、団体を紹介しました。"
    },
    {
        id: "restaurant",
        image: "/images/restaurant-site.png",
        year: "2023年作成",
        type: "趣味紹介WEBサイト",
        title: "私の好きな飲食店",
        stack: "HTML,CSS,jQuery",
        link: "https://web-food-pink.vercel.app/",
        description: "jQueryを使用して私のお気に入りの飲食店を紹介するWEBサイトを授業で制作しました。飯テロができるようなサイトを目指して制作しました。"
    },
    {
        id: "quesera",
        image: "/images/quesera-site.png",
        year: "2024年作成",
        type: "推し活絵日記作成サイト",
        title: "QueSera",
        stack: "HTML,CSS,JavaScript,AmazonEC2,Route53",
        link: "http://marsquesera.com/",
        description: "GMOペパボ株式会社鹿児島オフィス主催「お産ハッカソン」にてチーム制作し、3位入賞した制作物です。「推し活」×「絵日記」をテーマに自分の推し活を発信できるサイトを制作しました。また、インフラとしてAWSを使用して公開しています。"
    },
    {
        id: "portfolio",
        image: "/images/portfolio-site.png",
        year: "2024年作成",
        type: "ポートフォリオサイト",
        title: "KeisukeNishimura\nMy-PortFolio",
        stack: "Next.js,TypeScript",
        link: "/",
        description: "私のスキル、経験、プロジェクトをまとめたポートフォリオサイトです。初めてのNext.js,TypeScriptでの制作物です。デザインは自分で行い、生成AIを活用しながらコーディングを行いました。"
    }
] as const

export type Work = typeof works[number]