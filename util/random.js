/**
 * Created by Ray on 2017/3/22.
 */
const random = function (min =0 ,max = 100) {
    return min+Math.random()*(max-min)
};
random.int = function (...args) {
    return parseInt(random.apply(null,args))
}
module.exports = random;

