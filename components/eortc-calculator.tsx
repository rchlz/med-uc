"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface RiskResult {
  recurrenceScore: number
  progressionScore: number
  recurrenceRisk: {
    oneYear: string
    fiveYears: string
    riskLevel: string
  }
  progressionRisk: {
    oneYear: string
    fiveYears: string
    riskLevel: string
  }
}

export function EortcCalculator() {
  const [tumorCount, setTumorCount] = useState<string>("")
  const [tumorSize, setTumorSize] = useState<string>("")
  const [priorRecurrence, setPriorRecurrence] = useState<string>("")
  const [tCategory, setTCategory] = useState<string>("")
  const [cis, setCis] = useState<string>("")
  const [grade, setGrade] = useState<string>("")
  const [result, setResult] = useState<RiskResult | null>(null)
  const [showInfo, setShowInfo] = useState(false)

  const calculateRisk = () => {
    // Calculate recurrence score
    let recurrenceScore = 0
    if (tumorCount === "2-7") recurrenceScore += 3
    else if (tumorCount === "≥8") recurrenceScore += 6

    if (tumorSize === "≥3cm") recurrenceScore += 3

    if (priorRecurrence === "≤1年一次") recurrenceScore += 2
    else if (priorRecurrence === ">1年一次") recurrenceScore += 4

    if (tCategory === "T1") recurrenceScore += 1

    if (cis === "是") recurrenceScore += 1

    if (grade === "G2") recurrenceScore += 1
    else if (grade === "G3") recurrenceScore += 2

    // Calculate progression score
    let progressionScore = 0
    if (tumorCount === "2-7") progressionScore += 3
    else if (tumorCount === "≥8") progressionScore += 3

    if (tumorSize === "≥3cm") progressionScore += 3

    if (priorRecurrence === "≤1年一次") progressionScore += 2
    else if (priorRecurrence === ">1年一次") progressionScore += 2

    if (tCategory === "T1") progressionScore += 4

    if (cis === "是") progressionScore += 6

    if (grade === "G2") progressionScore += 1
    else if (grade === "G3") progressionScore += 6

    // Determine recurrence risk
    let recurrenceOneYear = ""
    let recurrenceFiveYears = ""
    let recurrenceRiskLevel = ""

    if (recurrenceScore === 0) {
      recurrenceOneYear = "15%"
      recurrenceFiveYears = "31%"
      recurrenceRiskLevel = "低风险"
    } else if (recurrenceScore >= 1 && recurrenceScore <= 4) {
      recurrenceOneYear = "24%"
      recurrenceFiveYears = "46%"
      recurrenceRiskLevel = "中低风险"
    } else if (recurrenceScore >= 5 && recurrenceScore <= 9) {
      recurrenceOneYear = "38%"
      recurrenceFiveYears = "62%"
      recurrenceRiskLevel = "中高风险"
    } else {
      recurrenceOneYear = "61%"
      recurrenceFiveYears = "78%"
      recurrenceRiskLevel = "高风险"
    }

    // Determine progression risk
    let progressionOneYear = ""
    let progressionFiveYears = ""
    let progressionRiskLevel = ""

    if (progressionScore === 0) {
      progressionOneYear = "0.2%"
      progressionFiveYears = "0.8%"
      progressionRiskLevel = "低风险"
    } else if (progressionScore >= 1 && progressionScore <= 6) {
      progressionOneYear = "1%"
      progressionFiveYears = "6%"
      progressionRiskLevel = "中低风险"
    } else if (progressionScore >= 7 && progressionScore <= 13) {
      progressionOneYear = "5%"
      progressionFiveYears = "17%"
      progressionRiskLevel = "中高风险"
    } else {
      progressionOneYear = "17%"
      progressionFiveYears = "45%"
      progressionRiskLevel = "高风险"
    }

    setResult({
      recurrenceScore,
      progressionScore,
      recurrenceRisk: {
        oneYear: recurrenceOneYear,
        fiveYears: recurrenceFiveYears,
        riskLevel: recurrenceRiskLevel,
      },
      progressionRisk: {
        oneYear: progressionOneYear,
        fiveYears: progressionFiveYears,
        riskLevel: progressionRiskLevel,
      },
    })
  }

  const isFormComplete = () => {
    return tumorCount && tumorSize && priorRecurrence && tCategory && cis && grade
  }

  const resetForm = () => {
    setTumorCount("")
    setTumorSize("")
    setPriorRecurrence("")
    setTCategory("")
    setCis("")
    setGrade("")
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {showInfo && (
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>关于EORTC评分系统</AlertTitle>
          <AlertDescription>
            <p className="mt-2">
              EORTC风险评分系统是由欧洲癌症研究与治疗组织(European Organisation for Research and Treatment of
              Cancer)开发的，
              用于预测非肌层浸润性膀胱癌(NMIBC)患者的复发和进展风险。该模型基于1,000多名参与EORTC临床试验的患者数据开发。
            </p>
            <p className="mt-2">
              该评分系统考虑了六个临床和病理因素：肿瘤数量、肿瘤大小、既往复发率、T分期、原位癌(CIS)存在与否以及肿瘤分级。
              通过评估这些因素，可以计算出患者的复发和进展风险评分，并将患者分为低、中、高风险组。
            </p>
            <p className="mt-2">
              请注意，此计算器仅供参考，不能替代专业医疗建议。具体治疗方案应由医生根据患者的具体情况制定。
            </p>
            <Button variant="outline" className="mt-2" onClick={() => setShowInfo(false)}>
              关闭
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {!showInfo && (
        <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowInfo(true)}>
          <Info className="h-4 w-4" />
          关于EORTC评分系统
        </Button>
      )}

      <Card>
        <CardHeader>
          <CardTitle>EORTC风险评估计算器</CardTitle>
          <CardDescription>请填写以下信息以评估非肌层浸润性膀胱癌的复发和进展风险</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>肿瘤数量</Label>
            <RadioGroup value={tumorCount} onValueChange={setTumorCount}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="单个" id="tumor-count-1" />
                <Label htmlFor="tumor-count-1">单个</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2-7" id="tumor-count-2" />
                <Label htmlFor="tumor-count-2">2-7个</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="≥8" id="tumor-count-3" />
                <Label htmlFor="tumor-count-3">≥8个</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>肿瘤大小</Label>
            <RadioGroup value={tumorSize} onValueChange={setTumorSize}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="<3cm" id="tumor-size-1" />
                <Label htmlFor="tumor-size-1">&lt;3cm</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="≥3cm" id="tumor-size-2" />
                <Label htmlFor="tumor-size-2">≥3cm</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>既往复发率</Label>
            <RadioGroup value={priorRecurrence} onValueChange={setPriorRecurrence}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="无" id="recurrence-1" />
                <Label htmlFor="recurrence-1">无</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="≤1年一次" id="recurrence-2" />
                <Label htmlFor="recurrence-2">≤1年一次</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value=">1年一次" id="recurrence-3" />
                <Label htmlFor="recurrence-3">&gt;1年一次</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>T分期</Label>
            <RadioGroup value={tCategory} onValueChange={setTCategory}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Ta" id="t-category-1" />
                <Label htmlFor="t-category-1">Ta</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="T1" id="t-category-2" />
                <Label htmlFor="t-category-2">T1</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>是否伴有原位癌(CIS)</Label>
            <RadioGroup value={cis} onValueChange={setCis}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="否" id="cis-1" />
                <Label htmlFor="cis-1">否</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="是" id="cis-2" />
                <Label htmlFor="cis-2">是</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>肿瘤分级</Label>
            <RadioGroup value={grade} onValueChange={setGrade}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="G1" id="grade-1" />
                <Label htmlFor="grade-1">G1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="G2" id="grade-2" />
                <Label htmlFor="grade-2">G2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="G3" id="grade-3" />
                <Label htmlFor="grade-3">G3</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={resetForm}>
            重置
          </Button>
          <Button onClick={calculateRisk} disabled={!isFormComplete()}>
            计算风险
          </Button>
        </CardFooter>
      </Card>

      {result && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>风险评估结果</CardTitle>
            <CardDescription>基于您提供的信息，以下是EORTC模型计算的风险评估结果</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="recurrence">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="recurrence">复发风险</TabsTrigger>
                <TabsTrigger value="progression">进展风险</TabsTrigger>
              </TabsList>
              <TabsContent value="recurrence" className="space-y-4">
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold">复发评分: {result.recurrenceScore}分</p>
                  <p className="font-semibold text-lg mt-2">
                    风险等级:{" "}
                    <span
                      className={
                        result.recurrenceRisk.riskLevel === "低风险"
                          ? "text-green-600"
                          : result.recurrenceRisk.riskLevel === "中低风险"
                            ? "text-blue-600"
                            : result.recurrenceRisk.riskLevel === "中高风险"
                              ? "text-orange-600"
                              : "text-red-600"
                      }
                    >
                      {result.recurrenceRisk.riskLevel}
                    </span>
                  </p>
                  <div className="mt-4">
                    <p>
                      1年内复发概率: <span className="font-medium">{result.recurrenceRisk.oneYear}</span>
                    </p>
                    <p>
                      5年内复发概率: <span className="font-medium">{result.recurrenceRisk.fiveYears}</span>
                    </p>
                  </div>
                </div>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>复发风险解释</AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      复发风险评分基于肿瘤数量、大小、既往复发率、T分期、CIS存在与否以及肿瘤分级。
                      评分越高，复发风险越大。
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">风险分组:</span>
                      <br />- 低风险 (0分): 1年复发率15%, 5年复发率31%
                      <br />- 中低风险 (1-4分): 1年复发率24%, 5年复发率46%
                      <br />- 中高风险 (5-9分): 1年复发率38%, 5年复发率62%
                      <br />- 高风险 (10-17分): 1年复发率61%, 5年复发率78%
                    </p>
                  </AlertDescription>
                </Alert>
              </TabsContent>
              <TabsContent value="progression" className="space-y-4">
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold">进展评分: {result.progressionScore}分</p>
                  <p className="font-semibold text-lg mt-2">
                    风险等级:{" "}
                    <span
                      className={
                        result.progressionRisk.riskLevel === "低风险"
                          ? "text-green-600"
                          : result.progressionRisk.riskLevel === "中低风险"
                            ? "text-blue-600"
                            : result.progressionRisk.riskLevel === "中高风险"
                              ? "text-orange-600"
                              : "text-red-600"
                      }
                    >
                      {result.progressionRisk.riskLevel}
                    </span>
                  </p>
                  <div className="mt-4">
                    <p>
                      1年内进展概率: <span className="font-medium">{result.progressionRisk.oneYear}</span>
                    </p>
                    <p>
                      5年内进展概率: <span className="font-medium">{result.progressionRisk.fiveYears}</span>
                    </p>
                  </div>
                </div>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>进展风险解释</AlertTitle>
                  <AlertDescription>
                    <p className="mt-2">
                      进展风险评分基于肿瘤数量、大小、既往复发率、T分期、CIS存在与否以及肿瘤分级。
                      评分越高，进展为肌层浸润性膀胱癌的风险越大。
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">风险分组:</span>
                      <br />- 低风险 (0分): 1年进展率0.2%, 5年进展率0.8%
                      <br />- 中低风险 (1-6分): 1年进展率1%, 5年进展率6%
                      <br />- 中高风险 (7-13分): 1年进展率5%, 5年进展率17%
                      <br />- 高风险 (14-23分): 1年进展率17%, 5年进展率45%
                    </p>
                  </AlertDescription>
                </Alert>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">
              注意：此计算器仅供参考，不能替代专业医疗建议。具体治疗方案应由医生根据患者的具体情况制定。
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

