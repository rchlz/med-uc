import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ImmunohistochemistryPage() {
  // 免疫组化指标数据
  const markers = [
    {
      name: "CK20",
      fullName: "细胞角蛋白20",
      description: "尿路上皮癌中常表达，尤其在高级别肿瘤中。CK20的表达模式可帮助区分正常尿路上皮和肿瘤组织。",
      significance: "CK20在正常尿路上皮中仅在表层细胞表达，而在高级别尿路上皮癌中往往呈现全层表达。",
      pattern: "膜和胞质表达",
    },
    {
      name: "CK5/6",
      fullName: "细胞角蛋白5/6",
      description: "在正常尿路上皮的基底层和旁基底层表达，在尿路上皮癌中表达减少或丢失。",
      significance: "CK5/6表达的减少或丢失提示肿瘤的高级别性质。在鳞状分化的尿路上皮癌中表达增强。",
      pattern: "胞质表达",
    },
    {
      name: "p53",
      fullName: "肿瘤抑制蛋白p53",
      description: "p53基因突变在尿路上皮癌中常见，导致异常蛋白积累。",
      significance: "p53过度表达（>10%的细胞核）通常与高级别肿瘤、侵袭性行为和预后不良相关。",
      pattern: "核表达",
    },
    {
      name: "Ki-67",
      fullName: "增殖标志物Ki-67",
      description: "反映细胞增殖活性的标志物。",
      significance: "Ki-67标记指数升高与肿瘤级别、侵袭深度和预后不良相关。高级别尿路上皮癌通常有较高的Ki-67指数。",
      pattern: "核表达",
    },
    {
      name: "GATA3",
      fullName: "GATA结合蛋白3",
      description: "在尿路上皮细胞中高度表达的转录因子。",
      significance:
        "GATA3是尿路上皮分化的敏感标志物，有助于确认尿路上皮来源。在大多数尿路上皮癌中保持表达，但在高级别和变异型中可能减少。",
      pattern: "核表达",
    },
    {
      name: "Uroplakin II",
      fullName: "尿路上皮蛋白II",
      description: "尿路上皮特异性膜蛋白，在膀胱上皮伞状细胞中表达。",
      significance: "尿路上皮特异性标志物，有助于确认尿路上皮来源。在高级别肿瘤中表达可能减少。",
      pattern: "膜表达",
    },
    {
      name: "CD44",
      fullName: "CD44抗原",
      description: "细胞表面糖蛋白，参与细胞-细胞和细胞-基质相互作用。",
      significance: "在尿路上皮癌中，CD44表达与肿瘤侵袭和转移潜能相关。CD44变体（如CD44v6）的表达可能与预后不良相关。",
      pattern: "膜表达",
    },
    {
      name: "E-cadherin",
      fullName: "E-钙粘蛋白",
      description: "上皮细胞间粘附分子，维持细胞极性和组织结构。",
      significance: "E-cadherin表达减少或丢失与肿瘤去分化、侵袭和转移相关。在高级别尿路上皮癌中表达常减少。",
      pattern: "膜表达",
    },
    {
      name: "PD-L1",
      fullName: "程序性死亡配体1",
      description: "免疫检查点分子，可抑制T细胞功能。",
      significance: "PD-L1表达可预测对免疫检查点抑制剂治疗的反应。高表达常见于高级别、晚期尿路上皮癌。",
      pattern: "膜表达",
    },
    {
      name: "HER2/neu",
      fullName: "人表皮生长因子受体2",
      description: "跨膜受体酪氨酸激酶，参与细胞增殖信号传导。",
      significance: "HER2过度表达或基因扩增在约10-20%的尿路上皮癌中出现，可能与预后不良和治疗靶点相关。",
      pattern: "膜表达",
    },
  ]

  // 免疫组化在诊断中的应用
  const diagnosticApplications = [
    {
      title: "鉴别诊断",
      content:
        "免疫组化可帮助区分尿路上皮癌与其他可能累及泌尿系统的肿瘤，如前列腺癌、肾细胞癌、转移性结直肠癌等。GATA3、Uroplakin II和CK20/CK7的组合对确认尿路上皮来源特别有用。",
    },
    {
      title: "变异型识别",
      content:
        "尿路上皮癌有多种变异型，如鳞状、腺样、嵌套型、微乳头型等。特定的免疫组化标记可帮助识别这些变异型，这对治疗决策和预后评估很重要。",
    },
    {
      title: "分级辅助",
      content: "Ki-67、p53和CK20的表达模式可辅助肿瘤分级，特别是在形态学评估具有挑战性的情况下。",
    },
    {
      title: "预后评估",
      content: "某些标志物如p53、Ki-67、E-cadherin和CD44的表达与肿瘤侵袭性和预后相关，可提供额外的预后信息。",
    },
    {
      title: "治疗靶点识别",
      content: "PD-L1和HER2/neu等标志物的评估可帮助识别可能从特定靶向治疗或免疫治疗中获益的患者。",
    },
  ]

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">尿路上皮癌免疫组化指标</h1>
        <p className="text-center text-gray-600 mb-8">免疫组化在尿路上皮癌诊断和预后评估中的应用</p>

        <Tabs defaultValue="markers" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="markers">免疫组化标志物</TabsTrigger>
            <TabsTrigger value="applications">临床应用</TabsTrigger>
          </TabsList>

          <TabsContent value="markers">
            <Card>
              <CardHeader>
                <CardTitle>常用免疫组化标志物</CardTitle>
                <CardDescription>以下是尿路上皮癌诊断和评估中常用的免疫组化标志物及其临床意义</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">标志物</TableHead>
                      <TableHead>全称</TableHead>
                      <TableHead>表达模式</TableHead>
                      <TableHead className="hidden md:table-cell">临床意义</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {markers.map((marker, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{marker.name}</TableCell>
                        <TableCell>{marker.fullName}</TableCell>
                        <TableCell>{marker.pattern}</TableCell>
                        <TableCell className="hidden md:table-cell">{marker.significance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="mt-6">
              {markers.map((marker, index) => (
                <Card key={index} className="mb-4 md:hidden">
                  <CardHeader>
                    <CardTitle>
                      {marker.name} ({marker.fullName})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">
                      <span className="font-medium">表达模式：</span>
                      {marker.pattern}
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">描述：</span>
                      {marker.description}
                    </p>
                    <p>
                      <span className="font-medium">临床意义：</span>
                      {marker.significance}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>免疫组化在尿路上皮癌中的临床应用</CardTitle>
                <CardDescription>免疫组化检测在尿路上皮癌的诊断、分类和预后评估中发挥重要作用</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {diagnosticApplications.map((app, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-medium mb-2">{app.title}</h3>
                    <p className="text-gray-700">{app.content}</p>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">免疫组化解释注意事项</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>免疫组化结果应始终结合形态学特征和临床背景进行解释</li>
                    <li>单一标志物的表达或缺失通常不足以确定诊断，应使用标志物组合</li>
                    <li>标志物表达的强度和分布模式（局灶性vs弥漫性）都具有诊断意义</li>
                    <li>技术因素（如固定时间、抗体克隆、检测系统）可能影响免疫组化结果</li>
                    <li>某些标志物（如PD-L1）的评估应使用经验证的评分系统</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

