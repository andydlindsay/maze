import { Component, Vue } from 'vue-property-decorator';
import WithRender from './node.html';

@WithRender
@Component({
  props: {
    node: Object,
  },
})
export default class Node extends Vue {}
