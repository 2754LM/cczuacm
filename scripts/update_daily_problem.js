/**
 * 每日一题自动更新脚本
 * 功能：
 * 1. 读取题目库数据
 * 2. 根据当前日期选择对应的题目
 * 3. 更新首页和每日一题页面的内容
 */

const fs = require('fs');
const path = require('path');

// 配置路径
const PROBLEM_LIST_PATH = path.join(__dirname, '../docs/daily/database/problem_list.json');
const DAILY_INDEX_PATH = path.join(__dirname, '../docs/daily/index.md');
const HOMEPAGE_PATH = path.join(__dirname, '../docs/index.md');
const CONTENT_DIR = path.join(__dirname, '../docs/daily/database/content');
const OUTPUT_DIR = path.join(__dirname, '../docs/daily');

// 获取当前日期，格式为 YYYY-MM-DD
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 从题目库中查找指定日期的题目
function findProblemByDate(problems, date) {
  return problems.find(problem => problem.date === date) || null;
}

// 更新每日一题首页
function updateDailyIndex(problems) {
  // 获取最新的3个题目
  const latestProblems = [...problems]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // 读取原始内容
  let content = fs.readFileSync(DAILY_INDEX_PATH, 'utf8');
  
  // 更新最新每日一题部分
  const latestSection = latestProblems.map(problem => {
    return `- [${problem.date} - ${problem.title}](./${problem.date}.md)`;
  }).join('\n');
  
  // 替换内容
  const newContent = content.replace(
    /## 最新每日一题\n\n([\s\S]*?)(?=\n\n## 参与方式)/,
    `## 最新每日一题\n\n${latestSection}\n\n`
  );
  
  fs.writeFileSync(DAILY_INDEX_PATH, newContent, 'utf8');
  console.log('每日一题首页更新完成');
}

// 更新网站首页
function updateHomepage(todayProblem) {
  // 读取原始内容
  let content = fs.readFileSync(HOMEPAGE_PATH, 'utf8');
  
  // 更新最新日程部分
  const newLatestInfo = `每日一题已上线！每天一道精选算法题，提升你的编程能力。今日题目：${todayProblem.title} - [查看详情](/daily/${todayProblem.date}.md)`;
  
  // 替换内容
  const newContent = content.replace(
    /details: (.*?)(?=\n)/,
    `details: ${newLatestInfo}`
  );
  
  fs.writeFileSync(HOMEPAGE_PATH, newContent, 'utf8');
  console.log('网站首页更新完成');
}

// 创建当天的题目页面
function createTodayProblemPage(problem) {
  const outputPath = path.join(OUTPUT_DIR, `${problem.date}.md`);
  
  // 构建题目页面内容
  const content = `# 每日一题 - ${problem.title}

::: info 题目信息
- **日期**：${problem.date}
- **难度**：${problem.difficulty}
- **来源**：${problem.source}
- **标签**：${problem.tags.join('、')}
:::

## 题目描述

${fs.existsSync(path.join(CONTENT_DIR, problem.content_file)) 
  ? fs.readFileSync(path.join(CONTENT_DIR, problem.content_file), 'utf8')
  : '题目内容正在完善中...'
}

## 讨论区

::: tip 提示
欢迎在下方评论区分享你的解题思路和代码！
:::`;

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`今日题目页面创建完成: ${problem.date} - ${problem.title}`);
}

// 更新月度归档页面
function updateMonthlyArchive(problem) {
  const date = new Date(problem.date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const archiveFilename = `archive-${year}-${month}.md`;
  const archivePath = path.join(OUTPUT_DIR, archiveFilename);
  
  // 检查是否存在归档文件，不存在则创建
  if (!fs.existsSync(archivePath)) {
    const archiveContent = `# ${year}年${month}月归档

这里列出了${year}年${month}月的每日一题归档，按照日期倒序排列。
`;
    fs.writeFileSync(archivePath, archiveContent, 'utf8');
  }
  
  // 读取归档文件
  let archiveContent = fs.readFileSync(archivePath, 'utf8');
  
  // 准备新的条目
  const newEntry = `## ${problem.date}
- [${problem.title}](./${problem.date}.md) - ${problem.difficulty} - ${problem.tags.join('、')}
`;

  // 如果这个条目已经存在，就不添加
  if (!archiveContent.includes(problem.date)) {
    // 在标题下添加新条目
    const newContent = archiveContent.replace(
      /(# .*?\n\n)([\s\S]*)/,
      `$1$2\n${newEntry}`
    );
    
    fs.writeFileSync(archivePath, newContent, 'utf8');
    console.log(`月度归档更新完成: ${archiveFilename}`);
  }
}

// 主函数
function main() {
  try {
    // 创建必要的目录
    if (!fs.existsSync(CONTENT_DIR)) {
      fs.mkdirSync(CONTENT_DIR, { recursive: true });
    }
    
    // 读取题目库
    const problemData = JSON.parse(fs.readFileSync(PROBLEM_LIST_PATH, 'utf8'));
    const problems = problemData.problems;
    
    // 获取当前日期
    const currentDate = getCurrentDate();
    console.log(`当前日期: ${currentDate}`);
    
    // 查找今天的题目
    const todayProblem = findProblemByDate(problems, currentDate);
    
    if (todayProblem) {
      console.log(`找到今日题目: ${todayProblem.title}`);
      
      // 更新各个页面
      updateDailyIndex(problems);
      updateHomepage(todayProblem);
      createTodayProblemPage(todayProblem);
      updateMonthlyArchive(todayProblem);
      
      console.log('每日一题更新完成！');
    } else {
      console.error(`错误: 未找到${currentDate}对应的题目，请检查题目库配置`);
      process.exit(1);
    }
  } catch (error) {
    console.error('更新过程中发生错误:', error);
    process.exit(1);
  }
}

// 执行主函数
main(); 