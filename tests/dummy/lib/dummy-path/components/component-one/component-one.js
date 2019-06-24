import { LitElement, html, css } from 'lit-element';

class Component extends LitElement {
	static get properties() {
		return {
			greeting: { type: String },
			counter: { type: Number }
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
				font-family: sans-serif;
				padding: 20px;
				text-align: center;
				background-color: #abdfe0;
				margin-bottom: 20px;
			}

			.big {
				font-size: 60px;
				font-weight: bold;
				margin: 0 0 20px;
			}
		`;
	}

	render() {
		return html`
			<p>${this.greeting}</p>
			<p class="big">${this.counter}</p>
			<button @click=${this._onButtonClick}>Click me!</button>
		`;
	}

	_onButtonClick() {
		this.counter++;
	}
}

customElements.define('component-one', Component);
