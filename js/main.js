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
});