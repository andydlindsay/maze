import Node from './node';
import * as helpers from '../helpers/helpers';

export default class Maze {

  public maxX: number = 22;
  public maxY: number = 16;
  public nodes: { [key: string]: Node } = {};
  public player: string = '';
  public exit: string = '';
  public difficulty: string = 'normal';

  constructor() {
    this.genNewMaze(this.difficulty);
  }

  public genNewMaze(difficulty?: string) {
    if (difficulty) {
      switch (difficulty) {
        case 'easy':
          this.maxX = 15;
          this.maxY = 11;
          break;
        case 'normal':
          this.maxX = 22;
          this.maxY = 16;
          break;
        case 'hard':
          this.maxX = 33;
          this.maxY = 22;
          break;
        case 'extreme':
          this.maxX = 44;
          this.maxY = 32;
          break;
      }
    }

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

    // choose player start location and exit location
    this.player = helpers.randomCell(this.maxX, this.maxY);
    while (true) {
      this.exit = helpers.randomCell(this.maxX, this.maxY);
      if (this.exit !== this.player) {
        break;
      }
    }
    this.nodes[this.player].player = true;
    this.nodes[this.exit].exit = true;
  }

  public movePlayer(moveDirection: string): boolean {
    const currentNode: Node = this.nodes[this.player];
    const possibleNode: Node | null = currentNode[moveDirection];
    if (possibleNode) {
      // valid move
      currentNode.player = false;
      possibleNode.player = true;
      this.player = possibleNode.id;
      return true;
    }
    return false;
  }

  public isGameOver(): boolean {
    return this.player === this.exit;
  }

}
