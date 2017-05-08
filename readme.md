# 算法
最大子列求和:
在线处理（ T( N ) = O( N )）

---

# 线性表
 - 物理结构
	 - 顺序结构
	 - 链式结构
 - 应用
	 - 多项式求值
 - 操作
	 - findKth
	 - find
	 - insert
	 - delete
	 - length
 - 推广
	 - 广义表
		 - 多重链表
			 - 十字链表
			 - 树
			 - 图

## 堆栈
 - 应用
	 - 后缀表达式求值
	 - 函数调用及递归实现
	 - 深度优先搜索
	 - 回溯算法
 - 操作
	 - push
	 - pop
	 - peek
	 - isFull
	 - isEmpty
 - 实现
	 - 顺序
	 - 链式
		 - 插入和删除操作只能在链栈的栈顶进行

## 队列
 - 操作
	 - enQueue
	 - deQueue
 - 实现
	 - 循环队列
		 - 加1取余
	 - 链式
		 - 插入和删除操作分别在链表的两头进行

---

# 树
 - 查找
	 - 二分查找
 - 二叉树
	 - 儿子兄弟表示法

## 二叉树
 - 特殊
	 - 斜二叉树
	 - 完全二叉树
	 - 完整二叉树

 - 实现
	 - 完全二叉树
		 - 顺序结构
	 - 其他
		 - 链式结构
			 - left
			 - right
			 - data

### 遍历

 - 先序
	 - 根左右
 - 中序
	 - 左根右
 - 后序
	 - 左右根
 - 层序
 - 实现
	 - 递归遍历
	 - 非递归遍历
		 - 层序：队列
		 - 其他：堆栈，双堆栈（后序）

### 操作

 - 树高
 - 遍历叶节点

## 二叉搜索树
二叉搜索树：一棵二叉树，可以为空；如果不为空，满足以下性质：
1. 非空左子树的所有键值小于其根结点的键值。
2. 非空右子树的所有键值大于其根结点的键值。
3. 左、右子树都是二叉搜索树

 - 操作
	 - find
		 - 尾递归优化
	 - findMin
		 - 最右端
	 - findMax
		 - 最左端
	 - insert
	 - delete
		 - 替代法

## 平衡二叉树（AVL）
>平衡二叉树（ Balanced Binary Tree）（ AVL树）空树，或者任一结点左、右子树高度差的绝对值不超过1，即|BF(T) |≤ 1

深度和平均查找长度ASL更均衡的二叉搜索树

 - 操作
	 - 旋转
		 - ll
		 - lr
		 - rl
		 - rr

## 堆
>完全二叉树，每个结点的元素值不小于其子结点的元素值


 - 应用
	 - 任务权重调度
	 - 优先队列
 - 逻辑结构
	 - 完全二叉树
 - 物理结构
	 - 顺序表
 - 操作
	 - create
		 - 插入
		 - 调整
	 - isFull
	 - isEmpty
	 - insert
	 - deleteMax/deleteMin
		 - 移动
		 - 调整

## 哈夫曼树
>带权路径长度(WPL)： 设二叉树有n个叶子结点，每个叶子结点带
有权值 wk，从根结点到每个叶子结点的长度为 lk，则每个叶子结
点的带权路径长度之和就是 : WPL
最优二叉树或哈夫曼树: WPL最小的二叉树

根据结点不同的查找频率构造更有效的搜索树
 
 - 操作
	 - create
		 - 最小堆
 - 哈夫曼编码
	 - 不等长编码 
	 - 前缀码：任何字符的编码都不是另一字符编码的前缀

## 集合
 - 逻辑结构
	 - 逆树
 - 物理结构
	 - 二维数组
 - 操作
	 - 交、并、补、差
	 - indexOf
	 - find
	 - Union
		 - 用小的集合合并到相对大的集合中

---

# 图
>G(V,E)由一个非空的有限顶点集合V和一个有限边集合E组成

## 操作
 - Create
 - InsertVertex
 - InsertEdge
 - DFS：从顶点v出发深度优先遍历图G
 - BFS：从顶点v出发宽度优先遍历图G
 - ShortestPath：计算图G中顶点v到任意其他顶点的最短距离
 - MST：计算图G的最小生成树
 
 
## 结构
 - 邻接矩阵（稠密图）
 - 邻接表（稀疏图）


## 遍历
 - BFS
	 - 队列
 - DFS
	 - 数组
	 - 递归

## 最短路径

### 无权图的单源最短路算法
BFS
### 有权图的单源最短路算法
Dijkstra 算法

> Dijkstra 算法
> 令S={源点s + 已经确定了最短路径的顶点vi},对任一未收录的顶点v，定义dist[v]为s到v的最路径长度，但该路径仅经过S中的顶点。即路径{s(vi)v}的最小长度
> 若路径是按照递增（非递减） 的顺序生成的，则
> 真正的最短路必须只经过S中的顶点（为什么？）
> 每次从未收录的顶点中选一个dist最小的收录（贪心）
> 增加一个v进入S，可能影响另外一个w的dist值！
> dist[w] = min{dist[w], dist[v] + <v,w>的权重}
> 不能解决有负边的情况

 - 方法1：直接扫描所有未收录顶点
	 - 稠密图
 - 方法2：将dist存在最小堆中更新dist[w]的值
	 - 稀疏图

###多源最短路算法
 - 直接将单源最短路算法调用|V|遍
	 - 稀疏图
 - Floyd算法
	 - 稠密图




Floyd 算法
>Dk[i][j] = 路径{ i { l  k }  j }的最小长度
>D0, D1, …, D|V|-1[i][j]即给出了i到j的真正最短距离
>最初的D-1是什么？
>当Dk-1已经完成，递推到Dk时：
>或者k不属于最短路径{ i  { l  k }  j }，则Dk = Dk-1
>或者k属于最短路径{ i  { l  k }  j }，则该路径必定由两段最短路径组成： Dk[i][j]=Dk-1[i][k]+Dk-1[k][j]

## 最小生成树
 - Prim
	 - 贪心
	 - 让一棵小树长大
	 - Dijkstra
 - Kruskal
	 - 将森林合并成树
	 - 最小堆
	 - 并查集

## 拓扑排序
>拓扑序：如果图中从V到W有一条有向路径，则V一定排在W之前。满足此条件的顶点序列称为一个拓扑序
>获得一个拓扑序的过程就是拓扑排序
>AOV如果有合理的拓扑序，则必定是有向无环图（ Directed Acyclic Graph, DAG）

将入度变为0的顶点放到一个容器里,队列实现

### 关键路径问题

---

# 排序
消除逆序对
## 简单排序
 - 冒泡排序
	 - 适合链表
 - 插入排序
	 - 初始有序


## 希尔排序
>定义增量序列 DM > DM-1 > … > D1 = 1
对每个 Dk 进行“Dk-间隔”排序( k = M, M-1, … 1 )
“Dk-间隔”有序的序列，在执行“Dk-1-间隔”排序后，仍然是“Dk-间隔”有序的

 - 希尔增量序列
	 - 原始希尔排序 DM =  N / 2  , Dk =  Dk+1 / 2 
	 - Hibbard 增量序列 Dk = 2k – 1 相邻元素互质
	 - Sedgewick增量序列9*4i – 9*2i + 1 或 4i – 3*2i + 1

## 堆排序
使用堆进行选择排序，虽然堆排序给出最佳平均时间复杂度，但实际效果不如用Sedgewick增量序列的希尔排序

## 归并排序
稳定排序
有序子列的归并

 - 递归算法
	 - 分而治之
 - 非递归算法
	 - 两倍空间

## 快速排序
分而治之
### 选主元
取头、中、尾的中位数
### 子集划分
如果有元素正好等于pivot，停下来交换

### 小规模数据的处理
当递归的数据规模充分小，则停止递归，直接调用简单排序（例如插入排序）
在程序中定义一个Cutoff的阈值

## 表排序
不做物理排序，使用表来记录排序结果

### 物理排序
N个数字的排列由若干个独立的环组成

## 基数排序
#### 桶排序
### LSD(次位优先)
应用：多关键字的排序

## 排序算法比较
![](http://7xkcnd.com1.z0.glb.clouddn.com/sort.png)

---

# 散列表
##  散列查找
计算位置：构造散列函数确定关键词存储位置；
解决冲突：应用某种策略解决多个关键词位置相同的问题
时间复杂度:O(1)

### HashTable

 - 逻辑结构
	 - name->attr
 - 操作
	 - init
	 - isIn
	 - find
	 - modefy
	 - insert
	 - delete

## 散列函数
 - 直接定址法
	 - h(key) = a * key + b
 - 除留余数法
	 - h(key) = key mod p
	 - p 取素数
 - 数字分析法
	 - 分析数字关键字在各位上的变化情况，取比较随机的位作为散列地址
	 - 如： 取11位手机号码key的后4位作为地址
		 - h(key) = atoi(key+7)
 - 折叠法
	 - 把关键词分割成位数相同的几个部分，然后叠加
 - 平方取中法

#### 字符关键词的散列函数
 - ASCII码加和法
 - 前3个字符移位法
 - 移位法


	const hash = (str)=>{
	    let h = new Uint32Array([0])[0];
	    let i = 0;
	    while (i<str.length){
	        h = (h<<5)+str.charCodeAt(i++)
	    }
	    return Math.abs(h%table.length)
	};


## 冲突处理

### 开放地址法
散列表是一个数组，存储效率高，随机查找。
散列表有“聚集”现象

 - 线性探测
	 - di=i
 - 平方探测
	 - di=i2
 - 双散列
	 - di=i*h2(key)
	 - 如 h2(key) = p - (key mod p)
 - 再散列
	 - 扩大散列表
	 - 降低装填因子
	 - 提高查找效率


### 链地址法
散列表是顺序存储和链式存储的结合，链表部分的存储效率和查找效率都比较低。
太小的α可能导致空间浪费，大的α又将付出更多的时间代价。
不均匀的链表长度导致时间效率的严重下降。

 - 分离链接法：相应位置上冲突的所有关键词存储在同一个单链表中

### 性能分析

 - 成功平均查找长度(ASLs)
 - 不成功平均查找长度 (ASLu)
