import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/hello_world/HelloWorld.ts'; // @ is an alias to /src
import WithRender from './home.html';

@WithRender
@Component({
  components: {
    // HelloWorld,
  },
})

export default class Home extends Vue {
  // public imageUrl: string = '/img/logo.png';
  public title: string = 'Welcome to Mazes w/o Monsters!';
}
