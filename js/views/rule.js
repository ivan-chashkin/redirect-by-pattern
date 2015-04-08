define(['tpl/rule'], function(
	tpl
){

	return Backbone.View.extend({
		template: tpl,
		events: {
			'input .js-input-match, change .js-input-match': '_change',
			'input .js-input-replace, change .js-input-replace': '_change',
			'click .js-item-delete': '_delete'
		},
		initialize: function(){
			_.bindAll(this, '_change', '_delete');

			this.render();
		},
		render: function(){
			this.el.innerHTML = this.template();

			this.$jsItem = this.$el.find('.js-item');
			this.$jsItemDelete = this.$el.find('.js-item-delete');
			this.$jsItemMatch = this.$el.find('.js-item-match');
			this.$jsInputMatch = this.$el.find('.js-input-match');
			this.$jsItemReplace = this.$el.find('.js-item-replace');
			this.$jsInputReplace = this.$el.find('.js-input-replace');

			this.$el.data( 'cid', this.model.cid );
			this.$jsInputMatch.val( this.model.get('match') );
			this.$jsInputReplace.val( this.model.get('replace') );
		},

		_change: function() {
			this.model.save({
				match: this.$jsInputMatch.val(),
				replace: this.$jsInputReplace.val()
			});
		},

		_delete: function() {
			this.model.destroy();
			this.$el.remove();
		}
	});

});