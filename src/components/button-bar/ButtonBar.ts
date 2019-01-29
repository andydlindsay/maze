import { Component, Vue } from 'vue-property-decorator';
import WithRender from './button-bar.html';
import Element from 'element-ui';

Vue.use(Element);

@WithRender
@Component({
  props: {
    handleDifficultyClick: Function,
  },
})

export default class ButtonBar extends Vue {}
