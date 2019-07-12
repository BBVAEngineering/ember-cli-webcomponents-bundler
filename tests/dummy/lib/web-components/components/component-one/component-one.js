import { LitElement, html } from 'lit-element';
import styles from './component-one.css';
import 'wired-button';

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

	static get shadyStyles() {
		return `
			${styles.cssText}
		`;
	}

	render() {
		return html`
			<style>${this.constructor.shadyStyles}</style>
			<p>${this.greeting}</p>
			<img src=${this.imgSrc} alt="">
			<p class="big">${this.counter}</p>
			<wired-button elevation="3" @click=${this._onButtonClick}>Click me!</wired-button>
		`;
	}

	_onButtonClick() {
		this.counter++;
	}
}

customElements.define('component-one', Component);
