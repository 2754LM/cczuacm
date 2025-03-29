# 第一场集训题解

## A [Stair, Peak, or Neither?](https://codeforces.com/group/X3xH4iIOfS/contest/599687/problem/A)

很简单，if判断即可。

```cpp
int a,b,c;
cin>>a>>b>>c;
if(a < b && c < b) cout<<"PEAK"<<endl;
else if(a < b && b < c) cout<<"STAIR"<<endl;
else cout<<"NONE"<<endl; 
```

## B [Upscaling](https://codeforces.com/group/X3xH4iIOfS/contest/599687/problem/B)

for循环枚举，随便怎么if判断，只要满足奇偶性就行了。

```cpp
int n;
cin>>n;
for(int i = 1; i <= n*2; i++){
    for(int j = 1; j <= n*2; j++){
        if(((i+1)/2) % 2){
            if(((j+1)/2) % 2){
                cout<<'#'; 
            }else{
                cout<<'.'; 
            }
        }else{
            if(((j+1)/2) % 2){
                cout<<'.'; 
            }else{
                cout<<'#'; 
            }
        }
    }
    cout<<endl;
}
```

## C [Clock Conversion](https://codeforces.com/group/X3xH4iIOfS/contest/599687/problem/C)

分类讨论就行，不过不会有人和我一样分不清24点和0点吧。

```cpp
string s;
cin>>s;
string h = s.substr(0, 2);
string min = s.substr(3, 2);
int time = stoi(h);
if(time == 0){
    cout<<"12:"<<min<<" AM";
}else if(time == 12){
    cout<<"12:"<<min<<" PM";
}else if(time <= 12){
    cout<<h<<":"<<min<<" AM";
}else{
    time -= 12;
    h = to_string(time);
    if(h.size() == 1) h = "0" + h; 
    cout<<h<<":"<<min<<" PM";
}
cout<<endl;
```

## D [Product of Binary Decimals](https://codeforces.com/group/X3xH4iIOfS/contest/599687/problem/D)

注意数据范围 $10^5$，这个范围的**二进制十进制数**并不是很多。一共6位，我们枚举每一位 01 情况，那么也只有 64 种。

然后我们从这 64 种里面选取可重复的任意个数，要求乘积等于 $n$ 。除去最小的数字 $1$，次小的数是 $10$。那么最多 5 次相乘，就会超过 $n$ 的范围。所以所有数能组成的n并不会特别多，可以提前预处理。先跑出所有**二进制十进制数**，然后再枚举他们的组合情况。可以直接放set里去重。

详细复杂度证明看可以[cf题解](https://codeforces.com/blog/entry/127664)。

当然也可以提前跑出**二进制十进制数**，然后遇到每个 $n$ 的时候，去枚举他的除数，能被除就尽量除。

```cpp
set<ll> st;
void dfs(string& s, int start) {
    int len = s.size();
    st.insert(stoi(s));
    for (int i = start; i < len; i++) {
        s[i] = '1';
        dfs(s, start + 1);
        s[i] = '0';
    }
}
int main() {
    ios::sync_with_stdio(0);
    cin.tie(0), cout.tie(0);
    vector<string> v = {"10", "100", "1000", "10000", "100000"};
    for (auto s : v) {
        dfs(s, 1);
    }
    for (auto i : st) {
        for (auto j : st) {
            ll cur = i * j;
            while (cur <= 100000) {
                st.insert(cur);
                cur *= j;
            }
        }
    }
    int T;
    cin >> T;
    while (T--) {
        int n;
        cin >> n;
        if (st.count(n) || n == 1)
            cout << "YES" << endl;
        else
            cout << "NO" << endl;
    }
    return 0;
}
```

## E [Nearly Shortest Repeating Substring](https://codeforces.com/group/X3xH4iIOfS/contest/599687/problem/E)

首先翻译一下题意，给定长度为  $n$ 的字符串 $s$，你要构造出一个字符串 $t$，$t$ 可以拼接在 $t$ 后面任意次，最后要和 $s$ 长度相同，且最多有一个位置不同。

那么先看长度相同的条件，设 $t$ 长度为 $m$，那么容易有 $n\%m == 0$。所以我们可以先枚举 $m$，然后想象一下 $s$ 被切成了 $x$ 段，由于至多只有一个位置不同，那么如果要满足答案，这个 $t$ 只能是第一段或第二段之一。然后枚举检测就行。复杂度大概估算一下，$10^5 \times$ 因子数(100左右)。肯定小于 $10^8$。

```cpp
int dif(string a, string b){
	int sum = 0;
	for(int i = 0; i < a.size(); i++){
		if(a[i] != b[i]) sum++;
	}
	return sum;
}
int main(){
	ios::sync_with_stdio(0);
	cin.tie(0), cout.tie(0);
	int T;
	cin>>T;
	while(T--){
		int n;
		cin>>n;
		string s;
		cin>>s;
		int ans;
		for(int i = 1; i <= n; i++){
			int jud = 0;
			if(n % i == 0){
				string a,b,c,cur;
				a = s.substr(0, i);
				if(i*2 <= n) b = s.substr(i, i);
				if(i*3 <= n) c = s.substr(i*2, i);
				if(i*3 <= n){
					if(a == b || a == c) cur = a;
					else if(b == a || b == c) cur = b;
					else if(c == a || c == b) cur = c;
					else continue;
				}else{
					cur = a;
				}
				bool flag = 0;
				for(int j = 0; j < n; j += i){
					string tmp = s.substr(j, i);
					if(tmp != cur){
						if(jud == 1 || dif(cur, tmp) > 1){
							flag = 1;
							break;
						}else{
							jud = 1;
						}
					}
				}
				if(flag == 0){
					ans = i;
					break;
				}
			}
		}
		cout<<ans<<endl;
	} 
	return 0;
}
```

## F [0, 1, 2, Tree!](https://codeforces.com/group/X3xH4iIOfS/contest/599687/problem/F)

挺有意思的一道题，大意就是你要构造出一个有 $n$ 个节点的数，满足 $a+b+c = n$。

- $a$ 个节点有两个子节点(1类型)
- $b$ 个节点有一个子节点(2类型)
- $c$ 个节点没有子节点(3类型)

我们考虑从根节点构造一颗树，假如现在只有一个节点，那么我们只有1个类型3的节点。

如果我们为当前根节点添加一个子节点，那么情况就变成了，有1个类型3和1个类型2。

如果添加两个子节点，那么就变成了有2个类型3和1个类型1。

所以我们每产生一个类型1，就会多产生一个类型3。算上初始的类型3，那么就有 $c = a+1$。如果不满足这个条件，我们就无法构成树。反之则一定可以，因为类型2可以自我消耗。

然后题目要求高度最小，我们应该尽量生成两个子节点，这样消耗节点数更快。当类型1的数量满足后，我们再去生成一个子节点，构造类型2。

具体的减小过程就是建一个数，可以手画看看。

```cpp
int a, b, c;
cin >> a >> b >> c;
if (a + 1 != c) {
    cout << -1 << endl;
    return;
}
int len = 0;
int num = 1;
while (a) {
    if (a >= num) {
        a -= num;
        num *= 2;
    } else {
        int sum = num + a;
        num -= a;
        a = 0;
        if (num) {
            int cur = min(b, num);
            b -= cur;
            num -= cur;
        }
        if (num) {
            int cur = min(c, num);
            c -= cur;
            num -= cur;
        }
        num = sum;
    }
    len++;
}
while (b > 0) {
    b -= num;
    len++;
}
cout << len << endl;
```

## G [Shuffling Songs](https://codeforces.com/group/X3xH4iIOfS/contest/599687/problem/G)

注意数据范围， $n$ 最大16，这个数据范围就很状压dp。

我们把歌曲状态压缩，假如有5首歌曲，我们可以用二进制表示。

11111代表5首歌曲全部选择，10011代表删除第2,3首歌曲。

dp初始化：只选1个歌曲，或者全不选肯定是满足的。

dp定义：两维，第一维表示选择情况，第二维表示最后选择的歌曲。

递推顺序：第一维枚举状态，然后枚举两个歌曲能不能拼接。注意第一个歌曲要是当前状态选择的最后一个，然后用这首去拼接没拼接过的歌曲。

```cpp
cin>>n;
for(int i=0;i<n;i++)cin>>G[i]>>W[i];
for(int i=0;i<n;i++){
    for(int j=0;j<n;j++){
        OK[i][j]= (G[i]==G[j]) || (W[i]==W[j]);
    }
}
for(int i=0;i<1<<n;i++){
    for(int j=0;j<n;j++) dp[i][j]=false;
}
for(int i=0;i<n;i++) dp[1<<i][i]=true;
int ans=0;
for(int i=1;i<(1<<n);i++){
    for(int j = 0; j < n; j++){
        if(!dp[i][j]) continue;
        ans=max(ans,__builtin_popcount(i));
        for(int k=0;k<n;k++){
            if(!((i>>k)&1)&&OK[j][k])	dp[i|1<<k][k]=true;
        }
    }
}
cout<<n-ans<<"\n";
```

