import { Component, Vue } from 'vue-property-decorator';
import WithRender from './node.html';

@WithRender
@Component({
  props: {
    node: Object,
  },
  methods: {
    needsCorner() {
      if (this.$props.node.right && this.$props.node.below) {
        return true;
      }
    },
  },
})

export default class Node extends Vue {}
