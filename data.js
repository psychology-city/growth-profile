// 测评数据定义
const AssessmentData = {
    // 五大维度定义
    dimensions: {
        cognitive: {
            id: 'cognitive',
            name: '认知能力',
            icon: '🧠',
            description: '感知、理解、分析、判断外部世界的能力',
            subcategories: ['attention', 'observation', 'memory', 'thinking', 'creativity', 'learning', 'language', 'logic', 'judgment']
        },
        empathy: {
            id: 'empathy',
            name: '人际共情',
            icon: '❤️',
            description: '理解他人、建立连接、维护关系的能力',
            subcategories: ['understanding_others', 'social_perception', 'relationship', 'empathy_skill']
        },
        will: {
            id: 'will',
            name: '意志行动',
            icon: '💪',
            description: '驱动自我、克服困难、达成目标的能力',
            subcategories: ['self_control', 'goal_execution', 'resilience', 'persistence']
        },
        leadership: {
            id: 'leadership',
            name: '领导职业',
            icon: '👔',
            description: '引领团队、职业发展、创造价值的能力',
            subcategories: ['leadership_skill', 'teamwork', 'career', 'decision_making']
        },
        transcendence: {
            id: 'transcendence',
            name: '超越动力',
            icon: '🌟',
            description: '追求意义、超越自我、实现价值的能力',
            subcategories: ['meaning', 'self_transcendence', 'value_realization', 'mission', 'growth_mindset', 'spirituality']
        }
    },

    // 子类定义
    subcategories: {
        // 认知能力 - 9个子类
        attention: { id: 'attention', name: '注意力', dimension: 'cognitive', description: '集中精力、维持专注的能力' },
        observation: { id: 'observation', name: '观察力', dimension: 'cognitive', description: '发现细节、捕捉信息的能力' },
        memory: { id: 'memory', name: '记忆力', dimension: 'cognitive', description: '存储和提取信息的能力' },
        thinking: { id: 'thinking', name: '思维力', dimension: 'cognitive', description: '分析问题、形成观点的能力' },
        creativity: { id: 'creativity', name: '创造力', dimension: 'cognitive', description: '产生新想法、新方案的能力' },
        learning: { id: 'learning', name: '学习力', dimension: 'cognitive', description: '获取新知识、新技能的能力' },
        language: { id: 'language', name: '语言能力', dimension: 'cognitive', description: '理解和表达语言的能力' },
        logic: { id: 'logic', name: '逻辑推理', dimension: 'cognitive', description: '严谨思考、推理判断的能力' },
        judgment: { id: 'judgment', name: '判断力', dimension: 'cognitive', description: '做出准确决策的能力' },

        // 人际共情 - 4个子类
        understanding_others: { id: 'understanding_others', name: '理解他人', dimension: 'empathy', description: '准确把握他人想法的能力' },
        social_perception: { id: 'social_perception', name: '社会感知', dimension: 'empathy', description: '感知社会氛围的能力' },
        relationship: { id: 'relationship', name: '关系建立', dimension: 'empathy', description: '建立和维系关系的能力' },
        empathy_skill: { id: 'empathy_skill', name: '共情能力', dimension: 'empathy', description: '感受他人情绪的能力' },

        // 意志行动 - 4个子类
        self_control: { id: 'self_control', name: '自我控制', dimension: 'will', description: '管理自身行为的能力' },
        goal_execution: { id: 'goal_execution', name: '目标执行', dimension: 'will', description: '制定和达成目标的能力' },
        resilience: { id: 'resilience', name: '抗压能力', dimension: 'will', description: '应对压力和挫折的能力' },
        persistence: { id: 'persistence', name: '坚持不懈', dimension: 'will', description: '持续努力不放弃的能力' },

        // 领导职业 - 4个子类
        leadership_skill: { id: 'leadership_skill', name: '领导力', dimension: 'leadership', description: '影响和带领他人的能力' },
        teamwork: { id: 'teamwork', name: '团队协作', dimension: 'leadership', description: '与他人合作共事的能力' },
        career: { id: 'career', name: '职业发展', dimension: 'leadership', description: '规划和发展职业的能力' },
        decision_making: { id: 'decision_making', name: '决策能力', dimension: 'leadership', description: '做出明智选择的能力' },

        // 超越动力 - 6个子类
        meaning: { id: 'meaning', name: '意义追寻', dimension: 'transcendence', description: '寻找生命意义的能力' },
        self_transcendence: { id: 'self_transcendence', name: '自我超越', dimension: 'transcendence', description: '突破自我局限的能力' },
        value_realization: { id: 'value_realization', name: '价值实现', dimension: 'transcendence', description: '实现个人价值的能力' },
        mission: { id: 'mission', name: '使命感', dimension: 'transcendence', description: '感受使命召唤的能力' },
        growth_mindset: { id: 'growth_mindset', name: '成长思维', dimension: 'transcendence', description: '相信持续成长的能力' },
        spirituality: { id: 'spirituality', name: '精神追求', dimension: 'transcendence', description: '追求精神境界的力' }
    },

    // 题目数据 - 每个子类16道题
    questions: {
        // 认知能力 - 注意力
        attention: [
            { id: 1, text: '我能够在嘈杂的环境中保持专注', reverse: false },
            { id: 2, text: '长时间工作时，我容易分心走神', reverse: true },
            { id: 3, text: '我能够快速将注意力从一件事转移到另一件事', reverse: false },
            { id: 4, text: '阅读时，我经常需要重新阅读同一句话', reverse: true },
            { id: 5, text: '我能够长时间专注于一项任务而不感到疲倦', reverse: false },
            { id: 6, text: '手机通知经常会打断我的注意力', reverse: true },
            { id: 7, text: '我能够有意识地控制自己的注意力方向', reverse: false },
            { id: 8, text: '在会议上，我经常走神想别的事情', reverse: true },
            { id: 9, text: '我能够同时处理多项任务而不出错', reverse: false },
            { id: 10, text: '我发现自己经常忘记刚刚要做的事情', reverse: true },
            { id: 11, text: '我能够在压力下保持专注', reverse: false },
            { id: 12, text: '外界的声音很容易干扰我', reverse: true },
            { id: 13, text: '我能够快速进入专注状态', reverse: false },
            { id: 14, text: '我经常在对话中走神', reverse: true },
            { id: 15, text: '我能够在需要时屏蔽干扰信息', reverse: false },
            { id: 16, text: '我的注意力容易被动荡的情绪影响', reverse: true }
        ],

        // 认知能力 - 观察力
        observation: [
            { id: 1, text: '我能够注意到环境中细微的变化', reverse: false },
            { id: 2, text: '我经常忽略身边发生的事情', reverse: true },
            { id: 3, text: '我能够快速发现他人的情绪变化', reverse: false },
            { id: 4, text: '我常常错过文件中的细节错误', reverse: true },
            { id: 5, text: '我对周围环境有很强的感知能力', reverse: false },
            { id: 6, text: '我经常找不到自己放的东西', reverse: true },
            { id: 7, text: '我能够注意到别人表情中的微妙变化', reverse: false },
            { id: 8, text: '我常常注意不到房间布置的变化', reverse: true },
            { id: 9, text: '我善于发现问题的根源', reverse: false },
            { id: 10, text: '我经常忽略说明书中的细节', reverse: true },
            { id: 11, text: '我能够观察到事物的规律和模式', reverse: false },
            { id: 12, text: '我常常错过重要的细节信息', reverse: true },
            { id: 13, text: '我能够快速发现数据中的异常', reverse: false },
            { id: 14, text: '我对周围的细节不够敏感', reverse: true },
            { id: 15, text: '我善于观察他人的行为习惯', reverse: false },
            { id: 16, text: '我经常注意不到别人的新发型或新衣服', reverse: true }
        ],

        // 认知能力 - 记忆力
        memory: [
            { id: 1, text: '我能够轻松记住新认识的人的名字', reverse: false },
            { id: 2, text: '我经常忘记重要的日期和事件', reverse: true },
            { id: 3, text: '我能够记住大量的事实和信息', reverse: false },
            { id: 4, text: '我常常想不起来把东西放在哪里', reverse: true },
            { id: 5, text: '我能够准确回忆过去的经历细节', reverse: false },
            { id: 6, text: '我经常忘记别人告诉我的事情', reverse: true },
            { id: 7, text: '我善于记住数字和密码', reverse: false },
            { id: 8, text: '我常常记不起自己想说的话', reverse: true },
            { id: 9, text: '我能够记住学习过的知识很长时间', reverse: false },
            { id: 10, text: '我经常忘记自己的承诺', reverse: true },
            { id: 11, text: '我能够轻松回忆起学过的技能', reverse: false },
            { id: 12, text: '我常常忘记自己要做什么事', reverse: true },
            { id: 13, text: '我善于运用记忆技巧提高记忆效果', reverse: false },
            { id: 14, text: '我对细节的记忆力较弱', reverse: true },
            { id: 15, text: '我能够记住复杂的概念和理论', reverse: false },
            { id: 16, text: '我经常需要重复阅读才能记住内容', reverse: true }
        ],

        // 认知能力 - 思维力
        thinking: [
            { id: 1, text: '我能够从多个角度分析问题', reverse: false },
            { id: 2, text: '我经常凭直觉而不是分析做决定', reverse: true },
            { id: 3, text: '我善于将复杂问题分解为小问题', reverse: false },
            { id: 4, text: '我常常无法理清问题的脉络', reverse: true },
            { id: 5, text: '我能够快速找到问题的关键点', reverse: false },
            { id: 6, text: '我经常被问题的复杂性困扰', reverse: true },
            { id: 7, text: '我善于建立概念之间的联系', reverse: false },
            { id: 8, text: '我常常难以形成清晰的思路', reverse: true },
            { id: 9, text: '我能够系统地分析和评估问题', reverse: false },
            { id: 10, text: '我经常陷入思维的死胡同', reverse: true },
            { id: 11, text: '我善于发现问题的本质', reverse: false },
            { id: 12, text: '我常常被表面现象迷惑', reverse: true },
            { id: 13, text: '我能够清晰地表达自己的思考过程', reverse: false },
            { id: 14, text: '我经常思维混乱、没有条理', reverse: true },
            { id: 15, text: '我善于进行抽象思考', reverse: false },
            { id: 16, text: '我常常无法理解抽象的概念', reverse: true }
        ],

        // 认知能力 - 创造力
        creativity: [
            { id: 1, text: '我经常有新奇的想法和创意', reverse: false },
            { id: 2, text: '我倾向于按照传统方式做事', reverse: true },
            { id: 3, text: '我善于找到解决问题的新方法', reverse: false },
            { id: 4, text: '我很少尝试新的做事方式', reverse: true },
            { id: 5, text: '我能够将不同领域的知识融合创新', reverse: false },
            { id: 6, text: '我通常遵循既定的规则和程序', reverse: true },
            { id: 7, text: '我善于想象和构思新事物', reverse: false },
            { id: 8, text: '我很难跳出思维定势', reverse: true },
            { id: 9, text: '我能够产生大量的想法', reverse: false },
            { id: 10, text: '我很少提出创新性的建议', reverse: true },
            { id: 11, text: '我善于在现有基础上改进和创新', reverse: false },
            { id: 12, text: '我通常接受现有的解决方案', reverse: true },
            { id: 13, text: '我能够发现新的机会和可能性', reverse: false },
            { id: 14, text: '我很少质疑现有的做法', reverse: true },
            { id: 15, text: '我善于进行创造性思维活动', reverse: false },
            { id: 16, text: '我更习惯于遵循而非创造', reverse: true }
        ],

        // 认知能力 - 学习力
        learning: [
            { id: 1, text: '我能够快速掌握新的知识和技能', reverse: false },
            { id: 2, text: '学习新事物对我来说很困难', reverse: true },
            { id: 3, text: '我善于找到适合自己的学习方法', reverse: false },
            { id: 4, text: '我经常学习效率低下', reverse: true },
            { id: 5, text: '我对新知识有强烈的好奇心', reverse: false },
            { id: 6, text: '我很少主动学习新东西', reverse: true },
            { id: 7, text: '我能够将学到的东西应用到实践中', reverse: false },
            { id: 8, text: '我学完东西后很快就会忘记', reverse: true },
            { id: 9, text: '我善于利用各种资源学习', reverse: false },
            { id: 10, text: '我不知道如何有效地学习', reverse: true },
            { id: 11, text: '我能够从失败中学习并改进', reverse: false },
            { id: 12, text: '我经常重复犯同样的错误', reverse: true },
            { id: 13, text: '我善于总结和反思学习经验', reverse: false },
            { id: 14, text: '我对学习新事物缺乏兴趣', reverse: true },
            { id: 15, text: '我能够整合不同来源的知识', reverse: false },
            { id: 16, text: '我学习时经常抓不住重点', reverse: true }
        ],

        // 认知能力 - 语言能力
        language: [
            { id: 1, text: '我能够清晰准确地表达自己的想法', reverse: false },
            { id: 2, text: '我经常找不到合适的词语表达', reverse: true },
            { id: 3, text: '我善于理解和分析复杂的文本', reverse: false },
            { id: 4, text: '我在理解他人的意思时常有困难', reverse: true },
            { id: 5, text: '我能够有效地进行书面表达', reverse: false },
            { id: 6, text: '写文章对我来说是一件困难的事', reverse: true },
            { id: 7, text: '我善于倾听并理解他人的话', reverse: false },
            { id: 8, text: '我经常误解别人的意思', reverse: true },
            { id: 9, text: '我能够进行有说服力的表达', reverse: false },
            { id: 10, text: '我在公众场合讲话会感到紧张', reverse: true },
            { id: 11, text: '我善于学习和使用新的词汇', reverse: false },
            { id: 12, text: '我的词汇量比较有限', reverse: true },
            { id: 13, text: '我能够灵活运用语言进行沟通', reverse: false },
            { id: 14, text: '我在表达复杂想法时常有困难', reverse: true },
            { id: 15, text: '我善于通过语言影响他人', reverse: false },
            { id: 16, text: '我不擅长语言类的工作', reverse: true }
        ],

        // 认知能力 - 逻辑推理
        logic: [
            { id: 1, text: '我能够进行严密的逻辑推理', reverse: false },
            { id: 2, text: '我的思维常常缺乏条理', reverse: true },
            { id: 3, text: '我善于发现论证中的逻辑漏洞', reverse: false },
            { id: 4, text: '我容易被似是而非的论点说服', reverse: true },
            { id: 5, text: '我能够进行有效的因果关系分析', reverse: false },
            { id: 6, text: '我经常在推理过程中出错', reverse: true },
            { id: 7, text: '我善于从已知条件推导结论', reverse: false },
            { id: 8, text: '我很难理清复杂的关系', reverse: true },
            { id: 9, text: '我能够识别和避免逻辑谬误', reverse: false },
            { id: 10, text: '我经常做出不合逻辑的判断', reverse: true },
            { id: 11, text: '我善于进行数学和符号推理', reverse: false },
            { id: 12, text: '数学和逻辑问题让我感到困难', reverse: true },
            { id: 13, text: '我能够构建有效的论证结构', reverse: false },
            { id: 14, text: '我经常无法清晰地论证自己的观点', reverse: true },
            { id: 15, text: '我善于分析问题的内在逻辑', reverse: false },
            { id: 16, text: '我对逻辑推理不太擅长', reverse: true }
        ],

        // 认知能力 - 判断力
        judgment: [
            { id: 1, text: '我能够在复杂情况下做出准确判断', reverse: false },
            { id: 2, text: '我经常做出错误的决定', reverse: true },
            { id: 3, text: '我善于评估风险和收益', reverse: false },
            { id: 4, text: '我常常后悔自己的选择', reverse: true },
            { id: 5, text: '我能够权衡不同选择的利弊', reverse: false },
            { id: 6, text: '我经常冲动地做决定', reverse: true },
            { id: 7, text: '我善于在信息不完整时做出判断', reverse: false },
            { id: 8, text: '我在需要做决定时常常犹豫不决', reverse: true },
            { id: 9, text: '我能够预见决策的长期后果', reverse: false },
            { id: 10, text: '我经常只考虑眼前利益', reverse: true },
            { id: 11, text: '我善于识别真正重要的问题', reverse: false },
            { id: 12, text: '我经常被无关因素影响判断', reverse: true },
            { id: 13, text: '我能够客观地评价人和事', reverse: false },
            { id: 14, text: '我容易被偏见影响判断', reverse: true },
            { id: 15, text: '我善于在压力下保持清晰的判断', reverse: false },
            { id: 16, text: '我的判断经常受到情绪影响', reverse: true }
        ],

        // 人际共情 - 理解他人
        understanding_others: [
            { id: 1, text: '我能够准确理解他人的真实想法', reverse: false },
            { id: 2, text: '我经常误解别人的意图', reverse: true },
            { id: 3, text: '我善于从他人的角度思考问题', reverse: false },
            { id: 4, text: '我很难理解与自己不同的人', reverse: true },
            { id: 5, text: '我能够识别他人行为背后的动机', reverse: false },
            { id: 6, text: '我常常对他人的行为感到困惑', reverse: true },
            { id: 7, text: '我善于理解他人的处境和困难', reverse: false },
            { id: 8, text: '我经常以自我为中心考虑问题', reverse: true },
            { id: 9, text: '我能够预测他人可能的反应', reverse: false },
            { id: 10, text: '我常常无法理解他人的反应', reverse: true },
            { id: 11, text: '我善于与他人建立深层次的理解', reverse: false },
            { id: 12, text: '我在理解他人时常有障碍', reverse: true },
            { id: 13, text: '我能够察觉他人未说出口的想法', reverse: false },
            { id: 14, text: '我只理解别人明确表达的内容', reverse: true },
            { id: 15, text: '我善于理解不同背景的人', reverse: false },
            { id: 16, text: '我经常以己度人', reverse: true }
        ],

        // 人际共情 - 社会感知
        social_perception: [
            { id: 1, text: '我能够准确感知社交场合的氛围', reverse: false },
            { id: 2, text: '我经常无法理解社交暗示', reverse: true },
            { id: 3, text: '我善于解读非语言信息', reverse: false },
            { id: 4, text: '我常常察觉不到社交中的微妙信号', reverse: true },
            { id: 5, text: '我能够理解群体中的权力关系', reverse: false },
            { id: 6, text: '我经常在社交场合感到困惑', reverse: true },
            { id: 7, text: '我善于理解社交规则和潜规则', reverse: false },
            { id: 8, text: '我常常不明白为什么别人那样反应', reverse: true },
            { id: 9, text: '我能够适应不同的社交环境', reverse: false },
            { id: 10, text: '我在社交中常常感到格格不入', reverse: true },
            { id: 11, text: '我善于理解他人的社会地位和角色', reverse: false },
            { id: 12, text: '我经常忽视社交中的微妙动态', reverse: true },
            { id: 13, text: '我能够感知他人的社交意图', reverse: false },
            { id: 14, text: '我经常误解他人的社交行为', reverse: true },
            { id: 15, text: '我善于理解社交中的角色期望', reverse: false },
            { id: 16, text: '我对社交规则不够敏感', reverse: true }
        ],

        // 人际共情 - 关系建立
        relationship: [
            { id: 1, text: '我善于与他人建立良好的关系', reverse: false },
            { id: 2, text: '我很难与人建立深层次的联系', reverse: true },
            { id: 3, text: '我能够维护长期的友谊和关系', reverse: false },
            { id: 4, text: '我的人际关系经常变得疏远', reverse: true },
            { id: 5, text: '我善于化解人际冲突', reverse: false },
            { id: 6, text: '我经常陷入人际矛盾中', reverse: true },
            { id: 7, text: '我能够与不同类型的人相处融洽', reverse: false },
            { id: 8, text: '我很难与某些人建立关系', reverse: true },
            { id: 9, text: '我善于在关系中表达关心和支持', reverse: false },
            { id: 10, text: '我经常忽视关系中的维护工作', reverse: true },
            { id: 11, text: '我能够在关系中保持适当的界限', reverse: false },
            { id: 12, text: '我在关系中经常过于付出或过于退缩', reverse: true },
            { id: 13, text: '我善于在关系中建立信任', reverse: false },
            { id: 14, text: '我在关系中常常缺乏安全感', reverse: true },
            { id: 15, text: '我能够处理关系中的复杂情感', reverse: false },
            { id: 16, text: '我经常在关系中感到困惑和无力', reverse: true }
        ],

        // 人际共情 - 共情能力
        empathy_skill: [
            { id: 1, text: '我能够感受到他人的情绪', reverse: false },
            { id: 2, text: '我很难理解他人的情感体验', reverse: true },
            { id: 3, text: '我善于对他人的痛苦表示同情', reverse: false },
            { id: 4, text: '我经常对他人的感受无动于衷', reverse: true },
            { id: 5, text: '我能够在情感上与他人共鸣', reverse: false },
            { id: 6, text: '我很难被他人的情绪感染', reverse: true },
            { id: 7, text: '我善于安慰和支持他人', reverse: false },
            { id: 8, text: '我不知道如何回应他人的情绪', reverse: true },
            { id: 9, text: '我能够理解他人行为背后的情感需求', reverse: false },
            { id: 10, text: '我经常忽视他人的情感需求', reverse: true },
            { id: 11, text: '我善于识别他人的情绪变化', reverse: false },
            { id: 12, text: '我对他人的情绪不够敏感', reverse: true },
            { id: 13, text: '我能够在他人需要时提供情感支持', reverse: false },
            { id: 14, text: '我在他人难过时常常不知所措', reverse: true },
            { id: 15, text: '我善于从情感角度理解他人', reverse: false },
            { id: 16, text: '我更习惯于理性分析而非情感理解', reverse: true }
        ],

        // 意志行动 - 自我控制
        self_control: [
            { id: 1, text: '我能够控制自己的冲动行为', reverse: false },
            { id: 2, text: '我经常冲动地做决定', reverse: true },
            { id: 3, text: '我能够抵制即时的诱惑', reverse: false },
            { id: 4, text: '我常常无法控制自己的欲望', reverse: true },
            { id: 5, text: '我能够管理自己的情绪反应', reverse: false },
            { id: 6, text: '我经常因为情绪而做出后悔的事', reverse: true },
            { id: 7, text: '我能够坚持自己的计划和时间表', reverse: false },
            { id: 8, text: '我经常拖延重要的事情', reverse: true },
            { id: 9, text: '我能够在压力下保持冷静', reverse: false },
            { id: 10, text: '我在压力下经常失去控制', reverse: true },
            { id: 11, text: '我能够控制自己的注意力和专注', reverse: false },
            { id: 12, text: '我经常分心走神', reverse: true },
            { id: 13, text: '我能够延迟满足以获得更大的回报', reverse: false },
            { id: 14, text: '我总是想要即时满足', reverse: true },
            { id: 15, text: '我能够在困难面前控制放弃的冲动', reverse: false },
            { id: 16, text: '我经常因为困难而放弃', reverse: true }
        ],

        // 意志行动 - 目标执行
        goal_execution: [
            { id: 1, text: '我善于制定清晰的目标', reverse: false },
            { id: 2, text: '我经常没有明确的目标', reverse: true },
            { id: 3, text: '我能够将目标分解为可执行的步骤', reverse: false },
            { id: 4, text: '我的目标常常过于笼统', reverse: true },
            { id: 5, text: '我能够坚持执行自己的计划', reverse: false },
            { id: 6, text: '我经常无法完成开始的任务', reverse: true },
            { id: 7, text: '我善于追踪目标的进展', reverse: false },
            { id: 8, text: '我经常忘记自己的目标', reverse: true },
            { id: 9, text: '我能够在遇到障碍时调整策略', reverse: false },
            { id: 10, text: '遇到困难时我经常放弃目标', reverse: true },
            { id: 11, text: '我能够优先处理重要的目标', reverse: false },
            { id: 12, text: '我经常被次要事务分散注意力', reverse: true },
            { id: 13, text: '我善于设定合理的时间框架', reverse: false },
            { id: 14, text: '我的目标经常没有时限', reverse: true },
            { id: 15, text: '我能够持续推进长期目标', reverse: false },
            { id: 16, text: '我经常开始新目标却无法坚持', reverse: true }
        ],

        // 意志行动 - 抗压能力
        resilience: [
            { id: 1, text: '我能够在压力下保持良好表现', reverse: false },
            { id: 2, text: '压力会严重影响我的工作', reverse: true },
            { id: 3, text: '我能够从挫折中快速恢复', reverse: false },
            { id: 4, text: '失败会让我长时间消沉', reverse: true },
            { id: 5, text: '我善于应对突发的困难', reverse: false },
            { id: 6, text: '突发事件会让我手足无措', reverse: true },
            { id: 7, text: '我能够在逆境中找到机会', reverse: false },
            { id: 8, text: '困难常常让我感到绝望', reverse: true },
            { id: 9, text: '我能够保持积极的心态面对困难', reverse: false },
            { id: 10, text: '压力会让我变得消极', reverse: true },
            { id: 11, text: '我善于从失败中学习和成长', reverse: false },
            { id: 12, text: '挫折后我常常一蹶不振', reverse: true },
            { id: 13, text: '我能够有效管理压力和焦虑', reverse: false },
            { id: 14, text: '我经常感到被压力压垮', reverse: true },
            { id: 15, text: '我能够在困难时期保持希望', reverse: false },
            { id: 16, text: '我常常对未来感到悲观', reverse: true }
        ],

        // 意志行动 - 坚持不懈
        persistence: [
            { id: 1, text: '我能够长期坚持一件事', reverse: false },
            { id: 2, text: '我经常三分钟热度', reverse: true },
            { id: 3, text: '我能够克服困难继续前进', reverse: false },
            { id: 4, text: '遇到困难我容易放弃', reverse: true },
            { id: 5, text: '我能够保持对长期目标的热情', reverse: false },
            { id: 6, text: '我对事物的热情很快消退', reverse: true },
            { id: 7, text: '我能够在看不到成果时继续努力', reverse: false },
            { id: 8, text: '没有即时反馈我就容易放弃', reverse: true },
            { id: 9, text: '我善于培养和保持习惯', reverse: false },
            { id: 10, text: '我经常无法坚持养成的习惯', reverse: true },
            { id: 11, text: '我能够忍受过程中的枯燥', reverse: false },
            { id: 12, text: '我很容易对重复的事情感到厌倦', reverse: true },
            { id: 13, text: '我能够持续改进自己的弱点', reverse: false },
            { id: 14, text: '我经常放弃那些困难的事情', reverse: true },
            { id: 15, text: '我能够在失败后重新尝试', reverse: false },
            { id: 16, text: '一次失败就会让我放弃', reverse: true }
        ],

        // 领导职业 - 领导力
        leadership_skill: [
            { id: 1, text: '我能够激励和影响他人', reverse: false },
            { id: 2, text: '我很难让他人追随我的想法', reverse: true },
            { id: 3, text: '我善于设定团队的方向和愿景', reverse: false },
            { id: 4, text: '我经常不知道如何带领团队', reverse: true },
            { id: 5, text: '我能够有效地分配任务和资源', reverse: false },
            { id: 6, text: '我在管理他人时常感到困难', reverse: true },
            { id: 7, text: '我善于培养和发展团队成员', reverse: false },
            { id: 8, text: '我不知道如何帮助他人成长', reverse: true },
            { id: 9, text: '我能够在危机时刻做出果断决策', reverse: false },
            { id: 10, text: '在关键时刻我常常犹豫不决', reverse: true },
            { id: 11, text: '我善于激发团队的创造力', reverse: false },
            { id: 12, text: '我很难调动团队的积极性', reverse: true },
            { id: 13, text: '我能够建立高绩效的团队文化', reverse: false },
            { id: 14, text: '团队氛围经常存在问题', reverse: true },
            { id: 15, text: '我善于处理团队中的冲突', reverse: false },
            { id: 16, text: '团队矛盾经常让我不知所措', reverse: true }
        ],

        // 领导职业 - 团队协作
        teamwork: [
            { id: 1, text: '我善于与他人合作完成任务', reverse: false },
            { id: 2, text: '我更喜欢独自工作', reverse: true },
            { id: 3, text: '我能够在团队中发挥积极作用', reverse: false },
            { id: 4, text: '我在团队中常常被动等待', reverse: true },
            { id: 5, text: '我善于与不同风格的人合作', reverse: false },
            { id: 6, text: '我经常与某些人合作困难', reverse: true },
            { id: 7, text: '我能够为团队目标牺牲个人利益', reverse: false },
            { id: 8, text: '我经常优先考虑个人而非团队', reverse: true },
            { id: 9, text: '我善于在团队中沟通和协调', reverse: false },
            { id: 10, text: '我在团队沟通中常有问题', reverse: true },
            { id: 11, text: '我能够信任和依赖团队成员', reverse: false },
            { id: 12, text: '我很难信任他人完成工作', reverse: true },
            { id: 13, text: '我善于在团队中分享知识和经验', reverse: false },
            { id: 14, text: '我经常保守信息不愿分享', reverse: true },
            { id: 15, text: '我能够适应不同的团队角色', reverse: false },
            { id: 16, text: '我只喜欢特定的团队角色', reverse: true }
        ],

        // 领导职业 - 职业发展
        career: [
            { id: 1, text: '我有清晰的职业发展规划', reverse: false },
            { id: 2, text: '我对职业方向感到迷茫', reverse: true },
            { id: 3, text: '我善于把握职业发展的机会', reverse: false },
            { id: 4, text: '我经常错过职业机会', reverse: true },
            { id: 5, text: '我能够持续提升自己的职业能力', reverse: false },
            { id: 6, text: '我对提升职业能力缺乏动力', reverse: true },
            { id: 7, text: '我善于建立职业人际网络', reverse: false },
            { id: 8, text: '我在职业社交方面较弱', reverse: true },
            { id: 9, text: '我能够适应职场的变化', reverse: false },
            { id: 10, text: '职场变化让我感到不安', reverse: true },
            { id: 11, text: '我善于展示自己的价值和能力', reverse: false },
            { id: 12, text: '我不善于推销自己', reverse: true },
            { id: 13, text: '我能够平衡工作和生活', reverse: false },
            { id: 14, text: '我的工作生活经常失衡', reverse: true },
            { id: 15, text: '我对自己的职业前景感到乐观', reverse: false },
            { id: 16, text: '我对职业发展感到悲观', reverse: true }
        ],

        // 领导职业 - 决策能力
        decision_making: [
            { id: 1, text: '我能够在复杂情况下做出明智决策', reverse: false },
            { id: 2, text: '我经常做出糟糕的决定', reverse: true },
            { id: 3, text: '我善于收集和分析决策所需的信息', reverse: false },
            { id: 4, text: '我经常在信息不足的情况下决策', reverse: true },
            { id: 5, text: '我能够在时间压力下做出决策', reverse: false },
            { id: 6, text: '紧急情况下我常常无法决策', reverse: true },
            { id: 7, text: '我善于权衡不同选择的利弊', reverse: false },
            { id: 8, text: '我经常无法做出选择', reverse: true },
            { id: 9, text: '我能够为自己的决策承担责任', reverse: false },
            { id: 10, text: '我经常后悔或逃避自己的决策', reverse: true },
            { id: 11, text: '我善于预见决策的后果', reverse: false },
            { id: 12, text: '我的决策经常带来意外后果', reverse: true },
            { id: 13, text: '我能够在需要时果断行动', reverse: false },
            { id: 14, text: '我经常因为犹豫而错过时机', reverse: true },
            { id: 15, text: '我善于从决策错误中学习', reverse: false },
            { id: 16, text: '我经常重复犯同样的决策错误', reverse: true }
        ],

        // 超越动力 - 意义追寻
        meaning: [
            { id: 1, text: '我对人生的意义有清晰的认识', reverse: false },
            { id: 2, text: '我经常怀疑生活是否有意义', reverse: true },
            { id: 3, text: '我能够从日常活动中发现意义', reverse: false },
            { id: 4, text: '我的生活常常感到空虚', reverse: true },
            { id: 5, text: '我善于将个人经历转化为有意义的经验', reverse: false },
            { id: 6, text: '我很难理解经历对我的意义', reverse: true },
            { id: 7, text: '我能够为自己的生活设定有意义的目标', reverse: false },
            { id: 8, text: '我经常感到生活缺乏方向', reverse: true },
            { id: 9, text: '我善于在困难中找到成长的意义', reverse: false },
            { id: 10, text: '困难常常让我质疑生活的意义', reverse: true },
            { id: 11, text: '我能够将工作与更大的意义联系起来', reverse: false },
            { id: 12, text: '我的工作常常让我感到毫无意义', reverse: true },
            { id: 13, text: '我善于帮助他人发现生活的意义', reverse: false },
            { id: 14, text: '我不知道如何回答关于意义的问题', reverse: true },
            { id: 15, text: '我对自己的价值观有清晰的认知', reverse: false },
            { id: 16, text: '我经常不确定什么对我真正重要', reverse: true }
        ],

        // 超越动力 - 自我超越
        self_transcendence: [
            { id: 1, text: '我能够超越个人利益关心更大的集体', reverse: false },
            { id: 2, text: '我主要关注个人的得失', reverse: true },
            { id: 3, text: '我善于突破自我的局限', reverse: false },
            { id: 4, text: '我经常被自己的偏见和限制束缚', reverse: true },
            { id: 5, text: '我能够为了更高的目标牺牲个人利益', reverse: false },
            { id: 6, text: '我很难做出牺牲个人利益的决定', reverse: true },
            { id: 7, text: '我善于超越自己的舒适区', reverse: false },
            { id: 8, text: '我经常待在舒适区不愿离开', reverse: true },
            { id: 9, text: '我能够放下对自我的执着', reverse: false },
            { id: 10, text: '我经常过于关注自我', reverse: true },
            { id: 11, text: '我善于从更广阔的视角看待事物', reverse: false },
            { id: 12, text: '我的视角常常局限于个人经验', reverse: true },
            { id: 13, text: '我能够接受并超越自己的不完美', reverse: false },
            { id: 14, text: '我经常被自己的不完美困扰', reverse: true },
            { id: 15, text: '我善于超越物质的追求', reverse: false },
            { id: 16, text: '我经常被物质欲望所驱动', reverse: true }
        ],

        // 超越动力 - 价值实现
        value_realization: [
            { id: 1, text: '我能够将个人价值转化为现实', reverse: false },
            { id: 2, text: '我经常感到无法实现自己的价值', reverse: true },
            { id: 3, text: '我善于发现和发展自己的独特才能', reverse: false },
            { id: 4, text: '我常常不知道自己的独特价值', reverse: true },
            { id: 5, text: '我能够创造对他人有价值的东西', reverse: false },
            { id: 6, text: '我很难做出有价值的贡献', reverse: true },
            { id: 7, text: '我善于把握实现价值的机会', reverse: false },
            { id: 8, text: '我经常错过实现价值的机会', reverse: true },
            { id: 9, text: '我能够坚持自己的价值观', reverse: false },
            { id: 10, text: '我经常在压力下妥协自己的价值观', reverse: true },
            { id: 11, text: '我善于将自己的价值转化为服务他人', reverse: false },
            { id: 12, text: '我不知道如何用自己的价值帮助他人', reverse: true },
            { id: 13, text: '我能够持续创造价值', reverse: false },
            { id: 14, text: '我经常感到自己的贡献微不足道', reverse: true },
            { id: 15, text: '我善于实现自己设定的目标', reverse: false },
            { id: 16, text: '我的目标常常无法实现', reverse: true }
        ],

        // 超越动力 - 使命感
        mission: [
            { id: 1, text: '我对自己的使命有清晰的认识', reverse: false },
            { id: 2, text: '我经常感到生活缺乏使命', reverse: true },
            { id: 3, text: '我能够感受到强烈的使命召唤', reverse: false },
            { id: 4, text: '我很难确定自己的人生使命', reverse: true },
            { id: 5, text: '我善于将日常行动与使命联系起来', reverse: false },
            { id: 6, text: '我的日常生活常常与使命脱节', reverse: true },
            { id: 7, text: '我能够为了使命不懈努力', reverse: false },
            { id: 8, text: '我经常放弃对使命的追求', reverse: true },
            { id: 9, text: '我善于帮助他人找到他们的使命', reverse: false },
            { id: 10, text: '我不知道如何帮助他人发现使命', reverse: true },
            { id: 11, text: '我能够在使命中找到持久的动力', reverse: false },
            { id: 12, text: '我经常感到动力不足', reverse: true },
            { id: 13, text: '我善于将个人使命与更大的目标结合', reverse: false },
            { id: 14, text: '我的使命常常显得狭隘', reverse: true },
            { id: 15, text: '我能够忠于自己的使命', reverse: false },
            { id: 16, text: '我经常偏离自己的使命', reverse: true }
        ],

        // 超越动力 - 成长思维
        growth_mindset: [
            { id: 1, text: '我相信自己能够不断成长和进步', reverse: false },
            { id: 2, text: '我认为能力是固定不变的', reverse: true },
            { id: 3, text: '我将挑战视为成长的机会', reverse: false },
            { id: 4, text: '我经常回避可能失败的挑战', reverse: true },
            { id: 5, text: '我善于从批评中学习', reverse: false },
            { id: 6, text: '我常常因批评而感到挫败', reverse: true },
            { id: 7, text: '我相信努力能够改变能力', reverse: false },
            { id: 8, text: '我认为努力无法弥补天赋的不足', reverse: true },
            { id: 9, text: '我能够从他人的成功中学习', reverse: false },
            { id: 10, text: '他人的成功经常让我感到威胁', reverse: true },
            { id: 11, text: '我善于在失败中找到学习的价值', reverse: false },
            { id: 12, text: '失败经常让我怀疑自己的能力', reverse: true },
            { id: 13, text: '我相信持续学习的重要性', reverse: false },
            { id: 14, text: '我经常认为自己已经学够了', reverse: true },
            { id: 15, text: '我能够保持对新事物的好奇心', reverse: false },
            { id: 16, text: '我对新事物常常缺乏兴趣', reverse: true }
        ],

        // 超越动力 - 精神追求
        spirituality: [
            { id: 1, text: '我有超越物质层面的精神追求', reverse: false },
            { id: 2, text: '我主要关注物质和现实层面的生活', reverse: true },
            { id: 3, text: '我能够体验到超越自我的精神感受', reverse: false },
            { id: 4, text: '我很少体验到精神的满足感', reverse: true },
            { id: 5, text: '我善于通过冥想、反思等方式提升精神境界', reverse: false },
            { id: 6, text: '我没有提升精神境界的方法', reverse: true },
            { id: 7, text: '我能够感受到与更大整体的连接', reverse: false },
            { id: 8, text: '我经常感到孤独和分离', reverse: true },
            { id: 9, text: '我善于在自然和艺术中体验精神的美', reverse: false },
            { id: 10, text: '我很少被美的事物感动', reverse: true },
            { id: 11, text: '我能够追求超越自我的更高目标', reverse: false },
            { id: 12, text: '我的目标主要服务于个人利益', reverse: true },
            { id: 13, text: '我善于在日常生活中保持精神觉醒', reverse: false },
            { id: 14, text: '我的精神生活经常被世俗事务淹没', reverse: true },
            { id: 15, text: '我能够接受生命中无法解释的奥秘', reverse: false },
            { id: 16, text: '我经常因为未知而感到不安', reverse: true }
        ]
    },

    // 结果解读 - 基于五大维度理论的具体成长建议
    interpretations: {
        // ========== 认知能力维度 ==========
        cognitive: {
            high: {
                title: '🌟 认知能力优势',
                summary: '你在认知维度表现优秀，具备强大的学习、思考和问题解决能力。',
                analysis: '你善于分析复杂问题，快速掌握新知识，能够做出准确判断。你的思维灵活，能够从多角度思考问题。',
                advice: [
                    { title: '保持优势', content: '继续在需要深度思考的领域挑战自己，如复杂问题解决、创新项目等' },
                    { title: '跨界拓展', content: '可以将认知优势迁移到新领域，尝试跨学科学习和创新' },
                    { title: '分享经验', content: '你的思维方法值得总结，可以整理成方法论分享给他人' }
                ]
            },
            medium: {
                title: '📈 认知能力良好',
                summary: '你的认知能力处于中等水平，在学习和思考方面有良好基础。',
                analysis: '你具备基本的分析和学习能力，但在深度和广度上还有提升空间。',
                advice: [
                    { title: '刻意练习', content: '每天留出30分钟进行深度阅读或复杂问题思考训练' },
                    { title: '建立框架', content: '尝试搭建个人知识体系，将所学知识结构化' },
                    { title: '多元学习', content: '涉猎不同领域的知识，培养跨界思维能力' }
                ]
            },
            low: {
                title: '💪 认知能力提升空间',
                summary: '你的认知能力有较大提升空间，建议从基础开始系统训练。',
                analysis: '你可能在专注、记忆或思维方面遇到挑战，这是正常的起步阶段。',
                advice: [
                    { title: '番茄工作法', content: '从"专注25分钟+休息5分钟"开始，每周增加5分钟专注时长' },
                    { title: '每日复盘', content: '每天花5分钟反思：今天学到了什么？有什么可以改进？' },
                    { title: '小目标起步', content: '先从简单的小目标开始，逐步建立认知自信' }
                ]
            }
        },

        // ========== 人际共情维度 ==========
        empathy: {
            high: {
                title: '🌟 人际共情优势',
                summary: '你的人际共情能力很强，能够准确理解他人的想法和感受。',
                analysis: '你善于在社交场合中感知氛围，与他人建立信任和连接。你能够察觉他人情绪变化，并做出恰当回应。',
                advice: [
                    { title: '发挥优势', content: '在需要协调、调解的场合发挥你的共情能力，如团队管理、客户服务' },
                    { title: '设定边界', content: '共情能力强但要注意保护自己，避免过度卷入他人情绪' },
                    { title: '深度连接', content: '珍惜并维护好你的核心人际关系，这是宝贵的社会资本' }
                ]
            },
            medium: {
                title: '📈 人际共情良好',
                summary: '你的人际共情能力适中，能够与他人建立基本的关系。',
                analysis: '你具备基本的社交能力，但在深度理解和灵活应对上还有提升空间。',
                advice: [
                    { title: '主动倾听', content: '在对话中多练习"先理解再回应"，不要急于表达自己的观点' },
                    { title: '换位思考', content: '遇到分歧时，尝试先站在对方角度想3秒钟' },
                    { title: '情绪观察', content: '每天注意观察身边人的情绪变化，猜测原因并验证' }
                ]
            },
            low: {
                title: '💪 人际共情提升空间',
                summary: '你的人际共情能力需要加强，可能在理解他人或建立关系方面存在困难。',
                analysis: '你可能更关注自己的想法，较少注意到他人的情绪和需求。这是可以训练的。',
                advice: [
                    { title: '每日观察练习', content: '每天花5分钟观察1个人的情绪状态，记录判断依据，晚上可以验证' },
                    { title: '非原则问题放过', content: '遇到摩擦时，先判断是否是原则问题，不是的话练习"放过"' },
                    { title: '主动搭话', content: '每周尝试和陌生人进行1次简短对话，降低社交恐惧' }
                ]
            }
        },

        // ========== 意志行动维度 ==========
        will: {
            high: {
                title: '🌟 意志行动优势',
                summary: '你的意志行动能力突出，具备强大的自我控制和目标执行能力。',
                analysis: '你能够在压力下保持冷静，坚持追求目标，从挫折中快速恢复。你有强大的内驱力。',
                advice: [
                    { title: '挑战更高目标', content: '你的执行力很强，是时候设定更具挑战性的长期目标了' },
                    { title: '避免过度紧绷', content: '意志力强的人容易过度压榨自己，注意适当休息和放松' },
                    { title: '授权与协作', content: '尝试把一些任务交给他人，培养团队协作能力' }
                ]
            },
            medium: {
                title: '📈 意志行动良好',
                summary: '你的意志行动能力处于平均水平，有一定的基础。',
                analysis: '你能够完成基本的目标，但在持续性和抗压能力上还有提升空间。',
                advice: [
                    { title: '明确目标', content: '将大目标拆解为可执行的小目标，每天完成1个小目标' },
                    { title: '建立习惯', content: '把重要的事情变成固定习惯，减少意志力消耗' },
                    { title: '及时奖励', content: '完成目标后给自己小奖励，建立"完成=快乐"的条件反射' }
                ]
            },
            low: {
                title: '💪 意志行动提升空间',
                summary: '你的意志行动能力有待提升，可能在自我控制或坚持目标方面遇到挑战。',
                analysis: '你可能更容易拖延或放弃，这是正常的，关键是找到适合自己的启动方式。',
                advice: [
                    { title: '微目标起步', content: '每天只定1个10分钟就能完成的微目标，完成后给自己小奖励' },
                    { title: '障碍预演', content: '执行前先想好可能遇到的3个障碍和应对方案' },
                    { title: '环境设计', content: '减少干扰源：工作时把手机放到看不见的地方' }
                ]
            }
        },

        // ========== 领导职业维度 ==========
        leadership: {
            high: {
                title: '🌟 领导职业优势',
                summary: '你在领导职业方面展现出优秀的才能，能够有效影响他人。',
                analysis: '你善于做出决策，推动职业发展，在团队中发挥重要作用。你有较强的影响力和组织能力。',
                advice: [
                    { title: '承担更大责任', content: '你的领导力很强，是时候争取更具挑战性的管理岗位了' },
                    { title: '培养下一代', content: '尝试指导和培养新人，这会放大你的影响力' },
                    { title: '战略思维', content: '从执行层面上升到战略层面，为组织创造更大价值' }
                ]
            },
            medium: {
                title: '📈 领导职业良好',
                summary: '你在领导职业方面有一定潜力，具备基本的领导和团队协作能力。',
                analysis: '你能够在团队中发挥作用，但影响力和领导自信还有提升空间。',
                advice: [
                    { title: '主动争取机会', content: '在团队项目中主动承担协调者的角色' },
                    { title: '学习领导技能', content: '阅读领导力书籍，或找到导师学习领导方法' },
                    { title: '从小事做起', content: '先在小事上练习领导和影响，逐步建立自信' }
                ]
            },
            low: {
                title: '💪 领导职业发展空间',
                summary: '你在领导职业方面有发展空间，可以更多参与团队活动。',
                analysis: '你可能更倾向于独立工作，对领导角色感到陌生或不自信。',
                advice: [
                    { title: '协作意识', content: '在团队中主动发言、表达观点，逐步建立影响力' },
                    { title: '技能储备', content: '学习项目管理、团队协作等基础技能' },
                    { title: '从小团队开始', content: '先在小组中尝试协调角色，不要急于进入管理层' }
                ]
            }
        },

        // ========== 超越动力维度 ==========
        transcendence: {
            high: {
                title: '🌟 超越动力优势',
                summary: '你的超越动力强烈，对生命意义有深刻理解。',
                analysis: '你有强烈的使命感，相信持续成长，在精神层面有所追求。你不甘于平凡，渴望自我超越。',
                advice: [
                    { title: '意义转化为行动', content: '把你的使命感转化为具体的社会贡献，而不仅是个人成长' },
                    { title: '避免过度焦虑', content: '成长型的人容易总觉得自己不够好，学会欣赏自己的进步' },
                    { title: '帮助他人成长', content: '你的成长动力可以带动身边的人，形成正向影响' }
                ]
            },
            medium: {
                title: '📈 超越动力良好',
                summary: '你的超越动力适中，对生命意义和个人价值有一定认识。',
                analysis: '你在自我成长方面有一定意识，但动力不够持续或强烈。',
                advice: [
                    { title: '探索意义', content: '多尝试不同的事物，找到真正让你感到热情和意义的方向' },
                    { title: '设定成长目标', content: '每季度设定1个个人成长目标，而不是只有工作目标' },
                    { title: '记录成长', content: '写成长日记，记录自己的变化和进步' }
                ]
            },
            low: {
                title: '💪 超越动力发展空间',
                summary: '你的超越动力相对较弱，可能对生命意义感到迷茫。',
                analysis: '你可能更关注当下享受，对长期意义和成长没有强烈的追求。',
                advice: [
                    { title: '微好奇起步', content: '每周研究1个完全没用但你感兴趣的小问题，不需要产出' },
                    { title: '寻找榜样', content: '找到你佩服的人，了解他们的人生追求和价值观' },
                    { title: '尝试新事物', content: '每月尝试1件从未做过的事，拓展生命的可能性' }
                ]
            }
        }
    },

    // 子维度详细建议 - 基于桌面量表的具体可操作建议
    subcategoryAdvice: {
        // ========== 认知子类 ==========
        attention: {
            high: { title: '注意力卓越', content: '你的专注力很强，是时候挑战需要长时间深度思考的高难度任务了。' },
            medium: { title: '注意力良好', content: '你具备基本的专注能力，但可以尝试更长的专注时长来提升。' },
            low: { 
                title: '注意力待提升', 
                content: '建议使用"番茄工作法"：专注25分钟+休息5分钟，逐步增加时长。',
                practice: '每天设置3个25分钟的专注时段，专注时把手机放到另一个房间'
            }
        },
        observation: {
            high: { title: '观察力敏锐', content: '你善于发现细节和机会，可以尝试需要洞察力的工作。' },
            medium: { title: '观察力良好', content: '你能注意到明显的变化，但可以加强对细节的关注。' },
            low: { 
                title: '观察力待提升', 
                content: '练习"5Why追问法"：对任何现象连续问5个为什么，挖掘本质。',
                practice: '每天选1个场景进行深度观察，记录至少5个细节'
            }
        },
        memory: {
            high: { title: '记忆力出色', content: '你的记忆能力很强，善于存储和提取信息。' },
            medium: { title: '记忆力良好', content: '你能够记住重要信息，但可以改进记忆方法。' },
            low: { 
                title: '记忆力待提升', 
                content: '尝试"记忆宫殿法"和"联想记忆法"，将新信息与已有知识关联。',
                practice: '学习新知识时，尝试用已有的知识来解释和记忆'
            }
        },
        thinking: {
            high: { title: '思维力优秀', content: '你善于分析问题，能够从多角度思考并形成观点。' },
            medium: { title: '思维力良好', content: '你具备基本的问题分析能力，但可以加强深度。' },
            low: { 
                title: '思维力待提升', 
                content: '练习"每周反向思考"：对任何观点，尝试从相反角度思考。',
                practice: '每周选1个大众观点，写下3个反驳的理由'
            }
        },
        creativity: {
            high: { title: '创造力卓越', content: '你善于产生新想法，是创新项目的理想人选。' },
            medium: { title: '创造力良好', content: '你有一定创造力，但可能受限于现有框架。' },
            low: { 
                title: '创造力待提升', 
                content: '准备一个灵感本，记录任何奇怪的想法，不许评判"没用"。',
                practice: '每周记录至少3个奇怪想法，每周翻看寻找可落地的小方向'
            }
        },
        learning: {
            high: { title: '学习力出色', content: '你学习能力很强，能够快速掌握新知识新技能。' },
            medium: { title: '学习力良好', content: '你能学习新东西，但可以更主动和深入。' },
            low: { 
                title: '学习力待提升', 
                content: '每周花1小时研究完全没用但感兴趣的问题，不求产出。',
                practice: '兴趣是最好的老师，从感兴趣的小问题开始'
            }
        },
        language: {
            high: { title: '语言能力优秀', content: '你语言表达能力很强，善于理解和传递信息。' },
            medium: { title: '语言能力良好', content: '你能进行基本的语言表达，但可以更精炼。' },
            low: { 
                title: '语言能力待提升', 
                content: '每天写100字日记，练习表达；尝试向朋友解释一个概念。',
                practice: '用简单的话解释复杂的事情，是检验理解力的好方法'
            }
        },
        logic: {
            high: { title: '逻辑推理优秀', content: '你善于严谨思考，能够进行复杂的逻辑推理。' },
            medium: { title: '逻辑推理良好', content: '你有一定逻辑性，但可以加强推理训练。' },
            low: { 
                title: '逻辑推理待提升', 
                content: '玩数独、棋类游戏，或学习编程，训练逻辑思维。',
                practice: '做任何判断前，先列出3个理由支持你的结论'
            }
        },
        judgment: {
            high: { title: '判断力出色', content: '你善于做出准确判断，能够快速权衡利弊。' },
            medium: { title: '判断力良好', content: '你能做出基本判断，但信息充分时更准确。' },
            low: { 
                title: '判断力待提升', 
                content: '做判断前收集至少3个不同来源的信息再做决定。',
                practice: '重大决定前，列出利弊清单，用数据而非感觉做决定'
            }
        },

        // ========== 人际共情子类 ==========
        understanding_others: {
            high: { title: '理解他人能力强', content: '你能准确把握他人想法，是天然的协调者。' },
            medium: { title: '理解能力良好', content: '你能理解他人的基本想法，但可能忽略深层需求。' },
            low: { 
                title: '理解能力待提升', 
                content: '听别人说话时，先复述一遍你理解的意思再回应。',
                practice: '每周和1个人深度对话，尝试理解他的经历和想法'
            }
        },
        social_perception: {
            high: { title: '社会感知敏锐', content: '你能感知社会氛围变化，善于应对不同场合。' },
            medium: { title: '社会感知良好', content: '你对明显的气氛变化有感知，但细节把握不足。' },
            low: { 
                title: '社会感知待提升', 
                content: '参加社交场合后，复盘自己说了什么、别人反应如何。',
                practice: '看电视剧时，注意观察人物微表情和氛围变化'
            }
        },
        relationship: {
            high: { title: '关系建立能力优秀', content: '你善于建立和维护人际关系，人脉广泛。' },
            medium: { title: '关系建立能力良好', content: '你能建立关系，但可能不擅长长期维护。' },
            low: { 
                title: '关系建立能力待提升', 
                content: '使用"三级关系维护法"：核心层每月联系、重要层每季度、点赞之交随手互动。',
                practice: '主动给老朋友发消息，哪怕只是一句"最近好吗"'
            }
        },
        empathy_skill: {
            high: { title: '共情能力出色', content: '你能够深度感受他人情绪，是很好的倾诉对象。' },
            medium: { title: '共情能力良好', content: '你能感受到他人情绪，但可能不知道如何回应。' },
            low: { 
                title: '共情能力待提升', 
                content: '感受到他人情绪时，先问自己3个问题：他怎么了？我能做什么？我需要介入吗？',
                practice: '别人倾诉时，先倾听再给建议，不要急于"解决问题"'
            }
        },

        // ========== 意志行动子类 ==========
        self_control: {
            high: { title: '自我控制力优秀', content: '你能够有效管理自己的行为和情绪。' },
            medium: { title: '自我控制力良好', content: '你有一定自控力，但面对诱惑时可能动摇。' },
            low: { 
                title: '自我控制力待提升', 
                content: '减少诱惑暴露：工作时手机静音、卸载娱乐APP、换个环境。',
                practice: '面对诱惑时，先等10分钟再做决定'
            }
        },
        goal_execution: {
            high: { title: '目标执行力卓越', content: '你善于制定目标并坚持执行，是行动派。' },
            medium: { title: '目标执行力良好', content: '你能完成基本目标，但可能缺乏长期规划。' },
            low: { 
                title: '目标执行力待提升', 
                content: '使用"目标拆解法"：大目标拆成每周小目标，每天只完成1个小目标。',
                practice: '每天早上花5分钟列出当天3个最重要的待办事项'
            }
        },
        resilience: {
            high: { title: '抗压能力出色', content: '你能在压力下保持冷静，快速从挫折中恢复。' },
            medium: { title: '抗压能力良好', content: '你能应对一般压力，但重大挫折可能受影响。' },
            low: { 
                title: '抗压能力待提升', 
                content: '建立"压力应对工具箱"：运动、冥想、倾诉、写日记等。',
                practice: '遇到挫折时，先问自己：三年后这件事还重要吗？'
            }
        },
        persistence: {
            high: { title: '坚持不懈能力优秀', content: '你能够持续努力不放弃，有强大的毅力。' },
            medium: { title: '坚持能力良好', content: '你能在一定时间内坚持，但长期持续有困难。' },
            low: { 
                title: '坚持能力待提升', 
                content: '设置"最小坚持单元"：每天只坚持10分钟，累了就停。',
                practice: '不要追求完美，坚持"做一点"比"全做好"更重要'
            }
        },

        // ========== 领导职业子类 ==========
        leadership_skill: {
            high: { title: '领导力出色', content: '你具备天生的领导魅力，能够影响和带领他人。' },
            medium: { title: '领导力良好', content: '你具备基本领导能力，但可以更有影响力。' },
            low: { 
                title: '领导力待提升', 
                content: '从"每周1对1沟通"开始，了解团队成员的需求和想法。',
                practice: '在小组项目中主动承担协调角色，练习发号施令'
            }
        },
        teamwork: {
            high: { title: '团队协作能力优秀', content: '你善于与他人合作，是团队中的粘合剂。' },
            medium: { title: '团队协作能力良好', content: '你能配合团队，但可能更倾向于独立工作。' },
            low: { 
                title: '团队协作能力待提升', 
                content: '团队讨论时先倾听，再尝试表达自己的观点。',
                practice: '每周至少参与1次团队讨论，主动发言1次'
            }
        },
        career: {
            high: { title: '职业发展能力优秀', content: '你善于规划职业路径，有清晰的职业方向。' },
            medium: { title: '职业发展能力良好', content: '你有基本职业规划，但可能不够长远。' },
            low: { 
                title: '职业发展能力待提升', 
                content: '每季度末写一份"职业发展回顾"，总结收获和下一步方向。',
                practice: '找到你佩服的职场前辈，定期请教职业发展建议'
            }
        },
        decision_making: {
            high: { title: '决策能力出色', content: '你善于快速做出明智选择，敢于承担责任。' },
            medium: { title: '决策能力良好', content: '你能做决定，但可能犹豫或过于冲动。' },
            low: { 
                title: '决策能力待提升', 
                content: '设置"决策截止时间"，避免无限纠结。',
                practice: '小决定5分钟内做，大决定24小时内做，做了就不后悔'
            }
        },

        // ========== 超越动力子类 ==========
        meaning: {
            high: { title: '意义追寻能力强', content: '你对生命意义有深刻理解，有明确的价值观。' },
            medium: { title: '意义追寻能力良好', content: '你在寻找意义，但可能不够清晰或坚定。' },
            low: { 
                title: '意义追寻能力待提升', 
                content: '尝试回答"什么让我感到活着有意义？"把答案写下来。',
                practice: '每月做1件让自己感到"这件事有意义"的事情'
            }
        },
        self_transcendence: {
            high: { title: '自我超越能力出色', content: '你不断突破自我，追求成为更好的自己。' },
            medium: { title: '自我超越能力良好', content: '你有成长意愿，但可能缺乏持续动力。' },
            low: { 
                title: '自我超越能力待提升', 
                content: '每周做1件"不舒服"的小事，走出舒适区。',
                practice: '设定"每月突破1次"的目标，从小事开始挑战自己'
            }
        },
        value_realization: {
            high: { title: '价值实现能力优秀', content: '你能够将能力转化为实际价值，创造贡献。' },
            medium: { title: '价值实现能力良好', content: '你在创造价值，但可能缺乏系统方法。' },
            low: { 
                title: '价值实现能力待提升', 
                content: '思考"我的能力可以帮到谁？"主动寻找价值输出机会。',
                practice: '每周尝试用你的技能帮助身边1个人'
            }
        },
        mission: {
            high: { title: '使命感强烈', content: '你有强烈的使命感，被意义感所驱动。' },
            medium: { title: '使命感良好', content: '你在寻找使命，但可能尚未明确。' },
            low: { 
                title: '使命感待提升', 
                content: '寻找你佩服的人的故事，了解他们的人生使命。',
                practice: '写下你想成为什么样的人，想留下什么影响'
            }
        },
        growth_mindset: {
            high: { title: '成长思维优秀', content: '你相信能力可以通过努力提升，喜欢挑战。' },
            medium: { title: '成长思维良好', content: '你有一定成长意识，但可能受固定思维限制。' },
            low: { 
                title: '成长思维待提升', 
                content: '把"我不会"改成"我暂时不会"，把"失败"改成"学到"。',
                practice: '遇到困难时，想"这次能学到什么"而不是"我又搞砸了"'
            }
        },
        spirituality: {
            high: { title: '精神追求深刻', content: '你有深刻的精神追求，关心生命的终极问题。' },
            medium: { title: '精神追求良好', content: '你对精神层面有一定关注，但可能不够深入。' },
            low: { 
                title: '精神追求待提升', 
                content: '尝试冥想或静坐，每天10分钟，与自己的内心对话。',
                practice: '每天留出5分钟完全独处，不看手机，不说话'
            }
        }
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AssessmentData;
}
