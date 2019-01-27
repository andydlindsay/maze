import { Component, Vue } from 'vue-property-decorator';
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
}
