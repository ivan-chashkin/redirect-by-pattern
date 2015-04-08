var el = {
	url: document.querySelector('.js-form-item-url'),
	regexp: document.querySelector('.js-form-item-regexp'),
	replace: document.querySelector('.js-form-item-replace'),
	output: document.querySelector('.js-form-item-output')
};
var checkUrl = function() {
	var url = el.url.value;
	var replace = el.replace.value;

	var regexp = new RegExp(el.regexp.value);
	var regres = regexp.exec(url);


	if (regres && regres.length) {
		for (var i = 0; i < regres.length; i++) {
			var treg = new RegExp('\\$'+i, 'g');
			replace = replace.replace(treg, regres[i])
		}

		replace = replace.replace(/\$\d/g, '');
	}

	var output = replace;
	el.output.innerHTML = output;

	localStorage['rules'] = JSON.stringify({
		url: el.url.value,
		regexp: el.regexp.value,
		replace: el.replace.value
	});
};

el.url.addEventListener('input', checkUrl);
el.regexp.addEventListener('input', checkUrl);
el.replace.addEventListener('input', checkUrl);

var currentRule = null;
try{
	currentRule = JSON.parse(localStorage['rules']);
}catch(ex){
	currentRule = {
		url: '',
		regexp: '',
		replace: ''
	};
}
el.url.value = currentRule.url;
el.regexp.value = currentRule.regexp;
el.replace.value = currentRule.replace;

checkUrl();