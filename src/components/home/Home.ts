// import { Vue } from 'vue-property-decorator';
import Vue from 'vue';
import Component from 'vue-class-component';
import Node from '@/components/node/Node.ts'; // @ is an alias to /src
import WithRender from './home.html';
import Maze from '@/classes/maze';
import ButtonBar from '@/components/button-bar/ButtonBar';

@WithRender
@Component({
  components: {
    Node,
    ButtonBar,
  },
})

export default class Home extends Vue {
  public maze: Maze = new Maze();
  public title: string = 'Mazes w/o Monsters!';
  public difficulty: string = 'normal';

  private difficultyOptions: { [key: string]: { borderWidth: string, nodeSide: string, title: string } } = {
    easy: {
      borderWidth: '0.625rem',
      nodeSide: '35px',
      title: 'easy',
    },
    normal: {
      borderWidth: '0.5rem',
      nodeSide: '28px',
      title: 'normal',
    },
    hard: {
      borderWidth: '0.375rem',
      nodeSide: '21px',
      title: 'hard',
    },
    extreme: {
      borderWidth: '0.25rem',
      nodeSide: '14px',
      title: 'extreme',
    },
  };

  public created() {
    window.addEventListener('keypress', this.handleKeypress);
  }

  public handleDifficultyClick(difficulty: string) {
    this.difficulty = difficulty;
    const options = this.difficultyOptions[this.difficulty];
    document.documentElement.style.setProperty('--borderWidth', options.borderWidth);
    document.documentElement.style.setProperty('--nodeSide', options.nodeSide);
    this.maze = new Maze(this.difficulty);
  }

  public handleKeypress(event: any) {
    let direction: string = '';
    switch (event.key.toLowerCase()) {
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
    this.maze.movePlayer(direction);
    if (this.maze.isGameOver()) {
      alert('you win!');
      this.maze = new Maze(this.difficulty);
    }
  }
}
