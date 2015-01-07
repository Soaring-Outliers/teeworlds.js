game.gui.component.ScrollPanel = game.gui.component.Panel.extend({

	init: function(options) {
		var defaults = {},
			options = $.extend(defaults, (options || {}));
		this._super(game.gui.component.Panel, "init", [options]);
	},
	
	add: function(component) {
		this._super(game.gui.component.Panel, "add", [component]);
	},
	
	remove: function(component) {
		this._super(game.gui.component.Panel, "remove", [component]);
	},
	
	onResetEvent: function() {
		this._super(game.gui.component.Panel, "onResetEvent");
	},
	
	onDestroyEvent: function() {
		this._super(game.gui.component.Panel, "onDestroyEvent");
	},
			
	draw: function(context) {
		this._super(game.gui.component.Panel, "draw", [context]);
	
	}
});