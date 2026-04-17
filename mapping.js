// Growth mapping data for hobbies and jobs
var GrowthMapping = {
  "dimToHobbies": {
    "attention": [
      {
        "name": "跑步",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高注意力者适合马拉松训练；高意志力者适合百公里越野",
        "lowAdvice": "低注意力者可从散步/快走开始，用APP打卡约束自己也能坚持；低超越感恩者可从有社交陪伴的跑团开始"
      },
      {
        "name": "游泳",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高注意力者适合长距离游泳；高自我管控者适合系统训练计划",
        "lowAdvice": "等级型高分者从短距离开始，降低对成绩的焦虑"
      },
      {
        "name": "瑜伽",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高元认知者适合正念瑜伽/冥想；高内在信念者适合力量瑜伽",
        "lowAdvice": "等级型高分者从哈他瑜伽开始，不要过度追求高难度体式"
      },
      {
        "name": "乐器演奏",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高注意力者适合古典乐/管弦乐；高目标推进者适合考级路线",
        "lowAdvice": "等级型高分者选择入门简单的乐器(尤克里里/口琴)，降低挫败感"
      },
      {
        "name": "绘画",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高创造力者适合插画/油画；高审美者适合设计类绘画",
        "lowAdvice": "等级型高分者从素描临摹开始，降低画不像的挫败感"
      },
      {
        "name": "书法",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高内在信念者适合楷书/隶书修炼；高超越信念者适合草书写意",
        "lowAdvice": "等级型高分者从硬笔开始，工具简单门槛低"
      },
      {
        "name": "阅读",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合非虚构/哲学；高好奇心者适合科幻/历史",
        "lowAdvice": "等级型高分者从听书/图文书开始，降低读不下去的挫败感"
      },
      {
        "name": "电子游戏",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高策略思维者适合策略/RTS游戏；高注意力者适合竞技游戏",
        "lowAdvice": "等级型高分者从RPG/剧情向开始，避免高对抗竞技游戏挫败感"
      },
      {
        "name": "棋类",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高元认知者适合围棋(需深度复盘)；高注意力者适合象棋/国象",
        "lowAdvice": "等级型高分者从五子棋/跳棋入门，低自我管控者可下快棋限制思考时间"
      },
      {
        "name": "观鸟",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高注意力者适合精准辨识；高好奇心者适合探索新物种",
        "lowAdvice": "等级型高分者从简单鸟类图鉴开始，低注意力者可先从固定观察点入手"
      },
      {
        "name": "钓鱼",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高自我管控者适合长时守候；高超越感恩者能享受等待过程",
        "lowAdvice": "等级型高分者从黑坑(快鱼)开始，满足成就感；低注意力者可学路亚快节奏"
      },
      {
        "name": "园艺",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高超越感恩者适合阳台种菜(收获感强)；高注意力者适合精细养护",
        "lowAdvice": "等级型高分者从绿萝/多肉开始，降低养死的挫败感"
      },
      {
        "name": "编程",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高注意力者适合系统架构/底层开发；高元认知者适合学习算法/AI",
        "lowAdvice": "等级型高分者从Scratch/可视化编程开始，降低代码门槛"
      },
      {
        "name": "硬件极客",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高动手实践者适合电脑装机/改装；高好奇心者适合单片机/树莓派",
        "lowAdvice": "等级型高分者从简单DIY开始(智能家居改装)，小步快跑获得成就感"
      },
      {
        "name": "无人机",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高审美者适合航拍摄影；高目标推进者适合竞技飞行",
        "lowAdvice": "等级型高分者从室内穿越机开始，低抗压者不要直接上手高端机"
      },
      {
        "name": "科学实验",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高好奇心加高动手实践者适合生物/化学实验；高逻辑者适合物理/天文",
        "lowAdvice": "等级型高分者从简单科普实验套件开始，降低实验失败挫败感"
      }
    ],
    "spirituality": [
      {
        "name": "跑步",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高注意力者适合马拉松训练；高意志力者适合百公里越野",
        "lowAdvice": "低注意力者可从散步/快走开始，用APP打卡约束自己也能坚持；低超越感恩者可从有社交陪伴的跑团开始"
      },
      {
        "name": "健身",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高目标推进者适合竞技健身(CrossFit/健体)；高赋能者适合成为培训师",
        "lowAdvice": "等级型高分者从家庭健身开始，先建立微习惯；低自我管控者可借助教练监督"
      },
      {
        "name": "游泳",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高注意力者适合长距离游泳；高自我管控者适合系统训练计划",
        "lowAdvice": "等级型高分者从短距离开始，降低对成绩的焦虑"
      },
      {
        "name": "骑行",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高自我超越者适合长途骑行/川藏线；高抗压者适合竞赛骑行",
        "lowAdvice": "等级型高分者从城市骑行通勤开始；低超越感恩者可组队降低心理压力"
      },
      {
        "name": "格斗",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高内在信念者适合柔道/泰拳实战；高魅力者适合拳击表演赛",
        "lowAdvice": "等级型高分者从套路训练开始；低协作沟通者在对抗类中反而有优势"
      },
      {
        "name": "瑜伽",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高元认知者适合正念瑜伽/冥想；高内在信念者适合力量瑜伽",
        "lowAdvice": "等级型高分者从哈他瑜伽开始，不要过度追求高难度体式"
      },
      {
        "name": "瑜伽",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高元认知者适合正念瑜伽/冥想；高内在信念者适合力量瑜伽",
        "lowAdvice": "等级型高分者从哈他瑜伽开始，不要过度追求高难度体式"
      },
      {
        "name": "极限运动",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高超越信念者适合高海拔攀登/自由潜；高自我超越者适合翼装/深海潜",
        "lowAdvice": "等级型高分者从低风险极限开始(室内攀岩)，等级型低抗压者不适合"
      },
      {
        "name": "极限运动",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高超越信念者适合高海拔攀登/自由潜；高自我超越者适合翼装/深海潜",
        "lowAdvice": "等级型高分者从低风险极限开始(室内攀岩)，等级型低抗压者不适合"
      },
      {
        "name": "乐器演奏",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高注意力者适合古典乐/管弦乐；高目标推进者适合考级路线",
        "lowAdvice": "等级型高分者选择入门简单的乐器(尤克里里/口琴)，降低挫败感"
      },
      {
        "name": "书法",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高内在信念者适合楷书/隶书修炼；高超越信念者适合草书写意",
        "lowAdvice": "等级型高分者从硬笔开始，工具简单门槛低"
      },
      {
        "name": "书法",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高内在信念者适合楷书/隶书修炼；高超越信念者适合草书写意",
        "lowAdvice": "等级型高分者从硬笔开始，工具简单门槛低"
      },
      {
        "name": "阅读",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合非虚构/哲学；高好奇心者适合科幻/历史",
        "lowAdvice": "等级型高分者从听书/图文书开始，降低读不下去的挫败感"
      },
      {
        "name": "写作",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高创造力者适合小说/剧本；高元认知者适合非虚构/散文",
        "lowAdvice": "等级型高分者从日记/朋友圈开始，降低对写得好的期待"
      },
      {
        "name": "语言学习",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高开放判断者适合学习不同语系；高元认知者适合系统语法学习",
        "lowAdvice": "等级型高分者先找到功利目标(考证/工作需求)，用外在动机驱动"
      },
      {
        "name": "旅行",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高开放判断者适合深度游/自由行；高好奇心者适合探索新目的地",
        "lowAdvice": "等级型高分者从周边游开始，旅行社跟团降低组织压力"
      },
      {
        "name": "旅行",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高开放判断者适合深度游/自由行；高好奇心者适合探索新目的地",
        "lowAdvice": "等级型高分者从周边游开始，旅行社跟团降低组织压力"
      },
      {
        "name": "徒步露营",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高超越信念者适合高原徒步/长线穿越；高协作沟通者适合团队露营",
        "lowAdvice": "等级型高分者从周边一日徒步开始，低超越信念可选舒适型营地"
      },
      {
        "name": "徒步露营",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高超越信念者适合高原徒步/长线穿越；高协作沟通者适合团队露营",
        "lowAdvice": "等级型高分者从周边一日徒步开始，低超越信念可选舒适型营地"
      },
      {
        "name": "徒步露营",
        "category": "户外探索",
        "impact": "extended",
        "highFit": "高超越信念者适合高原徒步/长线穿越；高协作沟通者适合团队露营",
        "lowAdvice": "等级型高分者从周边一日徒步开始，低超越信念可选舒适型营地"
      },
      {
        "name": "钓鱼",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高自我管控者适合长时守候；高超越感恩者能享受等待过程",
        "lowAdvice": "等级型高分者从黑坑(快鱼)开始，满足成就感；低注意力者可学路亚快节奏"
      },
      {
        "name": "品酒茶道",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高超越信念者适合茶道/清酒；高审美者适合葡萄酒/威士忌品鉴",
        "lowAdvice": "等级型高分者从品茶/手冲咖啡开始，门槛低且文化深度足"
      },
      {
        "name": "品酒茶道",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高超越信念者适合茶道/清酒；高审美者适合葡萄酒/威士忌品鉴",
        "lowAdvice": "等级型高分者从品茶/手冲咖啡开始，门槛低且文化深度足"
      },
      {
        "name": "园艺",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高超越感恩者适合阳台种菜(收获感强)；高注意力者适合精细养护",
        "lowAdvice": "等级型高分者从绿萝/多肉开始，降低养死的挫败感"
      },
      {
        "name": "志愿者",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高利他意愿者适合长期支教；高协作沟通者适合活动组织",
        "lowAdvice": "等级型高分者从一次性志愿活动开始，低共情者可选择非人际接触类志愿(如环保清洁)"
      },
      {
        "name": "心理疗愈",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高共情者适合心理咨询/疗愈；高超越感恩者适合正念冥想",
        "lowAdvice": "等级型高分者从自我疗愈类书籍/冥想APP开始，先自我成长再助人"
      },
      {
        "name": "金融投资",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高超越信念者适合长期价值投资；高信息分析者适合量化分析",
        "lowAdvice": "等级型高分者从基金定投开始，低抗压者远离高波动品种"
      },
      {
        "name": "历史哲学",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合哲学入门；高好奇心者适合通史/断代史",
        "lowAdvice": "等级型高分者从通俗历史书/播客开始，降低学术门槛"
      },
      {
        "name": "历史哲学",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合哲学入门；高好奇心者适合通史/断代史",
        "lowAdvice": "等级型高分者从通俗历史书/播客开始，降低学术门槛"
      },
      {
        "name": "考证学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高目标推进者适合短周期高强度备考；高自我管控者适合长周期规划",
        "lowAdvice": "等级型高分者必须绑定功利目标(升职/薪资)才有动力，低意志力者选择考试难度适中的证书"
      }
    ],
    "persistence": [
      {
        "name": "跑步",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高注意力者适合马拉松训练；高意志力者适合百公里越野",
        "lowAdvice": "低注意力者可从散步/快走开始，用APP打卡约束自己也能坚持；低超越感恩者可从有社交陪伴的跑团开始"
      },
      {
        "name": "健身",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高目标推进者适合竞技健身(CrossFit/健体)；高赋能者适合成为培训师",
        "lowAdvice": "等级型高分者从家庭健身开始，先建立微习惯；低自我管控者可借助教练监督"
      },
      {
        "name": "游泳",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高注意力者适合长距离游泳；高自我管控者适合系统训练计划",
        "lowAdvice": "等级型高分者从短距离开始，降低对成绩的焦虑"
      },
      {
        "name": "球类运动",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高协作沟通者适合足球/篮球队长；高魅力者适合飞盘/橄榄球",
        "lowAdvice": "等级型高分者从双打/娱乐局开始，低对抗减少挫败感"
      },
      {
        "name": "骑行",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高自我超越者适合长途骑行/川藏线；高抗压者适合竞赛骑行",
        "lowAdvice": "等级型高分者从城市骑行通勤开始；低超越感恩者可组队降低心理压力"
      },
      {
        "name": "极限运动",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高超越信念者适合高海拔攀登/自由潜；高自我超越者适合翼装/深海潜",
        "lowAdvice": "等级型高分者从低风险极限开始(室内攀岩)，等级型低抗压者不适合"
      },
      {
        "name": "乐器演奏",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高注意力者适合古典乐/管弦乐；高目标推进者适合考级路线",
        "lowAdvice": "等级型高分者选择入门简单的乐器(尤克里里/口琴)，降低挫败感"
      },
      {
        "name": "唱歌",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高共情者适合抒情/民谣；高魅力者适合流行/POP",
        "lowAdvice": "等级型高分者从KTV开始，低意志力者多跟唱也能进步"
      },
      {
        "name": "徒步露营",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高超越信念者适合高原徒步/长线穿越；高协作沟通者适合团队露营",
        "lowAdvice": "等级型高分者从周边一日徒步开始，低超越信念可选舒适型营地"
      },
      {
        "name": "烹饪",
        "category": "生活美食",
        "impact": "extended",
        "highFit": "高创造力者适合创意融合菜；高审美者适合西点/分子料理",
        "lowAdvice": "等级型高分者从家常菜开始，降低做得不够好的焦虑"
      },
      {
        "name": "品酒茶道",
        "category": "生活美食",
        "impact": "extended",
        "highFit": "高超越信念者适合茶道/清酒；高审美者适合葡萄酒/威士忌品鉴",
        "lowAdvice": "等级型高分者从品茶/手冲咖啡开始，门槛低且文化深度足"
      },
      {
        "name": "园艺",
        "category": "生活美食",
        "impact": "extended",
        "highFit": "高超越感恩者适合阳台种菜(收获感强)；高注意力者适合精细养护",
        "lowAdvice": "等级型高分者从绿萝/多肉开始，降低养死的挫败感"
      },
      {
        "name": "收藏",
        "category": "生活美食",
        "impact": "extended",
        "highFit": "高审美者适合艺术品/古董；高好奇心者适合手办/徽章",
        "lowAdvice": "等级型高分者从书签/明信片开始，低目标推进者可享受无用之美"
      },
      {
        "name": "编程",
        "category": "科技数码",
        "impact": "extended",
        "highFit": "高注意力者适合系统架构/底层开发；高元认知者适合学习算法/AI",
        "lowAdvice": "等级型高分者从Scratch/可视化编程开始，降低代码门槛"
      },
      {
        "name": "AI工具",
        "category": "科技数码",
        "impact": "extended",
        "highFit": "高创造力者适合AI绘画/AI视频；高好奇心者适合AI Agent探索",
        "lowAdvice": "等级型高分者从AI写作/AI问答开始，降低技术门槛焦虑"
      },
      {
        "name": "硬件极客",
        "category": "科技数码",
        "impact": "extended",
        "highFit": "高动手实践者适合电脑装机/改装；高好奇心者适合单片机/树莓派",
        "lowAdvice": "等级型高分者从简单DIY开始(智能家居改装)，小步快跑获得成就感"
      },
      {
        "name": "无人机",
        "category": "科技数码",
        "impact": "extended",
        "highFit": "高审美者适合航拍摄影；高目标推进者适合竞技飞行",
        "lowAdvice": "等级型高分者从室内穿越机开始，低抗压者不要直接上手高端机"
      },
      {
        "name": "志愿者",
        "category": "社交公益",
        "impact": "extended",
        "highFit": "高利他意愿者适合长期支教；高协作沟通者适合活动组织",
        "lowAdvice": "等级型高分者从一次性志愿活动开始，低共情者可选择非人际接触类志愿(如环保清洁)"
      },
      {
        "name": "社群运营",
        "category": "社交公益",
        "impact": "extended",
        "highFit": "高赋能领导力者适合创建/运营社群；高魅力者适合头部社群",
        "lowAdvice": "等级型高分者从参与式社群开始，降低自己创建的压力"
      },
      {
        "name": "辩论演讲",
        "category": "社交公益",
        "impact": "extended",
        "highFit": "高开放判断力者适合政策辩论；高魅力者适合TED风格演讲",
        "lowAdvice": "等级型高分者从朗读/复述开始，低魅力者可先书面表达(写作/自媒体)"
      },
      {
        "name": "心理疗愈",
        "category": "社交公益",
        "impact": "extended",
        "highFit": "高共情者适合心理咨询/疗愈；高超越感恩者适合正念冥想",
        "lowAdvice": "等级型高分者从自我疗愈类书籍/冥想APP开始，先自我成长再助人"
      },
      {
        "name": "金融投资",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高超越信念者适合长期价值投资；高信息分析者适合量化分析",
        "lowAdvice": "等级型高分者从基金定投开始，低抗压者远离高波动品种"
      },
      {
        "name": "历史哲学",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高元认知者适合哲学入门；高好奇心者适合通史/断代史",
        "lowAdvice": "等级型高分者从通俗历史书/播客开始，降低学术门槛"
      },
      {
        "name": "科学实验",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高好奇心加高动手实践者适合生物/化学实验；高逻辑者适合物理/天文",
        "lowAdvice": "等级型高分者从简单科普实验套件开始，降低实验失败挫败感"
      },
      {
        "name": "考证学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高目标推进者适合短周期高强度备考；高自我管控者适合长周期规划",
        "lowAdvice": "等级型高分者必须绑定功利目标(升职/薪资)才有动力，低意志力者选择考试难度适中的证书"
      },
      {
        "name": "考证学习",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高目标推进者适合短周期高强度备考；高自我管控者适合长周期规划",
        "lowAdvice": "等级型高分者必须绑定功利目标(升职/薪资)才有动力，低意志力者选择考试难度适中的证书"
      }
    ],
    "self_control": [
      {
        "name": "跑步",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高注意力者适合马拉松训练；高意志力者适合百公里越野",
        "lowAdvice": "低注意力者可从散步/快走开始，用APP打卡约束自己也能坚持；低超越感恩者可从有社交陪伴的跑团开始"
      },
      {
        "name": "游泳",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高注意力者适合长距离游泳；高自我管控者适合系统训练计划",
        "lowAdvice": "等级型高分者从短距离开始，降低对成绩的焦虑"
      },
      {
        "name": "瑜伽",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高元认知者适合正念瑜伽/冥想；高内在信念者适合力量瑜伽",
        "lowAdvice": "等级型高分者从哈他瑜伽开始，不要过度追求高难度体式"
      },
      {
        "name": "棋类",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高元认知者适合围棋(需深度复盘)；高注意力者适合象棋/国象",
        "lowAdvice": "等级型高分者从五子棋/跳棋入门，低自我管控者可下快棋限制思考时间"
      },
      {
        "name": "钓鱼",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高自我管控者适合长时守候；高超越感恩者能享受等待过程",
        "lowAdvice": "等级型高分者从黑坑(快鱼)开始，满足成就感；低注意力者可学路亚快节奏"
      },
      {
        "name": "金融投资",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高超越信念者适合长期价值投资；高信息分析者适合量化分析",
        "lowAdvice": "等级型高分者从基金定投开始，低抗压者远离高波动品种"
      },
      {
        "name": "考证学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高目标推进者适合短周期高强度备考；高自我管控者适合长周期规划",
        "lowAdvice": "等级型高分者必须绑定功利目标(升职/薪资)才有动力，低意志力者选择考试难度适中的证书"
      }
    ],
    "empathy_skill": [
      {
        "name": "跑步",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高注意力者适合马拉松训练；高意志力者适合百公里越野",
        "lowAdvice": "低注意力者可从散步/快走开始，用APP打卡约束自己也能坚持；低超越感恩者可从有社交陪伴的跑团开始"
      },
      {
        "name": "健身",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高目标推进者适合竞技健身(CrossFit/健体)；高赋能者适合成为培训师",
        "lowAdvice": "等级型高分者从家庭健身开始，先建立微习惯；低自我管控者可借助教练监督"
      },
      {
        "name": "游泳",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高注意力者适合长距离游泳；高自我管控者适合系统训练计划",
        "lowAdvice": "等级型高分者从短距离开始，降低对成绩的焦虑"
      },
      {
        "name": "球类运动",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高协作沟通者适合足球/篮球队长；高魅力者适合飞盘/橄榄球",
        "lowAdvice": "等级型高分者从双打/娱乐局开始，低对抗减少挫败感"
      },
      {
        "name": "骑行",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高自我超越者适合长途骑行/川藏线；高抗压者适合竞赛骑行",
        "lowAdvice": "等级型高分者从城市骑行通勤开始；低超越感恩者可组队降低心理压力"
      },
      {
        "name": "极限运动",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高超越信念者适合高海拔攀登/自由潜；高自我超越者适合翼装/深海潜",
        "lowAdvice": "等级型高分者从低风险极限开始(室内攀岩)，等级型低抗压者不适合"
      },
      {
        "name": "唱歌",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高共情者适合抒情/民谣；高魅力者适合流行/POP",
        "lowAdvice": "等级型高分者从KTV开始，低意志力者多跟唱也能进步"
      },
      {
        "name": "唱歌",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高共情者适合抒情/民谣；高魅力者适合流行/POP",
        "lowAdvice": "等级型高分者从KTV开始，低意志力者多跟唱也能进步"
      },
      {
        "name": "摄影",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高审美者适合人像/时尚摄影；高开放判断者适合人文纪实",
        "lowAdvice": "等级型高分者用手机学摄影，降低器材门槛和挫败感"
      },
      {
        "name": "舞蹈",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高共情者适合现代舞/民族舞；高魅力者适合街舞/HIPHOP",
        "lowAdvice": "等级型高分者从广场舞入门，低协作可先学独舞"
      },
      {
        "name": "舞蹈",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高共情者适合现代舞/民族舞；高魅力者适合街舞/HIPHOP",
        "lowAdvice": "等级型高分者从广场舞入门，低协作可先学独舞"
      },
      {
        "name": "阅读",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高元认知者适合非虚构/哲学；高好奇心者适合科幻/历史",
        "lowAdvice": "等级型高分者从听书/图文书开始，降低读不下去的挫败感"
      },
      {
        "name": "写作",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高创造力者适合小说/剧本；高元认知者适合非虚构/散文",
        "lowAdvice": "等级型高分者从日记/朋友圈开始，降低对写得好的期待"
      },
      {
        "name": "语言学习",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高开放判断者适合学习不同语系；高元认知者适合系统语法学习",
        "lowAdvice": "等级型高分者先找到功利目标(考证/工作需求)，用外在动机驱动"
      },
      {
        "name": "口播演讲",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高共情者适合故事讲述型口播；高魅力者适合知识科普型",
        "lowAdvice": "等级型高分者从小红书图文开始，逐步过渡到口播，降低露脸压力"
      },
      {
        "name": "口播演讲",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高共情者适合故事讲述型口播；高魅力者适合知识科普型",
        "lowAdvice": "等级型高分者从小红书图文开始，逐步过渡到口播，降低露脸压力"
      },
      {
        "name": "桌游剧本杀",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高共情者适合剧本杀/情感本；高协作沟通者适合阵营对抗本",
        "lowAdvice": "等级型高分者从简单桌游(狼人杀/德式桌游)开始，降低推理门槛"
      },
      {
        "name": "棋类",
        "category": "游戏娱乐",
        "impact": "extended",
        "highFit": "高元认知者适合围棋(需深度复盘)；高注意力者适合象棋/国象",
        "lowAdvice": "等级型高分者从五子棋/跳棋入门，低自我管控者可下快棋限制思考时间"
      },
      {
        "name": "旅行",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高开放判断者适合深度游/自由行；高好奇心者适合探索新目的地",
        "lowAdvice": "等级型高分者从周边游开始，旅行社跟团降低组织压力"
      },
      {
        "name": "旅行",
        "category": "户外探索",
        "impact": "extended",
        "highFit": "高开放判断者适合深度游/自由行；高好奇心者适合探索新目的地",
        "lowAdvice": "等级型高分者从周边游开始，旅行社跟团降低组织压力"
      },
      {
        "name": "钓鱼",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高自我管控者适合长时守候；高超越感恩者能享受等待过程",
        "lowAdvice": "等级型高分者从黑坑(快鱼)开始，满足成就感；低注意力者可学路亚快节奏"
      },
      {
        "name": "钓鱼",
        "category": "户外探索",
        "impact": "extended",
        "highFit": "高自我管控者适合长时守候；高超越感恩者能享受等待过程",
        "lowAdvice": "等级型高分者从黑坑(快鱼)开始，满足成就感；低注意力者可学路亚快节奏"
      },
      {
        "name": "品酒茶道",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高超越信念者适合茶道/清酒；高审美者适合葡萄酒/威士忌品鉴",
        "lowAdvice": "等级型高分者从品茶/手冲咖啡开始，门槛低且文化深度足"
      },
      {
        "name": "园艺",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高超越感恩者适合阳台种菜(收获感强)；高注意力者适合精细养护",
        "lowAdvice": "等级型高分者从绿萝/多肉开始，降低养死的挫败感"
      },
      {
        "name": "志愿者",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高利他意愿者适合长期支教；高协作沟通者适合活动组织",
        "lowAdvice": "等级型高分者从一次性志愿活动开始，低共情者可选择非人际接触类志愿(如环保清洁)"
      },
      {
        "name": "志愿者",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高利他意愿者适合长期支教；高协作沟通者适合活动组织",
        "lowAdvice": "等级型高分者从一次性志愿活动开始，低共情者可选择非人际接触类志愿(如环保清洁)"
      },
      {
        "name": "社群运营",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高赋能领导力者适合创建/运营社群；高魅力者适合头部社群",
        "lowAdvice": "等级型高分者从参与式社群开始，降低自己创建的压力"
      },
      {
        "name": "辩论演讲",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高开放判断力者适合政策辩论；高魅力者适合TED风格演讲",
        "lowAdvice": "等级型高分者从朗读/复述开始，低魅力者可先书面表达(写作/自媒体)"
      },
      {
        "name": "心理疗愈",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高共情者适合心理咨询/疗愈；高超越感恩者适合正念冥想",
        "lowAdvice": "等级型高分者从自我疗愈类书籍/冥想APP开始，先自我成长再助人"
      },
      {
        "name": "心理疗愈",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高共情者适合心理咨询/疗愈；高超越感恩者适合正念冥想",
        "lowAdvice": "等级型高分者从自我疗愈类书籍/冥想APP开始，先自我成长再助人"
      },
      {
        "name": "心理疗愈",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高共情者适合心理咨询/疗愈；高超越感恩者适合正念冥想",
        "lowAdvice": "等级型高分者从自我疗愈类书籍/冥想APP开始，先自我成长再助人"
      }
    ],
    "goal_execution": [
      {
        "name": "跑步",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高注意力者适合马拉松训练；高意志力者适合百公里越野",
        "lowAdvice": "低注意力者可从散步/快走开始，用APP打卡约束自己也能坚持；低超越感恩者可从有社交陪伴的跑团开始"
      },
      {
        "name": "健身",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高目标推进者适合竞技健身(CrossFit/健体)；高赋能者适合成为培训师",
        "lowAdvice": "等级型高分者从家庭健身开始，先建立微习惯；低自我管控者可借助教练监督"
      },
      {
        "name": "游泳",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高注意力者适合长距离游泳；高自我管控者适合系统训练计划",
        "lowAdvice": "等级型高分者从短距离开始，降低对成绩的焦虑"
      },
      {
        "name": "球类运动",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高协作沟通者适合足球/篮球队长；高魅力者适合飞盘/橄榄球",
        "lowAdvice": "等级型高分者从双打/娱乐局开始，低对抗减少挫败感"
      },
      {
        "name": "骑行",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高自我超越者适合长途骑行/川藏线；高抗压者适合竞赛骑行",
        "lowAdvice": "等级型高分者从城市骑行通勤开始；低超越感恩者可组队降低心理压力"
      },
      {
        "name": "格斗",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高内在信念者适合柔道/泰拳实战；高魅力者适合拳击表演赛",
        "lowAdvice": "等级型高分者从套路训练开始；低协作沟通者在对抗类中反而有优势"
      },
      {
        "name": "极限运动",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高超越信念者适合高海拔攀登/自由潜；高自我超越者适合翼装/深海潜",
        "lowAdvice": "等级型高分者从低风险极限开始(室内攀岩)，等级型低抗压者不适合"
      },
      {
        "name": "乐器演奏",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高注意力者适合古典乐/管弦乐；高目标推进者适合考级路线",
        "lowAdvice": "等级型高分者选择入门简单的乐器(尤克里里/口琴)，降低挫败感"
      },
      {
        "name": "绘画",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高创造力者适合插画/油画；高审美者适合设计类绘画",
        "lowAdvice": "等级型高分者从素描临摹开始，降低画不像的挫败感"
      },
      {
        "name": "书法",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高内在信念者适合楷书/隶书修炼；高超越信念者适合草书写意",
        "lowAdvice": "等级型高分者从硬笔开始，工具简单门槛低"
      },
      {
        "name": "书法",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高内在信念者适合楷书/隶书修炼；高超越信念者适合草书写意",
        "lowAdvice": "等级型高分者从硬笔开始，工具简单门槛低"
      },
      {
        "name": "摄影",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高审美者适合人像/时尚摄影；高开放判断者适合人文纪实",
        "lowAdvice": "等级型高分者用手机学摄影，降低器材门槛和挫败感"
      },
      {
        "name": "手工艺",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高实践落地者适合木工/金工；高审美者适合刺绣/编织",
        "lowAdvice": "等级型高分者从简单DIY开始(陶艺/软陶)，成品快减少挫败"
      },
      {
        "name": "手工艺",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高实践落地者适合木工/金工；高审美者适合刺绣/编织",
        "lowAdvice": "等级型高分者从简单DIY开始(陶艺/软陶)，成品快减少挫败"
      },
      {
        "name": "写作",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高创造力者适合小说/剧本；高元认知者适合非虚构/散文",
        "lowAdvice": "等级型高分者从日记/朋友圈开始，降低对写得好的期待"
      },
      {
        "name": "语言学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高开放判断者适合学习不同语系；高元认知者适合系统语法学习",
        "lowAdvice": "等级型高分者先找到功利目标(考证/工作需求)，用外在动机驱动"
      },
      {
        "name": "电子游戏",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高策略思维者适合策略/RTS游戏；高注意力者适合竞技游戏",
        "lowAdvice": "等级型高分者从RPG/剧情向开始，避免高对抗竞技游戏挫败感"
      },
      {
        "name": "电子游戏",
        "category": "游戏娱乐",
        "impact": "extended",
        "highFit": "高策略思维者适合策略/RTS游戏；高注意力者适合竞技游戏",
        "lowAdvice": "等级型高分者从RPG/剧情向开始，避免高对抗竞技游戏挫败感"
      },
      {
        "name": "桌游剧本杀",
        "category": "游戏娱乐",
        "impact": "extended",
        "highFit": "高共情者适合剧本杀/情感本；高协作沟通者适合阵营对抗本",
        "lowAdvice": "等级型高分者从简单桌游(狼人杀/德式桌游)开始，降低推理门槛"
      },
      {
        "name": "棋类",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高元认知者适合围棋(需深度复盘)；高注意力者适合象棋/国象",
        "lowAdvice": "等级型高分者从五子棋/跳棋入门，低自我管控者可下快棋限制思考时间"
      },
      {
        "name": "观鸟",
        "category": "户外探索",
        "impact": "extended",
        "highFit": "高注意力者适合精准辨识；高好奇心者适合探索新物种",
        "lowAdvice": "等级型高分者从简单鸟类图鉴开始，低注意力者可先从固定观察点入手"
      },
      {
        "name": "烹饪",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高创造力者适合创意融合菜；高审美者适合西点/分子料理",
        "lowAdvice": "等级型高分者从家常菜开始，降低做得不够好的焦虑"
      },
      {
        "name": "烹饪",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高创造力者适合创意融合菜；高审美者适合西点/分子料理",
        "lowAdvice": "等级型高分者从家常菜开始，降低做得不够好的焦虑"
      },
      {
        "name": "收藏",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高审美者适合艺术品/古董；高好奇心者适合手办/徽章",
        "lowAdvice": "等级型高分者从书签/明信片开始，低目标推进者可享受无用之美"
      },
      {
        "name": "编程",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高注意力者适合系统架构/底层开发；高元认知者适合学习算法/AI",
        "lowAdvice": "等级型高分者从Scratch/可视化编程开始，降低代码门槛"
      },
      {
        "name": "编程",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高注意力者适合系统架构/底层开发；高元认知者适合学习算法/AI",
        "lowAdvice": "等级型高分者从Scratch/可视化编程开始，降低代码门槛"
      },
      {
        "name": "AI工具",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高创造力者适合AI绘画/AI视频；高好奇心者适合AI Agent探索",
        "lowAdvice": "等级型高分者从AI写作/AI问答开始，降低技术门槛焦虑"
      },
      {
        "name": "硬件极客",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高动手实践者适合电脑装机/改装；高好奇心者适合单片机/树莓派",
        "lowAdvice": "等级型高分者从简单DIY开始(智能家居改装)，小步快跑获得成就感"
      },
      {
        "name": "硬件极客",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高动手实践者适合电脑装机/改装；高好奇心者适合单片机/树莓派",
        "lowAdvice": "等级型高分者从简单DIY开始(智能家居改装)，小步快跑获得成就感"
      },
      {
        "name": "无人机",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高审美者适合航拍摄影；高目标推进者适合竞技飞行",
        "lowAdvice": "等级型高分者从室内穿越机开始，低抗压者不要直接上手高端机"
      },
      {
        "name": "科学实验",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高好奇心加高动手实践者适合生物/化学实验；高逻辑者适合物理/天文",
        "lowAdvice": "等级型高分者从简单科普实验套件开始，降低实验失败挫败感"
      },
      {
        "name": "考证学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高目标推进者适合短周期高强度备考；高自我管控者适合长周期规划",
        "lowAdvice": "等级型高分者必须绑定功利目标(升职/薪资)才有动力，低意志力者选择考试难度适中的证书"
      }
    ],
    "self_transcendence": [
      {
        "name": "跑步",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高注意力者适合马拉松训练；高意志力者适合百公里越野",
        "lowAdvice": "低注意力者可从散步/快走开始，用APP打卡约束自己也能坚持；低超越感恩者可从有社交陪伴的跑团开始"
      },
      {
        "name": "健身",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高目标推进者适合竞技健身(CrossFit/健体)；高赋能者适合成为培训师",
        "lowAdvice": "等级型高分者从家庭健身开始，先建立微习惯；低自我管控者可借助教练监督"
      },
      {
        "name": "骑行",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高自我超越者适合长途骑行/川藏线；高抗压者适合竞赛骑行",
        "lowAdvice": "等级型高分者从城市骑行通勤开始；低超越感恩者可组队降低心理压力"
      },
      {
        "name": "瑜伽",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高元认知者适合正念瑜伽/冥想；高内在信念者适合力量瑜伽",
        "lowAdvice": "等级型高分者从哈他瑜伽开始，不要过度追求高难度体式"
      },
      {
        "name": "极限运动",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高超越信念者适合高海拔攀登/自由潜；高自我超越者适合翼装/深海潜",
        "lowAdvice": "等级型高分者从低风险极限开始(室内攀岩)，等级型低抗压者不适合"
      },
      {
        "name": "乐器演奏",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高注意力者适合古典乐/管弦乐；高目标推进者适合考级路线",
        "lowAdvice": "等级型高分者选择入门简单的乐器(尤克里里/口琴)，降低挫败感"
      },
      {
        "name": "书法",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高内在信念者适合楷书/隶书修炼；高超越信念者适合草书写意",
        "lowAdvice": "等级型高分者从硬笔开始，工具简单门槛低"
      },
      {
        "name": "舞蹈",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高共情者适合现代舞/民族舞；高魅力者适合街舞/HIPHOP",
        "lowAdvice": "等级型高分者从广场舞入门，低协作可先学独舞"
      },
      {
        "name": "阅读",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合非虚构/哲学；高好奇心者适合科幻/历史",
        "lowAdvice": "等级型高分者从听书/图文书开始，降低读不下去的挫败感"
      },
      {
        "name": "写作",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高创造力者适合小说/剧本；高元认知者适合非虚构/散文",
        "lowAdvice": "等级型高分者从日记/朋友圈开始，降低对写得好的期待"
      },
      {
        "name": "语言学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高开放判断者适合学习不同语系；高元认知者适合系统语法学习",
        "lowAdvice": "等级型高分者先找到功利目标(考证/工作需求)，用外在动机驱动"
      },
      {
        "name": "园艺",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高超越感恩者适合阳台种菜(收获感强)；高注意力者适合精细养护",
        "lowAdvice": "等级型高分者从绿萝/多肉开始，降低养死的挫败感"
      }
    ],
    "resilience": [
      {
        "name": "健身",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高目标推进者适合竞技健身(CrossFit/健体)；高赋能者适合成为培训师",
        "lowAdvice": "等级型高分者从家庭健身开始，先建立微习惯；低自我管控者可借助教练监督"
      },
      {
        "name": "骑行",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高自我超越者适合长途骑行/川藏线；高抗压者适合竞赛骑行",
        "lowAdvice": "等级型高分者从城市骑行通勤开始；低超越感恩者可组队降低心理压力"
      },
      {
        "name": "格斗",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高内在信念者适合柔道/泰拳实战；高魅力者适合拳击表演赛",
        "lowAdvice": "等级型高分者从套路训练开始；低协作沟通者在对抗类中反而有优势"
      },
      {
        "name": "极限运动",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高超越信念者适合高海拔攀登/自由潜；高自我超越者适合翼装/深海潜",
        "lowAdvice": "等级型高分者从低风险极限开始(室内攀岩)，等级型低抗压者不适合"
      },
      {
        "name": "徒步露营",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高超越信念者适合高原徒步/长线穿越；高协作沟通者适合团队露营",
        "lowAdvice": "等级型高分者从周边一日徒步开始，低超越信念可选舒适型营地"
      },
      {
        "name": "无人机",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高审美者适合航拍摄影；高目标推进者适合竞技飞行",
        "lowAdvice": "等级型高分者从室内穿越机开始，低抗压者不要直接上手高端机"
      },
      {
        "name": "金融投资",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高超越信念者适合长期价值投资；高信息分析者适合量化分析",
        "lowAdvice": "等级型高分者从基金定投开始，低抗压者远离高波动品种"
      },
      {
        "name": "考证学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高目标推进者适合短周期高强度备考；高自我管控者适合长周期规划",
        "lowAdvice": "等级型高分者必须绑定功利目标(升职/薪资)才有动力，低意志力者选择考试难度适中的证书"
      }
    ],
    "leadership_skill": [
      {
        "name": "健身",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高目标推进者适合竞技健身(CrossFit/健体)；高赋能者适合成为培训师",
        "lowAdvice": "等级型高分者从家庭健身开始，先建立微习惯；低自我管控者可借助教练监督"
      },
      {
        "name": "球类运动",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高协作沟通者适合足球/篮球队长；高魅力者适合飞盘/橄榄球",
        "lowAdvice": "等级型高分者从双打/娱乐局开始，低对抗减少挫败感"
      },
      {
        "name": "格斗",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高内在信念者适合柔道/泰拳实战；高魅力者适合拳击表演赛",
        "lowAdvice": "等级型高分者从套路训练开始；低协作沟通者在对抗类中反而有优势"
      },
      {
        "name": "社群运营",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高赋能领导力者适合创建/运营社群；高魅力者适合头部社群",
        "lowAdvice": "等级型高分者从参与式社群开始，降低自己创建的压力"
      }
    ],
    "teamwork": [
      {
        "name": "球类运动",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高协作沟通者适合足球/篮球队长；高魅力者适合飞盘/橄榄球",
        "lowAdvice": "等级型高分者从双打/娱乐局开始，低对抗减少挫败感"
      },
      {
        "name": "格斗",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高内在信念者适合柔道/泰拳实战；高魅力者适合拳击表演赛",
        "lowAdvice": "等级型高分者从套路训练开始；低协作沟通者在对抗类中反而有优势"
      },
      {
        "name": "唱歌",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高共情者适合抒情/民谣；高魅力者适合流行/POP",
        "lowAdvice": "等级型高分者从KTV开始，低意志力者多跟唱也能进步"
      },
      {
        "name": "舞蹈",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高共情者适合现代舞/民族舞；高魅力者适合街舞/HIPHOP",
        "lowAdvice": "等级型高分者从广场舞入门，低协作可先学独舞"
      },
      {
        "name": "口播演讲",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高共情者适合故事讲述型口播；高魅力者适合知识科普型",
        "lowAdvice": "等级型高分者从小红书图文开始，逐步过渡到口播，降低露脸压力"
      },
      {
        "name": "桌游剧本杀",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高共情者适合剧本杀/情感本；高协作沟通者适合阵营对抗本",
        "lowAdvice": "等级型高分者从简单桌游(狼人杀/德式桌游)开始，降低推理门槛"
      },
      {
        "name": "徒步露营",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高超越信念者适合高原徒步/长线穿越；高协作沟通者适合团队露营",
        "lowAdvice": "等级型高分者从周边一日徒步开始，低超越信念可选舒适型营地"
      },
      {
        "name": "志愿者",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高利他意愿者适合长期支教；高协作沟通者适合活动组织",
        "lowAdvice": "等级型高分者从一次性志愿活动开始，低共情者可选择非人际接触类志愿(如环保清洁)"
      },
      {
        "name": "社群运营",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高赋能领导力者适合创建/运营社群；高魅力者适合头部社群",
        "lowAdvice": "等级型高分者从参与式社群开始，降低自己创建的压力"
      },
      {
        "name": "辩论演讲",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高开放判断力者适合政策辩论；高魅力者适合TED风格演讲",
        "lowAdvice": "等级型高分者从朗读/复述开始，低魅力者可先书面表达(写作/自媒体)"
      }
    ],
    "social_perception": [
      {
        "name": "球类运动",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高协作沟通者适合足球/篮球队长；高魅力者适合飞盘/橄榄球",
        "lowAdvice": "等级型高分者从双打/娱乐局开始，低对抗减少挫败感"
      },
      {
        "name": "格斗",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高内在信念者适合柔道/泰拳实战；高魅力者适合拳击表演赛",
        "lowAdvice": "等级型高分者从套路训练开始；低协作沟通者在对抗类中反而有优势"
      },
      {
        "name": "唱歌",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高共情者适合抒情/民谣；高魅力者适合流行/POP",
        "lowAdvice": "等级型高分者从KTV开始，低意志力者多跟唱也能进步"
      },
      {
        "name": "舞蹈",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高共情者适合现代舞/民族舞；高魅力者适合街舞/HIPHOP",
        "lowAdvice": "等级型高分者从广场舞入门，低协作可先学独舞"
      },
      {
        "name": "口播演讲",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高共情者适合故事讲述型口播；高魅力者适合知识科普型",
        "lowAdvice": "等级型高分者从小红书图文开始，逐步过渡到口播，降低露脸压力"
      },
      {
        "name": "桌游剧本杀",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高共情者适合剧本杀/情感本；高协作沟通者适合阵营对抗本",
        "lowAdvice": "等级型高分者从简单桌游(狼人杀/德式桌游)开始，降低推理门槛"
      },
      {
        "name": "旅行",
        "category": "户外探索",
        "impact": "extended",
        "highFit": "高开放判断者适合深度游/自由行；高好奇心者适合探索新目的地",
        "lowAdvice": "等级型高分者从周边游开始，旅行社跟团降低组织压力"
      },
      {
        "name": "志愿者",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高利他意愿者适合长期支教；高协作沟通者适合活动组织",
        "lowAdvice": "等级型高分者从一次性志愿活动开始，低共情者可选择非人际接触类志愿(如环保清洁)"
      },
      {
        "name": "社群运营",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高赋能领导力者适合创建/运营社群；高魅力者适合头部社群",
        "lowAdvice": "等级型高分者从参与式社群开始，降低自己创建的压力"
      },
      {
        "name": "辩论演讲",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高开放判断力者适合政策辩论；高魅力者适合TED风格演讲",
        "lowAdvice": "等级型高分者从朗读/复述开始，低魅力者可先书面表达(写作/自媒体)"
      }
    ],
    "thinking": [
      {
        "name": "瑜伽",
        "category": "运动健身",
        "impact": "core",
        "highFit": "高元认知者适合正念瑜伽/冥想；高内在信念者适合力量瑜伽",
        "lowAdvice": "等级型高分者从哈他瑜伽开始，不要过度追求高难度体式"
      },
      {
        "name": "乐器演奏",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高注意力者适合古典乐/管弦乐；高目标推进者适合考级路线",
        "lowAdvice": "等级型高分者选择入门简单的乐器(尤克里里/口琴)，降低挫败感"
      },
      {
        "name": "绘画",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高创造力者适合插画/油画；高审美者适合设计类绘画",
        "lowAdvice": "等级型高分者从素描临摹开始，降低画不像的挫败感"
      },
      {
        "name": "手工艺",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高实践落地者适合木工/金工；高审美者适合刺绣/编织",
        "lowAdvice": "等级型高分者从简单DIY开始(陶艺/软陶)，成品快减少挫败"
      },
      {
        "name": "阅读",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合非虚构/哲学；高好奇心者适合科幻/历史",
        "lowAdvice": "等级型高分者从听书/图文书开始，降低读不下去的挫败感"
      },
      {
        "name": "写作",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高创造力者适合小说/剧本；高元认知者适合非虚构/散文",
        "lowAdvice": "等级型高分者从日记/朋友圈开始，降低对写得好的期待"
      },
      {
        "name": "语言学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高开放判断者适合学习不同语系；高元认知者适合系统语法学习",
        "lowAdvice": "等级型高分者先找到功利目标(考证/工作需求)，用外在动机驱动"
      },
      {
        "name": "电子游戏",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高策略思维者适合策略/RTS游戏；高注意力者适合竞技游戏",
        "lowAdvice": "等级型高分者从RPG/剧情向开始，避免高对抗竞技游戏挫败感"
      },
      {
        "name": "棋类",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高元认知者适合围棋(需深度复盘)；高注意力者适合象棋/国象",
        "lowAdvice": "等级型高分者从五子棋/跳棋入门，低自我管控者可下快棋限制思考时间"
      },
      {
        "name": "棋类",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高元认知者适合围棋(需深度复盘)；高注意力者适合象棋/国象",
        "lowAdvice": "等级型高分者从五子棋/跳棋入门，低自我管控者可下快棋限制思考时间"
      },
      {
        "name": "编程",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高注意力者适合系统架构/底层开发；高元认知者适合学习算法/AI",
        "lowAdvice": "等级型高分者从Scratch/可视化编程开始，降低代码门槛"
      },
      {
        "name": "心理疗愈",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高共情者适合心理咨询/疗愈；高超越感恩者适合正念冥想",
        "lowAdvice": "等级型高分者从自我疗愈类书籍/冥想APP开始，先自我成长再助人"
      },
      {
        "name": "金融投资",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高超越信念者适合长期价值投资；高信息分析者适合量化分析",
        "lowAdvice": "等级型高分者从基金定投开始，低抗压者远离高波动品种"
      },
      {
        "name": "金融投资",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高超越信念者适合长期价值投资；高信息分析者适合量化分析",
        "lowAdvice": "等级型高分者从基金定投开始，低抗压者远离高波动品种"
      },
      {
        "name": "历史哲学",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合哲学入门；高好奇心者适合通史/断代史",
        "lowAdvice": "等级型高分者从通俗历史书/播客开始，降低学术门槛"
      },
      {
        "name": "科学实验",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高好奇心加高动手实践者适合生物/化学实验；高逻辑者适合物理/天文",
        "lowAdvice": "等级型高分者从简单科普实验套件开始，降低实验失败挫败感"
      }
    ],
    "learning": [
      {
        "name": "瑜伽",
        "category": "运动健身",
        "impact": "extended",
        "highFit": "高元认知者适合正念瑜伽/冥想；高内在信念者适合力量瑜伽",
        "lowAdvice": "等级型高分者从哈他瑜伽开始，不要过度追求高难度体式"
      },
      {
        "name": "乐器演奏",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高注意力者适合古典乐/管弦乐；高目标推进者适合考级路线",
        "lowAdvice": "等级型高分者选择入门简单的乐器(尤克里里/口琴)，降低挫败感"
      },
      {
        "name": "绘画",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高创造力者适合插画/油画；高审美者适合设计类绘画",
        "lowAdvice": "等级型高分者从素描临摹开始，降低画不像的挫败感"
      },
      {
        "name": "书法",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高内在信念者适合楷书/隶书修炼；高超越信念者适合草书写意",
        "lowAdvice": "等级型高分者从硬笔开始，工具简单门槛低"
      },
      {
        "name": "摄影",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高审美者适合人像/时尚摄影；高开放判断者适合人文纪实",
        "lowAdvice": "等级型高分者用手机学摄影，降低器材门槛和挫败感"
      },
      {
        "name": "摄影",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高审美者适合人像/时尚摄影；高开放判断者适合人文纪实",
        "lowAdvice": "等级型高分者用手机学摄影，降低器材门槛和挫败感"
      },
      {
        "name": "手工艺",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高实践落地者适合木工/金工；高审美者适合刺绣/编织",
        "lowAdvice": "等级型高分者从简单DIY开始(陶艺/软陶)，成品快减少挫败"
      },
      {
        "name": "手工艺",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高实践落地者适合木工/金工；高审美者适合刺绣/编织",
        "lowAdvice": "等级型高分者从简单DIY开始(陶艺/软陶)，成品快减少挫败"
      },
      {
        "name": "阅读",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合非虚构/哲学；高好奇心者适合科幻/历史",
        "lowAdvice": "等级型高分者从听书/图文书开始，降低读不下去的挫败感"
      },
      {
        "name": "写作",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高创造力者适合小说/剧本；高元认知者适合非虚构/散文",
        "lowAdvice": "等级型高分者从日记/朋友圈开始，降低对写得好的期待"
      },
      {
        "name": "语言学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高开放判断者适合学习不同语系；高元认知者适合系统语法学习",
        "lowAdvice": "等级型高分者先找到功利目标(考证/工作需求)，用外在动机驱动"
      },
      {
        "name": "语言学习",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高开放判断者适合学习不同语系；高元认知者适合系统语法学习",
        "lowAdvice": "等级型高分者先找到功利目标(考证/工作需求)，用外在动机驱动"
      },
      {
        "name": "口播演讲",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高共情者适合故事讲述型口播；高魅力者适合知识科普型",
        "lowAdvice": "等级型高分者从小红书图文开始，逐步过渡到口播，降低露脸压力"
      },
      {
        "name": "电子游戏",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高策略思维者适合策略/RTS游戏；高注意力者适合竞技游戏",
        "lowAdvice": "等级型高分者从RPG/剧情向开始，避免高对抗竞技游戏挫败感"
      },
      {
        "name": "电子游戏",
        "category": "游戏娱乐",
        "impact": "extended",
        "highFit": "高策略思维者适合策略/RTS游戏；高注意力者适合竞技游戏",
        "lowAdvice": "等级型高分者从RPG/剧情向开始，避免高对抗竞技游戏挫败感"
      },
      {
        "name": "桌游剧本杀",
        "category": "游戏娱乐",
        "impact": "extended",
        "highFit": "高共情者适合剧本杀/情感本；高协作沟通者适合阵营对抗本",
        "lowAdvice": "等级型高分者从简单桌游(狼人杀/德式桌游)开始，降低推理门槛"
      },
      {
        "name": "棋类",
        "category": "游戏娱乐",
        "impact": "extended",
        "highFit": "高元认知者适合围棋(需深度复盘)；高注意力者适合象棋/国象",
        "lowAdvice": "等级型高分者从五子棋/跳棋入门，低自我管控者可下快棋限制思考时间"
      },
      {
        "name": "旅行",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高开放判断者适合深度游/自由行；高好奇心者适合探索新目的地",
        "lowAdvice": "等级型高分者从周边游开始，旅行社跟团降低组织压力"
      },
      {
        "name": "徒步露营",
        "category": "户外探索",
        "impact": "extended",
        "highFit": "高超越信念者适合高原徒步/长线穿越；高协作沟通者适合团队露营",
        "lowAdvice": "等级型高分者从周边一日徒步开始，低超越信念可选舒适型营地"
      },
      {
        "name": "观鸟",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高注意力者适合精准辨识；高好奇心者适合探索新物种",
        "lowAdvice": "等级型高分者从简单鸟类图鉴开始，低注意力者可先从固定观察点入手"
      },
      {
        "name": "观鸟",
        "category": "户外探索",
        "impact": "extended",
        "highFit": "高注意力者适合精准辨识；高好奇心者适合探索新物种",
        "lowAdvice": "等级型高分者从简单鸟类图鉴开始，低注意力者可先从固定观察点入手"
      },
      {
        "name": "钓鱼",
        "category": "户外探索",
        "impact": "extended",
        "highFit": "高自我管控者适合长时守候；高超越感恩者能享受等待过程",
        "lowAdvice": "等级型高分者从黑坑(快鱼)开始，满足成就感；低注意力者可学路亚快节奏"
      },
      {
        "name": "烹饪",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高创造力者适合创意融合菜；高审美者适合西点/分子料理",
        "lowAdvice": "等级型高分者从家常菜开始，降低做得不够好的焦虑"
      },
      {
        "name": "烹饪",
        "category": "生活美食",
        "impact": "extended",
        "highFit": "高创造力者适合创意融合菜；高审美者适合西点/分子料理",
        "lowAdvice": "等级型高分者从家常菜开始，降低做得不够好的焦虑"
      },
      {
        "name": "品酒茶道",
        "category": "生活美食",
        "impact": "extended",
        "highFit": "高超越信念者适合茶道/清酒；高审美者适合葡萄酒/威士忌品鉴",
        "lowAdvice": "等级型高分者从品茶/手冲咖啡开始，门槛低且文化深度足"
      },
      {
        "name": "园艺",
        "category": "生活美食",
        "impact": "extended",
        "highFit": "高超越感恩者适合阳台种菜(收获感强)；高注意力者适合精细养护",
        "lowAdvice": "等级型高分者从绿萝/多肉开始，降低养死的挫败感"
      },
      {
        "name": "收藏",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高审美者适合艺术品/古董；高好奇心者适合手办/徽章",
        "lowAdvice": "等级型高分者从书签/明信片开始，低目标推进者可享受无用之美"
      },
      {
        "name": "收藏",
        "category": "生活美食",
        "impact": "extended",
        "highFit": "高审美者适合艺术品/古董；高好奇心者适合手办/徽章",
        "lowAdvice": "等级型高分者从书签/明信片开始，低目标推进者可享受无用之美"
      },
      {
        "name": "编程",
        "category": "科技数码",
        "impact": "extended",
        "highFit": "高注意力者适合系统架构/底层开发；高元认知者适合学习算法/AI",
        "lowAdvice": "等级型高分者从Scratch/可视化编程开始，降低代码门槛"
      },
      {
        "name": "AI工具",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高创造力者适合AI绘画/AI视频；高好奇心者适合AI Agent探索",
        "lowAdvice": "等级型高分者从AI写作/AI问答开始，降低技术门槛焦虑"
      },
      {
        "name": "AI工具",
        "category": "科技数码",
        "impact": "extended",
        "highFit": "高创造力者适合AI绘画/AI视频；高好奇心者适合AI Agent探索",
        "lowAdvice": "等级型高分者从AI写作/AI问答开始，降低技术门槛焦虑"
      },
      {
        "name": "硬件极客",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高动手实践者适合电脑装机/改装；高好奇心者适合单片机/树莓派",
        "lowAdvice": "等级型高分者从简单DIY开始(智能家居改装)，小步快跑获得成就感"
      },
      {
        "name": "硬件极客",
        "category": "科技数码",
        "impact": "extended",
        "highFit": "高动手实践者适合电脑装机/改装；高好奇心者适合单片机/树莓派",
        "lowAdvice": "等级型高分者从简单DIY开始(智能家居改装)，小步快跑获得成就感"
      },
      {
        "name": "无人机",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高审美者适合航拍摄影；高目标推进者适合竞技飞行",
        "lowAdvice": "等级型高分者从室内穿越机开始，低抗压者不要直接上手高端机"
      },
      {
        "name": "无人机",
        "category": "科技数码",
        "impact": "extended",
        "highFit": "高审美者适合航拍摄影；高目标推进者适合竞技飞行",
        "lowAdvice": "等级型高分者从室内穿越机开始，低抗压者不要直接上手高端机"
      },
      {
        "name": "志愿者",
        "category": "社交公益",
        "impact": "extended",
        "highFit": "高利他意愿者适合长期支教；高协作沟通者适合活动组织",
        "lowAdvice": "等级型高分者从一次性志愿活动开始，低共情者可选择非人际接触类志愿(如环保清洁)"
      },
      {
        "name": "社群运营",
        "category": "社交公益",
        "impact": "extended",
        "highFit": "高赋能领导力者适合创建/运营社群；高魅力者适合头部社群",
        "lowAdvice": "等级型高分者从参与式社群开始，降低自己创建的压力"
      },
      {
        "name": "辩论演讲",
        "category": "社交公益",
        "impact": "extended",
        "highFit": "高开放判断力者适合政策辩论；高魅力者适合TED风格演讲",
        "lowAdvice": "等级型高分者从朗读/复述开始，低魅力者可先书面表达(写作/自媒体)"
      },
      {
        "name": "心理疗愈",
        "category": "社交公益",
        "impact": "extended",
        "highFit": "高共情者适合心理咨询/疗愈；高超越感恩者适合正念冥想",
        "lowAdvice": "等级型高分者从自我疗愈类书籍/冥想APP开始，先自我成长再助人"
      },
      {
        "name": "金融投资",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高超越信念者适合长期价值投资；高信息分析者适合量化分析",
        "lowAdvice": "等级型高分者从基金定投开始，低抗压者远离高波动品种"
      },
      {
        "name": "历史哲学",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合哲学入门；高好奇心者适合通史/断代史",
        "lowAdvice": "等级型高分者从通俗历史书/播客开始，降低学术门槛"
      },
      {
        "name": "历史哲学",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高元认知者适合哲学入门；高好奇心者适合通史/断代史",
        "lowAdvice": "等级型高分者从通俗历史书/播客开始，降低学术门槛"
      },
      {
        "name": "科学实验",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高好奇心加高动手实践者适合生物/化学实验；高逻辑者适合物理/天文",
        "lowAdvice": "等级型高分者从简单科普实验套件开始，降低实验失败挫败感"
      },
      {
        "name": "科学实验",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高好奇心加高动手实践者适合生物/化学实验；高逻辑者适合物理/天文",
        "lowAdvice": "等级型高分者从简单科普实验套件开始，降低实验失败挫败感"
      },
      {
        "name": "考证学习",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高目标推进者适合短周期高强度备考；高自我管控者适合长周期规划",
        "lowAdvice": "等级型高分者必须绑定功利目标(升职/薪资)才有动力，低意志力者选择考试难度适中的证书"
      }
    ],
    "judgment": [
      {
        "name": "唱歌",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高共情者适合抒情/民谣；高魅力者适合流行/POP",
        "lowAdvice": "等级型高分者从KTV开始，低意志力者多跟唱也能进步"
      },
      {
        "name": "绘画",
        "category": "音乐艺术",
        "impact": "extended",
        "highFit": "高创造力者适合插画/油画；高审美者适合设计类绘画",
        "lowAdvice": "等级型高分者从素描临摹开始，降低画不像的挫败感"
      },
      {
        "name": "摄影",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高审美者适合人像/时尚摄影；高开放判断者适合人文纪实",
        "lowAdvice": "等级型高分者用手机学摄影，降低器材门槛和挫败感"
      },
      {
        "name": "阅读",
        "category": "知识学习",
        "impact": "extended",
        "highFit": "高元认知者适合非虚构/哲学；高好奇心者适合科幻/历史",
        "lowAdvice": "等级型高分者从听书/图文书开始，降低读不下去的挫败感"
      },
      {
        "name": "语言学习",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高开放判断者适合学习不同语系；高元认知者适合系统语法学习",
        "lowAdvice": "等级型高分者先找到功利目标(考证/工作需求)，用外在动机驱动"
      },
      {
        "name": "口播演讲",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高共情者适合故事讲述型口播；高魅力者适合知识科普型",
        "lowAdvice": "等级型高分者从小红书图文开始，逐步过渡到口播，降低露脸压力"
      },
      {
        "name": "桌游剧本杀",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高共情者适合剧本杀/情感本；高协作沟通者适合阵营对抗本",
        "lowAdvice": "等级型高分者从简单桌游(狼人杀/德式桌游)开始，降低推理门槛"
      },
      {
        "name": "旅行",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高开放判断者适合深度游/自由行；高好奇心者适合探索新目的地",
        "lowAdvice": "等级型高分者从周边游开始，旅行社跟团降低组织压力"
      },
      {
        "name": "观鸟",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高注意力者适合精准辨识；高好奇心者适合探索新物种",
        "lowAdvice": "等级型高分者从简单鸟类图鉴开始，低注意力者可先从固定观察点入手"
      },
      {
        "name": "品酒茶道",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高超越信念者适合茶道/清酒；高审美者适合葡萄酒/威士忌品鉴",
        "lowAdvice": "等级型高分者从品茶/手冲咖啡开始，门槛低且文化深度足"
      },
      {
        "name": "收藏",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高审美者适合艺术品/古董；高好奇心者适合手办/徽章",
        "lowAdvice": "等级型高分者从书签/明信片开始，低目标推进者可享受无用之美"
      },
      {
        "name": "AI工具",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高创造力者适合AI绘画/AI视频；高好奇心者适合AI Agent探索",
        "lowAdvice": "等级型高分者从AI写作/AI问答开始，降低技术门槛焦虑"
      },
      {
        "name": "辩论演讲",
        "category": "社交公益",
        "impact": "core",
        "highFit": "高开放判断力者适合政策辩论；高魅力者适合TED风格演讲",
        "lowAdvice": "等级型高分者从朗读/复述开始，低魅力者可先书面表达(写作/自媒体)"
      },
      {
        "name": "历史哲学",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高元认知者适合哲学入门；高好奇心者适合通史/断代史",
        "lowAdvice": "等级型高分者从通俗历史书/播客开始，降低学术门槛"
      }
    ],
    "creativity": [
      {
        "name": "绘画",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高创造力者适合插画/油画；高审美者适合设计类绘画",
        "lowAdvice": "等级型高分者从素描临摹开始，降低画不像的挫败感"
      },
      {
        "name": "绘画",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高创造力者适合插画/油画；高审美者适合设计类绘画",
        "lowAdvice": "等级型高分者从素描临摹开始，降低画不像的挫败感"
      },
      {
        "name": "摄影",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高审美者适合人像/时尚摄影；高开放判断者适合人文纪实",
        "lowAdvice": "等级型高分者用手机学摄影，降低器材门槛和挫败感"
      },
      {
        "name": "摄影",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高审美者适合人像/时尚摄影；高开放判断者适合人文纪实",
        "lowAdvice": "等级型高分者用手机学摄影，降低器材门槛和挫败感"
      },
      {
        "name": "舞蹈",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高共情者适合现代舞/民族舞；高魅力者适合街舞/HIPHOP",
        "lowAdvice": "等级型高分者从广场舞入门，低协作可先学独舞"
      },
      {
        "name": "舞蹈",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高共情者适合现代舞/民族舞；高魅力者适合街舞/HIPHOP",
        "lowAdvice": "等级型高分者从广场舞入门，低协作可先学独舞"
      },
      {
        "name": "手工艺",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高实践落地者适合木工/金工；高审美者适合刺绣/编织",
        "lowAdvice": "等级型高分者从简单DIY开始(陶艺/软陶)，成品快减少挫败"
      },
      {
        "name": "手工艺",
        "category": "音乐艺术",
        "impact": "core",
        "highFit": "高实践落地者适合木工/金工；高审美者适合刺绣/编织",
        "lowAdvice": "等级型高分者从简单DIY开始(陶艺/软陶)，成品快减少挫败"
      },
      {
        "name": "写作",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高创造力者适合小说/剧本；高元认知者适合非虚构/散文",
        "lowAdvice": "等级型高分者从日记/朋友圈开始，降低对写得好的期待"
      },
      {
        "name": "电子游戏",
        "category": "游戏娱乐",
        "impact": "core",
        "highFit": "高策略思维者适合策略/RTS游戏；高注意力者适合竞技游戏",
        "lowAdvice": "等级型高分者从RPG/剧情向开始，避免高对抗竞技游戏挫败感"
      },
      {
        "name": "观鸟",
        "category": "户外探索",
        "impact": "core",
        "highFit": "高注意力者适合精准辨识；高好奇心者适合探索新物种",
        "lowAdvice": "等级型高分者从简单鸟类图鉴开始，低注意力者可先从固定观察点入手"
      },
      {
        "name": "烹饪",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高创造力者适合创意融合菜；高审美者适合西点/分子料理",
        "lowAdvice": "等级型高分者从家常菜开始，降低做得不够好的焦虑"
      },
      {
        "name": "品酒茶道",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高超越信念者适合茶道/清酒；高审美者适合葡萄酒/威士忌品鉴",
        "lowAdvice": "等级型高分者从品茶/手冲咖啡开始，门槛低且文化深度足"
      },
      {
        "name": "收藏",
        "category": "生活美食",
        "impact": "core",
        "highFit": "高审美者适合艺术品/古董；高好奇心者适合手办/徽章",
        "lowAdvice": "等级型高分者从书签/明信片开始，低目标推进者可享受无用之美"
      },
      {
        "name": "AI工具",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高创造力者适合AI绘画/AI视频；高好奇心者适合AI Agent探索",
        "lowAdvice": "等级型高分者从AI写作/AI问答开始，降低技术门槛焦虑"
      },
      {
        "name": "AI工具",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高创造力者适合AI绘画/AI视频；高好奇心者适合AI Agent探索",
        "lowAdvice": "等级型高分者从AI写作/AI问答开始，降低技术门槛焦虑"
      },
      {
        "name": "无人机",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高审美者适合航拍摄影；高目标推进者适合竞技飞行",
        "lowAdvice": "等级型高分者从室内穿越机开始，低抗压者不要直接上手高端机"
      }
    ],
    "logic": [
      {
        "name": "编程",
        "category": "科技数码",
        "impact": "core",
        "highFit": "高注意力者适合系统架构/底层开发；高元认知者适合学习算法/AI",
        "lowAdvice": "等级型高分者从Scratch/可视化编程开始，降低代码门槛"
      },
      {
        "name": "科学实验",
        "category": "知识学习",
        "impact": "core",
        "highFit": "高好奇心加高动手实践者适合生物/化学实验；高逻辑者适合物理/天文",
        "lowAdvice": "等级型高分者从简单科普实验套件开始，降低实验失败挫败感"
      }
    ]
  },
  "dimToJobs": {
    "attention": [
      {
        "name": "后端开发工程师",
        "category": "技术研发",
        "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
      },
      {
        "name": "前端开发工程师",
        "category": "技术研发",
        "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
      },
      {
        "name": "算法工程师",
        "category": "技术研发",
        "method": "模型研发需要深度专注和学习力；算法优化培养洞察力和分析能力"
      },
      {
        "name": "硬件工程师",
        "category": "技术研发",
        "method": "硬件调试需要持续专注；项目周期培养目标推进；问题排查培养洞察力"
      },
      {
        "name": "测试工程师",
        "category": "技术研发",
        "method": "测试执行需要持续专注；测试计划培养目标推进；跨团队沟通培养协作能力"
      },
      {
        "name": "UI设计师",
        "category": "设计创意",
        "method": "界面设计培养审美感知；用户研究培养协作沟通；创新设计培养创造力"
      },
      {
        "name": "视频剪辑师",
        "category": "设计创意",
        "method": "剪辑需要专注力和审美；项目交付培养目标推进能力"
      },
      {
        "name": "知识产权专员",
        "category": "产品创新",
        "method": "专业审查培养注意力和判断力；流程管理培养目标推进能力"
      },
      {
        "name": "质量管理专员",
        "category": "运营执行",
        "method": "质量检查培养注意力和判断力；体系建设培养目标推进能力"
      },
      {
        "name": "财务分析师",
        "category": "财务金融",
        "method": "财务分析培养信息分析和洞察力；预算管理培养目标推进能力"
      },
      {
        "name": "审计专员",
        "category": "财务金融",
        "method": "审计工作培养注意力和开放判断；审计流程培养目标推进能力"
      },
      {
        "name": "税务专员",
        "category": "财务金融",
        "method": "税务合规培养注意力和超越信念；申报流程培养目标推进能力"
      },
      {
        "name": "法务专员",
        "category": "行政支持",
        "method": "法务审查培养注意力和开放判断；合规管理培养目标推进能力"
      },
      {
        "name": "数据录入员",
        "category": "行政支持",
        "method": "数据录入培养注意力和目标推进；质量控制培养自我管控能力"
      }
    ],
    "thinking": [
      {
        "name": "后端开发工程师",
        "category": "技术研发",
        "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
      },
      {
        "name": "后端开发工程师",
        "category": "技术研发",
        "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
      },
      {
        "name": "算法工程师",
        "category": "技术研发",
        "method": "模型研发需要深度专注和学习力；算法优化培养洞察力和分析能力"
      },
      {
        "name": "算法工程师",
        "category": "技术研发",
        "method": "模型研发需要深度专注和学习力；算法优化培养洞察力和分析能力"
      },
      {
        "name": "数据分析师",
        "category": "技术研发",
        "method": "数据分析培养洞察力和分析能力；报告输出培养沟通能力"
      },
      {
        "name": "数据分析师",
        "category": "技术研发",
        "method": "数据分析培养洞察力和分析能力；报告输出培养沟通能力"
      },
      {
        "name": "硬件工程师",
        "category": "技术研发",
        "method": "硬件调试需要持续专注；项目周期培养目标推进；问题排查培养洞察力"
      },
      {
        "name": "UX设计师",
        "category": "设计创意",
        "method": "用户研究直接培养共情能力；需求分析培养洞察力"
      },
      {
        "name": "产品经理",
        "category": "产品创新",
        "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
      },
      {
        "name": "战略规划师",
        "category": "战略咨询",
        "method": "战略分析培养洞察力和信息分析能力；战略落地培养协作沟通"
      },
      {
        "name": "战略规划师",
        "category": "战略咨询",
        "method": "战略分析培养洞察力和信息分析能力；战略落地培养协作沟通"
      },
      {
        "name": "管理咨询顾问",
        "category": "战略咨询",
        "method": "管理咨询培养系统洞察力；客户沟通培养协作能力；跨行业研究培养开放判断力"
      },
      {
        "name": "投资分析师",
        "category": "战略咨询",
        "method": "投资分析培养信息分析和洞察力；风控培养自我管控能力"
      },
      {
        "name": "商业分析师",
        "category": "战略咨询",
        "method": "数据分析培养洞察力；方案落地培养目标推进和协作能力"
      },
      {
        "name": "行业研究员",
        "category": "战略咨询",
        "method": "行业研究培养好奇心和信息分析；长期跟踪培养超越信念"
      },
      {
        "name": "数字营销专员",
        "category": "市场销售",
        "method": "数据分析培养洞察力；投放优化培养目标推进能力"
      },
      {
        "name": "财务分析师",
        "category": "财务金融",
        "method": "财务分析培养信息分析和洞察力；预算管理培养目标推进能力"
      }
    ],
    "goal_execution": [
      {
        "name": "后端开发工程师",
        "category": "技术研发",
        "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
      },
      {
        "name": "后端开发工程师",
        "category": "技术研发",
        "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
      },
      {
        "name": "硬件工程师",
        "category": "技术研发",
        "method": "硬件调试需要持续专注；项目周期培养目标推进；问题排查培养洞察力"
      },
      {
        "name": "测试工程师",
        "category": "技术研发",
        "method": "测试执行需要持续专注；测试计划培养目标推进；跨团队沟通培养协作能力"
      },
      {
        "name": "品牌设计师",
        "category": "设计创意",
        "method": "品牌设计培养审美和创新；项目执行培养目标推进和协作"
      },
      {
        "name": "工业设计师",
        "category": "设计创意",
        "method": "工业设计培养审美和好奇心；手板制作培养落地能力"
      },
      {
        "name": "工业设计师",
        "category": "设计创意",
        "method": "工业设计培养审美和好奇心；手板制作培养落地能力"
      },
      {
        "name": "视频剪辑师",
        "category": "设计创意",
        "method": "剪辑需要专注力和审美；项目交付培养目标推进能力"
      },
      {
        "name": "产品经理",
        "category": "产品创新",
        "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
      },
      {
        "name": "项目经理",
        "category": "产品创新",
        "method": "项目管理直接培养目标推进和落地统筹能力；风险管理培养自我管控"
      },
      {
        "name": "知识产权专员",
        "category": "产品创新",
        "method": "专业审查培养注意力和判断力；流程管理培养目标推进能力"
      },
      {
        "name": "商业分析师",
        "category": "战略咨询",
        "method": "数据分析培养洞察力；方案落地培养目标推进和协作能力"
      },
      {
        "name": "电商运营",
        "category": "运营执行",
        "method": "电商运营直接培养目标推进和执行力；活动策划培养协作沟通"
      },
      {
        "name": "用户运营",
        "category": "运营执行",
        "method": "用户运营培养共情能力；增长目标培养目标推进力"
      },
      {
        "name": "内容运营",
        "category": "运营执行",
        "method": "内容运营培养审美和目标推进；数据分析培养信息分析能力"
      },
      {
        "name": "供应链专员",
        "category": "运营执行",
        "method": "供应链管理培养目标推进和风险管控；多方协调培养协作能力"
      },
      {
        "name": "质量管理专员",
        "category": "运营执行",
        "method": "质量检查培养注意力和判断力；体系建设培养目标推进能力"
      },
      {
        "name": "品牌营销经理",
        "category": "市场销售",
        "method": "品牌管理培养审美和超越信念；活动策划培养目标推进能力"
      },
      {
        "name": "数字营销专员",
        "category": "市场销售",
        "method": "数据分析培养洞察力；投放优化培养目标推进能力"
      },
      {
        "name": "销售经理",
        "category": "市场销售",
        "method": "客户关系培养共情能力；业绩压力培养目标推进和超越信念"
      },
      {
        "name": "大客户经理",
        "category": "市场销售",
        "method": "大客户管理培养共情和超越信念；解决方案培养系统思维和目标推进"
      },
      {
        "name": "客户成功经理",
        "category": "市场销售",
        "method": "客户服务直接培养共情能力和超越感恩；客户成功体系培养目标推进能力"
      },
      {
        "name": "BD商务拓展",
        "category": "市场销售",
        "method": "商务谈判培养协作沟通；合作落地培养目标推进能力；长期关系培养超越信念"
      },
      {
        "name": "财务分析师",
        "category": "财务金融",
        "method": "财务分析培养信息分析和洞察力；预算管理培养目标推进能力"
      },
      {
        "name": "审计专员",
        "category": "财务金融",
        "method": "审计工作培养注意力和开放判断；审计流程培养目标推进能力"
      },
      {
        "name": "税务专员",
        "category": "财务金融",
        "method": "税务合规培养注意力和超越信念；申报流程培养目标推进能力"
      },
      {
        "name": "HRBP",
        "category": "人力资源",
        "method": "HR工作直接培养共情和超越感恩；人才管理培养目标推进能力"
      },
      {
        "name": "招聘专员",
        "category": "人力资源",
        "method": "人才甄别培养共情能力；招聘流程培养目标推进能力"
      },
      {
        "name": "OD组织发展专员",
        "category": "人力资源",
        "method": "OD工作培养超越信念和目标推进；组织变革培养协作沟通能力"
      },
      {
        "name": "行政专员",
        "category": "行政支持",
        "method": "行政事务培养目标推进能力；多任务协调培养协作沟通；服务意识培养超越感恩"
      },
      {
        "name": "法务专员",
        "category": "行政支持",
        "method": "法务审查培养注意力和开放判断；合规管理培养目标推进能力"
      },
      {
        "name": "数据录入员",
        "category": "行政支持",
        "method": "数据录入培养注意力和目标推进；质量控制培养自我管控能力"
      },
      {
        "name": "客服专员",
        "category": "行政支持",
        "method": "客户服务直接培养共情和超越感恩；投诉处理培养目标推进能力"
      },
      {
        "name": "运营总监",
        "category": "高级管理",
        "method": "全面运营管理培养目标推进和决策引领；团队管理培养超越信念和利他意愿"
      },
      {
        "name": "市场总监",
        "category": "高级管理",
        "method": "品牌管理培养审美和超越信念；团队管理培养协作沟通和目标推进能力"
      },
      {
        "name": "技术VP/CTO",
        "category": "高级管理",
        "method": "技术管理培养好奇心和目标推进；团队领导培养协作沟通和审美能力"
      },
      {
        "name": "HRD/CHO",
        "category": "高级管理",
        "method": "人才战略培养超越信念；文化建设培养利他意愿；体系搭建培养目标推进能力"
      },
      {
        "name": "CEO创业者",
        "category": "高级管理",
        "method": "创业历程培养全面能力发展；使命驱动培养超越信念和利他意愿"
      }
    ],
    "creativity": [
      {
        "name": "前端开发工程师",
        "category": "技术研发",
        "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
      },
      {
        "name": "前端开发工程师",
        "category": "技术研发",
        "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
      },
      {
        "name": "UI设计师",
        "category": "设计创意",
        "method": "界面设计培养审美感知；用户研究培养协作沟通；创新设计培养创造力"
      },
      {
        "name": "UI设计师",
        "category": "设计创意",
        "method": "界面设计培养审美感知；用户研究培养协作沟通；创新设计培养创造力"
      },
      {
        "name": "品牌设计师",
        "category": "设计创意",
        "method": "品牌设计培养审美和创新；项目执行培养目标推进和协作"
      },
      {
        "name": "品牌设计师",
        "category": "设计创意",
        "method": "品牌设计培养审美和创新；项目执行培养目标推进和协作"
      },
      {
        "name": "工业设计师",
        "category": "设计创意",
        "method": "工业设计培养审美和好奇心；手板制作培养落地能力"
      },
      {
        "name": "视频剪辑师",
        "category": "设计创意",
        "method": "剪辑需要专注力和审美；项目交付培养目标推进能力"
      },
      {
        "name": "插画师",
        "category": "设计创意",
        "method": "插画创作培养审美和创造力；商业项目培养对市场和用户的理解"
      },
      {
        "name": "插画师",
        "category": "设计创意",
        "method": "插画创作培养审美和创造力；商业项目培养对市场和用户的理解"
      },
      {
        "name": "创新研究员",
        "category": "产品创新",
        "method": "前沿研究培养好奇心和持续学习；长期追踪培养超越信念"
      },
      {
        "name": "内容创作者",
        "category": "产品创新",
        "method": "内容创作培养审美和创造力；持续输出培养好奇心和超越感恩"
      },
      {
        "name": "内容创作者",
        "category": "产品创新",
        "method": "内容创作培养审美和创造力；持续输出培养好奇心和超越感恩"
      },
      {
        "name": "内容运营",
        "category": "运营执行",
        "method": "内容运营培养审美和目标推进；数据分析培养信息分析能力"
      },
      {
        "name": "品牌营销经理",
        "category": "市场销售",
        "method": "品牌管理培养审美和超越信念；活动策划培养目标推进能力"
      },
      {
        "name": "市场总监",
        "category": "高级管理",
        "method": "品牌管理培养审美和超越信念；团队管理培养协作沟通和目标推进能力"
      },
      {
        "name": "技术VP/CTO",
        "category": "高级管理",
        "method": "技术管理培养好奇心和目标推进；团队领导培养协作沟通和审美能力"
      }
    ],
    "learning": [
      {
        "name": "前端开发工程师",
        "category": "技术研发",
        "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
      },
      {
        "name": "算法工程师",
        "category": "技术研发",
        "method": "模型研发需要深度专注和学习力；算法优化培养洞察力和分析能力"
      },
      {
        "name": "数据分析师",
        "category": "技术研发",
        "method": "数据分析培养洞察力和分析能力；报告输出培养沟通能力"
      },
      {
        "name": "UX设计师",
        "category": "设计创意",
        "method": "用户研究直接培养共情能力；需求分析培养洞察力"
      },
      {
        "name": "工业设计师",
        "category": "设计创意",
        "method": "工业设计培养审美和好奇心；手板制作培养落地能力"
      },
      {
        "name": "插画师",
        "category": "设计创意",
        "method": "插画创作培养审美和创造力；商业项目培养对市场和用户的理解"
      },
      {
        "name": "创新研究员",
        "category": "产品创新",
        "method": "前沿研究培养好奇心和持续学习；长期追踪培养超越信念"
      },
      {
        "name": "内容创作者",
        "category": "产品创新",
        "method": "内容创作培养审美和创造力；持续输出培养好奇心和超越感恩"
      },
      {
        "name": "管理咨询顾问",
        "category": "战略咨询",
        "method": "管理咨询培养系统洞察力；客户沟通培养协作能力；跨行业研究培养开放判断力"
      },
      {
        "name": "投资分析师",
        "category": "战略咨询",
        "method": "投资分析培养信息分析和洞察力；风控培养自我管控能力"
      },
      {
        "name": "行业研究员",
        "category": "战略咨询",
        "method": "行业研究培养好奇心和信息分析；长期跟踪培养超越信念"
      },
      {
        "name": "用户运营",
        "category": "运营执行",
        "method": "用户运营培养共情能力；增长目标培养目标推进力"
      },
      {
        "name": "内容运营",
        "category": "运营执行",
        "method": "内容运营培养审美和目标推进；数据分析培养信息分析能力"
      },
      {
        "name": "数字营销专员",
        "category": "市场销售",
        "method": "数据分析培养洞察力；投放优化培养目标推进能力"
      },
      {
        "name": "投融资专员",
        "category": "财务金融",
        "method": "投融资工作培养超越信念；商务沟通培养协作能力；行业研究培养好奇心"
      },
      {
        "name": "招聘专员",
        "category": "人力资源",
        "method": "人才甄别培养共情能力；招聘流程培养目标推进能力"
      },
      {
        "name": "培训发展专员",
        "category": "人力资源",
        "method": "课程开发培养超越信念和好奇心；培训交付培养协作沟通能力"
      },
      {
        "name": "OD组织发展专员",
        "category": "人力资源",
        "method": "OD工作培养超越信念和目标推进；组织变革培养协作沟通能力"
      },
      {
        "name": "技术VP/CTO",
        "category": "高级管理",
        "method": "技术管理培养好奇心和目标推进；团队领导培养协作沟通和审美能力"
      },
      {
        "name": "CEO创业者",
        "category": "高级管理",
        "method": "创业历程培养全面能力发展；使命驱动培养超越信念和利他意愿"
      }
    ],
    "teamwork": [
      {
        "name": "前端开发工程师",
        "category": "技术研发",
        "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
      },
      {
        "name": "数据分析师",
        "category": "技术研发",
        "method": "数据分析培养洞察力和分析能力；报告输出培养沟通能力"
      },
      {
        "name": "测试工程师",
        "category": "技术研发",
        "method": "测试执行需要持续专注；测试计划培养目标推进；跨团队沟通培养协作能力"
      },
      {
        "name": "UI设计师",
        "category": "设计创意",
        "method": "界面设计培养审美感知；用户研究培养协作沟通；创新设计培养创造力"
      },
      {
        "name": "品牌设计师",
        "category": "设计创意",
        "method": "品牌设计培养审美和创新；项目执行培养目标推进和协作"
      },
      {
        "name": "产品经理",
        "category": "产品创新",
        "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
      },
      {
        "name": "项目经理",
        "category": "产品创新",
        "method": "项目管理直接培养目标推进和落地统筹能力；风险管理培养自我管控"
      },
      {
        "name": "战略规划师",
        "category": "战略咨询",
        "method": "战略分析培养洞察力和信息分析能力；战略落地培养协作沟通"
      },
      {
        "name": "管理咨询顾问",
        "category": "战略咨询",
        "method": "管理咨询培养系统洞察力；客户沟通培养协作能力；跨行业研究培养开放判断力"
      },
      {
        "name": "商业分析师",
        "category": "战略咨询",
        "method": "数据分析培养洞察力；方案落地培养目标推进和协作能力"
      },
      {
        "name": "电商运营",
        "category": "运营执行",
        "method": "电商运营直接培养目标推进和执行力；活动策划培养协作沟通"
      },
      {
        "name": "供应链专员",
        "category": "运营执行",
        "method": "供应链管理培养目标推进和风险管控；多方协调培养协作能力"
      },
      {
        "name": "品牌营销经理",
        "category": "市场销售",
        "method": "品牌管理培养审美和超越信念；活动策划培养目标推进能力"
      },
      {
        "name": "大客户经理",
        "category": "市场销售",
        "method": "大客户管理培养共情和超越信念；解决方案培养系统思维和目标推进"
      },
      {
        "name": "BD商务拓展",
        "category": "市场销售",
        "method": "商务谈判培养协作沟通；合作落地培养目标推进能力；长期关系培养超越信念"
      },
      {
        "name": "投融资专员",
        "category": "财务金融",
        "method": "投融资工作培养超越信念；商务沟通培养协作能力；行业研究培养好奇心"
      },
      {
        "name": "HRBP",
        "category": "人力资源",
        "method": "HR工作直接培养共情和超越感恩；人才管理培养目标推进能力"
      },
      {
        "name": "培训发展专员",
        "category": "人力资源",
        "method": "课程开发培养超越信念和好奇心；培训交付培养协作沟通能力"
      },
      {
        "name": "OD组织发展专员",
        "category": "人力资源",
        "method": "OD工作培养超越信念和目标推进；组织变革培养协作沟通能力"
      },
      {
        "name": "行政专员",
        "category": "行政支持",
        "method": "行政事务培养目标推进能力；多任务协调培养协作沟通；服务意识培养超越感恩"
      },
      {
        "name": "市场总监",
        "category": "高级管理",
        "method": "品牌管理培养审美和超越信念；团队管理培养协作沟通和目标推进能力"
      },
      {
        "name": "技术VP/CTO",
        "category": "高级管理",
        "method": "技术管理培养好奇心和目标推进；团队领导培养协作沟通和审美能力"
      },
      {
        "name": "HRD/CHO",
        "category": "高级管理",
        "method": "人才战略培养超越信念；文化建设培养利他意愿；体系搭建培养目标推进能力"
      }
    ],
    "empathy_skill": [
      {
        "name": "UX设计师",
        "category": "设计创意",
        "method": "用户研究直接培养共情能力；需求分析培养洞察力"
      },
      {
        "name": "产品经理",
        "category": "产品创新",
        "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
      },
      {
        "name": "内容创作者",
        "category": "产品创新",
        "method": "内容创作培养审美和创造力；持续输出培养好奇心和超越感恩"
      },
      {
        "name": "用户运营",
        "category": "运营执行",
        "method": "用户运营培养共情能力；增长目标培养目标推进力"
      },
      {
        "name": "销售经理",
        "category": "市场销售",
        "method": "客户关系培养共情能力；业绩压力培养目标推进和超越信念"
      },
      {
        "name": "大客户经理",
        "category": "市场销售",
        "method": "大客户管理培养共情和超越信念；解决方案培养系统思维和目标推进"
      },
      {
        "name": "客户成功经理",
        "category": "市场销售",
        "method": "客户服务直接培养共情能力和超越感恩；客户成功体系培养目标推进能力"
      },
      {
        "name": "客户成功经理",
        "category": "市场销售",
        "method": "客户服务直接培养共情能力和超越感恩；客户成功体系培养目标推进能力"
      },
      {
        "name": "HRBP",
        "category": "人力资源",
        "method": "HR工作直接培养共情和超越感恩；人才管理培养目标推进能力"
      },
      {
        "name": "HRBP",
        "category": "人力资源",
        "method": "HR工作直接培养共情和超越感恩；人才管理培养目标推进能力"
      },
      {
        "name": "招聘专员",
        "category": "人力资源",
        "method": "人才甄别培养共情能力；招聘流程培养目标推进能力"
      },
      {
        "name": "行政专员",
        "category": "行政支持",
        "method": "行政事务培养目标推进能力；多任务协调培养协作沟通；服务意识培养超越感恩"
      },
      {
        "name": "客服专员",
        "category": "行政支持",
        "method": "客户服务直接培养共情和超越感恩；投诉处理培养目标推进能力"
      },
      {
        "name": "客服专员",
        "category": "行政支持",
        "method": "客户服务直接培养共情和超越感恩；投诉处理培养目标推进能力"
      },
      {
        "name": "运营总监",
        "category": "高级管理",
        "method": "全面运营管理培养目标推进和决策引领；团队管理培养超越信念和利他意愿"
      },
      {
        "name": "HRD/CHO",
        "category": "高级管理",
        "method": "人才战略培养超越信念；文化建设培养利他意愿；体系搭建培养目标推进能力"
      },
      {
        "name": "CEO创业者",
        "category": "高级管理",
        "method": "创业历程培养全面能力发展；使命驱动培养超越信念和利他意愿"
      }
    ],
    "decision_making": [
      {
        "name": "产品经理",
        "category": "产品创新",
        "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
      },
      {
        "name": "项目经理",
        "category": "产品创新",
        "method": "项目管理直接培养目标推进和落地统筹能力；风险管理培养自我管控"
      },
      {
        "name": "运营总监",
        "category": "高级管理",
        "method": "全面运营管理培养目标推进和决策引领；团队管理培养超越信念和利他意愿"
      }
    ],
    "self_control": [
      {
        "name": "项目经理",
        "category": "产品创新",
        "method": "项目管理直接培养目标推进和落地统筹能力；风险管理培养自我管控"
      },
      {
        "name": "投资分析师",
        "category": "战略咨询",
        "method": "投资分析培养信息分析和洞察力；风控培养自我管控能力"
      },
      {
        "name": "供应链专员",
        "category": "运营执行",
        "method": "供应链管理培养目标推进和风险管控；多方协调培养协作能力"
      }
    ],
    "spirituality": [
      {
        "name": "创新研究员",
        "category": "产品创新",
        "method": "前沿研究培养好奇心和持续学习；长期追踪培养超越信念"
      },
      {
        "name": "战略规划师",
        "category": "战略咨询",
        "method": "战略分析培养洞察力和信息分析能力；战略落地培养协作沟通"
      },
      {
        "name": "行业研究员",
        "category": "战略咨询",
        "method": "行业研究培养好奇心和信息分析；长期跟踪培养超越信念"
      },
      {
        "name": "品牌营销经理",
        "category": "市场销售",
        "method": "品牌管理培养审美和超越信念；活动策划培养目标推进能力"
      },
      {
        "name": "销售经理",
        "category": "市场销售",
        "method": "客户关系培养共情能力；业绩压力培养目标推进和超越信念"
      },
      {
        "name": "大客户经理",
        "category": "市场销售",
        "method": "大客户管理培养共情和超越信念；解决方案培养系统思维和目标推进"
      },
      {
        "name": "BD商务拓展",
        "category": "市场销售",
        "method": "商务谈判培养协作沟通；合作落地培养目标推进能力；长期关系培养超越信念"
      },
      {
        "name": "投融资专员",
        "category": "财务金融",
        "method": "投融资工作培养超越信念；商务沟通培养协作能力；行业研究培养好奇心"
      },
      {
        "name": "税务专员",
        "category": "财务金融",
        "method": "税务合规培养注意力和超越信念；申报流程培养目标推进能力"
      },
      {
        "name": "培训发展专员",
        "category": "人力资源",
        "method": "课程开发培养超越信念和好奇心；培训交付培养协作沟通能力"
      },
      {
        "name": "OD组织发展专员",
        "category": "人力资源",
        "method": "OD工作培养超越信念和目标推进；组织变革培养协作沟通能力"
      },
      {
        "name": "运营总监",
        "category": "高级管理",
        "method": "全面运营管理培养目标推进和决策引领；团队管理培养超越信念和利他意愿"
      },
      {
        "name": "市场总监",
        "category": "高级管理",
        "method": "品牌管理培养审美和超越信念；团队管理培养协作沟通和目标推进能力"
      },
      {
        "name": "HRD/CHO",
        "category": "高级管理",
        "method": "人才战略培养超越信念；文化建设培养利他意愿；体系搭建培养目标推进能力"
      },
      {
        "name": "CEO创业者",
        "category": "高级管理",
        "method": "创业历程培养全面能力发展；使命驱动培养超越信念和利他意愿"
      }
    ],
    "judgment": [
      {
        "name": "知识产权专员",
        "category": "产品创新",
        "method": "专业审查培养注意力和判断力；流程管理培养目标推进能力"
      },
      {
        "name": "管理咨询顾问",
        "category": "战略咨询",
        "method": "管理咨询培养系统洞察力；客户沟通培养协作能力；跨行业研究培养开放判断力"
      },
      {
        "name": "质量管理专员",
        "category": "运营执行",
        "method": "质量检查培养注意力和判断力；体系建设培养目标推进能力"
      },
      {
        "name": "审计专员",
        "category": "财务金融",
        "method": "审计工作培养注意力和开放判断；审计流程培养目标推进能力"
      },
      {
        "name": "法务专员",
        "category": "行政支持",
        "method": "法务审查培养注意力和开放判断；合规管理培养目标推进能力"
      }
    ],
    "self_transcendence": [
      {
        "name": "电商运营",
        "category": "运营执行",
        "method": "电商运营直接培养目标推进和执行力；活动策划培养协作沟通"
      }
    ]
  },
  "hobbyToDims": {
    "跑步": {
      "category": "运动健身",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "core"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "extended"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "extended"
        }
      ]
    },
    "健身": {
      "category": "运动健身",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "resilience",
          "dimName": "抗压",
          "impact": "core"
        },
        {
          "dimId": "leadership_skill",
          "dimName": "赋能领导力",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "core"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        }
      ]
    },
    "游泳": {
      "category": "运动健身",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "extended"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        }
      ]
    },
    "球类运动": {
      "category": "运动健身",
      "dims": [
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "共情",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节因子",
          "impact": "core"
        },
        {
          "dimId": "leadership_skill",
          "dimName": "赋能领导力",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "骑行": {
      "category": "运动健身",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "core"
        },
        {
          "dimId": "resilience",
          "dimName": "抗压",
          "impact": "core"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        }
      ]
    },
    "格斗": {
      "category": "运动健身",
      "dims": [
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "resilience",
          "dimName": "抗压",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节因子",
          "impact": "core"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "extended"
        },
        {
          "dimId": "leadership_skill",
          "dimName": "赋能领导力",
          "impact": "extended"
        }
      ]
    },
    "瑜伽": {
      "category": "运动健身",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越信念",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "extended"
        }
      ]
    },
    "极限运动": {
      "category": "运动健身",
      "dims": [
        {
          "dimId": "spirituality",
          "dimName": "超越信念",
          "impact": "core"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "core"
        },
        {
          "dimId": "resilience",
          "dimName": "抗压",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "乐器演奏": {
      "category": "音乐艺术",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "extended"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        }
      ]
    },
    "唱歌": {
      "category": "音乐艺术",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节因子",
          "impact": "core"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "绘画": {
      "category": "音乐艺术",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "创造力",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "实践落地",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "extended"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "extended"
        }
      ]
    },
    "书法": {
      "category": "音乐艺术",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越信念",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "extended"
        }
      ]
    },
    "摄影": {
      "category": "音乐艺术",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "实践落地",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        }
      ]
    },
    "舞蹈": {
      "category": "音乐艺术",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力",
          "impact": "core"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "core"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节因子",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "extended"
        }
      ]
    },
    "手工艺": {
      "category": "音乐艺术",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "实践落地",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "extended"
        }
      ]
    },
    "阅读": {
      "category": "知识学习",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "core"
        },
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "extended"
        }
      ]
    },
    "写作": {
      "category": "知识学习",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "创造力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "extended"
        }
      ]
    },
    "语言学习": {
      "category": "知识学习",
      "dims": [
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "extended"
        }
      ]
    },
    "口播演讲": {
      "category": "知识学习",
      "dims": [
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节因子",
          "impact": "core"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        }
      ]
    },
    "电子游戏": {
      "category": "游戏娱乐",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "策略思维",
          "impact": "core"
        },
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "extended"
        }
      ]
    },
    "桌游剧本杀": {
      "category": "游戏娱乐",
      "dims": [
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节因子",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "extended"
        }
      ]
    },
    "棋类": {
      "category": "游戏娱乐",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "策略思维",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        }
      ]
    },
    "旅行": {
      "category": "户外探索",
      "dims": [
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越信念",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节",
          "impact": "extended"
        }
      ]
    },
    "徒步露营": {
      "category": "户外探索",
      "dims": [
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "resilience",
          "dimName": "抗压",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越信念",
          "impact": "core"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越信念",
          "impact": "extended"
        }
      ]
    },
    "观鸟": {
      "category": "户外探索",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "extended"
        }
      ]
    },
    "钓鱼": {
      "category": "户外探索",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "extended"
        }
      ]
    },
    "烹饪": {
      "category": "生活美食",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "实践落地",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "品酒茶道": {
      "category": "生活美食",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越信念",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "园艺": {
      "category": "生活美食",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "core"
        },
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "收藏": {
      "category": "生活美食",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "编程": {
      "category": "科技数码",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "logic",
          "dimName": "逻辑推理",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "实践落地",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "AI工具": {
      "category": "科技数码",
      "dims": [
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "实践落地",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "硬件极客": {
      "category": "科技数码",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "动手实践",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "无人机": {
      "category": "科技数码",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "resilience",
          "dimName": "抗压",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "志愿者": {
      "category": "社交公益",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "利他意愿",
          "impact": "core"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "core"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "社群运营": {
      "category": "社交公益",
      "dims": [
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "core"
        },
        {
          "dimId": "leadership_skill",
          "dimName": "赋能领导力",
          "impact": "core"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节因子",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "辩论演讲": {
      "category": "社交公益",
      "dims": [
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "impact": "core"
        },
        {
          "dimId": "social_perception",
          "dimName": "魅力调节因子",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "心理疗愈": {
      "category": "社交公益",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越感恩",
          "impact": "core"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "利他意愿",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "金融投资": {
      "category": "知识学习",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "信息分析",
          "impact": "core"
        },
        {
          "dimId": "resilience",
          "dimName": "抗压",
          "impact": "core"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越信念",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "历史哲学": {
      "category": "知识学习",
      "dims": [
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越信念",
          "impact": "core"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "科学实验": {
      "category": "知识学习",
      "dims": [
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "core"
        },
        {
          "dimId": "logic",
          "dimName": "逻辑推理",
          "impact": "core"
        },
        {
          "dimId": "goal_execution",
          "dimName": "实践落地",
          "impact": "core"
        },
        {
          "dimId": "attention",
          "dimName": "注意力",
          "impact": "core"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    },
    "考证学习": {
      "category": "知识学习",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "目标推进",
          "impact": "core"
        },
        {
          "dimId": "resilience",
          "dimName": "抗压",
          "impact": "core"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控",
          "impact": "core"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "core"
        },
        {
          "dimId": "spirituality",
          "dimName": "内在信念",
          "impact": "core"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心",
          "impact": "extended"
        },
        {
          "dimId": "persistence",
          "dimName": "意志力",
          "impact": "extended"
        }
      ]
    }
  },
  "jobToDims": {
    "后端开发工程师": {
      "category": "技术研发",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
        },
        {
          "dimId": "thinking",
          "dimName": "思维与洞察力",
          "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "实践落地与反馈迭代",
          "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
        },
        {
          "dimId": "thinking",
          "dimName": "元认知能力",
          "method": "代码编写需要持续专注；系统设计培养洞察力；项目开发培养目标推进和落地能力"
        }
      ]
    },
    "前端开发工程师": {
      "category": "技术研发",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力与创新",
          "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "method": "页面开发需要专注力和审美感知；框架学习培养好奇心；团队协作培养沟通能力"
        }
      ]
    },
    "算法工程师": {
      "category": "技术研发",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "模型研发需要深度专注和学习力；算法优化培养洞察力和分析能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "模型研发需要深度专注和学习力；算法优化培养洞察力和分析能力"
        },
        {
          "dimId": "thinking",
          "dimName": "思维与洞察力",
          "method": "模型研发需要深度专注和学习力；算法优化培养洞察力和分析能力"
        },
        {
          "dimId": "thinking",
          "dimName": "信息分析与战略思维",
          "method": "模型研发需要深度专注和学习力；算法优化培养洞察力和分析能力"
        }
      ]
    },
    "数据分析师": {
      "category": "技术研发",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "信息分析与战略思维",
          "method": "数据分析培养洞察力和分析能力；报告输出培养沟通能力"
        },
        {
          "dimId": "thinking",
          "dimName": "思维与洞察力",
          "method": "数据分析培养洞察力和分析能力；报告输出培养沟通能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "数据分析培养洞察力和分析能力；报告输出培养沟通能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "method": "数据分析培养洞察力和分析能力；报告输出培养沟通能力"
        }
      ]
    },
    "硬件工程师": {
      "category": "技术研发",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "硬件调试需要持续专注；项目周期培养目标推进；问题排查培养洞察力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "硬件调试需要持续专注；项目周期培养目标推进；问题排查培养洞察力"
        },
        {
          "dimId": "thinking",
          "dimName": "思维与洞察力",
          "method": "硬件调试需要持续专注；项目周期培养目标推进；问题排查培养洞察力"
        }
      ]
    },
    "测试工程师": {
      "category": "技术研发",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "测试执行需要持续专注；测试计划培养目标推进；跨团队沟通培养协作能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "测试执行需要持续专注；测试计划培养目标推进；跨团队沟通培养协作能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "method": "测试执行需要持续专注；测试计划培养目标推进；跨团队沟通培养协作能力"
        }
      ]
    },
    "UI设计师": {
      "category": "设计创意",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "界面设计培养审美感知；用户研究培养协作沟通；创新设计培养创造力"
        },
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "界面设计培养审美感知；用户研究培养协作沟通；创新设计培养创造力"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力与创新",
          "method": "界面设计培养审美感知；用户研究培养协作沟通；创新设计培养创造力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "method": "界面设计培养审美感知；用户研究培养协作沟通；创新设计培养创造力"
        }
      ]
    },
    "UX设计师": {
      "category": "设计创意",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核与包容力",
          "method": "用户研究直接培养共情能力；需求分析培养洞察力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "用户研究直接培养共情能力；需求分析培养洞察力"
        },
        {
          "dimId": "thinking",
          "dimName": "思维与洞察力",
          "method": "用户研究直接培养共情能力；需求分析培养洞察力"
        }
      ]
    },
    "品牌设计师": {
      "category": "设计创意",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "品牌设计培养审美和创新；项目执行培养目标推进和协作"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力与创新",
          "method": "品牌设计培养审美和创新；项目执行培养目标推进和协作"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "品牌设计培养审美和创新；项目执行培养目标推进和协作"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通",
          "method": "品牌设计培养审美和创新；项目执行培养目标推进和协作"
        }
      ]
    },
    "工业设计师": {
      "category": "设计创意",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "工业设计培养审美和好奇心；手板制作培养落地能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "工业设计培养审美和好奇心；手板制作培养落地能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "工业设计培养审美和好奇心；手板制作培养落地能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "实践落地与反馈迭代",
          "method": "工业设计培养审美和好奇心；手板制作培养落地能力"
        }
      ]
    },
    "视频剪辑师": {
      "category": "设计创意",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "剪辑需要专注力和审美；项目交付培养目标推进能力"
        },
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "剪辑需要专注力和审美；项目交付培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "剪辑需要专注力和审美；项目交付培养目标推进能力"
        }
      ]
    },
    "插画师": {
      "category": "设计创意",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "插画创作培养审美和创造力；商业项目培养对市场和用户的理解"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力与创新",
          "method": "插画创作培养审美和创造力；商业项目培养对市场和用户的理解"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "插画创作培养审美和创造力；商业项目培养对市场和用户的理解"
        }
      ]
    },
    "产品经理": {
      "category": "产品创新",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "思维与洞察力",
          "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核与包容力",
          "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
        },
        {
          "dimId": "decision_making",
          "dimName": "决策引领与变革",
          "method": "需求分析培养洞察力；项目管理培养目标推进；跨部门协作培养沟通；用户研究培养共情"
        }
      ]
    },
    "项目经理": {
      "category": "产品创新",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "项目管理直接培养目标推进和落地统筹能力；风险管理培养自我管控"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "项目管理直接培养目标推进和落地统筹能力；风险管理培养自我管控"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控与风险平衡",
          "method": "项目管理直接培养目标推进和落地统筹能力；风险管理培养自我管控"
        },
        {
          "dimId": "decision_making",
          "dimName": "决策引领与变革",
          "method": "项目管理直接培养目标推进和落地统筹能力；风险管理培养自我管控"
        }
      ]
    },
    "创新研究员": {
      "category": "产品创新",
      "dims": [
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "前沿研究培养好奇心和持续学习；长期追踪培养超越信念"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "前沿研究培养好奇心和持续学习；长期追踪培养超越信念"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "前沿研究培养好奇心和持续学习；长期追踪培养超越信念"
        }
      ]
    },
    "内容创作者": {
      "category": "产品创新",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "内容创作培养审美和创造力；持续输出培养好奇心和超越感恩"
        },
        {
          "dimId": "creativity",
          "dimName": "创造力与创新",
          "method": "内容创作培养审美和创造力；持续输出培养好奇心和超越感恩"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "内容创作培养审美和创造力；持续输出培养好奇心和超越感恩"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越性感恩与宽恕",
          "method": "内容创作培养审美和创造力；持续输出培养好奇心和超越感恩"
        }
      ]
    },
    "知识产权专员": {
      "category": "产品创新",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "专业审查培养注意力和判断力；流程管理培养目标推进能力"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "method": "专业审查培养注意力和判断力；流程管理培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "专业审查培养注意力和判断力；流程管理培养目标推进能力"
        }
      ]
    },
    "战略规划师": {
      "category": "战略咨询",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "信息分析与战略思维",
          "method": "战略分析培养洞察力和信息分析能力；战略落地培养协作沟通"
        },
        {
          "dimId": "thinking",
          "dimName": "思维与洞察力",
          "method": "战略分析培养洞察力和信息分析能力；战略落地培养协作沟通"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "战略分析培养洞察力和信息分析能力；战略落地培养协作沟通"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "战略分析培养洞察力和信息分析能力；战略落地培养协作沟通"
        }
      ]
    },
    "管理咨询顾问": {
      "category": "战略咨询",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "思维与洞察力",
          "method": "管理咨询培养系统洞察力；客户沟通培养协作能力；跨行业研究培养开放判断力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "管理咨询培养系统洞察力；客户沟通培养协作能力；跨行业研究培养开放判断力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "管理咨询培养系统洞察力；客户沟通培养协作能力；跨行业研究培养开放判断力"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "method": "管理咨询培养系统洞察力；客户沟通培养协作能力；跨行业研究培养开放判断力"
        }
      ]
    },
    "投资分析师": {
      "category": "战略咨询",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "信息分析与战略思维",
          "method": "投资分析培养信息分析和洞察力；风控培养自我管控能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "投资分析培养信息分析和洞察力；风控培养自我管控能力"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控与风险平衡",
          "method": "投资分析培养信息分析和洞察力；风控培养自我管控能力"
        }
      ]
    },
    "商业分析师": {
      "category": "战略咨询",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "信息分析与战略思维",
          "method": "数据分析培养洞察力；方案落地培养目标推进和协作能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "数据分析培养洞察力；方案落地培养目标推进和协作能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "数据分析培养洞察力；方案落地培养目标推进和协作能力"
        }
      ]
    },
    "行业研究员": {
      "category": "战略咨询",
      "dims": [
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "行业研究培养好奇心和信息分析；长期跟踪培养超越信念"
        },
        {
          "dimId": "thinking",
          "dimName": "信息分析与战略思维",
          "method": "行业研究培养好奇心和信息分析；长期跟踪培养超越信念"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "行业研究培养好奇心和信息分析；长期跟踪培养超越信念"
        }
      ]
    },
    "电商运营": {
      "category": "运营执行",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "电商运营直接培养目标推进和执行力；活动策划培养协作沟通"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "电商运营直接培养目标推进和执行力；活动策划培养协作沟通"
        },
        {
          "dimId": "self_transcendence",
          "dimName": "自我超越意愿",
          "method": "电商运营直接培养目标推进和执行力；活动策划培养协作沟通"
        }
      ]
    },
    "用户运营": {
      "category": "运营执行",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核与包容力",
          "method": "用户运营培养共情能力；增长目标培养目标推进力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "用户运营培养共情能力；增长目标培养目标推进力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "用户运营培养共情能力；增长目标培养目标推进力"
        }
      ]
    },
    "内容运营": {
      "category": "运营执行",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "内容运营培养审美和目标推进；数据分析培养信息分析能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "内容运营培养审美和目标推进；数据分析培养信息分析能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "内容运营培养审美和目标推进；数据分析培养信息分析能力"
        }
      ]
    },
    "供应链专员": {
      "category": "运营执行",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "供应链管理培养目标推进和风险管控；多方协调培养协作能力"
        },
        {
          "dimId": "self_control",
          "dimName": "自我管控与风险平衡",
          "method": "供应链管理培养目标推进和风险管控；多方协调培养协作能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "供应链管理培养目标推进和风险管控；多方协调培养协作能力"
        }
      ]
    },
    "质量管理专员": {
      "category": "运营执行",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "质量检查培养注意力和判断力；体系建设培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "质量检查培养注意力和判断力；体系建设培养目标推进能力"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "method": "质量检查培养注意力和判断力；体系建设培养目标推进能力"
        }
      ]
    },
    "品牌营销经理": {
      "category": "市场销售",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "品牌管理培养审美和超越信念；活动策划培养目标推进能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "品牌管理培养审美和超越信念；活动策划培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "品牌管理培养审美和超越信念；活动策划培养目标推进能力"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "品牌管理培养审美和超越信念；活动策划培养目标推进能力"
        }
      ]
    },
    "数字营销专员": {
      "category": "市场销售",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "信息分析与战略思维",
          "method": "数据分析培养洞察力；投放优化培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "数据分析培养洞察力；投放优化培养目标推进能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "数据分析培养洞察力；投放优化培养目标推进能力"
        }
      ]
    },
    "销售经理": {
      "category": "市场销售",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核与包容力",
          "method": "客户关系培养共情能力；业绩压力培养目标推进和超越信念"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "客户关系培养共情能力；业绩压力培养目标推进和超越信念"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "客户关系培养共情能力；业绩压力培养目标推进和超越信念"
        }
      ]
    },
    "大客户经理": {
      "category": "市场销售",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核与包容力",
          "method": "大客户管理培养共情和超越信念；解决方案培养系统思维和目标推进"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "大客户管理培养共情和超越信念；解决方案培养系统思维和目标推进"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "大客户管理培养共情和超越信念；解决方案培养系统思维和目标推进"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "大客户管理培养共情和超越信念；解决方案培养系统思维和目标推进"
        }
      ]
    },
    "客户成功经理": {
      "category": "市场销售",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核与包容力",
          "method": "客户服务直接培养共情能力和超越感恩；客户成功体系培养目标推进能力"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越性感恩与宽恕",
          "method": "客户服务直接培养共情能力和超越感恩；客户成功体系培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "客户服务直接培养共情能力和超越感恩；客户成功体系培养目标推进能力"
        }
      ]
    },
    "BD商务拓展": {
      "category": "市场销售",
      "dims": [
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "商务谈判培养协作沟通；合作落地培养目标推进能力；长期关系培养超越信念"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "商务谈判培养协作沟通；合作落地培养目标推进能力；长期关系培养超越信念"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "商务谈判培养协作沟通；合作落地培养目标推进能力；长期关系培养超越信念"
        }
      ]
    },
    "财务分析师": {
      "category": "财务金融",
      "dims": [
        {
          "dimId": "thinking",
          "dimName": "信息分析与战略思维",
          "method": "财务分析培养信息分析和洞察力；预算管理培养目标推进能力"
        },
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "财务分析培养信息分析和洞察力；预算管理培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "财务分析培养信息分析和洞察力；预算管理培养目标推进能力"
        }
      ]
    },
    "审计专员": {
      "category": "财务金融",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "审计工作培养注意力和开放判断；审计流程培养目标推进能力"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "method": "审计工作培养注意力和开放判断；审计流程培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "审计工作培养注意力和开放判断；审计流程培养目标推进能力"
        }
      ]
    },
    "投融资专员": {
      "category": "财务金融",
      "dims": [
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "投融资工作培养超越信念；商务沟通培养协作能力；行业研究培养好奇心"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "投融资工作培养超越信念；商务沟通培养协作能力；行业研究培养好奇心"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "投融资工作培养超越信念；商务沟通培养协作能力；行业研究培养好奇心"
        }
      ]
    },
    "税务专员": {
      "category": "财务金融",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "税务合规培养注意力和超越信念；申报流程培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "税务合规培养注意力和超越信念；申报流程培养目标推进能力"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "税务合规培养注意力和超越信念；申报流程培养目标推进能力"
        }
      ]
    },
    "HRBP": {
      "category": "人力资源",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核与包容力",
          "method": "HR工作直接培养共情和超越感恩；人才管理培养目标推进能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "HR工作直接培养共情和超越感恩；人才管理培养目标推进能力"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越性感恩与宽恕",
          "method": "HR工作直接培养共情和超越感恩；人才管理培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "HR工作直接培养共情和超越感恩；人才管理培养目标推进能力"
        }
      ]
    },
    "招聘专员": {
      "category": "人力资源",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核与包容力",
          "method": "人才甄别培养共情能力；招聘流程培养目标推进能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "人才甄别培养共情能力；招聘流程培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "人才甄别培养共情能力；招聘流程培养目标推进能力"
        }
      ]
    },
    "培训发展专员": {
      "category": "人力资源",
      "dims": [
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "课程开发培养超越信念和好奇心；培训交付培养协作沟通能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "课程开发培养超越信念和好奇心；培训交付培养协作沟通能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "课程开发培养超越信念和好奇心；培训交付培养协作沟通能力"
        }
      ]
    },
    "OD组织发展专员": {
      "category": "人力资源",
      "dims": [
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "OD工作培养超越信念和目标推进；组织变革培养协作沟通能力"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "OD工作培养超越信念和目标推进；组织变革培养协作沟通能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "OD工作培养超越信念和目标推进；组织变革培养协作沟通能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "OD工作培养超越信念和目标推进；组织变革培养协作沟通能力"
        }
      ]
    },
    "行政专员": {
      "category": "行政支持",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "行政事务培养目标推进能力；多任务协调培养协作沟通；服务意识培养超越感恩"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越性感恩与宽恕",
          "method": "行政事务培养目标推进能力；多任务协调培养协作沟通；服务意识培养超越感恩"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "行政事务培养目标推进能力；多任务协调培养协作沟通；服务意识培养超越感恩"
        }
      ]
    },
    "法务专员": {
      "category": "行政支持",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "法务审查培养注意力和开放判断；合规管理培养目标推进能力"
        },
        {
          "dimId": "judgment",
          "dimName": "开放判断力",
          "method": "法务审查培养注意力和开放判断；合规管理培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "法务审查培养注意力和开放判断；合规管理培养目标推进能力"
        }
      ]
    },
    "数据录入员": {
      "category": "行政支持",
      "dims": [
        {
          "dimId": "attention",
          "dimName": "注意力",
          "method": "数据录入培养注意力和目标推进；质量控制培养自我管控能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "数据录入培养注意力和目标推进；质量控制培养自我管控能力"
        }
      ]
    },
    "客服专员": {
      "category": "行政支持",
      "dims": [
        {
          "dimId": "empathy_skill",
          "dimName": "共情内核与包容力",
          "method": "客户服务直接培养共情和超越感恩；投诉处理培养目标推进能力"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "超越性感恩与宽恕",
          "method": "客户服务直接培养共情和超越感恩；投诉处理培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "客户服务直接培养共情和超越感恩；投诉处理培养目标推进能力"
        }
      ]
    },
    "运营总监": {
      "category": "高级管理",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "全面运营管理培养目标推进和决策引领；团队管理培养超越信念和利他意愿"
        },
        {
          "dimId": "decision_making",
          "dimName": "决策引领与变革",
          "method": "全面运营管理培养目标推进和决策引领；团队管理培养超越信念和利他意愿"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "全面运营管理培养目标推进和决策引领；团队管理培养超越信念和利他意愿"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "利他与公共贡献",
          "method": "全面运营管理培养目标推进和决策引领；团队管理培养超越信念和利他意愿"
        }
      ]
    },
    "市场总监": {
      "category": "高级管理",
      "dims": [
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "品牌管理培养审美和超越信念；团队管理培养协作沟通和目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "品牌管理培养审美和超越信念；团队管理培养协作沟通和目标推进能力"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "品牌管理培养审美和超越信念；团队管理培养协作沟通和目标推进能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "品牌管理培养审美和超越信念；团队管理培养协作沟通和目标推进能力"
        }
      ]
    },
    "技术VP/CTO": {
      "category": "高级管理",
      "dims": [
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "技术管理培养好奇心和目标推进；团队领导培养协作沟通和审美能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "技术管理培养好奇心和目标推进；团队领导培养协作沟通和审美能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "技术管理培养好奇心和目标推进；团队领导培养协作沟通和审美能力"
        },
        {
          "dimId": "creativity",
          "dimName": "审美感知",
          "method": "技术管理培养好奇心和目标推进；团队领导培养协作沟通和审美能力"
        }
      ]
    },
    "HRD/CHO": {
      "category": "高级管理",
      "dims": [
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "人才战略培养超越信念；文化建设培养利他意愿；体系搭建培养目标推进能力"
        },
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "人才战略培养超越信念；文化建设培养利他意愿；体系搭建培养目标推进能力"
        },
        {
          "dimId": "teamwork",
          "dimName": "协作沟通与社交智慧",
          "method": "人才战略培养超越信念；文化建设培养利他意愿；体系搭建培养目标推进能力"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "利他与公共贡献",
          "method": "人才战略培养超越信念；文化建设培养利他意愿；体系搭建培养目标推进能力"
        }
      ]
    },
    "CEO创业者": {
      "category": "高级管理",
      "dims": [
        {
          "dimId": "goal_execution",
          "dimName": "目标推进与执行力",
          "method": "创业历程培养全面能力发展；使命驱动培养超越信念和利他意愿"
        },
        {
          "dimId": "spirituality",
          "dimName": "超越性信念",
          "method": "创业历程培养全面能力发展；使命驱动培养超越信念和利他意愿"
        },
        {
          "dimId": "learning",
          "dimName": "好奇心与学习力",
          "method": "创业历程培养全面能力发展；使命驱动培养超越信念和利他意愿"
        },
        {
          "dimId": "empathy_skill",
          "dimName": "利他与公共贡献",
          "method": "创业历程培养全面能力发展；使命驱动培养超越信念和利他意愿"
        }
      ]
    }
  }
};
