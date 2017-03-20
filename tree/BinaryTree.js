/**
 * Created by Ray on 2017/3/3.
 */
const Null = require('../util/empty').Null;
class BinaryTree extends Null{
    constructor(data,left = null,right = null){
        super();
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
module.exports = BinaryTree;
