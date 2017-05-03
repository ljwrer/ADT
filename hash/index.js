/**
 * Created by Ray on 2017/5/3.
 */
/**
 * hash(attrName) => number
 *
 *
 */
const hash = (str,tableSize=10e8)=>{
    let h = 0;
    let i = 0;
    while (i<str.length){
        h = (h<<5)+str.charCodeAt(i++)
    }
    return h%tableSize
};

