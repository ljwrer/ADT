/**
 * Created by Ray on 2017/3/22.
 */
const TreeNode = require('../tree/TreeNode');
const MinHeap = require('../tree/MinHeap');
const Null = require('../util/empty').Null;
/**
 * 带权路径长度(WPL)： 设二叉树有n个叶子结点，每个叶子结点带
 * 有权值 wk，从根结点到每个叶子结点的长度为 lk，每个叶子结
 * 点的带权路径长度之和
 * 最优二叉树或哈夫曼树: WPL最小的二叉树
 */
class HuffmanTree extends Null{
    constructor(list){
        super();
        this.minHeap = new MinHeap().create(list)
    }
    create(){
        for (let i=0;i<this.minHeap.size;i++){
            const T = new TreeNode();
            T.left = this.minHeap.deleteMin();
            T.right = this.minHeap.deleteMin();
            T.data = T.left.data+T.right.data;
            this.minHeap.insert(T)
        }
    }
}
