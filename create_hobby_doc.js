const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
        ShadingType, VerticalAlign, PageBreak } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

function hCell(text, width, fill) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: fill || "4F81BD", type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({
      children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 20 })]
    })]
  });
}

function dCell(text, width, fill, bold) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: fill || "FFFFFF", type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({
      children: [new TextRun({ text, font: "Arial", size: 18, bold: bold || false })]
    })]
  });
}

function sectionTitle(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text, font: "Arial", size: 28, bold: true, color: "2F5496" })],
    spacing: { before: 360, after: 180 }
  });
}

function para(text, bold, size) {
  return new Paragraph({
    children: [new TextRun({ text, font: "Arial", size: size || 22, bold: bold || false })],
    spacing: { before: 60, after: 60 }
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun({ text, font: "Arial", size: 22 })],
    spacing: { before: 40, after: 40 }
  });
}

const hobbies = [
  { name: "跑步", cat: "运动健身", desc: "路跑/马拉松/越野跑，门槛最低的运动方式" },
  { name: "健身/力量训练", cat: "运动健身", desc: "器械训练、CrossFit，功能健身" },
  { name: "游泳", cat: "运动健身", desc: "自由泳/蛙泳/潜水/冲浪" },
  { name: "球类运动", cat: "运动健身", desc: "篮球/足球/羽毛球/网球" },
  { name: "骑行", cat: "运动健身", desc: "公路骑行/山地骑行/通勤骑行" },
  { name: "格斗类", cat: "运动健身", desc: "拳击/散打/柔术/跆拳道" },
  { name: "瑜伽/普拉提", cat: "运动健身", desc: "体式练习、正念冥想" },
  { name: "极限运动", cat: "运动健身", desc: "攀岩/滑板/冲浪/滑雪/跑酷" },
  { name: "乐器演奏", cat: "音乐艺术", desc: "钢琴/吉他/架子鼓/小提琴/古筝" },
  { name: "声乐/唱歌", cat: "音乐艺术", desc: "流行唱法/美声/合唱" },
  { name: "绘画", cat: "音乐艺术", desc: "油画/水彩/素描/丙烯/岩彩" },
  { name: "书法", cat: "音乐艺术", desc: "毛笔书法/硬笔书法" },
  { name: "摄影", cat: "音乐艺术", desc: "风光/人像/纪实/手机摄影" },
  { name: "舞蹈", cat: "音乐艺术", desc: "街舞/芭蕾/民族舞/拉丁舞" },
  { name: "手工艺/手工", cat: "音乐艺术", desc: "陶艺/编织/皮具/木工/刺绣" },
  { name: "阅读/读书", cat: "知识学习", desc: "文学/历史/哲学/商业/科幻/漫画" },
  { name: "写作/创作", cat: "知识学习", desc: "小说/散文/诗歌/日记/自媒体" },
  { name: "语言学习", cat: "知识学习", desc: "英语/日语/法语/西班牙语" },
  { name: "播客/口播", cat: "知识学习", desc: "知识分享/故事讲述/观点输出" },
  { name: "电子游戏", cat: "游戏娱乐", desc: "主机/PC/手机游戏/VR游戏" },
  { name: "桌游/剧本杀", cat: "游戏娱乐", desc: "桌游/剧本杀/密室逃脱/狼人杀" },
  { name: "棋类/牌类", cat: "游戏娱乐", desc: "围棋/象棋/国际象棋/桥牌" },
  { name: "旅行/出游", cat: "户外探索", desc: "国内游/出境游/自驾/背包旅行" },
  { name: "徒步/露营/登山", cat: "户外探索", desc: "野外探索、亲近自然" },
  { name: "观鸟/自然观察", cat: "户外探索", desc: "观鸟/植物辨识/星空观测" },
  { name: "钓鱼/路亚", cat: "户外探索", desc: "台钓/路亚/海钓" },
  { name: "烹饪/烘焙", cat: "生活美食", desc: "中餐/西餐/烘焙/分子料理" },
  { name: "品酒/茶道/咖啡", cat: "生活美食", desc: "葡萄酒/威士忌/茶艺/手冲咖啡" },
  { name: "园艺/绿植", cat: "生活美食", desc: "阳台种菜/花园设计/盆景" },
  { name: "收藏", cat: "生活美食", desc: "手办/古着/钱币/书籍/黑胶唱片" },
  { name: "编程开发", cat: "科技数码", desc: "网站/App/游戏开发/脚本" },
  { name: "AI工具使用", cat: "科技数码", desc: "AI绘画/AI写作/AI视频" },
  { name: "电子硬件/极客", cat: "科技数码", desc: "电脑装机/树莓派/智能家居" },
  { name: "无人机/航拍", cat: "科技数码", desc: "航拍摄影/无人机竞技" },
  { name: "志愿者/公益", cat: "社交公益", desc: "支教/社区服务/环保/救助" },
  { name: "社群运营/组织", cat: "社交公益", desc: "社群创建/活动策划/线下聚会" },
  { name: "辩论/演讲", cat: "社交公益", desc: "辩论赛/TED演讲/朗读会" },
  { name: "心理咨询/疗愈", cat: "社交公益", desc: "冥想/心理咨询/颂钵/催眠" },
  { name: "金融投资", cat: "知识学习", desc: "股票/基金/债券/数字货币" },
  { name: "历史/哲学探索", cat: "知识学习", desc: "通史/哲学入门/思想史" },
  { name: "科学实验/科普", cat: "知识学习", desc: "化学实验/天文观测/物理DIY" },
  { name: "考证/应试学习", cat: "知识学习", desc: "CPA/PMP/法考/公考" },
];

// Build hobby table
const hobbyRows = [];
hobbyRows.push(new TableRow({ children: [
  hCell("序号", 600),
  hCell("兴趣爱好名称", 1800),
  hCell("大类", 1400),
  hCell("典型描述", 4000),
  hCell("个人能力要求", 2560),
]}));

const requirements = [
  "注意力、意志力、内在信念、自我管控、超越感恩",
  "目标推进、抗压、赋能领导力、内在信念、自我超越",
  "注意力、自我管控、内在信念、意志力",
  "协作沟通、共情、目标推进、魅力调节因子",
  "目标推进、内在信念、自我超越、抗压",
  "内在信念、抗压、目标推进、魅力调节因子",
  "注意力、元认知、自我管控、内在信念、超越信念",
  "超越信念、自我超越、抗压、内在信念",
  "注意力、目标推进、意志力、内在信念、自我超越",
  "共情内核、魅力调节因子、协作沟通、开放判断力",
  "创造力、审美感知、注意力、好奇心、实践落地",
  "注意力、内在信念、自我超越、超越信念",
  "审美感知、开放判断力、好奇心、创造力、实践落地",
  "共情内核、审美感知、创造力、协作沟通、魅力调节因子",
  "实践落地、审美感知、好奇心、目标推进",
  "元认知、好奇心、内在信念、自我超越、注意力",
  "创造力、好奇心、元认知、自我超越",
  "好奇心、开放判断力、元认知、自我超越、目标推进",
  "开放判断力、共情内核、魅力调节因子、协作沟通",
  "策略思维、注意力、好奇心、目标推进",
  "协作沟通、开放判断力、共情内核、魅力调节因子",
  "注意力、策略思维、元认知、自我管控",
  "开放判断力、好奇心、共情内核、超越信念",
  "意志力、内在信念、抗压、超越信念",
  "注意力、好奇心、开放判断力、审美感知",
  "注意力、自我管控、超越感恩、内在信念",
  "实践落地、审美感知、创造力、好奇心",
  "审美感知、超越信念、共情内核、开放判断力",
  "超越感恩、注意力、内在信念、自我超越",
  "审美感知、好奇心、目标推进、开放判断力",
  "注意力、逻辑推理、目标推进、实践落地、元认知",
  "好奇心、开放判断力、实践落地、审美感知、创造力",
  "动手实践、好奇心、目标推进、注意力",
  "注意力、目标推进、审美感知、好奇心、抗压",
  "共情内核、利他意愿、协作沟通、魅力调节、内在信念",
  "协作沟通、赋能领导力、魅力调节因子、共情内核",
  "开放判断力、协作沟通、魅力调节因子、共情内核",
  "共情内核、元认知、内在信念、超越感恩",
  "信息分析、抗压、自我管控、元认知、超越信念",
  "好奇心、元认知、内在信念、超越信念",
  "好奇心、逻辑推理、实践落地、注意力、元认知",
  "目标推进、抗压、自我管控、意志力、内在信念",
];

hobbies.forEach((h, i) => {
  const bg = i % 2 === 0 ? "EBF3FB" : "FFFFFF";
  hobbyRows.push(new TableRow({ children: [
    dCell(String(i + 1), 600, bg),
    dCell(h.name, 1800, bg, true),
    dCell(h.cat, 1400, bg),
    dCell(h.desc, 4000, bg),
    dCell(requirements[i] || "", 2560, bg),
  ]}));
});

const hobbyTable = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [600, 1800, 1400, 4000, 1560],
  rows: hobbyRows
});

// Page content
const children = [
  new Paragraph({
    children: [new TextRun({ text: "个人成长名片 - 兴趣爱好与能力要求总览", font: "Arial", size: 36, bold: true, color: "2F5496" })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 240 }
  }),

  new Paragraph({
    children: [new TextRun({ text: "本文件基于《个人成长名片》27个子维度测评体系，结合42项常见兴趣爱好，系统梳理每项爱好对个人能力的要求，作为兴趣适配分析的参考依据。", font: "Arial", size: 20, color: "595959" })],
    spacing: { before: 0, after: 360 }
  }),

  sectionTitle("一、兴趣爱好清单总表"),

  new Paragraph({
    children: [new TextRun({ text: "以下42项兴趣爱好覆盖8大类别，涵盖运动健身、音乐艺术、知识学习、游戏娱乐、户外探索、生活美食、科技数码、社交公益。按序号排列，供后续适配分析使用。", font: "Arial", size: 20 })],
    spacing: { before: 0, after: 180 }
  }),

  hobbyTable,

  new Paragraph({ children: [new PageBreak()] }),

  sectionTitle("二、兴趣爱好说明"),

  para("本清单中的42项兴趣爱好，均为成年人群中常见的、可长期发展的兴趣方向。每项爱好的" +
       "典型描述列出了最常见的形式，具体参与方式可灵活选择（如旅行不限于国内外，具体形式根据个人情况而定）。"),

  new Paragraph({ children: [new PageBreak()] }),

  sectionTitle("三、兴趣爱好与能力要求汇总说明"),

  para('上表【个人能力要求】列，列出了该兴趣爱好体验深度和表现水平最相关的能力维度。', false, 22),
  para("具体影响程度的详细分析，请参见配套Excel文件：", false, 22),
  bullet("《兴趣爱好题目影响.xlsx》- 27个子维度 × 42个爱好的影响程度矩阵"),
  bullet("《兴趣爱好与子维度关系.xlsx》- 适配关系矩阵与详细推荐理由"),
  new Paragraph({ children: [new PageBreak()] }),

  sectionTitle("四、测评体系说明"),

  para("本兴趣爱好分析体系基于《个人成长名片》27个子维度测评，每项子维度通过Likert 5级量表测评两个方向：", false, 22),
  bullet("等级模式题（1-5分）：高分代表该能力维度较弱/有卡点"),
  bullet("成长模式题（1-5分）：高分代表该能力维度较强/有优势"),
  bullet("最终得分 = 成长模式总分 - 等级模式总分（差值越大，成长型特征越明显）"),

  new Paragraph({ spacing: { before: 200, after: 0 }, children: [] }),
  para("27个子维度分类如下：", false, 22),
  bullet("认知能力（9项）：注意力、思维洞察、好奇心学习、信息分析、元认知、知识迁移、开放判断、创造力、实践落地"),
  bullet("人际共情（4项）：共情内核、关系构建、协作沟通、赋能领导"),
  bullet("意志行动（4项）：内在信念、目标推进、自我管控、决策引领"),
  bullet("领导职业（4项）：价值交付、前瞻领导、落地统筹、魅力调节"),
  bullet("超越动力（6项）：自我超越、意义建构、利他贡献、超越信念、欣赏美、超越感恩"),
];

const doc = new Document({
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{ level: 0, format: "bullet", text: "\u2022", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
    }]
  },
  styles: {
    default: {
      document: { run: { font: "Arial", size: 22 } }
    },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2F5496" },
        paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 0 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [new TextRun({ text: "个人成长名片 - 兴趣爱好", font: "Arial", size: 18, color: "7F7F7F" })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          children: [new TextRun({ text: "兴趣爱好与个人能力要求总览", font: "Arial", size: 18, color: "7F7F7F" })]
        })]
      })
    },
    children
  }]
});

const outputPath = "C:\\Users\\25890\\Desktop\\兴趣爱好\\兴趣爱好.docx";
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log("Saved: " + outputPath);
}).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
