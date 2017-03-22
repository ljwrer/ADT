/**
 * Created by Ray on 2017/3/22.
 */
const Null = require('../util/empty').Null;
class Collection extends Null{
    constructor(maxSize,set){
        super();
        this.set = set;
    }
    find(item){
        let i;
        for ( i=0; i < this.set.length && this.set[i].data!==item;i++){};
        if( i >=  this.set.length) return -1; /* 未找到X， 返回-1 */
        while(this.set[i].parent >= 0){
            i = this.set[i].parent
        }
        return i
    }
    static union(c,x1,x2){
        let r1 = c.find(x1);
        let r2 = c.find(x2);
        if( r1 !== r2 ){
            if(Math.abs(r1.parent)>Math.abs(r2.parent)){
                r2.parent = r1
            }else {
                r1.parent = r2
            }
        }
    }
}
