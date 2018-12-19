function bfs(graph: [], root: number): object {
  const nodesLen: { [key: number]: number } = {};

  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;

  const queue = [root];
  let current;

  while (queue.length !== 0) {
    current = queue.shift();
    if (current) {
      const curConnected: number[] = graph[current];
      const neighborIdx = [];
      if (curConnected) {
        let idx = curConnected.indexOf(1);
        while (idx !== -1) {
          neighborIdx.push(idx);
          idx = curConnected.indexOf(1, idx + 1);
        }

        for (let j = 0; j < neighborIdx.length; j++) {
          if (nodesLen[neighborIdx[j]] === Infinity) {
            nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
            queue.push(neighborIdx[j]);
          }
        }
      }
    }
  }
  return nodesLen;
}
