import { Component, Vue } from 'vue-property-decorator';
import WithRender from './app.html';
import '@/styles/main.scss';
import Maze from '@/classes/maze';

@WithRender
@Component
export default class App extends Vue {
  public maze: Maze = new Maze();
}
