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
      return !this.$props.node.right;
    },
    hasBelowBorder() {
      return !this.$props.node.below;
    },
    needsCorner() {
      if (this.$props.node.right && this.$props.node.below) {
        return true;
      }
    },
    hasPlayer() {
      return this.$props.node.player;
    },
    hasExit() {
      return this.$props.node.exit;
    },
  },
})

export default class Node extends Vue {}
