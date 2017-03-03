/**
 * Created by Ray on 2017/3/3.
 */
const Null = require('../util/empty').Null;
class TreeNode extends Null{
    constructor(data,left = null,right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
