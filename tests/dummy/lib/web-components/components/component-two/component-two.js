// eslint-disable-next-line no-unused-vars
import { Button } from 'weightless';
import commonStyles from '../common-styles.css';

const template = document.createElement('template');

template.innerHTML = `
<style>
	${commonStyles}

	.button {
		background-color: #e44d26;
	}
</style>

<p></p>
<img src="" alt="">
<p class="big"></p>
<wl-button flat class="button">Click me!</wl-button>`;

class ComponentTwo extends HTMLElement {
	connectedCallback() {
		this.imgSrc = this.getAttribute('img-src') || this.imgSrc;
		this.greeting = this.getAttribute('greeting') || this.greeting;
		this.counter = 0;

		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));

			this.$image = this.shadowRoot.querySelector('img');
			this.$paragraph = this.shadowRoot.querySelector('p');
			this.$bigParagraph = this.shadowRoot.querySelector('.big');
			this.$button = this.shadowRoot.querySelector('.button');

			this.$image.src = this.imgSrc;
			this.$paragraph.textContent = this.greeting;
			this.$bigParagraph.textContent = this.counter;
			this.$button.addEventListener('click', this._onButtonClick.bind(this));
		}
	}

	constructor() {
		super();
		this.imgSrc = '';
		this.greeting = '';
	}

	_onButtonClick() {
		this.counter++;
		this.$bigParagraph.textContent = this.counter;
	}
}

customElements.define('component-two', ComponentTwo);
