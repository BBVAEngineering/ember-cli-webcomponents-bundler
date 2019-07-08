(function() {
	const customElementsDefine = window.customElements.define;

	window.customElements.define = function(name, callback, config) {
		if (!window.customElements.get(name)) {
			customElementsDefine.call(window.customElements, name, callback, config);
		} else {
			console.warn(`${name} has been defined twice`);
		}
	};
}());
