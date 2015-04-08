define(function(){
	return Backbone.Model.extend({
		url: 'rule',
		defaults: {
			match: '',
			replace: ''
		},

		match: function(url){
			var result = '';

			if (url && this.get('match') && this.get('replace')) {
				try{
					var regexp = new RegExp(this.get('match'));
					var regres = regexp.exec(url);
					var output = this.get('replace');

					if (regres && regres.length) {
						for (var i = 0; i < regres.length; i++) {
							var treg = new RegExp('\\$'+i, 'g');
							output = output.replace(treg, regres[i])
						}

						if (!output.match(/\$\d/g, '')) {
							result = output;
						}
					}
				} catch(ex) {
					result = '';
				}
			}

			return result;
		},

		sync: function(method, model, options){
			var 
				save = model.toJSON(),
				url = model.collection.url,
				data = []
			;

			try{
				data = JSON.parse( localStorage[ url + 'Rules' ] );
			}catch(ex){

			}

			if (method == 'create') {
				save.id = ++model.collection.maxId;
				data.push(save);

				try{
					localStorage[ url + 'Rules' ] = JSON.stringify( data );
				}catch(ex){

				}

				options.success(save);
			} else if (method == 'update') {
				var find = false;
				for (var i = 0; i < data.length; i++){
					if (save.id == data[i].id) {
						data[i] = save;
						find = true;
					}
				}
				if (find) {
					try{
						localStorage[ url + 'Rules' ] = JSON.stringify( data );
					}catch(ex){

					}
					options.success(save);
				} else {
					options.error();
				}
			} else if (method == 'delete') {
				var find = 0;
				for (var i = 0; i < data.length; i++){
					if (save.id == data[i].id) {
						find++;
					}
					if (find) {
						data[i] = data[i + find];
					}
				}
				if (find) {
					for (var i = 0; i < find; i++){
						data.pop();
					}
					try{
						localStorage[ url + 'Rules' ] = JSON.stringify( data );
					}catch(ex){

					}
					options.success();
				} else {
					options.error();
				}
			}
		}
	});
});