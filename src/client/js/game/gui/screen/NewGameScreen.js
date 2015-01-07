game.gui.screen.NewGameScreen = game.gui.screen.ComplexScreen.extend({
	
	init: function() {
		this._super(game.gui.screen.ComplexScreen, "init");
		
		this.bgImage = null;
		this.cancelBtn = null;
		this.okBtn = null;
		this.input = null;
		
		this.popup = null;
		
		this.active = true;
	},
	
	validate: function() {
		if(this.input.text != "") {
			var text = this.input.text;
			var screen = this;
			
			//Initialize popup
			this.popup = new (game.gui.component.PopUpFrame.extend({
			    init: function() {
			        this._super(game.gui.component.PopUpFrame, "init", ["creating game", screen]);
			    	var popup = this;
			    	
			    	if(game.connection.isClosed() && !game.connection.init())
			    		popup.setText("your browser is \n incompatible");
			    	else if(game.connection.sendMsg("create game", {name: text})) {
			
			    		game.connection.on("confirm game create", function(confirm) {
			                if(confirm.ok) {
			                	popup.setText("waiting for \n player 2");
			                	
			                	game.connection.on("player joined game", function() {
			                		popup.setText("player 2 joined \n the game");
			                		
			                		setTimeout(function() {
			                			me.state.change(me.state.PLAY);
			                		}, 2000);
			                	});
			                }
			                else popup.setText("name allready \n in use");
			            });
			        }
			    },
			    
			    close: function() {
			   		game.connection.sendMsg("leave game");
			    	this._super(game.gui.component.PopUpFrame, "close");
			    }
			}))();
		}
	},

	onResetEvent: function() {
		this.active = true;
		
		if(game.connection.isClosed()) game.connection.init();
		
		if (this.bgImage == null) {
			this.bgImage = me.loader.getImage("menu_bg");
			
			this.add([
				new game.gui.component.TextBox({
					text: "ENTER THE NAME\n OF YOUR GAME",
					align: "center"
				}),
				
				this.input = new game.gui.component.InputText({
					maxTextLength: 14
				}),

				new game.gui.component.Panel({
					width: 410,
					spacing: 30,
					components: [
						this.cancelBtn = new game.gui.component.Button({text: "cancel", action: me.state.MENU, width: 190}),
						this.okBtn = new game.gui.component.Button({text: "ok", action: jQuery.proxy(this.validate, this), width: 190})
					],
					layout: game.gui.component.Panel.HORIZONTAL
				})
			]);
		}
		this.popup = null;
		
		this._super(game.gui.screen.ComplexScreen, "onResetEvent");
		me.input.bindKey(me.input.KEY.ESC, "esc", true);
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);
	},

	onDestroyEvent: function() {
		this.active = false;
		
		me.input.unbindKey(me.input.KEY.ESC);
		me.input.unbindKey(me.input.KEY.ENTER);
		
		this.input.setText("");
		
		game.connection.off("confirm game create");
		game.connection.off("player joined game");
		
		this._super(game.gui.screen.ComplexScreen, "onDestroyEvent");
	},

	draw: function(context) {
		if(this.active) {
			if(me.input.isKeyPressed("enter"))
				this.okBtn.clicked();
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