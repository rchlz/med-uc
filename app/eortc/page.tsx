import { EortcCalculator } from "@/components/eortc-calculator"

export default function EortcPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">尿路上皮癌风险评估</h1>
        <p className="text-center text-gray-600 mb-8">基于EORTC评分模型</p>
        <EortcCalculator />
      </div>
    </main>
  )
}

