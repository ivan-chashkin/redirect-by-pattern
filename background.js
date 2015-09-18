var rules = null;
require.config({ 
	baseUrl: 'js' 
});
require([
	'collections/rules'
], function(Rules){ 
	rules = new ( Rules.extend({
				url: 'replaceTo'
			}) );

	rules.fetch();

	var timeout = undefined;
	window.addEventListener('storage', _.throttle(function(){
		rules.fetch();
	}, 500) );
});
var prevState = undefined;
var onBeforeRequestListeners = [function(details){
	
	var 
		status = false
	;

	try {
		status = JSON.parse(localStorage['replaceToState']);
	} catch(ex) {}

	if (status && rules.length) {
		for (var i = 0; i < rules.length; i++) {
			var 
				rule = rules.at(i),
				output = rule.match(details.url)
			;
			if (output){
				return { redirectUrl: output };
			}
		}
	}
}],
onBeforeRequestListener = function(details) {
	var lastIndex = onBeforeRequestListeners.length - 1;
	var result = onBeforeRequestListeners[ lastIndex ].apply(this, arguments);
	
	return result;
};
chrome.webRequest.onBeforeRequest.addListener(
	onBeforeRequestListener,
	{
		urls: ['<all_urls>']
	},
	['blocking']
);