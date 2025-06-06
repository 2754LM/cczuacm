#  算法竞赛入门指北

算法协会q群：311107699

学习资料在本项目的resource目录下，或者加q群看群文件。

## 前言

首先明确你学算法的需求，从易到难大致分为以下三种：

1：应付小厂面试就行，考研数据结构无所谓的。

2：手撕中大厂算法，在蓝桥杯，天梯赛等算法比赛获得国奖，考研希望数据结获得不错的分数。

3：打ICPC，CCPC等算竞比赛，公费旅游，进入大厂，考研复试加分，成为吊大荣光。

> 其实没有acm这个比赛，只是因为icpc以前是acm赞助的，很多人就直接叫acm，但赞助商已经换成JB了（就是出idea,clion的公司）。
> ICPC，CCPC是含金量最高的算法比赛。

如果你的需求是1，那就没必要向下看了，因为小厂有的连算法都不会考的，把大二的数据结构课学学就可以。

**注意**：参加需求3类型比赛的前提是进入集训队。

## 基本概念

主要的算竞比赛有以下几种：

**OI**（Olympiad in Informatics，信息学奥林匹克竞赛）在中国起源于 1984 年，是五大高中学科竞赛之一。

> CSP、NOIP 和 NOI这类中学生打的我就不多提了。

**ICPC**（International Collegiate Programming Contest，国际大学生程序设计竞赛）由 ICPC 基金会（ICPC Foundation）举办，是最具影响力的大学生计算机竞赛。由于以前 ACM 赞助这个竞赛，也有很多人习惯叫它 ACM 竞赛。每年有两次网络赛，多场区域赛，一场亚洲区域赛（EC Final），一场世界决赛（World Finals）。

**CCPC**（China Collegiate Programming Contest， 中国大学生程序设计竞赛C）是由教育部高等学校计算机类专业教学指导委员会主办的面向全国高校大学生的年度学科竞赛。每年会有一次网络赛，多场分站赛，一场总决赛。同时还有多场邀请赛，女生专场和高职专场赛。

> ccpc和icpc类似，我就一起介绍了。每年的网络赛是在8,9月的时候，打的好就会给你去区域赛（分站赛）的名额。如果学校没打出名额，分站赛有时候主办方也会施舍一点名额。比如南京站的时候，给省内大学都发了一个名额。然后你来到了区域赛，每年区域赛会有很多个站，比如去年icpc就有杭州站，南京站，西安站等。只要在某一站打的比较好，就有去打亚洲区域赛的资格（EC final）。如果你能拿到金牌区，那就可能直接保送世界决赛（world final）。ccpc的分站赛，决赛和这个差不多。

**其他CPC**（如jscpc，zjcpc）是各个省份自己举办的省赛。

oier指的就是，信息学奥林匹克竞赛选手。

acmer指的是，参加XCPC系列比赛的选手。

[蓝桥杯大赛](https://dasai.lanqiao.cn/)（圈钱杯大赛，300的报名费毁了我的算法梦）。题目不算简单，但由于分了abc组（重本打a组，双非b组，带专c组），加上参加的人非常多，给奖的比例也很高。所以比较容易得奖。学校也愿意爆米。比较挺推荐新生打这个的。

[团体程序设计天梯赛](https://gplt.patest.cn/regulation)基本模拟，暴力，阅读理解。国三不难，爆的米也不少🥳。参加需要先通过选拔。

[百度之星](https://astar2019.baidu.com/design.html)今年打了一场，4题，省二中游。手速4题可以省一，难度大概介于蓝桥杯和xcpc之间。题目质量还是可以的，但对算法基础要求比较高，比如二分最大化最小值，字符串哈希这些你得会。

[CCF CAT- 全国算法精英大赛](https://conf.ccf.org.cn/web/html5/index.html?globalId=m1212437103980449792170910913158&type=1)今年也打了一场，题目也挺难的，3人赛（可以跨校组队），把几个签到题写了，省三都没有。而且这个比赛爆米很少。

## 付出与回报

### 付出

如果你想all in四年算竞，我就很不推荐的。如果你是为了功利性的目的，其实打其他比赛的性价比也许更高。acm是极高风险高回报的事。

如果你想all in，你可以看看以下的条件：（条件分先后）

1. 有两个好队友。
2. 极佳的天赋。
3. 中学有过oi经历。
4. 坚持每天高强度训练，打各种平台的周赛。(凌晨爬起来打cf都是很常见的事)。

现在acm都是oier的天下，零基础想拿金，几乎是不可能的事情。哪怕强如hdu的学校，在最近几年也再也没出过零基础的WF队。

不过如果你的目标是拿铜拿银，努力1,2年还是可以做到的。

### 回报

🤣先说个最幻想的，如果你能打进WF，吊大acm荣光崛起，暴打通大、苏科大、江科大等。（参考一几年hdu英雄哥，第一次打进WF，从此hdu的acm如日中天。）各种大厂求着你去，哪怕你去个算竞教培卖课，都是顶级的存在。

不过幻想总归是幻想，回到现实，我认为主要能获得以下几点：

- 强大的码力，手搓红黑树不是梦。
- 更敏捷灵活的思维。
- 过大厂面试
- 考研复试加分
- 轻松暴打数据结构，c语言等课程🤩。
- 打各种比赛拿奖，爆学校的金币🥳。
- 不好的代码习惯，比如开全局变量，变量名aaa，bbb这种😢。
- 四级不过，课程挂科😭。

### 杂谈

虽然 ACM 能帮助你通过各种算法应试，成为大厂敲门砖，考研复试加分项。

但不可否认的是，这是一项耗费**极大精力**的比赛，零基础的情况下，至少需要**经过一年**的**高强度**训练，才有铜牌的可能性。

当然大学计算机类的比赛还有很多，数学建模，网络安全，机甲大师等。每个人的天赋、志趣不同，你也可以尝试其他方向。想要了解可以参考[此表](https://docs.qq.com/sheet/DRmRuYkxmZHdzeHJI?tab=BB08J2)。

如果你对未来总体还是迷茫，也不妨试试ACM，只需要一台电脑，一点语言基础，就可以体验算法的乐趣。

## 刷题网站

🥳[力扣 (LeetCode)](https://leetcode.cn/)求职必备，刷刷里面的hot100就够应付大部分面试了。但是题目大部分语言都是用类封装好了，如果你还不会面向对象，可以先学习一下。力扣有周赛和双周赛，挺好玩的，打的人也不少，如果你竞赛积分能打到1800以上，拿到knight牌，面试应该没什么大问题。有非常多高质量的题解，你能在这里找到各种冷门语言的题解。

[蓝桥云课](https://www.lanqiao.cn/cup/)蓝桥官方的oj，有官方的卖课（我没看过），还有往年题目。每两周有双周赛，奖金是真的多啊，相比洛谷，力扣等平台。如果你想打蓝桥杯，考前刷这个就对了。

[团体程序设计天梯赛-练习集](https://pintia.cn/problem-sets/994805046380707840/exam/problems/type/7)pta的真题，题目不是很多，如果你要打pta，可以在考前临时练一下。

接下来是**需求3**所需的：

🥳[洛谷](https://www.luogu.com.cn/)oi爷的主场，里面多大是初高中oier。个人感觉，题解质量参差不齐。洛谷月赛质量不错，可以打打。还有其他平台的题目，一般也都会搬到洛谷上。

🥳[Codeforces](https://mirror.codeforces.com/)世界上最大的刷题网站，里面的比赛分为div1,2,3,4级别，思维题较多，刚开始可以打div3,4。div2的前两题。gym里面有各地区域赛，网络赛，省赛的题目。不过codeforces比赛的作息比较阴间，常在凌晨。

🥳[AtCoder](https://atcoder.jp/)日本的刷题网站，比赛中ABC（AtCoder Beginner Contest）对新人比较友好，题目考察的知识点也比较全面，不像cf那么极端，时间和题目都是。

🥳[牛客竞赛](https://ac.nowcoder.com/)牛客虽然是个招聘软件，但最近的周赛越办越好了。有小白月赛，练习赛，挑战赛。里面的牛客多校灰常适合acmer练习。经常有会各种学校在这类举办校赛，在寒暑假的时候还有多校训练（付费比赛）。

[hdu](https://acm.hdu.edu.cn/)杭电的oj，典题可以在这写，寒暑假也有多校训练。其他的北大oj之类的就不在下面列举了。

[ACGO竞赛-ACGO欢乐赛|欢乐编程大赛-ACGO题库](https://www.acgo.cn/contest)一个培训机构的oj，里面都是小学生初中生，灰常容易打到比赛奖品，可以去打打图一乐。

## 学习资源

### 省流
打XCPC必备CPP。

想走JAVA就去看代码随想录/acwing刷力扣。

### 线上类

#### 免费的

🥳[代码随想录](https://programmercarl.com)带我入门的网站，卡哥的教程还是不错的，而且免费，b站还都有配套视频，各种语言都有。[他的b站地址](https://space.bilibili.com/525438321?spm_id_from=333.337.0.0)。

下面的b站的各种up主：

[算法大师兄](https://space.bilibili.com/1784235102?spm_id_from=333.999.0.0)英雄哥，发的视频比较偏娱乐。他csdn“夜深人静写算法”的收费专栏，我看过免费部分，感觉质量还是很高的。（英雄哥是hdu第一届打入worldfinal的）。[他的b站大号](https://space.bilibili.com/319521269?spm_id_from=333.999.0.0)。

🥳[灵茶山艾府](https://space.bilibili.com/206214?spm_id_from=333.999.0.0)我灵伟大，🖐️需多言。如果你打力扣，那必看灵神！

🥳[董晓算法](https://space.bilibili.com/517494241?spm_id_from=333.999.0.0)视频更了好几年，已经比较全面了。图解会讲的很清楚，我看很多考研的也看这个。如果你不理解线段树，树状数组，平衡树之类的，你可以看看他的视频。里面的图解比较清晰。主打的是测几个样例，一步步的推导

🥳[NotOnlySuccess](https://space.bilibili.com/3546647317448859)最近新看到的up，已经出的内容比较基础。但可视化做的不错，讲的也挺原理的。

[左程云](https://space.bilibili.com/8888480?spm_id_from=333.999.0.0)我经常在各种卖课的地方看到他，他讲的视频也不错。

[今天你学废了么](https://space.bilibili.com/3461575069403560?spm_id_from=333.999.0.0)教的也挺全，适合oier爷看。

下面的主要各种比赛的讲解up：

[RegenFallen](https://space.bilibili.com/23358007?spm_id_from=333.999.0.0)小码王的教练，群里氛围不错。如果你刚开始打codeforces和atc，看看他每场的题解也不错，讲的简单题，比较容易理解。

[幻想家协会会长](https://space.bilibili.com/55927668?spm_id_from=333.999.0.0)会讲cf和atc比较难的题，但个人感觉讲的没regen容易懂。但他最近开始搬运atc的4分钟题解，如果你不会上油管，也可以看看他的搬运。atc的题解还是很有意思的。

下面主要是打比赛实况视频的大神：

[jiangly](https://space.bilibili.com/130648068/?spm_id_from=333.999.0.0)世界第一的含金量，🖐️需多盐。

[小羊肖恩Yawn_Sean](https://space.bilibili.com/193004900?spm_id_from=333.999.0.0)羊神，常年霸占力扣前几。粉丝群经常抽奖品。一般出力扣比赛实况。还有蓝桥云课的周赛，很多是他出题，他也会放题解。

#### 付费的

[labuladong 的算法笔记](https://labuladong.online/algo/home/)网上风评不错，和代码随想录有点类似，但这网站做了代码可视化插件，更容易理解。[他的b站地址](https://space.bilibili.com/14089380?spm_id_from=333.999.0.0)。

[英雄哥的专栏](https://blog.csdn.net/whereisherofrom/category_9273531.html)**999.98元**的价格，慎入，有钱随意。

🥳[AcWing](https://www.acwing.com/activity/)不少人说这个算法基础课不错，不过因为y总(网站老板)各种各样的原因，导致最近两年风评一般。你要是有闲钱，买这个基础课看看也无所谓。**200元**的售价。群文件中有学习版（。


#### 辅助工具

[VisuAlgo](https://visualgo.net/zh)通过动画可视化数据结构和算法的网站，方便你理解各种算法。

🥳[OI Wiki](https://oi-wiki.org//)算法届的百科全书。

🥳[cp-algorithms.com](https://cp-algorithms.com/index.html)英文网站，有的算法原理讲的很好！比如KMP的文章，是我见过最好的！

### 实体书籍

实体书籍的代码基本是C++撰写。

🥳[算法竞赛（清华大学出版社）](http://www.tup.tsinghua.edu.cn/booksCenter/book_08808001.html)。白皮书，罗勇军写的，前两年才刚出，知识点非常全面，在比赛中，我看很多人带的板子也都是这一本，个人**十分推荐**！我在qq群文件里面放了。

[算法导论（麻省理工学院出版社）](https://baike.baidu.com/item/算法导论/1775186)。黑皮书，里面的数学论证较多，如果你喜欢严谨的论证，这本书一定很适合你。不过难度很大，**慎入**。

《深入浅出程序设计竞赛 - 基础篇》- -洛谷。目前只出了基础篇，我看过，质量挺不错，十分基础，适合初学者。马上进阶版也要出了，期待。

《算法竞赛入门经典》-- 刘汝佳。紫书，我校acm选修课买的就是这本，还行。

🥳《算法竞赛进阶指南》-- 李煜东。最近刚买了这本书，质量很不错，相当于一本刷题指南，有一定上手难度。

## ide和插件

### ide

如果想了解可以看oiwiki对各种ide的介绍[OI Wiki (oi-wiki.org)](https://oi-wiki.org/tools/editor/)。

我就谈一些我用过的吧。首先dev++，最适合中国宝宝体质的ide，轻量级，即下即用。不过如果你用这个，就别要求什么调试功能了。很多比赛也都提供的是这个，如果你不会配置环境，就用这个吧。

vscode，搭配上cph插件十分的好用，不过你要自己配一下环境。推荐配个wsl，wsl里操作比较方便捏。

vscommunity，太臃肿了，不适合算竞，一般开发用。

clion，我看我队友用的，debug十分的方便。不过你要是想改编译设置什么的，得稍微有点基础。

其他的看oiwiki吧。

### 插件

#### vscode插件

🥳cph judge。更方便测试样例。搭配上[一键拉取题目](https://github.com/jmerle/competitive-companion)一键把题目用例拉取到vscode。

#### 浏览器插件

🥳[Codeforces better](https://chromewebstore.google.com/detail/codeforces-better-comment/dmkcpaljgkhdcachgfmplaoldejhafgn)， [AtCoder better](https://greasyfork.org/en/scripts/471106-atcoder-better)。提供页面翻译，题目翻译。让你使用Codeforces和AtCoder时更加舒心。

🥳[力扣插件](https://github.com/XYShaoKang/refined-leetcode)实时预测周赛分，黑名单等功能。

#### 安卓/windows应用

🥳[ojhelper](https://github.com/2754LM/oj_helper)，查询各大oj近期比赛，获取你的Rating和题量，由于是本人开发，强烈推荐！

🥳[CodeforcesContestHelper](https://github.com/CodeforcesContestHelper/CCHv2)功能很多，都是Codeforces相关。
