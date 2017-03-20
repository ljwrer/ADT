/**
 * Created by Ray on 2017/3/20.
 */
/**
 * 遍历二叉树的应用：输出二叉树中的叶子结点。
 * 在二叉树的遍历算法中增加检测结点的“左右子树是否都为空”。
 */
const preOrderPrintLeaves = function (BT) {
    if(BT){
        if(!BT.left&&!BT.right){
            console.log(BT.data)
        }
        preOrderPrintLeaves(BT.left)
        preOrderPrintLeaves(BT.right)
    }
};
/**
 * 求二叉树的高度
 */
const postOrderGetHeight = function (BT) {
    if(BT){
        return 1 + Math.max(postOrderGetHeight(BT.left)+postOrderGetHeight(BT.right))
    }else {
        return 0
    }
};

