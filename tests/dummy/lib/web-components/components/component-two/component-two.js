import 'wired-button';

const template = document.createElement('template');

template.innerHTML = `
<style>
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
}
</style>

<p></p>
<img src="" alt="">
<p class="big"></p>
<wired-button elevation="3">Click me!</wired-button>`;

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
			this.$button = this.shadowRoot.querySelector('wired-button');

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
