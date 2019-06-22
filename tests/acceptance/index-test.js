import { currentURL, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', (hooks) => {
	setupApplicationTest(hooks);

	test('renders custom elements', async(assert) => {
		await visit('/');
		assert.expect(2);

		assert.equal(currentURL(), '/');
		const done = assert.async();

		const testElement = () => {
			const component = document.querySelector('component-one');

			assert.ok(component.shadowRoot || component.shadyRoot, 'component has shadowRoot');

			done();
		};

		if (window.WebComponents.ready) {
			testElement();
		} else {
			// wait for elements to be polyfilled
			window.addEventListener('WebComponentsReady', testElement);
		}
	});
});
