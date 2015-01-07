game.gui.screen.ComplexScreen = me.ScreenObject.extend({
	
	init: function(topPadding, spacing) {
		this._super(me.ScreenObject, "init", [true]);
		
		this.panel = new game.gui.component.Panel({y: topPadding, spacing: spacing});
		
		//me.input.bindKey(me.input.KEY.ENTER, "enter", true); 
	},
	
	update: function() {
		return true;
	},
	
	add: function(component) {
		this.panel.add(component);
	},
	
	onResetEvent: function() {
		/*me.input.registerPointerEvent("mousemove", this, (function() {
			this.needUpdate = true;
			setTimeout(jQuery.proxy(function() {
				this.needUpdate = false;
			}, this), 1000);
		}).bind(this));*/
		
		this.panel.onResetEvent();
	},
 
	onDestroyEvent: function() {
		//me.input.releasePointerEvent("mousemove", this);
		
		this.panel.onDestroyEvent();
	},
 
	draw: function(context) {
		this.panel.draw(context);
	}
});