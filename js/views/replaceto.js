define([
	'tpl/replaceto', 
	'views/rule',
	'collections/rules'
], function(
	tpl,
	Rule,
	Rules
){
	return Backbone.View.extend({
		template: tpl,
		events: {
			'change .js-status-checkbox': '_stateCheckbox',
			'input .js-url-input, change .js-url-input': '_updateUrl'
		},
		_ruleViews: [],
		initialize: function(params) {
			_.bindAll(this, '_stateCheckbox');

			this.prefix = params.prefix;
			this.rules = new ( Rules.extend({
				url: params.prefix
			}) );

			this.render();

			/*
			this.rules.bind('all', function(){
				console.log(arguments);
			});
			*/

			this.rules.bind('sync', this._rulesSync, this);
			this.rules.bind('add', this._rulesAdd, this);
			this.rules.bind('destroy', this._rulesDestroy, this);
			this.rules.fetch();

			// Восстанавливаем статус
			var state = false;
			try{
				state = JSON.parse( localStorage[this.prefix + 'State'] );
			}catch(ex){ }
			this.setState( state );
		},

		render: function(){
			this.el.innerHTML = this.template();

			this.$jsStatusCheckbox = this.$el.find('.js-status-checkbox');
			this.$jsStatusLabel = this.$el.find('.js-status-label');
			this.$jsUrlInput = this.$el.find('.js-url-input');
			this.$jsUrlResult = this.$el.find('.js-url-result');
			this.$jsList = this.$el.find('.js-list');

			this.setUrl(localStorage[this.prefix + 'Url']||'');
		},

		_stateCheckbox: function(evt) {
			this.setState(evt.target.checked);
		},
		setState: function(state) {
			this._state = !!state;

			localStorage[this.prefix + 'State'] = this._state;

			this.$jsStatusCheckbox.prop('checked', this._state);
			this.$jsStatusLabel.html(this._state?'Включено':'Выключено');
		},

		_updateUrl: function() {
			var val = this.$jsUrlInput.val();
			localStorage[this.prefix + 'Url'] = val;

			this._checkPatterns();
		},
		setUrl: function(val) {
			this.$jsUrlInput.val(val);
		},

		_rulesAdd: function(model) {

			var rule = new Rule({
				model: model
			});
			this._ruleViews.push( rule );

			this.$jsList.append(rule.$el);
		},
		_rulesDestroy: function(model) {
			this._rulesSync();
		},
		_rulesSync: function() {
			var empty = false;
			for (var i = 0; i < this.rules.length; i++) {
				var model = this.rules.at(i);
				if (model.get('match')=='' && model.get('replace')=='') {
					empty = true;
				}
			}
			if (!empty) {
				this.rules.add({}).save();
			}

			this._checkPatterns();
		},

		_checkPatterns: function() {
			var 
				url = this.$jsUrlInput.val(),
				result = '',
				matchedCid = ''
			;
			if (url) {
				for (var i = 0; i < this.rules.length; i++) {
					var 
						rule = this.rules.at(i)
						match = rule.match(url)
					;
					if ( match ) {
						result = match;
						matchedCid = rule.cid;
						break;
					}
				}
			}

			for (var i = 0; i < this._ruleViews.length; i++) {
				if (this._ruleViews[i].model.cid === matchedCid) {
					this._ruleViews[i].$el.addClass('rule_matched');
				} else {
					this._ruleViews[i].$el.removeClass('rule_matched');
				}
			}

			this.$jsUrlResult.text(result||'Не найдено совпадений');
		}
	});
});