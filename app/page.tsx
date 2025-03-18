import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Calculator } from "lucide-react"

export default function Home() {
  // 中国境内尿路上皮癌权威网站列表
  const authoritativeSites = [
    {
      name: "中国抗癌协会",
      url: "http://www.caca.org.cn/",
      description: "中国抗癌协会下属的专业委员会，提供泌尿系统肿瘤相关的学术研究和临床指南。",
    },
    {
      name: "中华医学会泌尿外科学分会",
      url: "https://cua.cma.org.cn/",
      description: "中华医学会下属的泌尿外科专业分会，提供泌尿系统疾病的诊疗指南和学术交流平台。",
    },
    {
      name: "中国医学科学院肿瘤医院",
      url: "http://www.cicams.ac.cn/",
      description: "国家级癌症研究和防治机构，提供各类癌症的研究数据和防治信息。",
    },
    {
      name: "中国临床肿瘤学会",
      url: "http://www.csco.org.cn/",
      description: "中国临床肿瘤学会提供肿瘤临床诊疗指南和最新研究进展。",
    },
    {
      name: "中华泌尿外科杂志",
      url: "https://zhmnwkzz.yiigle.com/",
      description: "权威的泌尿外科学术期刊，发表泌尿系统肿瘤的最新研究成果。",
    },
  ]

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">UC资料库</h1>
          <p className="text-xl text-gray-600 mb-8">提供尿路上皮癌相关的权威信息资源和风险评估工具</p>
          <Link href="/eortc" className="inline-block">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              <Calculator className="h-5 w-5" />
              使用EORTC风险评估模型
            </Button>
          </Link>
          <Link href="weixin://dl/business/?appid=wxd5201eb08d2fa15c&path=pages/agentChat/index&query=showAuthDirectly%3D1%26id%3DZwN6p4ndUTdm" className="inline-block px-8 py-6">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              <Calculator className="h-5 w-5" />
              UC智能问答助手
            </Button>
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">关于尿路上皮癌</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>什么是尿路上皮癌？</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  尿路上皮癌是起源于尿路上皮的恶性肿瘤，包括膀胱癌、输尿管癌、肾盂癌和尿道癌。其中膀胱癌是最常见的尿路上皮癌，约占所有尿路上皮癌的95%。尿路上皮癌是泌尿系统最常见的恶性肿瘤之一，在我国发病率呈上升趋势。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>风险因素</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>吸烟（最主要的危险因素，约50%的膀胱癌与吸烟有关）</li>
                  <li>职业暴露（染料、橡胶、皮革、油漆等行业）</li>
                  <li>慢性尿路感染和结石</li>
                  <li>砷暴露（饮用水）</li>
                  <li>遗传因素</li>
                  <li>某些药物（如环磷酰胺）</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">EORTC风险评估模型</h2>
          <Card>
            <CardHeader>
              <CardTitle>什么是EORTC风险评估模型？</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                EORTC风险评分系统是由欧洲癌症研究与治疗组织(European Organisation for Research and Treatment of
                Cancer)开发的，用于预测非肌层浸润性膀胱癌(NMIBC)患者的复发和进展风险。该模型基于1,000多名参与EORTC临床试验的患者数据开发。
              </p>
              <p className="mb-4">
                该评分系统考虑了六个临床和病理因素：肿瘤数量、肿瘤大小、既往复发率、T分期、原位癌(CIS)存在与否以及肿瘤分级。通过评估这些因素，可以计算出患者的复发和进展风险评分，并将患者分为低、中、高风险组。
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/eortc">
                  <Button size="lg" className="gap-2">
                    <Calculator className="h-5 w-5" />
                    使用EORTC风险评估模型
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 添加微信小程序部分 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">UC智能问答助手</h2>
          <Card>
            <CardHeader>
              <CardTitle>尿路上皮癌智能问答小程序</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="mb-4">
                  我们开发了一款基于人工智能的尿路上皮癌智能问答助手，可以回答您关于尿路上皮癌的各种问题，包括疾病知识、诊断方法、治疗选择等。
                </p>
                <p className="mb-4">
                  无论您是患者、家属还是医疗专业人员，都可以去使用它。当然，它的回答是基于AI生成的，请一定要注意甄别。
                </p>
                <p className="font-medium">使用方法：</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>扫描右侧二维码</li>
                  <li>或点击<Link href="weixin://dl/business/?appid=wxd5201eb08d2fa15c&path=pages/agentChat/index&query=showAuthDirectly%3D1%26id%3DZwN6p4ndUTdm" className="inline-block px-2">
            <Button size="sm" className="text-sm">
              UC智能问答助手
            </Button>
          </Link></li>
                  <li>进入小程序后，直接输入您的问题</li>
                </ul>
              </div>
              <div className="flex-shrink-0 w-48 h-48">
                <Image
                  src="/wxminappcode.svg"
                  alt="UC智能问答助手小程序二维码"
                  width={180}
                  height={180}
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">尿路上皮癌权威网站</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authoritativeSites.map((site, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{site.name}</CardTitle>
                  <CardDescription>{site.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    访问网站 <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} UC资料库. 本网站仅供医学参考，不能替代专业医疗建议。</p>
        </footer>
      </div>
    </main>
  )
}

