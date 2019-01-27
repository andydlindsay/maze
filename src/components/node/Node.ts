import { Component, Vue } from 'vue-property-decorator';
import WithRender from './node.html';

@WithRender
@Component({
  props: {
    node: Object,
  },
  methods: {
    hasAboveBorder() {
      if (this.$props.node.y === 0) {
        return true;
      }
    },
    hasLeftBorder() {
      if (this.$props.node.x === 0) {
        return true;
      }
    },
    hasRightBorder() {
      if (!this.$props.node.right) {
        return true;
      }
    },
    hasBelowBorder() {
      if (!this.$props.node.below) {
        return true;
      }
    },
  },
})

export default class Node extends Vue {}
