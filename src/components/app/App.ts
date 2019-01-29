import { Component, Vue } from 'vue-property-decorator';
import WithRender from './app.html';
import '@/styles/main.scss';
import Home from '@/components/home/Home';

@WithRender
@Component({
  components: {
    Home,
  },
})

export default class App extends Vue {}
