// Simple structural test - check if all required fields exist
const fs = require('fs');
const path = require('path');

const mappingPath = path.join(__dirname, 'mapping.js');
let content = fs.readFileSync(mappingPath, 'utf8');

console.log('=== 文件结构检查 ===');
console.log('文件大小:', content.length, '字节');

// Check hobbies
const hobbiesMatch = content.match(/hobbies:\s*\{/);
console.log('hobbies 定义:', hobbiesMatch ? '存在' : '缺失');

// Count hobbies (look for patterns like "跑步": {)
const hobbyMatches = content.match(/"[^"]+"\s*:\s*\{\s*category:/g);
const hobbyCount = hobbyMatches ? hobbyMatches.length : 0;
console.log('兴趣爱好条目数:', hobbyCount);

// Check for boost fields in hobbies
const boostDimsMatches = content.match(/boostDims:/g);
console.log('boostDims 定义数:', boostDimsMatches ? boostDimsMatches.length : 0);

const boostEffectMatches = content.match(/boostEffect:/g);
console.log('boostEffect 定义数:', boostEffectMatches ? boostEffectMatches.length : 0);

const practiceTipMatches = content.match(/practiceTip:/g);
console.log('practiceTip 定义数:', practiceTipMatches ? practiceTipMatches.length : 0);

// Check dimBoostHobbies
const dimBoostMatch = content.match(/dimBoostHobbies:\s*\{/);
console.log('dimBoostHobbies 定义:', dimBoostMatch ? '存在' : '缺失');

// Count dimensions in dimBoostHobbies
const dimBoostSection = content.substring(content.indexOf('dimBoostHobbies'));
const dimMatches = dimBoostSection.match(/"[^"]+"\s*:\s*\[/g);
console.log('低分培养维度数:', dimMatches ? dimMatches.length - 1 : 0); // -1 for the first match being dimBoostHobbies itself

// Check jobs
const jobsMatch = content.match(/jobs:\s*\{/);
console.log('jobs 定义:', jobsMatch ? '存在' : '缺失');

// Test specific hobby has required fields
console.log('\n=== 字段检查 ===');
const requiredFields = ['category', 'coreDims', 'extendDims', 'boostDims', 'boostEffect', 'growthAdvice', 'lowScoreAdvice', 'practiceTip'];
const missingFields = [];

requiredFields.forEach(field => {
    const regex = new RegExp(field + ':', 'g');
    const matches = content.match(regex);
    if (!matches || matches.length < hobbyCount) {
        missingFields.push(field + ' (期望' + hobbyCount + '个，实际' + (matches ? matches.length : 0) + '个)');
    }
});

if (missingFields.length > 0) {
    console.log('缺失字段:', missingFields.join(', '));
} else {
    console.log('所有必需字段都已定义!');
}

console.log('\n=== 浏览器测试建议 ===');
console.log('请在浏览器中打开 http://localhost:8765/index.html 进行完整测试');
console.log('1. 完成一次测评');
console.log('2. 查看结果页面是否显示：详细分析、子维度详情、推荐兴趣爱好、推荐工作方向、维度提升建议');
console.log('3. 检查浏览器控制台是否有JavaScript错误');

console.log('\n=== 测试完成 ===');
