define([
	'views/replaceto'
], function(
	ReplaceTo
){
	var 
		mainEl = document.body,
		replaceto = new ReplaceTo({
			prefix: 'replaceTo'
		})
	;

	mainEl.appendChild(replaceto.el);

	// Analitics
	window._gaq = [];
	_gaq.push(['_setAccount', 'UA-52536641-1']);
	_gaq.push(['_trackPageview']);

	_gaq.push(['_trackEvent', 'redirect-by-pattern', 'open']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = 'https://ssl.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
});