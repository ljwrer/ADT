/**
 * Created by Ray on 2017/5/3.
 */
/**
 * use lsd for radix sort
 * @type {[*]}
 */
const faces = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const flowerColor = ['A','B','C','D'];
const poker = faces.map(face=>flowerColor.map(color=>color+face)).reduce((prev,next)=>prev.concat(next),[]);
const faceContainer = new Map();
const flowerContainer = new Map();
faces.forEach(face=>{
    faceContainer.set(face,[])
});
flowerColor.forEach(color=>{
    flowerContainer.set(color,[])
});
poker.forEach(card=>{
    faceContainer.get(parseInt(card.slice(1))).push(card)
});
let result = [];
for(let [face,cards] of faceContainer){
    cards.forEach(card=>{
        flowerContainer.get(card.slice(0,1)).push(card)
    })
}
for (let [color,cards] of flowerContainer){
    result = result.concat(cards)
}
console.log(result);


