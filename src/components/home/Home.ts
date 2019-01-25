import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/hello_world/HelloWorld.ts'; // @ is an alias to /src
import WithRender from './home.html';

@WithRender
@Component({
  props: {
    maze: Object,
  },
})

export default class Home extends Vue {
  public title: string = 'Mazes w/o Monsters!';
}
