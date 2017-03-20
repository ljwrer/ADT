/**
 * Created by Ray on 2017/3/20.
 */
const TreeNode = require('./TreeNode');
/**
 * BinarySearchTree
 * 二叉搜索树：一棵二叉树，可以为空；如果不为空，满足以下性质：
 1. 非空左子树的所有键值小于其根结点的键值。
 2. 非空右子树的所有键值大于其根结点的键值。
 3. 左、右子树都是二叉搜索树。
 */
const findByRecursion = function (BST, item) {
    if (BST) {
        if (BST.data === item) {
            return BST
        } else if (item < BST.data) {
            return findByRecursion(BST.left, item)
        } else {
            return findByRecursion(BST.right, item)
        }
    }
    return null
};
/**
 * 树高log(n)
 * @param BST
 * @param item
 * @returns {*}
 */
const find = function (BST, item) {
    let T = BST;
    while (T) {
        if (T.data === item) {
            return T
        } else if (item < T.data) {
            T = T.left
        } else {
            T = T.right
        }
    }
    return null
};
/**
 * 最大元素一定是在树的最右分枝的端结点上
 * @param BST
 */
const findMaxByRecursion = function (BST) {
    if (BST) {
        if (BST.right) {
            return findMax(BST.right)
        } else {
            return BST
        }
    } else {
        return null
    }
};
const findMax = function (BST) {
    let T = BST;
    while (T) {
        if (T.right) {
            T = T.right;
        } else {
            return T
        }
    }
    return null
};
/**
 * 最小元素一定是在树的最左分枝的端结点上
 * @param BST
 */
const findMinByRecursion = function (BST) {
    if (BST) {
        if (BST.left) {
            return findMinByRecursion(BST.left)
        } else {
            return BST
        }
    }
    return null
};
const findMin = function (BST) {
    let T = BST;
    while (T) {
        if (T.left) {
            T = T.left;
        } else {
            return T
        }
    }
    return null
};
const insertByRecursion = function (BST, item) {
    if (!BST) {
        BST = new TreeNode(item)
    } else if (item < BST.data) {
        BST = insertByRecursion(BST.left, item)
    } else {
        BST = insertByRecursion(BST.right, item)
    }
    return BST
};
const deleteTreeNode = function (BST, item) {
    if (!BST) {
        console.log('not found')
    } else {
        let temp;
        if (item < BST.data) {
            BST.left = deleteTreeNode(BST.left, item)
        } else if (item > BST.data) {
            BST.right = deleteTreeNode(BST.right, item)
        }else {
            if(BST.left&&BST.right){
                temp = findMin(BST.right);
                BST.data = temp.data;
                BST.right = deleteTreeNode(BST,BST.data)
            }else {
                temp = BST;
                if(!BST.left){
                    BST = BST.right;
                }else if(!BST.right){
                    BST = BST.left;
                }
                temp = null
            }
        }
    }
    return BST
};

