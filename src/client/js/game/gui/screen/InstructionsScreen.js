game.gui.screen.InstructionsScreen = game.gui.screen.ComplexScreen.extend({
	
	init: function() {
		this._super(game.gui.screen.ComplexScreen, "init");
		
		this.bgImage = null;
		
		this.backBtn = null;
	},

	onResetEvent: function() {
		if (this.bgImage == null) {
			this.bgImage = me.loader.getImage("menu_bg");
			
			this.add([
				new game.gui.component.TextBox({
					text: "instructions", 
					align: "center middle",
					height: 48
				}),
				
				new game.gui.component.TextBox({
				    text:	"controls:\n\n"+
				    		"arrows: move\n"+ 
				    		"space:  shoot",
				    width: 520, 
				    height: 280,
				    frame: true
				}),
				
				this.backBtn = new game.gui.component.Button({
					text: "back", 
					action: me.state.MENU, 
					width: 300
				})
			]);
		}
		
		this._super(game.gui.screen.ComplexScreen, "onResetEvent");
		me.input.bindKey(me.input.KEY.ESC, "esc", true);
	},
	
	onDestroyEvent: function() {
		me.input.unbindKey(me.input.KEY.ESC);
		this._super(game.gui.screen.ComplexScreen, "onDestroyEvent");
	},

	draw: function(context) {
		if(me.input.isKeyPressed("esc")) {
			this.backBtn.clicked();
			return;
		}
		
		context.drawImage(this.bgImage, 0, 0);
		
		this._super(game.gui.screen.ComplexScreen, "draw", [context]);
	}
});