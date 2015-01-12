/**
 * @depend ComplexScreen.js
 */
game.gui.screen.TitleScreen = game.gui.screen.ComplexScreen.extend({
	
	init: function() {
		this._super(game.gui.screen.ComplexScreen, "init", [190]);

		this.bgImage = null;
		this.titleImage = null;
		this.simonImage = null;
	},

	onResetEvent: function() {
		//me.game.disableHUD();
		
		if (this.bgImage == null) {
			this.bgImage = me.loader.getImage("menu_bg");
			this.titleImage = me.loader.getImage("menu_logo");
			this.titleImage.pos = new me.Vector2d((me.video.getPos().width / 2 - this.titleImage.width / 2), 20);
			
			this.simonImage = me.loader.getImage("menu_simon");
			this.simonImage.pos = new me.Vector2d(489, 320);
			
			var btnWidth = 400;
			var btnHeight = 32;
			this.add([
				new game.gui.component.Button({text: "new game", action: me.state.MENU_NEWGAME, width: btnWidth, height: btnHeight}),
				new game.gui.component.Button({text: "join a game", action: me.state.MENU_JOINGAME, width: btnWidth, height: btnHeight}),
				new game.gui.component.Button({text: "instructions",action: me.state.MENU_INSTRUCTIONS, width: btnWidth, height: btnHeight})
			]);
		}
		
		this._super(game.gui.screen.ComplexScreen, "onResetEvent");
		//me.input.bindKey(me.input.KEY.ENTER, "enter", true); 
	},

	draw: function(context) {
		context.drawImage(this.bgImage, 0, 0);
		context.drawImage(this.titleImage, this.titleImage.pos.x, this.titleImage.pos.y);
		context.drawImage(this.simonImage, this.simonImage.pos.x, this.simonImage.pos.y);
		
		this._super(game.gui.screen.ComplexScreen, "draw", [context]);
	}
});