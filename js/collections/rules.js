define(['models/rule'], function(
	Rule
){
	return Backbone.Collection.extend({
		sync: function(method, collection, options){
			var 
				url = collection.url,
				data = [],
				maxId = 0
			;
			if (method == 'read') {

				try {
					data = JSON.parse( localStorage[ url + 'Rules' ] );
				} catch(ex) {

				}

				for (var i = 0; i < data.length; i++) {
					maxId = Math.max(maxId, data[i].id);
				}

				collection.maxId = maxId;

				options.success(data);

			} else {
				options.error();
			}
		},
		model: Rule
	});
});