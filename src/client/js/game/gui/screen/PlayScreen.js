game.gui.screen.PlayScreen = me.ScreenObject.extend({

	onResetEvent: function() {
		// load a level
		me.levelDirector.loadLevel("mini");

		// make sure everything is in the right order
		//me.game.sort();

		// enable the keyboard
		me.input.bindKey(me.input.KEY.Q, "left");
		me.input.bindKey(me.input.KEY.D, "right");
		me.input.bindKey(me.input.KEY.SPACE, "jump", false);
		me.input.bindKey(me.input.KEY.X, "shoot", true);
		me.input.bindPointer(me.input.KEY.X);
	},

	onDestroyEvent: function() {
		// enable the keyboard
		me.input.unbindKey(me.input.KEY.LEFT);
		me.input.unbindKey(me.input.KEY.RIGHT);
		me.input.unbindKey(me.input.KEY.UP);
		me.input.unbindKey(me.input.KEY.SPACE);

		me.audio.stopTrack();
		// remove the HUD
		//me.game.disableHUD();
	}
});
