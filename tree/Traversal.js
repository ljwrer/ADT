/**
 * Created by Ray on 2017/3/16.
 */
/*
 * 1.访问根节点
 * 2.先序遍历左子树
 * 3.先序遍历右子树
 * */
const Stack = require('../linearStructure/Stack');
const Queue = require('../linearStructure/Queue');
const preOrderTraversal = function (BT) {
    if (BT) {
        console.log(BT.data);
        preOrderTraversal(BT.left);
        preOrderTraversal(BT.right);
    }
};

/**
 ① 中序遍历其左子树；
 ② 访问根结点；
 ③ 中序遍历其右子树
 * @param BT
 * @constructor
 */
const InOrderTraversal = function (BT) {
    if (BT) {
        InOrderTraversal(BT.left);
        console.log(BT.data);
        InOrderTraversal(BT.right);
    }
};
/**
 * ① 后序遍历其左子树；
 ② 后序遍历其右子树；
 ③ 访问根结点。
 * @param BT
 * @constructor
 */
const PostOrderTraversal = function (BT) {
    if (BT) {
        PostOrderTraversal(BT.left);
        PostOrderTraversal(BT.right);
        console.log(BT.data);
    }
};
const preOrderTraversalByStack = function (BT) {
    let T = BT;
    const stack = new Stack(100);
    while (T && !stack.isEmpty()) {
        while (T) {
            console.log(T.data);
            stack.push(T);
            T = T.left;
        }
        if (!stack.isEmpty()) {
            T = stack.pop();
            T = T.right;
        }
    }
};
const InOrderTraversalByStack = function (BT) {
    let T = BT;
    const stack = new Stack(100);
    while (T && !stack.isEmpty()) {
        while (T) {
            stack.push(T);
            T = T.left;
        }
        if (!stack.isEmpty()) {
            T = stack.pop();
            console.log(T.data);
            T = T.right;
        }
    }
};
const PostOrderTraversalByStack = function (BT) {
    let T = BT;
    const parentStack = new Stack(100);
    let lastNodeVisited = null;
    while (T || !parentStack.isEmpty()) {
        if (T) {
            parentStack.push(T);
            T = T.left
        } else {
            let pT = parentStack.peek();
            if (pT.right !== null && lastNodeVisited !== pT.right) {
                T = pT.right
            } else {
                console.log(pT);
                lastNodeVisited = parentStack.pop();
            }
        }
    }
};
const LevelOrderTraversal = function (BT) {
    let q = new Queue(100);
    let T = BT;
    q.addQ(T);
    while (!q.isEmpty()) {
        T = q.deleteQ();
        console.log(T.data);
        if (T.left) {
            q.addQ(T.left);
        }
        if (T.right) {
            q.addQ(T.right);
        }
    }
};
