import Node from './node';
import * as helpers from '../helpers/helpers';

export default class Maze {

  public maxX: number = 44;
  public maxY: number = 32;
  public nodes: { [key: string]: Node } = {};

  constructor() {
    this.genNewMaze(this.maxX, this.maxY);
  }

  public genNewMaze(maxX?: number, maxY?: number) {
    this.maxX = maxX || this.maxX;
    this.maxY = maxY || this.maxY;

    const startingCoords: string = helpers.randomCell(this.maxX, this.maxY);
    const stack: string[] = [];
    let visitedNodeCount: number = 0;

    // initialize nodes
    this.nodes = {};
    for (let i: number = 0; i < this.maxY; i++) {
      for (let j: number = 0; j < this.maxX; j++) {
        this.nodes[`${j},${i}`] = new Node(j, i);
      }
    }

    stack.push(startingCoords);
    let currentNode: Node = this.nodes[stack[stack.length - 1]];
    currentNode.visited = true;
    visitedNodeCount++;

    while (visitedNodeCount < this.maxX * this.maxY) {
      let neighbours: Array<[string, string]> = helpers.findNeighbours(stack[stack.length - 1], this.maxX, this.maxY);
      neighbours = neighbours.filter((elem) => {
        return !this.nodes[elem[0]].visited;
      });

      if (neighbours.length > 0) {
        const nextNodeCoords: [string, string] = neighbours[Math.floor(Math.random() * neighbours.length)];
        const nextNode: Node = this.nodes[nextNodeCoords[0]];

        currentNode[nextNodeCoords[1]] = nextNode;
        switch (nextNodeCoords[1]) {
          case 'above':
            nextNode.below = currentNode;
            break;
          case 'right':
            nextNode.left = currentNode;
            break;
          case 'below':
            nextNode.above = currentNode;
            break;
          case 'left':
            nextNode.right = currentNode;
            break;
        }

        stack.push(nextNodeCoords[0]);
      } else {
        stack.pop();
      }

      currentNode = this.nodes[stack[stack.length - 1]];
      if (!currentNode.visited) {
        currentNode.visited = true;
        visitedNodeCount++;
      }
    }

    // choose start and exit
    const playerStart: string = helpers.randomCell(this.maxX, this.maxY);
    let exit: string = '';
    while (true) {
      exit = helpers.randomCell(this.maxX, this.maxY);
      if (exit !== playerStart) {
        break;
      }
    }
    this.nodes[playerStart].player = true;
    this.nodes[exit].exit = true;
  }

}
