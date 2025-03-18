import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ClassificationPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">尿路上皮癌分级分类</h1>
        <p className="text-center text-gray-600 mb-8">尿路上皮癌的WHO分级系统和TNM分期</p>

        <Tabs defaultValue="grading" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="grading">组织学分级</TabsTrigger>
            <TabsTrigger value="staging">TNM分期</TabsTrigger>
            <TabsTrigger value="variants">变异型</TabsTrigger>
          </TabsList>

          <TabsContent value="grading">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>WHO 2016/2022尿路上皮癌分级系统</CardTitle>
                <CardDescription>世界卫生组织(WHO)尿路上皮肿瘤分级系统是目前国际公认的标准</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">非浸润性尿路上皮肿瘤</h3>
                    <ul className="list-disc pl-5 space-y-4">
                      <li>
                        <span className="font-medium">尿路上皮乳头状瘤 (Urothelial papilloma)</span>
                        <p className="mt-1">良性乳头状肿瘤，由正常尿路上皮覆盖的纤细纤维血管茎组成。</p>
                      </li>
                      <li>
                        <span className="font-medium">低度恶性潜能的尿路上皮乳头状肿瘤 (PUNLMP)</span>
                        <p className="mt-1">
                          乳头状肿瘤，细胞学异型性微小，有序排列，但比正常尿路上皮厚。复发风险低，进展风险极低。
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">低级别尿路上皮癌 (Low-grade urothelial carcinoma)</span>
                        <p className="mt-1">
                          有序排列但显示明显细胞学异型性，如核增大、形态不规则和可见核仁。有复发风险，进展风险低。
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">高级别尿路上皮癌 (High-grade urothelial carcinoma)</span>
                        <p className="mt-1">
                          显著的细胞学异型性，包括多形性核、明显的核仁和无序排列。复发和进展风险高。
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">原位癌 (Carcinoma in situ, CIS)</span>
                        <p className="mt-1">
                          高级别上皮内肿瘤，特征为明显的细胞学异型性，但无浸润基底膜。进展为浸润性癌的风险高。
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">浸润性尿路上皮癌</h3>
                    <p className="mb-3">浸润性尿路上皮癌根据浸润深度分为：</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">T1</span>: 肿瘤浸润固有层/粘膜下层
                      </li>
                      <li>
                        <span className="font-medium">T2</span>: 肿瘤浸润肌层
                      </li>
                      <li>
                        <span className="font-medium">T3</span>: 肿瘤浸润肌层外脂肪组织
                      </li>
                      <li>
                        <span className="font-medium">T4</span>: 肿瘤浸润邻近器官或盆壁/腹壁
                      </li>
                    </ul>
                    <p className="mt-3">浸润性尿路上皮癌通常为高级别，但也可见低级别浸润性癌。</p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">WHO分级系统的临床意义</h3>
                    <p className="mb-2">分级对治疗决策和预后评估至关重要：</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>低级别肿瘤通常采用保守治疗和监测</li>
                      <li>高级别肿瘤可能需要更积极的治疗，如膀胱内BCG灌注、根治性膀胱切除术等</li>
                      <li>CIS需要特别关注，因其进展风险高</li>
                      <li>分级与分期结合，为患者提供更准确的预后信息和个体化治疗方案</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>WHO 1973与WHO 2016/2022分级系统对比</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>WHO 1973</TableHead>
                      <TableHead>WHO 2016/2022</TableHead>
                      <TableHead>主要特征</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>乳头状瘤</TableCell>
                      <TableCell>尿路上皮乳头状瘤</TableCell>
                      <TableCell>正常尿路上皮，无异型性</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1级乳头状癌 (G1)</TableCell>
                      <TableCell>低度恶性潜能的乳头状肿瘤 (PUNLMP)</TableCell>
                      <TableCell>轻微异型性，有序排列</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1-2级乳头状癌 (G1-2)</TableCell>
                      <TableCell>低级别尿路上皮癌</TableCell>
                      <TableCell>明显异型性，但仍保持一定秩序</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2-3级乳头状癌 (G2-3)</TableCell>
                      <TableCell rowSpan={2}>高级别尿路上皮癌</TableCell>
                      <TableCell rowSpan={2}>显著异型性，无序排列</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3级乳头状癌 (G3)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="mt-4 text-sm text-gray-600">
                  注：许多病理报告会同时提供WHO 1973和WHO
                  2016/2022分级，因为两种系统各有优势，共同使用可提供更全面的预后信息。
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staging">
            <Card>
              <CardHeader>
                <CardTitle>尿路上皮癌TNM分期系统 (AJCC第8版)</CardTitle>
                <CardDescription>
                  TNM分期系统描述肿瘤的解剖学范围，包括原发肿瘤(T)、区域淋巴结(N)和远处转移(M)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">原发肿瘤 (T)</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>分期</TableHead>
                          <TableHead>定义</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>TX</TableCell>
                          <TableCell>原发肿瘤无法评估</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T0</TableCell>
                          <TableCell>无原发肿瘤证据</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Ta</TableCell>
                          <TableCell>非浸润性乳头状癌</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tis</TableCell>
                          <TableCell>原位癌 (CIS): "平坦肿瘤"</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T1</TableCell>
                          <TableCell>肿瘤浸润粘膜下结缔组织</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T2</TableCell>
                          <TableCell>肿瘤浸润肌层</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T2a</TableCell>
                          <TableCell>肿瘤浸润浅肌层(内侧1/2)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T2b</TableCell>
                          <TableCell>肿瘤浸润深肌层(外侧1/2)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T3</TableCell>
                          <TableCell>肿瘤浸润膀胱周围组织</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T3a</TableCell>
                          <TableCell>显微镜下浸润膀胱周围组织</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T3b</TableCell>
                          <TableCell>肉眼可见浸润膀胱周围组织</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T4</TableCell>
                          <TableCell>肿瘤浸润以下任一结构：前列腺基质、精囊、子宫、阴道、盆壁或腹壁</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T4a</TableCell>
                          <TableCell>肿瘤浸润前列腺基质、精囊、子宫或阴道</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>T4b</TableCell>
                          <TableCell>肿瘤浸润盆壁或腹壁</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">区域淋巴结 (N)</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>分期</TableHead>
                            <TableHead>定义</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>NX</TableCell>
                            <TableCell>区域淋巴结无法评估</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>N0</TableCell>
                            <TableCell>无区域淋巴结转移</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>N1</TableCell>
                            <TableCell>单个区域淋巴结转移（真骨盆内）</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>N2</TableCell>
                            <TableCell>多个区域淋巴结转移（真骨盆内）</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>N3</TableCell>
                            <TableCell>髂总动脉淋巴结转移</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">远处转移 (M)</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>分期</TableHead>
                            <TableHead>定义</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>M0</TableCell>
                            <TableCell>无远处转移</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>M1</TableCell>
                            <TableCell>有远处转移</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>M1a</TableCell>
                            <TableCell>非区域淋巴结转移</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>M1b</TableCell>
                            <TableCell>其他部位远处转移</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">分期分组</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>分期</TableHead>
                          <TableHead>T</TableHead>
                          <TableHead>N</TableHead>
                          <TableHead>M</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>0a</TableCell>
                          <TableCell>Ta</TableCell>
                          <TableCell>N0</TableCell>
                          <TableCell>M0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>0is</TableCell>
                          <TableCell>Tis</TableCell>
                          <TableCell>N0</TableCell>
                          <TableCell>M0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>I</TableCell>
                          <TableCell>T1</TableCell>
                          <TableCell>N0</TableCell>
                          <TableCell>M0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>II</TableCell>
                          <TableCell>T2a-b</TableCell>
                          <TableCell>N0</TableCell>
                          <TableCell>M0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>IIIA</TableCell>
                          <TableCell>T3a, T3b, T4a</TableCell>
                          <TableCell>N0</TableCell>
                          <TableCell>M0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>IIIB</TableCell>
                          <TableCell>任何T</TableCell>
                          <TableCell>N1</TableCell>
                          <TableCell>M0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>IVA</TableCell>
                          <TableCell>任何T</TableCell>
                          <TableCell>N2, N3</TableCell>
                          <TableCell>M0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>IVA</TableCell>
                          <TableCell>T4b</TableCell>
                          <TableCell>任何N</TableCell>
                          <TableCell>M0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>IVB</TableCell>
                          <TableCell>任何T</TableCell>
                          <TableCell>任何N</TableCell>
                          <TableCell>M1</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">分期的临床意义</h3>
                    <p className="mb-2">TNM分期是治疗决策和预后评估的关键因素：</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>非肌层浸润性膀胱癌(NMIBC): Ta, T1, CIS - 通常采用经尿道切除术(TURBT)和膀胱内灌注治疗</li>
                      <li>肌层浸润性膀胱癌(MIBC): T2-T4 - 可能需要根治性膀胱切除术、放疗或全身治疗</li>
                      <li>淋巴结阳性或转移性疾病(N1-3, M1) - 通常需要全身治疗，如化疗或免疫治疗</li>
                      <li>分期与分级结合，为患者提供更准确的预后信息和个体化治疗方案</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="variants">
            <Card>
              <CardHeader>
                <CardTitle>尿路上皮癌变异型</CardTitle>
                <CardDescription>
                  尿路上皮癌有多种组织学变异型，具有不同的形态学特征、临床行为和治疗反应
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">鳞状分化</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm">
                        <p>尿路上皮癌中最常见的变异型，特征为角化和/或细胞间桥。与慢性刺激和感染相关，预后较差。</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">腺样分化</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm">
                        <p>表现为腺腔形成或黏液产生。需与原发性腺癌和转移性腺癌鉴别。</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">嵌套型</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm">
                        <p>
                          由小的、圆形至卵圆形的嵌套状细胞团组成，细胞学异型性轻微，易被误诊为良性病变。具有侵袭性行为。
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">微乳头型</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm">
                        <p>特征为小的乳头状细胞团，无纤维血管核心，漂浮在间质空隙中。高度侵袭性，早期转移风险高。</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">浆细胞样/印戒细胞型</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm">
                        <p>细胞质内含有大的黏液空泡，将细胞核推向一侧，形似印戒。预后不良。</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">肉瘤样(肉瘤样癌)</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm">
                        <p>含有梭形细胞和/或巨细胞成分，模拟肉瘤。高度侵袭性，预后极差。</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">小细胞型</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm">
                        <p>形态学类似肺小细胞癌，表达神经内分泌标志物。高度侵袭性，需要特殊治疗方案。</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">淋巴上皮瘤样</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm">
                        <p>特征为上皮样细胞巢，伴有密集的淋巴细胞浸润。预后相对较好。</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">变异型的临床意义</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">诊断挑战：</span>
                        <p className="mt-1">
                          某些变异型（如嵌套型）可能被误诊为良性病变，而其他变异型可能与非尿路上皮肿瘤混淆。
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">治疗影响：</span>
                        <p className="mt-1">
                          某些变异型需要特定治疗方案。例如，小细胞型通常采用类似肺小细胞癌的化疗方案。
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">预后差异：</span>
                        <p className="mt-1">微乳头型、浆细胞样型和肉瘤样型通常预后较差，可能需要更积极的治疗。</p>
                      </li>
                      <li>
                        <span className="font-medium">早期识别：</span>
                        <p className="mt-1">在TURBT标本中识别高风险变异型对及时采取适当治疗至关重要。</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

