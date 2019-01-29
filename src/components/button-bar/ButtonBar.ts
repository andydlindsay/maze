import { Component, Vue } from 'vue-property-decorator';
import WithRender from './button-bar.html';

@WithRender
@Component({
  props: {
    handleDifficultyClick: Function,
  },
})

export default class ButtonBar extends Vue {}
