// import { Vue } from 'vue-property-decorator';
import Vue from 'vue';
import Component from 'vue-class-component';
import Node from '@/components/node/Node.ts'; // @ is an alias to /src
import WithRender from './home.html';
import Maze from '@/classes/maze';

@WithRender
@Component({
  props: {
    maze: Object,
  },
  components: {
    Node,
  },
})

export default class Home extends Vue {
  public title: string = 'Mazes w/o Monsters!';

  public mounted() {
    window.addEventListener('keypress', this.handleKeypress);
  }

  public handleKeypress(event: any) {
    let direction: string = '';
    switch (event.key) {
      case 'w':
      case 'W':
        direction = 'above';
        break;
      case 'a':
      case 'A':
        direction = 'left';
        break;
      case 's':
      case 'S':
        direction = 'below';
        break;
      case 'd':
      case 'D':
        direction = 'right';
        break;
    }
    this.$props.maze.movePlayer(direction);
    if (this.$props.maze.isGameOver()) {
      alert('you win!');
      this.$props.maze = new Maze();
    }
  }
}
