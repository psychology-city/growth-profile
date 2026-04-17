// 应用主逻辑
const app = {
    // 状态管理
    state: {
        currentPage: 'home',
        currentView: 'selector', // selector | question
        selectedDimension: null,
        currentSubcategory: null,
        questions: [],
        currentIndex: 0,
        answers: {},
        history: [],
        theme: 'light'
    },

    // 初始化
    init() {
        this.loadState();
        this.setupNavigation();
        this.setupTheme();
        this.initPreviewChart();
        this.renderHistory();
    },

    // 加载保存的状态
    loadState() {
        const savedTheme = localStorage.getItem('growth-theme');
        if (savedTheme) {
            this.state.theme = savedTheme;
        }

        const savedHistory = localStorage.getItem('growth-history');
        if (savedHistory) {
            try {
                this.state.history = JSON.parse(savedHistory);
            } catch (e) {
                console.error('Failed to parse history:', e);
            }
        }
    },

    // 设置导航
    setupNavigation() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const page = e.target.dataset.page;
                this.showPage(page);
            });
        });
    },

    // 设置主题
    setupTheme() {
        if (this.state.theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.querySelector('.theme-icon').textContent = '☀️';
        }
    },

    // 切换主题
    toggleTheme() {
        this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.state.theme === 'dark' ? 'dark' : '');
        document.querySelector('.theme-icon').textContent = this.state.theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('growth-theme', this.state.theme);
    },

    // 显示页面
    showPage(pageName) {
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // 显示目标页面
        const targetPage = document.getElementById(`page-${pageName}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // 更新导航链接状态
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });

        this.state.currentPage = pageName;
        // 滚动到顶部
        window.scrollTo(0, 0);
    },

    // 初始化预览图表
    initPreviewChart() {
        const chartDom = document.getElementById('preview-chart');
        if (!chartDom) return;

        const chart = echarts.init(chartDom);
        const option = {
            radar: {
                indicator: [
                    { name: '认知', max: 100 },
                    { name: '共情', max: 100 },
                    { name: '意志', max: 100 },
                    { name: '领导', max: 100 },
                    { name: '超越', max: 100 }
                ],
                radius: '60%',
                axisName: {
                    color: '#666',
                    fontSize: 14
                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(99, 102, 241, 0.05)', 'rgba(99, 102, 241, 0.1)', 
                                'rgba(99, 102, 241, 0.15)', 'rgba(99, 102, 241, 0.2)', 
                                'rgba(99, 102, 241, 0.25)']
                    }
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: [75, 68, 82, 70, 65],
                    name: '示例',
                    areaStyle: {
                        color: 'rgba(99, 102, 241, 0.3)'
                    },
                    lineStyle: {
                        color: '#6366f1',
                        width: 2
                    },
                    itemStyle: {
                        color: '#6366f1'
                    }
                }]
            }]
        };
        chart.setOption(option);

        // 响应式
        window.addEventListener('resize', () => chart.resize());
    },

    // 开始测评
    startAssessment() {
        this.showPage('assessment');
        this.state.currentView = 'selector';
        document.getElementById('dimension-selector').style.display = 'grid';
        document.getElementById('question-area').style.display = 'none';
        this.updateAssessmentHeader('选择测评维度', '请选择你想测评的维度开始');
        window.scrollTo(0, 0);
    },

    // 返回选择维度
    backToDimension() {
        if (confirm('确定要返回吗？当前测评进度将不会保存。')) {
            this.state.currentView = 'selector';
            document.getElementById('dimension-selector').style.display = 'grid';
            document.getElementById('question-area').style.display = 'none';
            this.updateAssessmentHeader('选择测评维度', '请选择你想测评的维度开始');
            window.scrollTo(0, 0);
        }
    },

    // 选择维度
    selectDimension(dimensionId) {
        this.state.selectedDimension = dimensionId;
        const dimension = AssessmentData.dimensions[dimensionId];
        const subcategoryIds = dimension.subcategories;
        
        // 收集该维度下所有子类的题目
        this.state.questions = [];
        subcategoryIds.forEach(subId => {
            const questions = AssessmentData.questions[subId];
            if (questions) {
                questions.forEach(q => {
                    this.state.questions.push({
                        ...q,
                        subcategory: subId,
                        dimension: dimensionId
                    });
                });
            }
        });

        // 随机打乱题目顺序
        this.shuffleArray(this.state.questions);

        // 重置答题状态
        this.state.currentIndex = 0;
        this.state.answers = {};

        // 显示答题界面
        this.state.currentView = 'question';
        document.getElementById('dimension-selector').style.display = 'none';
        document.getElementById('question-area').style.display = 'block';

        this.updateAssessmentHeader(
            dimension.name + '测评',
            `共${this.state.questions.length}道题`
        );

        this.showQuestion();
    },

    // 完整测评
    startFullTest() {
        this.state.selectedDimension = 'full';
        
        // 收集所有题目
        this.state.questions = [];
        Object.keys(AssessmentData.questions).forEach(subId => {
            const questions = AssessmentData.questions[subId];
            if (questions) {
                questions.forEach(q => {
                    this.state.questions.push({
                        ...q,
                        subcategory: subId,
                        dimension: AssessmentData.subcategories[subId].dimension
                    });
                });
            }
        });

        // 按子类分组后打乱每组内的顺序
        const grouped = {};
        this.state.questions.forEach(q => {
            if (!grouped[q.subcategory]) grouped[q.subcategory] = [];
            grouped[q.subcategory].push(q);
        });

        this.state.questions = [];
        Object.values(grouped).forEach(group => {
            this.shuffleArray(group);
            this.state.questions.push(...group);
        });

        // 重置答题状态
        this.state.currentIndex = 0;
        this.state.answers = {};

        // 显示答题界面
        this.state.currentView = 'question';
        document.getElementById('dimension-selector').style.display = 'none';
        document.getElementById('question-area').style.display = 'block';

        this.updateAssessmentHeader(
            '完整测评',
            `共${this.state.questions.length}道题`
        );

        this.showQuestion();
    },

    // 更新测评标题
    updateAssessmentHeader(title, subtitle) {
        document.getElementById('assessment-title').textContent = title;
        document.getElementById('assessment-subtitle').textContent = subtitle;
    },

    // 打乱数组
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    // 显示题目
    showQuestion() {
        const question = this.state.questions[this.state.currentIndex];
        const subcategory = AssessmentData.subcategories[question.subcategory];

        document.getElementById('question-category').textContent = 
            AssessmentData.dimensions[question.dimension].name + ' · ' + subcategory.name;
        document.getElementById('question-index').textContent = 
            `第 ${this.state.currentIndex + 1} / ${this.state.questions.length} 题`;

        document.getElementById('question-text').textContent = question.text;

        // 显示选项
        const optionsHtml = [
            { value: 1, label: '完全不符合' },
            { value: 2, label: '比较不符合' },
            { value: 3, label: '一般' },
            { value: 4, label: '比较符合' },
            { value: 5, label: '完全符合' }
        ].map(opt => {
            const selected = this.state.answers[this.state.currentIndex] === opt.value ? 'selected' : '';
            return `<button class="option-btn ${selected}" data-value="${opt.value}">${opt.label}</button>`;
        }).join('');

        document.getElementById('question-options').innerHTML = optionsHtml;

        // 绑定选项点击事件
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectAnswer(parseInt(e.target.dataset.value));
            });
        });

        // 更新进度条
        this.updateProgress();

        // 更新导航按钮
        document.getElementById('btn-prev').style.display = this.state.currentIndex > 0 ? 'block' : 'none';
        document.getElementById('btn-next').style.display = 
            this.state.currentIndex < this.state.questions.length - 1 ? 'block' : 'none';
        document.getElementById('btn-submit').style.display = 
            this.state.currentIndex === this.state.questions.length - 1 ? 'block' : 'none';
    },

    // 选择答案
    selectAnswer(value) {
        const question = this.state.questions[this.state.currentIndex];
        // 如果是反向题，反转分数
        const finalValue = question.reverse ? (6 - value) : value;
        this.state.answers[this.state.currentIndex] = finalValue;

        // 更新选中状态
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
            if (parseInt(btn.dataset.value) === value) {
                btn.classList.add('selected');
            }
        });

        // 自动跳到下一题（延迟一下让用户看到选中效果）
        setTimeout(() => {
            if (this.state.currentIndex < this.state.questions.length - 1) {
                this.nextQuestion();
            }
        }, 300);
    },

    // 上一题
    prevQuestion() {
        if (this.state.currentIndex > 0) {
            this.state.currentIndex--;
            this.showQuestion();
        }
    },

    // 下一题
    nextQuestion() {
        if (this.state.currentIndex < this.state.questions.length - 1) {
            this.state.currentIndex++;
            this.showQuestion();
        }
    },

    // 更新进度条
    updateProgress() {
        const answered = Object.keys(this.state.answers).length;
        const total = this.state.questions.length;
        const percent = Math.round((answered / total) * 100);
        
        document.getElementById('progress-bar').style.width = percent + '%';
        document.getElementById('progress-text').textContent = percent + '%';
    },

    // 提交测评
    submitAssessment() {
        // 检查是否全部作答
        const answered = Object.keys(this.state.answers).length;
        const total = this.state.questions.length;
        
        if (answered < total) {
            alert(`还有 ${total - answered} 道题未作答，请完成所有题目后再提交。`);
            return;
        }

        // 计算各维度分数
        const scores = this.calculateScores();

        // 保存分数到状态（用于子维度显示）
        this.state.scores = scores;

        // 保存历史记录
        const record = {
            id: Date.now(),
            date: new Date().toLocaleString('zh-CN'),
            scores: scores,
            dimension: this.state.selectedDimension
        };

        this.state.history.unshift(record);
        // 限制历史记录数量
        if (this.state.history.length > 20) {
            this.state.history = this.state.history.slice(0, 20);
        }
        localStorage.setItem('growth-history', JSON.stringify(this.state.history));

        // 显示结果
        this.showResult(scores);
    },

    // 计算分数
    calculateScores() {
        const dimensionScores = {};
        const subcategoryScores = {};

        // 按子类统计
        this.state.questions.forEach((q, index) => {
            const subId = q.subcategory;
            if (!subcategoryScores[subId]) {
                subcategoryScores[subId] = { total: 0, count: 0 };
            }
            subcategoryScores[subId].total += this.state.answers[index];
            subcategoryScores[subId].count++;
        });

        // 计算子类得分（转换为百分制）
        Object.keys(subcategoryScores).forEach(subId => {
            const data = subcategoryScores[subId];
            // 每题最高5分,最低1分,范围是4分
            subcategoryScores[subId] = Math.round(((data.total / data.count - 1) / 4) * 100);
        });

        // 按维度汇总
        Object.keys(AssessmentData.dimensions).forEach(dimId => {
            const dimension = AssessmentData.dimensions[dimId];
            let total = 0;
            let count = 0;

            dimension.subcategories.forEach(subId => {
                if (subcategoryScores[subId] !== undefined) {
                    total += subcategoryScores[subId];
                    count++;
                }
            });

            if (count > 0) {
                dimensionScores[dimId] = Math.round(total / count);
            }
        });

        return {
            dimensions: dimensionScores,
            subcategories: subcategoryScores
        };
    },

    // 显示结果
    showResult(scores) {
        this.showPage('result');
        window.scrollTo(0, 0);

        // 显示日期
        document.getElementById('result-date').textContent = new Date().toLocaleDateString('zh-CN');

        // 确定已测评的维度
        const assessedDimensions = this.getAssessedDimensions(scores.dimensions);

        // 绘制雷达图
        this.drawResultChart(scores.dimensions, assessedDimensions);

        // 显示各项得分
        this.renderScores(scores.dimensions, assessedDimensions);

        // 生成分析
        this.generateAnalysis(scores.dimensions, assessedDimensions);
    },

    // 获取已测评的维度
    getAssessedDimensions(scores) {
        const dimensionConfig = [
            { id: 'cognitive', name: '认知能力', icon: '🧠' },
            { id: 'empathy', name: '人际共情', icon: '❤️' },
            { id: 'will', name: '意志行动', icon: '💪' },
            { id: 'leadership', name: '领导职业', icon: '👔' },
            { id: 'transcendence', name: '超越动力', icon: '🌟' }
        ];
        return dimensionConfig.filter(dim => scores[dim.id] !== undefined && scores[dim.id] !== null);
    },

    // 绘制结果图表
    drawResultChart(scores, assessedDimensions) {
        const chartDom = document.getElementById('result-chart');
        chartDom.innerHTML = '';
        const chart = echarts.init(chartDom);

        // 只显示已测评的维度
        const names = assessedDimensions.map(d => d.name);
        const values = assessedDimensions.map(d => scores[d.id] || 0);

        // 检测深色模式
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#e0e0e0' : '#333333';
        const splitLineColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.1)';

        const option = {
            radar: {
                indicator: names.map(name => ({ name, max: 100 })),
                radius: '65%',
                axisName: {
                    color: textColor,
                    fontSize: 14
                },
                splitArea: {
                    areaStyle: {
                        color: isDark 
                            ? ['rgba(99,102,241,0.15)', 'rgba(99,102,241,0.2)', 'rgba(99,102,241,0.25)', 'rgba(99,102,241,0.3)', 'rgba(99,102,241,0.35)']
                            : ['rgba(99, 102, 241, 0.05)', 'rgba(99, 102, 241, 0.1)', 'rgba(99, 102, 241, 0.15)', 'rgba(99, 102, 241, 0.2)', 'rgba(99, 102, 241, 0.25)']
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: splitLineColor
                    }
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: values,
                    name: '测评结果',
                    areaStyle: {
                        color: 'rgba(99, 102, 241, 0.3)'
                    },
                    lineStyle: {
                        color: '#6366f1',
                        width: 3
                    },
                    itemStyle: {
                        color: '#6366f1'
                    },
                    label: {
                        show: true,
                        formatter: (params) => params.value,
                        color: '#6366f1',
                        fontWeight: 'bold'
                    }
                }]
            }]
        };

        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    },

    // 显示各维度得分
    renderScores(scores, assessedDimensions) {
        const scoresHtml = assessedDimensions.map(dim => {
            const score = scores[dim.id] || 0;
            const level = score >= 75 ? '优势' : score >= 50 ? '良好' : '待提升';
            const levelClass = score >= 75 ? 'high' : score >= 50 ? 'medium' : 'low';

            return `
                <div class="score-card">
                    <h4>${dim.icon} ${dim.name}</h4>
                    <div class="score-value">${score}</div>
                    <div class="score-label ${levelClass}">${level}</div>
                </div>
            `;
        }).join('');

        document.getElementById('result-scores').innerHTML = scoresHtml;
    },

    // 生成分析
    generateAnalysis(scores, assessedDimensions) {
        let analysisHtml = '<h3>📊 详细分析</h3>';

        assessedDimensions.forEach(dim => {
            const score = scores[dim.id] || 0;
            let level, levelKey;
            
            if (score >= 75) {
                level = '优秀';
                levelKey = 'high';
            } else if (score >= 50) {
                level = '良好';
                levelKey = 'medium';
            } else {
                level = '待提升';
                levelKey = 'low';
            }

            // 获取新的解读结构
            const interpretation = AssessmentData.interpretations[dim.id]?.[levelKey];
            
            if (interpretation) {
                analysisHtml += `
                    <div class="analysis-item">
                        <h4>${dim.icon} ${dim.name} - ${level}（${score}分）</h4>
                        <div class="interpretation-summary">${interpretation.summary}</div>
                        <div class="interpretation-analysis">${interpretation.analysis}</div>
                        ${interpretation.advice ? `
                            <div class="interpretation-advice">
                                <h5>💡 成长建议</h5>
                                <ul>
                                    ${interpretation.advice.map(a => `<li><strong>${a.title}：</strong>${a.content}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                `;
            }
        });

        // 添加子维度详细得分和建议
        const targetDimensions = this.state.selectedDimension && this.state.selectedDimension !== 'full'
            ? [AssessmentData.dimensions[this.state.selectedDimension]].filter(Boolean)
            : Object.values(AssessmentData.dimensions);

        analysisHtml += '<h3>📋 子维度详情</h3>';

        targetDimensions.forEach(dim => {
            analysisHtml += `<div class="dimension-group-header">${dim.icon} ${dim.name}</div>`;

            dim.subcategories.forEach(subId => {
                const sub = AssessmentData.subcategories[subId];
                const subScore = this.state.scores?.subcategories?.[subId];
                if (sub && subScore !== undefined) {
                    const subLevel = subScore >= 75 ? '优势' : subScore >= 50 ? '良好' : '待提升';
                    const subLevelKey = subScore >= 75 ? 'high' : subScore >= 50 ? 'medium' : 'low';
                    const subAdvice = AssessmentData.subcategoryAdvice?.[subId]?.[subLevelKey];

                    analysisHtml += `
                        <div class="sub-dimension-card">
                            <div class="sub-dimension-header">
                                <span class="sub-name">${sub.name}</span>
                                <span class="sub-score-badge ${subLevelKey}">${subScore}分 - ${subLevel}</span>
                            </div>
                            ${subAdvice ? `
                                <div class="sub-advice">
                                    <p class="sub-advice-title">${subAdvice.title}</p>
                                    <p class="sub-advice-content">${subAdvice.content}</p>
                                    ${subAdvice.practice ? `
                                        <p class="sub-advice-practice">🎯 <strong>具体练习：</strong>${subAdvice.practice}</p>
                                    ` : ''}
                                </div>
                            ` : ''}
                        </div>
                    `;
                }
            });
        });

        // 添加兴趣爱好推荐
        analysisHtml += this.generateHobbyRecommendations();
        
        // 添加工作推荐
        analysisHtml += this.generateJobRecommendations();
        
        // 添加低分维度培养推荐
        analysisHtml += this.generateLowScoreRecommendations();

        document.getElementById('result-analysis').innerHTML = analysisHtml;
    },

    // 生成兴趣爱好推荐
    generateHobbyRecommendations() {
        if (!this.state.scores?.subcategories) return '';
        
        const subScores = this.state.scores.subcategories;
        let recommendedHobbies = [];
        
        // 根据高分子维度推荐兴趣爱好
        Object.entries(subScores).forEach(([subId, score]) => {
            if (score >= 60 && growthMapping.dimToHobbies[subId]) {
                growthMapping.dimToHobbies[subId].forEach(hobbyName => {
                    const hobby = growthMapping.hobbies[hobbyName];
                    if (hobby && !recommendedHobbies.find(h => h.name === hobbyName)) {
                        recommendedHobbies.push({
                            name: hobbyName,
                            category: hobby.category,
                            score: score,
                            coreDims: hobby.coreDims,
                            advice: hobby.growthAdvice
                        });
                    }
                });
            }
        });
        
        // 按得分排序，取前8个
        recommendedHobbies.sort((a, b) => b.score - a.score);
        recommendedHobbies = recommendedHobbies.slice(0, 8);
        
        if (recommendedHobbies.length === 0) return '';
        
        let html = '<h3>🎯 推荐兴趣爱好</h3><div class="hobby-recommendations">';
        html += '<p class="recommendation-intro">根据您的测评结果，以下兴趣爱好与您的优势维度高度匹配：</p>';
        
        recommendedHobbies.forEach(hobby => {
            html += `
                <div class="hobby-card">
                    <div class="hobby-header">
                        <span class="hobby-name">${hobby.name}</span>
                        <span class="hobby-category">${hobby.category}</span>
                    </div>
                    <div class="hobby-dims">
                        <span class="dim-label">核心维度：</span>
                        ${hobby.coreDims.slice(0, 3).join('、')}
                    </div>
                    <div class="hobby-advice">💡 ${hobby.advice}</div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    },

    // 生成工作推荐
    generateJobRecommendations() {
        if (!this.state.scores?.subcategories) return '';
        
        const subScores = this.state.scores.subcategories;
        let recommendedJobs = [];
        
        // 根据高分子维度推荐工作
        Object.entries(subScores).forEach(([subId, score]) => {
            if (score >= 60 && growthMapping.dimToJobs[subId]) {
                growthMapping.dimToJobs[subId].forEach(jobName => {
                    const job = growthMapping.jobs[jobName];
                    if (job && !recommendedJobs.find(j => j.name === jobName)) {
                        recommendedJobs.push({
                            name: jobName,
                            category: job.category,
                            score: score,
                            coreDims: job.coreDims,
                            description: job.description
                        });
                    }
                });
            }
        });
        
        // 按得分排序，取前6个
        recommendedJobs.sort((a, b) => b.score - a.score);
        recommendedJobs = recommendedJobs.slice(0, 6);
        
        if (recommendedJobs.length === 0) return '';
        
        let html = '<h3>💼 推荐工作方向</h3><div class="job-recommendations">';
        html += '<p class="recommendation-intro">根据您的测评结果，以下工作方向与您的优势维度高度匹配：</p>';
        
        recommendedJobs.forEach(job => {
            html += `
                <div class="job-card">
                    <div class="job-header">
                        <span class="job-name">${job.name}</span>
                        <span class="job-category">${job.category}</span>
                    </div>
                    <div class="job-description">${job.description}</div>
                    <div class="job-dims">
                        <span class="dim-label">关键维度：</span>
                        ${job.coreDims.slice(0, 4).join('、')}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    },

    // 生成低分维度培养推荐（基于兴趣爱好提升弱势维度）
    generateLowScoreRecommendations() {
        if (!this.state.scores?.subcategories) return '';
        
        const subScores = this.state.scores.subcategories;
        let lowScoreRecommendations = [];
        
        // 找出低分维度（<50分）
        Object.entries(subScores).forEach(([subId, score]) => {
            if (score < 50 && growthMapping.dimBoostHobbies[subId]) {
                const boostHobbies = growthMapping.dimBoostHobbies[subId];
                if (boostHobbies && boostHobbies.length > 0) {
                    // 取效果最好的前2个兴趣爱好
                    const topHobbies = [...boostHobbies]
                        .sort((a, b) => b.effect - a.effect)
                        .slice(0, 2);
                    
                    topHobbies.forEach(item => {
                        const hobby = growthMapping.hobbies[item.hobby];
                        if (hobby) {
                            lowScoreRecommendations.push({
                                dimension: subId,
                                dimScore: score,
                                hobbyName: item.hobby,
                                category: hobby.category,
                                effect: item.effect,
                                reason: item.reason,
                                practiceTip: hobby.practiceTip
                            });
                        }
                    });
                }
            }
        });
        
        // 按效果和维度得分排序，优先推荐效果最好的
        lowScoreRecommendations.sort((a, b) => {
            // 先按效果排序，效果相同按维度得分（更低的优先）
            if (b.effect !== a.effect) return b.effect - a.effect;
            return a.dimScore - b.dimScore;
        });
        
        // 去重（同一个兴趣爱好只推荐一次）
        const seenHobbies = new Set();
        lowScoreRecommendations = lowScoreRecommendations.filter(item => {
            if (seenHobbies.has(item.hobbyName)) return false;
            seenHobbies.add(item.hobbyName);
            return true;
        });
        
        // 取前6个
        lowScoreRecommendations = lowScoreRecommendations.slice(0, 6);
        
        if (lowScoreRecommendations.length === 0) return '';
        
        let html = '<h3>🌱 维度提升建议</h3><div class="boost-recommendations">';
        html += '<p class="recommendation-intro">根据您的测评结果，以下兴趣爱好可以帮助您培养和提升相对薄弱的维度：</p>';
        
        lowScoreRecommendations.forEach(item => {
            const effectStars = '★'.repeat(item.effect) + '☆'.repeat(5 - item.effect);
            const levelClass = item.dimScore < 30 ? 'low' : 'medium';
            
            html += `
                <div class="boost-card ${levelClass}">
                    <div class="boost-header">
                        <span class="boost-hobby">${item.hobbyName}</span>
                        <span class="boost-category">${item.category}</span>
                    </div>
                    <div class="boost-target">
                        <span class="target-label">🎯 可提升：</span>
                        <span class="target-dim">${item.dimension}</span>
                        <span class="target-score">（当前 ${item.dimScore} 分）</span>
                    </div>
                    <div class="boost-effect">
                        <span class="effect-label">提升效果：</span>
                        <span class="effect-stars">${effectStars}</span>
                    </div>
                    <div class="boost-reason">💡 ${item.reason}</div>
                    ${item.practiceTip ? `
                        <div class="boost-practice">
                            <span class="practice-label">📝 入门建议：</span>
                            ${item.practiceTip}
                        </div>
                    ` : ''}
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    },

    // 渲染历史记录
    renderHistory() {
        const container = document.getElementById('history-list');
        
        if (this.state.history.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">📝</span>
                    <p>暂无测评记录</p>
                    <button class="btn-primary" onclick="app.startAssessment()">开始首次测评</button>
                </div>
            `;
            return;
        }

        const historyHtml = this.state.history.slice(0, 10).map(record => {
            const dims = Object.values(record.scores.dimensions);
            const avgScore = dims.length > 0 
                ? Math.round(dims.reduce((a, b) => a + b, 0) / dims.length)
                : 0;

            const dimName = record.dimension === 'full' ? '完整测评' : 
                (AssessmentData.dimensions[record.dimension] ? AssessmentData.dimensions[record.dimension].name : '测评');

            return `
                <div class="history-item">
                    <div class="history-info" onclick="app.viewHistory(${record.id})">
                        <h4>${dimName}</h4>
                        <p>${record.date}</p>
                    </div>
                    <div class="history-score" onclick="app.viewHistory(${record.id})">
                        <div class="score">${avgScore}</div>
                        <div class="label">综合得分</div>
                    </div>
                    <button class="history-delete" onclick="app.deleteHistory(${record.id})" title="删除记录">×</button>
                </div>
            `;
        }).join('');

        container.innerHTML = historyHtml;
    },

    // 删除历史记录
    deleteHistory(id) {
        if (confirm('确定要删除这条测评记录吗？')) {
            this.state.history = this.state.history.filter(r => r.id !== id);
            localStorage.setItem('growth-history', JSON.stringify(this.state.history));
            this.renderHistory();
        }
    },

    // 查看历史记录
    viewHistory(id) {
        const record = this.state.history.find(r => r.id === id);
        if (record) {
            this.showResult(record.scores);
        }
    },

    // 分享结果
    shareResult() {
        // 生成分享文本
        const scores = this.state.history[0]?.scores?.dimensions || {};
        const text = `我在"个人成长名片"测评中获得了以下成绩：
🧠 认知能力：${scores.cognitive || 0}分
❤️ 人际共情：${scores.empathy || 0}分
💪 意志行动：${scores.will || 0}分
👔 领导职业：${scores.leadership || 0}分
🌟 超越动力：${scores.transcendence || 0}分

来测测你的成长名片吧！`;

        if (navigator.share) {
            navigator.share({
                title: '我的个人成长名片',
                text: text
            }).catch(console.error);
        } else {
            // 复制到剪贴板
            navigator.clipboard.writeText(text).then(() => {
                alert('结果已复制到剪贴板！');
            }).catch(() => {
                alert('分享功能暂不可用');
            });
        }
    },

    // 显示打赏弹窗
    showDonate() {
        document.getElementById('donate-modal').classList.add('active');
        this.showDonateOptions();
    },

    // 显示打赏选项
    showDonateOptions() {
        document.getElementById('donate-options').style.display = 'grid';
        document.getElementById('donate-qr-container').style.display = 'none';
        document.getElementById('donate-back').style.display = 'none';
    },

    // 选择打赏金额
    selectDonate(amount) {
        const qrImages = {
            '9.9': 'images/qr-9.9.jpg',
            '19.9': 'images/qr-19.9.jpg',
            '29.9': 'images/qr-29.9.jpg',
            'custom': 'images/qr-custom.jpg'
        };

        const qrImage = document.getElementById('donate-qr-image');
        qrImage.src = qrImages[amount] || qrImages['custom'];

        document.getElementById('donate-options').style.display = 'none';
        document.getElementById('donate-qr-container').style.display = 'block';
        document.getElementById('donate-back').style.display = 'block';
    },

    // 返回选项
    backToOptions() {
        this.showDonateOptions();
    },

    // 点击背景关闭打赏弹窗
    closeDonateOnBackdrop(event) {
        if (event.target.id === 'donate-modal') {
            this.closeDonate();
        }
    },

    // 图片加载失败处理
    handleImageError(img) {
        img.src = 'data:image/svg+xml,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                <rect fill="#f3f4f6" width="200" height="200"/>
                <text x="50%" y="50%" text-anchor="middle" fill="#9ca3af" font-size="14">图片加载失败</text>
            </svg>
        `);
        img.alt = '收款码加载失败';
    },

    // 关闭打赏弹窗
    closeDonate() {
        document.getElementById('donate-modal').classList.remove('active');
        this.showDonateOptions();
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 设置当前年份
    document.getElementById('current-year').textContent = new Date().getFullYear();
    app.init();
});
