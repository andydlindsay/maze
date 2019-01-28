// import { Vue } from 'vue-property-decorator';
import Vue from 'vue';
import Component from 'vue-class-component';
import Node from '@/components/node/Node.ts'; // @ is an alias to /src
import WithRender from './home.html';

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
        direction = 'above';
        break;
      case 'a':
        direction = 'left';
        break;
      case 's':
        direction = 'below';
        break;
      case 'd':
        direction = 'right';
        break;
    }
    this.$props.maze.movePlayer(direction);
    if (this.$props.maze.isGameOver()) {
      alert('you win!');
    }
  }
}
