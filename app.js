
    let distances;
    let total_stations, code, graph;
    let Totaldis=0;
    
    
    class PriorityQueue {
        constructor() {
            this.items = [];
        }
    
        enqueue(element) {
            this.items.push(element);
            this.items.sort((a, b) => a.distance - b.distance); // Sort based on distance
        }
    
        dequeue() {
            return this.items.shift();
        }
    
        isEmpty() {
            return this.items.length === 0;
        }
    }
    
    function dijkstra(src,distances) {
        graph = [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
    ];
        
        total_stations=graph.length
        console.log(total_stations)
        console.log("dist",distances)
        const INF = Infinity;
        const via = new Array(total_stations).fill(null);
        const pq = new PriorityQueue();
        const vis = new Set();
    
        // Initialize distances and predecessor array
        for (let i = 0; i < total_stations; i++) {
            distances.set(i, INF);
            via[i] = null;
        }
        distances.set(src, 0);
        pq.enqueue({ distance: 0, station: src });
    
        // Dijkstra's algorithm main loop
        while (!pq.isEmpty()) {
            const curr = pq.dequeue();
    
            if (vis.has(curr.station)) continue;
            vis.add(curr.station);
    
            for (let i = 0; i < total_stations; i++) {
                if (graph[curr.station][i] > 0 && !vis.has(i)) {  // Check if there's a connection
                    const newDist = curr.distance + graph[curr.station][i];
                    if (newDist < distances.get(i)) {
                        distances.set(i, newDist);
                        pq.enqueue({ distance: newDist, station: i });
                        via[i] = curr.station;
                    }
                }
            }
        }
    
        return via;
    }
    function main(s,d) {
        stations = ["LB nagar", "Victoria memorial", "chaitanyapuri", "Dilsukhnagar", "musarambagh", "New Market", "malakpet", "MG bus station", "Osmania medical college", "Gandhi bhavan", "nampally", "Assembly", "Lakdikapul", "Khairatabad", "irrum manzil", "Punjagutta", "Ameerpet", "S R nagar", "ESI hospital", "Erragadda", "Bharat nagar", "Moosapet", "Balanagar", "Kukatpally", "KPHB colony", "JNTU college", "Miyapur", "Sultan bazar", "Narayanaguda", "Chikkadpally", "RTC roads", "Musheerabad", "Gandhi hospital", "Secunderabad west", "Parade ground", "Nagole", "Uppal", "stadium", "NGRI", "Habsiguda", "Tarnaka", "Mettuguda", "Secunderabad east", "Paradise", "Rasoolpura", "Prakash Nagar", "Begumpet", "Madhura Nagar", "Yusufguda", "Jubilee hills", "JH checkpost", "Peddamma gudi", "Madhapur", "Durgam cheruvu", "Hitec city", "Raidurg"];
    
        distances = new Map();
        code=new Map();
        let q = 0;
        for (const x of stations) {
            let str= x.toLowerCase();
            code.set(str, q++);
        }
    
        let ssrc = s.toLowerCase();
        let sdst = d.toLowerCase();
        
        const src = code.get(ssrc);
        const dst = code.get(sdst);
    
        const route = dijkstra(src,distances);
        Totaldis=distances.get(dst);
        // console.log(route);
        // console.log(`** Shortest Distance from ${ssrc} to ${sdst} is ${distances.get(dst)} units **`);
        const st = [];
        let ptr = dst;
        while (ptr >= 0 && ptr < total_stations && ptr !== route[ptr]) {
            if(stations[route[ptr]]==undefined){
                ptr=route[ptr];
                continue;
            }else{
                st.push(stations[route[ptr]]);
            }
            ptr = route[ptr];
        }
        console.log(st);
        
        return st
        
    }
    
    function show_path(){
        document.getElementById('final_path').style.display = "block";
    }
    
    function show() {
    
    station_info = [
        "LB nagar: A major terminal station in the southern part of Hyderabad, serving as a hub for commuters. It connects the city's residential areas with commercial hubs, providing easy access to schools, colleges, and hospitals in the vicinity",
        
        "Victoria_memorial: A key station located near the iconic Victoria Memorial, providing access to nearby attractions like the Birla Planetarium, Salar Jung Museum, and Chowmahalla Palace.",
        
        "chaitanyapuri: This station serves the Chaitanyapuri area, known for its residential neighborhoods, educational institutions, and commercial centers. It connects the area's residents to the city's major employment hubs, making it easier for them to commute to work.",
        
        "Dilshukhnagar: A busy station that connects various residential and commercial areas in the vicinity. It serves as a major transit point for commuters traveling between the city's eastern and central regions. ",
        
        "moosrambagh: Located near Moosrambagh, this station is important for local commuters. It serves the area's residential neighborhoods, schools, and hospitals, providing easy access to the city's major employment hubs.  ",
        
        "NewMarket: A station serving the New Market area, popular for shopping and local businesses. It connects the area's commercial centers with the city's residential neighborhoods, making it easier for shoppers and business owners to commute.",
        
        "malakpet: This station is situated near Malakpet, known for its vibrant market scene. It serves as a hub for local businesses, connecting them with the city's residential areas and employment centers.",
        
        "MGbusstation: Close to the MG Bus Station, providing easy transfers between bus and metro services. This station serves as a major transit hub, connecting commuters from various parts of the city. ",
        
        "Osmania_medical: A station that serves the Osmania Medical College and surrounding healthcare facilities. It connects the area's medical professionals, students, and patients with the city's residential neighborhoods and employment centers. ",
        
        "Gandhibhavan: Located near Gandhi Bhavan, a cultural and historical landmark in Hyderabad. This station serves as a gateway to the city's heritage sites, connecting visitors and locals alike.",
        
        "nampally: A station that serves the nearby residential areas and local businesses. It connects the area's residents with the city's major employment hubs, making it easier for them to commute to work. ",
        
        "Assembly: Located near the Legislative Assembly, this station is significant for government employees and visitors. It serves as a hub for those working in or visiting government offices.",
        
        "Lakdikapul: A key station in the Lakdikapool area, known for its connectivity and commercial activities. It serves as a hub for local businesses, connecting them with the city's residential areas and employment centers. ",
        
        "Khairtabad: This station serves the Khairtabad area, a bustling commercial hub. It connects the area's businesses with the city's residential neighborhoods and other employment centers. ",
        
        "Irrum manzil: A station that provides access to the Irrummanzil area, known for its residential neighborhoods. It serves the area's residents, connecting them with the city's employment hubs and commercial centers. ",
        
        "Punjagutta: A major commercial center, this station is frequented by shoppers and office-goers. It serves as a hub for local businesses, connecting them with the city's residential areas and other employment centers. ",
        
        "Ameerpet: A busy interchange station connecting different metro lines and popular for its educational institutions. It serves as a major transit hub, connecting commuters from various parts of the city. ",
        
        "SRnagar: Located in the SR Nagar area, known for its residential and commercial establishments. It serves the area's residents and local businesses, connecting them with the city's major employment hubs. ",
        
        "ESIhospital: This station is situated near the ESI Hospital, catering to patients and visitors. It serves as a gateway to the hospital, connecting it with the city's residential areas and other healthcare facilities. ",
        
        "Erragadda: A station that serves the Erragadda area, known for its residential neighborhoods. It connects the area's residents with the city's employment hubs and commercial centers. ",
        
        "Bharatnagar: This station is located in the Bharatnagar area, providing access to local amenities. It serves the area's residents, connecting them with the city's employment hubs and commercial centers.",
        
        "Moosapet: A key station in the Moosapet area, known for its connectivity to nearby regions. It serves as a hub for commuters traveling between the city's eastern and western regions.",
        
        "DR_BRambedkar: Named after Dr. B.R. Ambedkar, this station serves the surrounding community. It connects the area's residents with the city's employment hubs and commercial centers.",
        
        "Kukatpally: A major commercial hub, this station is frequented by shoppers and commuters alike. It serves as a hub for local businesses, connecting them with the city's residential areas and other employment centers. ",
    
        "KPHBcolony: This station serves KPHB Colony, known for its residential complexes and proximity to IT hubs. It connects commuters to major employment centers, enhancing accessibility for local residents and visitors alike.",
        
        "JNTUcollege: Serving Jawaharlal Nehru Technological University, this station is crucial for students and faculty. It connects the university to the city, making commuting easier for thousands of students and staff daily.",
        
        "Miyapur: As a terminal station, Miyapur connects northern suburbs to the city center. It serves as a major hub for commuters, featuring modern facilities and enhancing connectivity for daily travelers in Hyderabad.",
        
        "Sultanbazar: Located near the historic Sultan Bazaar, this station connects shoppers and visitors to local culture and commerce. It features modern amenities, attracting both locals and tourists to the vibrant market area.",
        
        "Narayanguda: A key station serving Narayanguda, it connects residential neighborhoods with commercial hubs. The station features modern facilities, ensuring safety and accessibility for commuters traveling to various parts of the city.",
        
        "Chikkadpali: This station serves Chikkadpally, known for its vibrant community and local businesses. It connects residents with major employment hubs, enhancing accessibility and supporting local commerce in the area.",
        
        "RTCxroads: Located at a major junction, RTCxroads serves as a crucial interchange for various transport modes. It connects metro services with bus routes, facilitating seamless transfers for commuters traveling across the city.",
        
        "Musheerabad: This station serves Musheerabad, known for its residential neighborhoods and local markets. It connects commuters with major employment centers, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "Gandhihospital: Located near Gandhi Hospital, this station is vital for patients and healthcare professionals. It connects the hospital with residential areas, facilitating easy access to medical services for the community.",
        
        "Secbadwest: Serving the western part of Secunderabad, this station connects residential neighborhoods with commercial hubs. It features modern facilities, enhancing connectivity and making it easier for commuters to access local amenities.",
        
        "Parade ground: Located near Parade Ground, this station is significant for events and gatherings. It connects visitors with various cultural and recreational activities, enhancing community engagement and accessibility within the city.",
        
        "Nagole: A terminal station on the Blue Line, Nagole connects eastern suburbs with the city center. It serves as a major hub for commuters, featuring modern facilities and enhancing overall connectivity in Hyderabad.",
        
        "Uppal: This station serves Uppal, known for its residential neighborhoods and local businesses. It connects commuters with major employment hubs, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "stadium: Located near the local stadium, this station is frequented during events and matches. It connects sports enthusiasts with recreational activities, enhancing community engagement and accessibility for visitors attending games.",
        
        "NGRI: Serving the National Geophysical Research Institute, this station caters to researchers and students. It connects the institute with residential areas, enhancing accessibility for those involved in scientific studies and education.",
        
        "Habsiguda: Located in Habsiguda, this station is known for its educational institutions and residential neighborhoods. It connects commuters with major employment hubs, enhancing accessibility and supporting the local economy.",
        
        "Tarnaka: This station serves Tarnaka, known for its residential neighborhoods and local businesses. It connects commuters with major employment hubs, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "Mettuguda: Located in Mettuguda, this station connects residential neighborhoods with commercial hubs. It serves as a vital transit point for commuters traveling to various parts of Hyderabad, enhancing overall connectivity.",
        
        "Secbadeast: This station serves the eastern part of Secunderabad, connecting residential neighborhoods with commercial hubs. It features modern facilities, enhancing connectivity and making it easier for commuters to access local amenities.",
        
        "Paradise: A popular station near the famous Paradise restaurant, known for its biryani. It connects food enthusiasts and visitors with the vibrant local dining scene, enhancing accessibility to culinary delights in Hyderabad.",
        
        "Rasoolpura: This station serves Rasoolpura, known for its residential neighborhoods and local businesses. It connects commuters with major employment hubs, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "Prakash Nagar: Located in Prakash Nagar, this station provides access to local amenities. It connects residents with the city's employment hubs, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "Begumpet: This station serves Begumpet, known for its vibrant local culture and businesses. It connects residents with major employment hubs, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "Madhura Nagar: Located in Mathura Nagar, this station connects residential neighborhoods with commercial hubs. It serves as a vital transit point for commuters traveling to various parts of Hyderabad, enhancing overall connectivity.",
        
        "Yusufguda: This station serves Yusufguda, known for its residential neighborhoods and local businesses. It connects commuters with major employment hubs, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "Jubliehills: This station serves Jubilee Hills, known for its affluent neighborhoods and commercial establishments. It connects residents with major employment hubs, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "JH-checkpost: Located near the check post, this station is significant for local commuters. It connects various neighborhoods, facilitating easy access to nearby commercial areas and enhancing connectivity within the city.",
        
        "Peddamma gudi: A station serving Peddamagudi, known for its residential neighborhoods and local businesses. It connects commuters with major employment hubs, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "Madhapur: A major commercial hub, this station is frequented by professionals and shoppers. It connects the area's businesses with residential neighborhoods, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "Durgam cheruvu: This station serves Dugamcheruvu, providing access to local amenities and residential neighborhoods. It connects commuters with major employment hubs, enhancing accessibility and supporting the local economy through improved transit options.",
        
        "Hitech city: A key station in Hitech City, known for its IT parks and businesses. It serves as a major hub for professionals, connecting them with residential neighborhoods and enhancing overall connectivity in Hyderabad.",
        
        "raidurg: This terminal station serves as a key point for commuters traveling from outer regions. It connects Hitech City with the city center, facilitating easy access to major employment hubs and enhancing connectivity."
    ]
        
        const inputs = document.getElementById("form").elements;
        const s =document.querySelector("#Source").value
        const d = document.querySelector("#Dest").value
        console.log(s,d);
        let path = main(s, d);
    
        let ele = document.getElementById("paths");
        let dist=document.getElementById("dist")
        
        ele.innerHTML= "";
        if(path.length==0){
            ele.innerHTML = "No Path Obtained"; // Clear previous paths
        }
        else{
            while (path.length > 0) {
            const flipCard = document.createElement('div');
            flipCard.className = 'flip-card';
    
            const flipCardInner = document.createElement('div');
            flipCardInner.className = 'flip-card-inner';
    
            const flipCardFront = document.createElement('div');
            flipCardFront.className = 'flip-card-front';
    
            const flipCardBack = document.createElement('div');
            flipCardBack.className = 'flip-card-back';
    
            const station = document.createElement("p");
            station.className = 'title';
            let x=path.pop();
            station.textContent = `${x}`;
            flipCardFront.appendChild(station);
            const index=stations.indexOf(x)
            const backTitle = document.createElement('p');
            backTitle.className = 'title';
            backTitle.textContent = `${station_info[index]}`;
            flipCardBack.appendChild(backTitle);
            
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
    
            ele.appendChild(flipCard);
        }
        // destination card
            const flipCard = document.createElement('div');
            flipCard.className = 'flip-card';
    
            const flipCardInner = document.createElement('div');
            flipCardInner.className = 'flip-card-inner';
    
            const flipCardFront = document.createElement('div');
            flipCardFront.className = 'flip-card-front';
    
            const flipCardBack = document.createElement('div');
            flipCardBack.className = 'flip-card-back';
    
            const station = document.createElement("p");
            station.className = 'title';

            let x= d.toLowerCase();
            station.textContent = `${x}`;
            flipCardFront.appendChild(station);
            const index= code.get(x);
            const backTitle = document.createElement('p');
            backTitle.className = 'title';
            backTitle.textContent = `${station_info[index]}`;
            flipCardBack.appendChild(backTitle);
            
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
    
            ele.appendChild(flipCard);
        
        }

        dist.innerHTML= "";
        const dele=document.createElement("div")
        const dname=document.createTextNode(`-> Shortest Distance from ${s} to ${d} is ${Totaldis} units.`)
        dele.append(dname)
        dist.append(dele)
    }
    