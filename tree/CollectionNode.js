/**
 * Created by Ray on 2017/3/22.
 */
const Null = require('../util/empty').Null;
class CollectionNode extends Null{
    constructor(data,parent=null){
        super();
        this.data = data;
        this.parent = parent;
    }
}
