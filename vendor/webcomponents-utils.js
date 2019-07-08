(function() {
	var _customElementsDefine = window.customElements.define;

	window.customElements.define = function(name, cl, conf) {
		if (!customElements.get(name)) {
			_customElementsDefine.call(window.customElements, name, cl, conf);
		} else {
			console.warn(''.concat(name, ' has been defined twice'));
		}
	};

	// https://gist.github.com/samthor/64b114e4a4f539915a95b91ffd340acc
	var d = document;
	var c = d.createElement('script');
	var s = false;

	if (!('noModule' in c) && 'onbeforeload' in c) {
		d.addEventListener('beforeload', function(e) {
			if (e.target === c) {
				s = true;
			} else if (!e.target.hasAttribute('nomodule') || !s) {
				return;
			}

			e.preventDefault();
		}, true);

		c.type = 'module';
		c.src = '.';
		d.head.appendChild(c);
		c.remove();
	}
}());
