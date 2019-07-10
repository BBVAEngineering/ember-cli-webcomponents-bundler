import { LitElement, html, css } from 'lit-element';
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

	static get styles() {
		return css`
			:host {
				display: block;
				padding: 20px 20px 30px;
				text-align: center;
				background-color: #abdfe0;
				margin-bottom: 20px;
			}

			.big {
				font-size: 45px;
				font-weight: bold;
				margin: 10px 0;
			}

			p {
				font-weight: 600;
			}

			img {
				width: 200px;
				transform: translateX(13px);
			}
		`;
	}

	render() {
		return html`
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
