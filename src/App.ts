import { Component, Vue } from 'vue-property-decorator';
import WithRender from './app.html';
import './styles/main.scss';

@WithRender
@Component
export default class HelloWorld extends Vue {}
