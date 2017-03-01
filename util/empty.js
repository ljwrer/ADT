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
empty.Null = Null;
module.exports = empty;
