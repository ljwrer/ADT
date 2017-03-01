/**
 * Created by Ray on 2017/2/28.
 */
const empty = function (fn) {
    fn.prototype = Object.create(null,{
        "constructor": {
            value: fn,
            configurable:true,
            enumerable:false,
            writable:true
        }
    })
};
function Null() {}
empty(Null);
function SubNull(a) {
    Null.apply(this,Array.from(arguments));
    this.a = a;
}
SubNull.prototype = Object.create(Null.prototype,{
    "constructor": {
        value: SubNull,
        configurable:true,
        enumerable:false,
        writable:true
    }
});
const subNullObject = new SubNull(1);
console.log(`subNullObject:${subNullObject.a}`);
class SubNull2 extends Null{
    constructor(a){
        super();
        this.a =a;
    }
}
const subNullObject2 = new SubNull2(1);
console.log(`subNullObject2:${subNullObject2.a}`);



empty.Null = Null;
module.exports = empty;
