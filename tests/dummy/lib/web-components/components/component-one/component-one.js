import { LitElement, html, css, unsafeCSS } from 'lit-element';
import commonStyles from '../common-styles.css';
import style from './component-one.css';
// eslint-disable-next-line no-unused-vars
import { Button } from 'weightless/button';

class Component extends LitElement {
	static get properties() {
		return {
			greeting: { type: String },
			counter: { type: Number },
			imgSrc: { type: String, attribute: 'img-src' }
		};
	}

	constructor() {
		super();
		this.greeting = 'Hello World!';
		this.counter = 0;
	}

	static get styles() {
		return [
			css`${unsafeCSS(commonStyles)}`,
			css`${unsafeCSS(style)}`
		];
	}

	render() {
		return html`
			<p>${this.greeting}</p>
			<img src=${this.imgSrc} alt="">
			<p class="big">${this.counter}</p>
			<wl-button class="button" inverted @click=${this._onButtonClick}>Click me!</wl-button>
		`;
	}

	_onButtonClick() {
		this.counter++;
	}
}

customElements.define('component-one', Component);
