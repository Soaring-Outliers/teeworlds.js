/**
 * @depend ComplexScreen.js
 */
game.gui.screen.JoinGameScreen = game.gui.screen.ComplexScreen.extend({
	
	init: function() {
		this._super(game.gui.screen.ComplexScreen, "init");
		
		this.bgImage = null;
		this.cancelBtn = null;
		this.okBtn = null;
		this.scrollPanel = null;
		
		this.popup = null;
		
		this.active = true;
	},
	
	validate: function() {
		
	},

	onResetEvent: function() {
		this.active = true;
		
		if(game.connection.isClosed()) game.connection.init();
		
		if (this.bgImage == null) {
			this.bgImage = me.loader.getImage("menu_bg");
			
			this.add([
				new game.gui.component.TextBox({
					text: "CHOOSE A GAME",
					align: "center"
				}),
				
				this.scrollPanel = new game.gui.component.ScrollPanel({}),
				
				new game.gui.component.Panel({
					width: 410,
					spacing: 30,
					components: [
						this.cancelBtn = new game.gui.component.Button({text: "cancel", action: me.state.MENU, width: 190}),
					],
					layout: game.gui.component.Panel.HORIZONTAL
				})
			]);
		}
		this.popup = null;
		
		this._super(game.gui.screen.ComplexScreen, "onResetEvent");
		me.input.bindKey(me.input.KEY.ESC, "esc", true);
	},

	onDestroyEvent: function() {
		this.active = false;
		
		me.input.unbindKey(me.input.KEY.ESC);
		this._super(game.gui.screen.ComplexScreen, "onDestroyEvent");
	},

	draw: function(context) {
		if(this.active) {
			if(me.input.isKeyPressed("esc")) {
				this.cancelBtn.clicked();
				return;
			}
		}
		
		context.drawImage(this.bgImage, 0, 0);
		
		this._super(game.gui.screen.ComplexScreen, "draw", [context]);
		
		if(this.popup != null && !this.active)
		    this.popup.draw(context);
	}
});