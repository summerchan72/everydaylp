import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-[#32CD32] hover:text-[#2AB52A]">
            <ChevronLeft className="h-4 w-4 mr-1" />
            トップページに戻る
          </Link>
          <Image
            src="/images/everyday-logo.png"
            width={280}
            height={140}
            alt="everyday logo"
            className="h-16 w-auto mix-blend-multiply"
            style={{ filter: "contrast(1.1)" }}
          />
        </div>

        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

        <div className="prose max-w-none">
          <p className="text-sm text-gray-500 mb-6">最終更新日: 2025年6月13日</p>

          <p className="mb-6">
            Three株式会社（以下、「当社」といいます）は、お客様の個人情報保護の重要性を認識し、適切に保護することを社会的責務として考えております。当社は、以下のプライバシーポリシーに従って、お客様の個人情報を取り扱います。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. 個人情報の収集と利用目的</h2>
          <p className="mb-4">当社は、以下の目的のために必要な範囲で個人情報を収集・利用いたします。</p>
          <ul className="list-disc pl-6 mb-6">
            <li>お問い合わせ、ご相談への対応</li>
            <li>サービスに関する情報提供</li>
            <li>サービス品質向上のための調査、分析</li>
            <li>広告配信および効果測定</li>
            <li>契約の履行（サービス提供、請求等）</li>
            <li>法令等の規定に基づく場合</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. 収集する個人情報の種類</h2>
          <p className="mb-4">当社が収集する個人情報には、以下のようなものが含まれます。</p>
          <ul className="list-disc pl-6 mb-6">
            <li>氏名</li>
            <li>会社名</li>
            <li>電話番号</li>
            <li>メールアドレス</li>
            <li>お問い合わせ内容</li>
            <li>IPアドレス、Cookie情報などの技術的情報</li>
            <li>広告識別子、参照元URL等の広告関連情報</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. 広告に関する情報収集について</h2>
          <p className="mb-6">
            当社のウェブサイトは、広告の遷移先として使用されることがあります。広告からの遷移時には、以下の情報を収集することがあります。
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>参照元URL</li>
            <li>広告識別子</li>
            <li>広告キャンペーン情報</li>
            <li>クリック日時</li>
            <li>デバイス情報</li>
          </ul>
          <p className="mb-6">
            これらの情報は、広告効果の測定、サービス改善、および適切な広告配信のために利用されます。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Cookieの使用について</h2>
          <p className="mb-6">
            当社のウェブサイトでは、お客様の利便性向上、ウェブサイトの利用状況の分析、広告配信のためにCookieを使用しています。Cookieは、お客様のブラウザの設定により、使用を制限したり拒否したりすることができます。ただし、Cookieを無効にした場合、一部のサービスが正常に機能しない場合があります。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. 個人情報の管理</h2>
          <p className="mb-6">
            当社は、個人情報の正確性を保ち、不正アクセス、紛失、破壊、改ざん、漏洩などを防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業者に対して、個人情報保護に関する教育を実施します。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. 個人情報の第三者提供</h2>
          <p className="mb-6">当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。</p>
          <ul className="list-disc pl-6 mb-6">
            <li>お客様の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
            <li>
              国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
            </li>
            <li>
              業務委託先に対して、業務の遂行に必要な範囲で個人情報を提供する場合（この場合、当社は委託先に対して適切な管理を求めます）
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. アクセス解析ツールの使用</h2>
          <p className="mb-6">
            当社のウェブサイトでは、Googleアナリティクスなどのアクセス解析ツールを使用しています。これらのツールは、Cookieを使用してお客様の情報を収集します。収集された情報は、ウェブサイトの利用状況の分析、サービス改善のために利用されます。これらのツールによって収集される情報には、IPアドレスなどの特定の情報が含まれますが、お客様個人を特定するものではありません。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. お客様の権利</h2>
          <p className="mb-6">
            お客様は、当社が保有するお客様の個人情報について、開示、訂正、削除、利用停止を請求することができます。請求を行う場合は、下記の「お問い合わせ窓口」までご連絡ください。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. プライバシーポリシーの変更</h2>
          <p className="mb-6">
            当社は、法令の変更や事業内容の変更等に伴い、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイト上で通知します。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. お問い合わせ窓口</h2>
          <p className="mb-6">本プライバシーポリシーに関するお問い合わせは、以下の窓口までお願いいたします。</p>
          <div className="bg-[#F0FFF0] p-6 rounded-lg mb-8 border border-[#A7F3A7]">
            <p className="font-semibold mb-2">Three株式会社</p>
            <p className="mb-1">〒１０４-００６１ 東京都中央区銀座一丁目22番11号　銀座大竹ビジデンス 2F</p>
            <p className="mb-1">メールアドレス：three.ksakss@gmail.com</p>
            <p>電話番号：050-1724-0933</p>
          </div>

          <p className="text-sm text-gray-500 mt-12">以上</p>
        </div>
      </div>
    </div>
  )
}
