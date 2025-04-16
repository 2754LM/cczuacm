# 小白月赛111题解

也可以[在此阅读](https://ac.nowcoder.com/discuss/1464410)。

## A 田忌赛马

考点：简单计算

田忌速度快的两匹马>齐威王速度小的两匹马即可。

```cpp
void solve() {
    vector<int> a(3), b(3);
    for (int i = 0; i < 3; i++) cin >> a[i];
    for (int i = 0; i < 3; i++) cin >> b[i];
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    if (b[1] > a[0] && b[2] > a[1])
        cout << "Yes" << endl;
    else
        cout << "No" << endl;
}
```

## B 正/邪

考点：思维，贪心

记正义为 $1$，邪恶为 $-1$。只有一种情况有收益，即-1-1合成1。从左往右遍历一遍统计即可。

```cpp
void solve() {
    int n;
    cin >> n;
    string s;
    cin >> s;
    int ans = 0;
    for (auto i : s)
        if (i == 'y') ans++;
    for (int i = 1; i < n; i++) {
        if (s[i] == 'n' && s[i - 1] == 'n') {
            ans++;
            i++;
        }
    }
    cout << ans << endl;

```

## C 复读姬

考点：模拟/滑动窗口

### 模拟写法

统计出所有连续复读消息的长度，并记录每两段间的距离。当两段距离为1时，可以撤回中间的消息，让他们合并成一段。

最优解即max(不进行合并的最长长度，合并后的最长长度)。

```cpp
const int N = 1e5 + 5;
string s[N];
int pre[N], suf[N];
void solve() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        cin >> s[i];
    }
    pre[1] = 1;
    for (int i = 2; i <= n; i++) {
        if (s[i] == s[i - 1]) {
            pre[i] = pre[i - 1] + 1;
        } else
            pre[i] = 1;
    }
    suf[n] = 1;
    int ans = 0;
    for (int i = n - 1; i >= 1; i--) {
        if (s[i] == s[i + 1]) {
            suf[i] = suf[i + 1] + 1;
        } else
            suf[i] = 1;
    }
    for (int i = 2; i < n; i++) {
        if (s[i - 1] == s[i + 1]) ans = max(ans, pre[i - 1] + suf[i + 1]);
    }
    for (int i = 1; i <= n; i++) {
        ans = max({ans, pre[i], suf[i]});
    }
    cout << ans;
}
```

### 滑动窗口写法

用个哈希表维护区间字符串种类，加一些细节处理即可。

```cpp
void solve() {
    int n;
    cin >> n;
    vector<string> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    map<string, int> mp;
    int l = 0, ans = 1;
    for (int r = 0; r < n; r++) {
        mp[v[r]]++;
        while ((min(mp.begin()->second, mp.rbegin()->second) > 1 && mp.size() == 2) ||
               mp.size() > 2) {
            mp[v[l]]--;
            if (mp[v[l]] == 0) mp.erase(v[l]);
            l++;
        }
        if (mp.size() == 2)
            ans = max(ans, r - l);
        else
            ans = max(ans, r - l + 1);
    }
    cout << ans << endl;
}
```

## D 收集金币

考点：dp

如果没有变成墙壁的条件，就是很经典的一道入门DP，公式 $dp[i][j] = max(dp[i][j-1], dp[i-1][j]) + val[i][j]$

由于只能向右和下移动，记左上角坐标 $(1,1)$，那么到达点 $(i,j)$ 的回合一定是 $i-1+j-1$。如果变成墙壁是在这个回合及之后，那么就可以直接通过，反之点权赋极小值即可。

```cpp
const ll N = 1e3 + 5;
ll dp[N][N], a[N][N];
ll tag[N][N];
void solve() {
    ll n, m;
    cin >> n >> m;
    for (ll i = 1; i <= n; i++) {
        for (ll j = 1; j <= m; j++) cin >> a[i][j];
    }
    for (ll i = 0; i <= n; i++) {
        for (ll j = 0; j <= m; j++) {
            dp[i][j] = -1e9;
            tag[i][j] = 1e9;
        }
    }
    dp[0][1] = 0;
    ll k;
    cin >> k;
    for (ll i = 1; i <= k; i++) {
        ll x, y, v;
        cin >> x >> y >> v;
        tag[x][y] = v;
    }
    for (ll i = 1; i <= n; i++) {
        for (ll j = 1; j <= m; j++) {
            if (i + j - 2 >= tag[i][j]) a[i][j] = -1e14;
        }
    }
    ll ans = 0;
    for (ll i = 1; i <= n; i++) {
        for (ll j = 1; j <= m; j++) {
            dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) + a[i][j];
            ans = max(ans, dp[i][j]);
        }
    }
    cout << ans << endl;
}
```

## E 构造矩形

考点：二分，前缀和

可以发现任意矩形必然存在一条边的长度，等于两条线段 $a_{i},a_{j}(i<j)$之间的距离，即 $a_j-a_i$。

${那么以a_{j}-a_{i}为长可以构成\left\{
\begin{aligned}
&m-(a_{j}-a_{i}-k)+1&  \\
&0&
\end{aligned}
\right.个矩形} $。

${以a_{j}-a_{i}为宽可以构成\left\{
\begin{aligned}
&m-(a_{j}-a_{i}+k)+1& \\
0
\end{aligned}
\right.}个矩形$。

最后的答案就是：

$${\sum\limits_{i=1}^{n}\sum\limits_{\substack{j=i+1\\m-(a_{j}-a_{i}+k)+1>0}}^{n}(m-(a_{j}-a_{i}+k)+1)+\sum\limits_{i=1}^{n}\sum\limits_{\substack{j=i+1\\m-(a_{j}-a_{i}-k)+1>0\\ a_{j}-a_{i}>k}}^{n}(m-(a_{j}-a_{i}-k)+1)}$$

$${\sum\limits_{i=1}^{n}\sum\limits_{j=i+1}^{r_{i}}(m-(a_{j}-a_{i}+k)+1)}+{\sum\limits_{i=1}^{n}\sum\limits_{j=L_{i}}^{R_{i}}(m-(a_{j}-a_{i}-k)+1)}$$

其中 $r_i$ 是使得 $m-(a_{j}-a_{i}+k)+1>0$ 成立的 $j$ 的最大值，$L_i$ 是使得 $a_{j}-a_{i}>k$ 成立的最小值，$R_i$ 是使得 $m-(a_{j}-a_{i}-k)+1>0$ 成立的最大值，都需要通过二分求得。

$${\sum\limits_{i=1}^{n}(r_{i}-i)*(m+a_{i}-k+1)-\sum\limits_{j=i}^{r_{i}}a_{j}+\sum\limits_{i=1}^{n}(R_{i}-L_{i}+1)*(m+a_{i}+k+1)-\sum\limits_{i=L_{i}}^{R_{i}}a_{j}}$$

${对于 \sum{a_j} 项的处理，使用前缀和维护即可}$。

```cpp
void solve(){
    int n,m,k;
    cin >> n >> m >> k;
    vector<int>a(n+1);
    vector<ll>sum(n+1);
    ll ans=0;
    for(int i=1;i<=n;i++) cin >> a[i];
    for(int i=1;i<=n;i++) sum[i]=sum[i-1]+a[i];
    for(int i=1;i<=n;i++){
        int r=lower_bound(a.begin(),a.end(),m+a[i]-k+1)-a.begin();
        r--;
        int L=upper_bound(a.begin(),a.end(),a[i]+k)-a.begin();
        int R=lower_bound(a.begin(),a.end(),m+a[i]+k+1)-a.begin();
        R--;
        ans+=1LL*(r-i)*(m+a[i]-k+1)-(sum[r]-sum[i]);
        if(R>=L) ans+=1LL*(R-L+1)*(m+a[i]+k+1)-(sum[R]-sum[L-1]);
    }
    cout << ans << "\n";
}
```

## F 最快相同

考点：数论，exgcd

每次选择${k}$个数减少1,最后使得所有数字相等,问最少操作次数,等价于找到一个最大数${x}$，使得

 ${\sum_{i=1}^{n} (a_{i}-x) \ mod \ k=0 }$

 ${\max_{i=1}^{n}(a_{i}-x)<=\frac{\sum_{i=1}^{n} (a_{i}-x)}{k} }$

 ${x<=\min_{i=1}^{n}a_{i}}$
对于第一个式子可以用${exgcd}$来找到符合条件的最小正整数解，如果不存在正整数解，那么该序列则无解，如果仍然不满足第二个式子,则按照${lcm(n,k)/n}$的比例减少${x}$,这样等式左边每次增加${lcm(n,k)/n}$，等式右边每次增加${lcm(n,k)/k}$,由于${k<=n}$,那么在${k=n}$的情况除外，式2右边的增加速率大左边，那么一定可以找到一个${x}$满足上述式子。

```cpp
const ll mod=1e9+7;
const ll inf=1<<30;
const db eps=1e-10;
const int N=5e5+5;
int dx[8]={0,0,1,-1,1,1,-1,-1};
int dy[8]={1,-1,0,0,1,-1,1,-1};
ll exgcd(ll a,ll b,ll &x,ll &y){
    if(b==0){ 
        x=1;
        y=0;
        return a;
    }
    ll d=exgcd(b,a%b,y,x);
    y-=a/b*x;
    return d;
}
void solve(){
    ll n,k;
    cin >> n >> k;
    vector<ll>arr(n);
    for(int i=0;i<n;i++){
        cin >> arr[i];
    }
    if(n==1){
        cout << 0 << "\n";
        return;
    }
    ll mn=*min_element(arr.begin(),arr.end());
    ll tot=accumulate(arr.begin(),arr.end(),0LL);
    ll Ned=*max_element(arr.begin(),arr.end())-*min_element(arr.begin(),arr.end());
    if(Ned==0){
        cout << 0 << "\n";
        return;
    }
    if(k==n){
        cout << -1 << "\n";
        return;
    }
    ll a,b,c;
    a=k;
    b=n;
    c=tot-mn*n;
    ll g=__gcd(a,b);
    if(c%g!=0){
        cout << "-1\n";
        return;
    }
    // a*x+b*y=c;
    ll x=0,y=0;
    exgcd(a,b,x,y);
    ll dx=b/g,dy=a/g;
    c=c/g;
    x*=c,y*=c;
    ll ry;
    if(y>0&&y%dy!=0){
        ry=y%dy;
    }
    else{
        ry=y%dy+dy;
    }
    ry-=dy;
    ll mx=(c-dx*ry)/dy;
    // ry:再往下减多少层
    // mx:第一次减到相等要多少次
    ry=abs(ry);
    ll ans=0;
    ans+=mx;
    Ned+=ry;
    Ned-=mx;
    Ned=max(Ned,0LL);
    dx=abs(dx);
    dy=abs(dy);
    ll dif=(dx-dy);
    ans+=((Ned+(dif-1))/dif)*dx;
    cout << ans << "\n";
}

```

