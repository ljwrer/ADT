/**
 * Created by Ray on 2017/3/1.
 */
const LinkedList = require('./LinkedList');
class Term{
    constructor(coef,expon){
        this.coef = coef;
        this.expon = expon
    }
    static add(t1,t2){
        return new Term((t1.coef+t2.coef),t1.expon)
    }
    static compare(t1,t2){
        let ret = 0;
        if(t1.expon > t2.expon){
            ret = 1
        }else if(t1.expon < t2.expon){
            ret = -1
        }
        return ret
    }
    static attach(term,poly){
        const len = poly.Length();
        poly.insert(term,len+1)
    }
}
const polyAdd = function (p1,p2) {
    const result = new LinkedList();
    while (p1.head.next&&p2.head.next){
        switch (Term.compare(p1.head.next.data,p2.head.next.data)){
            case 1:
                Term.attach(p1.head.next.data,result);
                p1.head = p1.head.next;
                break;
            case -1:
                Term.attach(p2.head.next.data,result);
                p2.head = p2.head.next;
                break;
            case 0:
                const sum = p1.head.next.data.coef + p2.head.next.data.coef;
                if(sum){
                    const term = Term.add(p1.head.next.data,p2.head.next.data);
                    Term.attach(term,result);
                }
                p1.head = p1.head.next;
                p2.head = p2.head.next;
                break;
            default:
                break;
        }
    }
    while (p1.next){
        Term.attach(p1.head.next.data,result);
        p1.head = p1.head.next;
    }
    while (p2.next){
        Term.attach(p2.head.next.data,result);
        p2.head = p2.head.next;
    }
    return result
};
/**
 * 3x^3+2x^2+x+1
 * x^4+x+2
 */
const p1 = new LinkedList();
p1.insert(new Term(3,3),1);
p1.insert(new Term(2,2),2);
p1.insert(new Term(1,1),3);
p1.insert(new Term(1,0),4);
const p2 = new LinkedList();
p2.insert(new Term(1,4),1);
p2.insert(new Term(1,1),2);
p2.insert(new Term(2,0),3);
const result = polyAdd(p1,p2);
console.log(result);
