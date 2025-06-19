"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, BarChart3, Target, TrendingUp, CheckCircle, Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"
import Link from "next/link"

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // エラーをクリア
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    // 名前は必須
    if (!formData.name.trim()) {
      newErrors.name = "お名前は必須項目です"
    }

    // メールアドレスまたは電話番号のいずれかは必須
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = "メールアドレスまたは電話番号のいずれかは必須です"
      newErrors.phone = "メールアドレスまたは電話番号のいずれかは必須です"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // ここで実際のフォーム送信処理を行う（今回はモックアップ）
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })

        // 成功メッセージを3秒後に消す
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 3000)
      }, 1000)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-28 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/everyday-logo.png"
              width={480}
              height={240}
              alt="everyday logo"
              className="h-24 w-auto mix-blend-multiply"
              style={{ filter: "contrast(1.1)" }}
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-lg font-medium hover:text-[#32CD32] transition-colors"
            >
              サービス
            </button>
            <button
              onClick={() => scrollToSection(resultsRef)}
              className="text-lg font-medium hover:text-[#32CD32] transition-colors"
            >
              実績
            </button>
            <Link href="/company" className="text-lg font-medium hover:text-[#32CD32] transition-colors">
              会社概要
            </Link>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-lg font-medium hover:text-[#32CD32] transition-colors"
            >
              お問い合わせ
            </button>
          </nav>
          <Button
            className="bg-[#32CD32] hover:bg-[#2AB52A] text-white text-base px-6 py-6"
            onClick={() => scrollToSection(contactRef)}
          >
            無料相談はこちら
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#E8FFEA] to-[#D1FFD6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  あなたのビジネスを<span className="text-[#32CD32]">成長</span>させる
                  <br />
                  <span className="text-red-500">広告運用</span>のプロフェッショナル
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  365日休まず、豊富な実績とAIの力であなたのビジネスの成長をサポートします。
                  <br />
                  1年後のインハウス化を見据えた運用で、持続可能な広告戦略を実現します。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-[#32CD32] hover:bg-[#2AB52A] text-white text-lg px-8 py-4 h-auto"
                  onClick={() => scrollToSection(contactRef)}
                >
                  無料相談を予約する <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#32CD32] text-[#32CD32] hover:bg-[#32CD32] hover:text-white text-lg px-8 py-4 h-auto"
                  onClick={() => scrollToSection(servicesRef)}
                >
                  サービス詳細を見る
                </Button>
              </div>

              {/* 特徴的な数字やポイントを追加 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-white/50">
                  <div className="text-3xl font-bold text-[#32CD32] mb-2">365日</div>
                  <div className="text-sm text-muted-foreground">年中無休対応</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-white/50">
                  <div className="text-3xl font-bold text-red-500 mb-2">AI活用</div>
                  <div className="text-sm text-muted-foreground">業界初のAIエージェント</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-white/50">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">実績豊富</div>
                  <div className="text-sm text-muted-foreground">国内運用金額No.1の実績</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* サービス概要セクション */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32" ref={servicesRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                サービス概要
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                最適な広告運用で<span className="text-[#32CD32]">成果</span>を最大化
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                私たちは、あなたのビジネスに合わせた広告戦略を立案し、効果的な運用を行います。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#E8FFEA] p-3">
                  <Target className="h-6 w-6 text-[#32CD32]" />
                </div>
                <h3 className="text-xl font-bold">365日年中無休で対応</h3>
                <p className="text-center text-muted-foreground">
                  弊社独自の人員体制により、お盆や年末年始などの長期休みでも運用対応が可能です。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-red-100 p-3">
                  <BarChart3 className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold">圧倒的な実績</h3>
                <p className="text-center text-muted-foreground">
                  サイバーエージェントに在籍していた当時国内運用金額No.1の広告運用プロフェッショナルが運用を対応。豊富な実績をもとに全業種かつ全媒体の対応が可能です。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-yellow-100 p-3">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">業界初AIエージェント</h3>
                <p className="text-center text-muted-foreground">
                  ChatGPTを活用した広告運用AI。1年後には属人性のないインハウス化が可能になります。弊社の実績データや運用ナレッジをAIに学習させ、継続的に成長する資産を形成します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* サービス実績セクション */}
        <section
          id="results"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#E8FFEA] to-[#D1FFD6]"
          ref={resultsRef}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">サービス実績</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                <span className="text-red-500">実績</span>が証明する私たちの
                <span className="text-[#32CD32]">専門性</span>
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                多様な業界での豊富な実績。数字が語る確かな成果をご紹介します。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#E8FFEA] rounded-full p-2">
                    <BarChart3 className="h-5 w-5 text-[#32CD32]" />
                  </div>
                  <div>
                    <h3 className="font-bold">人材業界</h3>
                    <p className="text-sm text-muted-foreground">Web広告運用</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">月間予算</span>
                    <span className="font-medium">1.5億円</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">KPI</span>
                    <span className="font-medium">新規申し込み</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">運用期間</span>
                    <span className="font-medium">4年</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  人材系の人材プロモーション。競合サービスを超えるという目標に向け、施策を展開し成果を出した。WebとAppの両方があり本件の記載はWebの情報。
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#32CD32]">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">CPAを30%改善</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-500">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">予算を50%伸長</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#E8FFEA] rounded-full p-2">
                    <BarChart3 className="h-5 w-5 text-[#32CD32]" />
                  </div>
                  <div>
                    <h3 className="font-bold">運搬系業界</h3>
                    <p className="text-sm text-muted-foreground">広告運用</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">月間予算</span>
                    <span className="font-medium">3,000万円</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">KPI</span>
                    <span className="font-medium">非開示</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">運用期間</span>
                    <span className="font-medium">3年</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  運搬系サービスの広告運用を担当。効率的な広告配信と継続的な改善により、安定した成果を実現しました。
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#32CD32]">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">CPAを35%改善</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-500">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">予算を30%伸長</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#E8FFEA] rounded-full p-2">
                    <BarChart3 className="h-5 w-5 text-[#32CD32]" />
                  </div>
                  <div>
                    <h3 className="font-bold">電子書籍業界</h3>
                    <p className="text-sm text-muted-foreground">広告運用</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">月間予算</span>
                    <span className="font-medium">5,000万円</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">KPI</span>
                    <span className="font-medium">購入</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">運用期間</span>
                    <span className="font-medium">3年</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  リリースして数年経過しているサービス。書籍がデジタル化していく中で、作品検証などPDCAをロジックに基づきまわし成果に繋げた。
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#32CD32]">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">CPAを30%改善</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-500">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">予算を20%伸長</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32" ref={contactRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                お問い合わせ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                あなたのビジネスの<span className="text-[#32CD32]">成長</span>をサポートします
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                まずはお気軽にご相談ください。あなたのビジネスに最適な広告戦略をご提案します。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#E8FFEA] p-3">
                    <Mail className="h-6 w-6 text-[#32CD32]" />
                  </div>
                  <div>
                    <h3 className="font-bold">メールでのお問い合わせ</h3>
                    <p className="text-muted-foreground">three.ksakss@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#E8FFEA] p-3">
                    <Phone className="h-6 w-6 text-[#32CD32]" />
                  </div>
                  <div>
                    <h3 className="font-bold">お電話でのお問い合わせ</h3>
                    <p className="text-muted-foreground">050-1724-0933</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#E8FFEA] p-3">
                    <MapPin className="h-6 w-6 text-[#32CD32]" />
                  </div>
                  <div>
                    <h3 className="font-bold">所在地</h3>
                    <p className="text-muted-foreground">
                      〒１０４-００６１ 東京都中央区銀座一丁目22番11号　銀座大竹ビジデンス 2F
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border-2 border-[#A7F3A7] p-8 shadow-lg bg-[#F0FFF0]">
                <div className="bg-[#32CD32] text-white py-3 px-4 rounded-md mb-6 flex items-center justify-center gap-2 transform -translate-y-12 shadow-md">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold text-lg">たった10秒でお問い合わせ完了！</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">お問い合わせフォーム</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="山田 太郎"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-red-500" : "border-[#A7F3A7] bg-white"}
                        required
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        会社名
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="株式会社サンプル"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-[#A7F3A7] bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        メールアドレス{" "}
                        <span className="text-xs text-muted-foreground">
                          （メールアドレスまたは電話番号のいずれかは必須）
                        </span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@company.jp"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : "border-[#A7F3A7] bg-white"}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        電話番号{" "}
                        <span className="text-xs text-muted-foreground">
                          （メールアドレスまたは電話番号のいずれかは必須）
                        </span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="090-1234-5678"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-red-500" : "border-[#A7F3A7] bg-white"}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        お問い合わせ内容
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="ご質問やご相談内容をご記入ください"
                        className="min-h-[120px] border-[#A7F3A7] bg-white"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#32CD32] hover:bg-[#2AB52A] text-white text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "送信中..." : "今すぐ無料相談する"}
                  </Button>
                  {submitSuccess && (
                    <div className="mt-4 p-3 bg-[#E8FFEA] text-[#32CD32] rounded-md text-center border border-[#A7F3A7]">
                      お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="w-full border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/everyday-logo.png"
              width={280}
              height={140}
              alt="everyday logo"
              className="h-16 w-auto mix-blend-multiply"
              style={{ filter: "contrast(1.1)" }}
            />
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Three株式会社. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-[#32CD32]">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
