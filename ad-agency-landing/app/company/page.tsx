import Link from "next/link"
import { ChevronLeft, Building2, MapPin, Calendar, User, DollarSign, Briefcase, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Company() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション - 大きなロゴ表示 */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#FFF4E6] to-[#FFE4B5]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="inline-flex items-center text-sm text-[#FF8C00] hover:text-[#FF7F00]">
              <ChevronLeft className="h-4 w-4 mr-1" />
              トップページに戻る
            </Link>
          </div>

          {/* 大きなロゴとタイトル */}
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Image
                src="/images/three-logo.png"
                width={600}
                height={300}
                alt="Three logo"
                className="h-40 md:h-48 lg:h-56 w-auto"
                style={{
                  mixBlendMode: "multiply",
                  filter: "contrast(1.2) brightness(1.1)",
                  background: "transparent",
                }}
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Three株式会社</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* 会社情報セクション */}
        <div className="bg-gradient-to-br from-[#FFF4E6] to-[#FFE4B5] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#FF8C00]">会社情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#FF8C00] p-2 mt-1">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">会社名</h3>
                  <p className="text-muted-foreground">Three株式会社</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#FF8C00] p-2 mt-1">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">所在地</h3>
                  <p className="text-muted-foreground">
                    〒１０４-００６１
                    <br />
                    東京都中央区銀座一丁目22番11号　銀座大竹ビジデンス 2F
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#FF8C00] p-2 mt-1">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">設立</h3>
                  <p className="text-muted-foreground">2025年5月9日</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#FF8C00] p-2 mt-1">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">代表者</h3>
                  <p className="text-muted-foreground">代表取締役 北田 耕三</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#FF8C00] p-2 mt-1">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">資本金</h3>
                  <p className="text-muted-foreground">1,000,000円</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#FF8C00] p-2 mt-1">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">事業内容</h3>
                  <p className="text-muted-foreground">
                    インターネット広告運用代行
                    <br />
                    Webマーケティング支援
                    <br />
                    SNSマーケティング支援 など
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* お問い合わせセクション */}
        <div className="bg-white rounded-lg border-2 border-[#FFB347] p-8 shadow-lg mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#FF8C00]">お問い合わせ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#FFF4E6] p-3">
                <Mail className="h-6 w-6 text-[#FF8C00]" />
              </div>
              <div>
                <h3 className="font-bold">メールアドレス</h3>
                <p className="text-muted-foreground">three.ksakss@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#FFF4E6] p-3">
                <Phone className="h-6 w-6 text-[#FF8C00]" />
              </div>
              <div>
                <h3 className="font-bold">電話番号</h3>
                <p className="text-muted-foreground">050-1724-0933</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
