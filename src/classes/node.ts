export default class Node {
  [key: string]: any;

  public above: Node | null = null;
  public right: Node | null = null;
  public below: Node | null = null;
  public left: Node | null = null;
  public visited: boolean = false;
  public id: string;
  public player: boolean = false;
  public exit: boolean = false;

  constructor(public x: number, public y: number) {
    this.id = `${x},${y}`;
  }
}
