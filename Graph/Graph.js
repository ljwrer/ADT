/**
 * Created by Ray on 2017/3/23.
 */
const initializeColor = (vertices) => {
    const color = new Map();
    vertices.forEach(vertical => {
        color.set(vertical, 'white')
    });
    return color
};

class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Map();
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    addEdge(v, w, directed = false) {
        this.adjList.get(v).push(w);
        if (!directed) {
            this.adjList.get(w).push(v)
        }
    }

    toString() {
        let ret = '';
        for (let i = 0; i < this.vertices.length; i++) {
            let vertical = this.vertices[i];
            ret += vertical + ' -> ';
            let adj = this.adjList.get(vertical);
            for (let i = 0; i < adj.length; i++) {
                ret += adj[i] + ' '
            }
            ret += '\n'
        }
        return ret
    }

    bfs(v, cb) {
        const color = initializeColor(this.vertices);
        const q = [];
        q.unshift(v);
        while (q.length > 0) {
            const vertical = q.pop();
            color.set(vertical, 'gray');
            const neighbors = this.adjList.get(vertical);
            neighbors
                .filter(neighbor => color.get(neighbor) === 'white')
                .forEach(neighbor => {
                    q.unshift(neighbor);
                    color.set(neighbor, 'gray')
                });
            color.set(vertical, 'black');
            cb && cb(vertical)
        }
    }
    dfs(v,cb,color){
        color = color||initializeColor(this.vertices);
        color.set(v,'gray');
        cb&&cb(v);
        const neighbors = this.adjList.get(v);
        for(let i=0;i<neighbors.length;i++){
            if(color.get(neighbors[i])==='white'){
                this.dfs(neighbors[i],cb,color)
            }
        }
        color.set(v,'black');
    }
}
const graph =new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A','B');
graph.addEdge('C','B');
graph.addEdge('A','E');
graph.addEdge('D','E');
graph.addEdge('E','C');
graph.dfs('A',function (v) {
    console.log(v)
})
graph.bfs('A',function (v) {
    console.log(v)
})
