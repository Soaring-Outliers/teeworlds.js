game.gui.component.Button = game.gui.component.TextBox.extend({

	init: function(options) {
		var defaults = {
				selected: false,
				bgImages: {
					"on": game.gui.getImageFromTexture("bg_hover.png"),
					"off": game.gui.getImageFromTexture("bg.png")
				}
			},
			options = $.extend(defaults, (options || {}));
		
		this.selectionHandler = options.selectionHandler;
		this.action = options.action;
		this.selected = options.selected;
		
		this._super(game.gui.component.TextBox, "init", [$.extend(options, {align: "center middle", frame: true})]);
		
		this.selectAnim = new game.gui.Animation({from: 0.8, to: 1, sec: 0.5});
		
		this.bgImages = options.bgImages;
		this.onResetEvent();
	},
	
	clicked: function() {
		if(typeof this.action === "number" && this.action % 1 == 0)
			me.state.change(this.action);
		else if(typeof this.action === "function")
			this.action();
	},
	
	update: function() {
		return this.active;
	},
	
	draw: function(context) {
		if(this.active) {
			var selected = this.containsPointV(me.input.mouse.pos) || this.selected;
			
			if(this.selectionHandler && selected != this.selected && selected) {
				this.selectionHandler.select(this);
				this.selectAnim.reset();
			}
			
			if(selected) this.frame.setBgImage(this.bgImages["on"]);
			else this.frame.setBgImage(this.bgImages["off"]);
		}
		
		this._super(game.gui.component.TextBox, "draw", [context]);
	},
	
	onResetEvent: function() {
		this.active = true;
		me.input.registerPointerEvent("pointerdown", this, this.clicked.bind(this));
	},
	
	onDestroyEvent: function() {
		this.active = false;
		me.input.releasePointerEvent("pointerdown", this);
	},
	
	select: function(bool) {
		this.select = bool;
	}
});
