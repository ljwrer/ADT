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
module.exports = empty;
