game.gui.component.TextBox = game.gui.component.Component.extend({
	
	/**
	 * options:
	 *		options from Components
	 *		text => (string) text too be displayed in the component
	 *		align => (string) text alignement options: ex: "center middle"
	 *		frame => (boolean) true if you want a FramedRect around the TextBox
	 *		lineSpacing => (number) number of pixel between lines
	 */
	init: function(options, frameOptions) {
		var defaults = {
				text: "",
				align: "",
				frame: false,
				lineSpacing: 8
			},
			options = $.extend(defaults, (options || {}));
			
		this.formatText = function(txt) {
			return txt.toUpperCase().trim().replace(/\s*(\n)\s*/, "$1");
		};
		
		this.text = this.formatText(options.text);
		this.lineSpacing = options.lineSpacing;
		this.align = options.align.trim().toUpperCase().split(" ").sort();
		
		this.width = options.width;
		this.height = options.height;
		
		this.fitTextH = options.fitTextH || !this.width;
		this.fitTextV = options.fitTextV || !this.height;
		
		this.textZone = new game.gui.component.Component({x:0, y:0, width: this.width, height: this.height});
		
		this.initText();
		
		this._super(game.gui.component.Component, "init", [$.extend(options, {width: this.width, height: this.height})]);
		
		if(options.frame) {
			this.frame = new game.gui.component.FramedRect(this, frameOptions);
			this.setWidth(this.width);
			this.setHeight(this.height);
			
			var padding = this.frame.getPadding();
			this.textZone.setX(padding.top);
			this.textZone.setY(padding.right);
		}
	},
	
	initText: function() {
		this.lines = this.text.split("\n");
		
		this.textWidth = 0;
		this.lines.map(function(line) {
			this.textWidth = Math.max(this.textWidth, line.length * game.gui.font.sSize.x);
		}, this);
		
		this.textHeight = this.lines.length * game.gui.font.sSize.x + (this.lineSpacing * (this.lines.length - 1));

		this.textPosX = 0;
		this.textPosY = 0;
		
		if(this.align.indexOf("CENTER") != -1 && !this.fitTextH) 
			this.textPosX = (this.textZone.width / 2) - (this.textWidth / 2);
			
		if(this.align.indexOf("MIDDLE") != -1 && !this.fitTextV) 
			this.textPosY = (this.textZone.height / 2) - (this.textHeight / 2);

		this.needUpdate = true;
		
		if(this.fitTextH) this.setWidth(this.textWidth);
		if(this.fitTextV) this.setHeight(this.textHeight);
	},
	
	setWidth: function(width) {
		this.textZone.setWidth(width);
		if(width != this.textWidth && this.fitTextH) {
			this.fitTextH = false;
			this.initText();
		}
			
		if(this.frame) {
			this.frame.setWidth(width);
			width = this.frame.width;
		}
		this._super(game.gui.component.Component, "setWidth", [width]);
		this.needUpdate = true;
	},
	
	setHeight: function(height) {
		this.textZone.setHeight(height);
		if(height != this.textHeight && this.fitTextV) {
			this.fitTextV = false;
			this.initText();
		}

		if(this.frame) {
			this.frame.setHeight(height);
			height = this.frame.height;
		}
		this._super(game.gui.component.Component, "setHeight", [height]);
		this.needUpdate = true;
	},
	
	setText: function(text, fitTextH, fitTextV) {
		this.text = this.formatText(text);
		
		if(fitTextH != undefined) this.fitTextH = fitTextH;
		if(fitTextV != undefined) this.fitTextV = fitTextV;
		this.initText();
	},
	
	setX: function(x) {
		this._super(game.gui.component.Component, "setX", [x]);
	},
	
	setY: function(y) {
		this._super(game.gui.component.Component, "setY", [y]);
	},
	
	draw: function(context) {
		if(this.frame) {
			this.needUpdate = this.needUpdate || this.frame.needUpdate;
			this.frame.render();
		}	
		
		this._super(game.gui.component.Component, "draw",
			[context,
			function(ctx) {
				var posX = this.textZone.pos.x + this.textPosX,
					posY = this.textZone.pos.y + this.textPosY;
					
				if(this.frame)
					ctx.drawImage(this.frame.cache, 0, 0, this.width, this.height);
				
				if(this.lines.length > 1) {
					this.lines.map(function(line) {
						if(this.align[0] === "CENTER")
							posX = this.textZone.pos.x + this.textPosX + (this.textWidth / 2) - (line.length * game.gui.font.sSize.x / 2);
						
						game.gui.font.draw(ctx, line, posX, posY);
						posY += this.lineSpacing + game.gui.font.sSize.x;
					}, this); 
				}
				else game.gui.font.draw(ctx, this.lines[0], posX, posY);
			},
			this]
		);
	}	
});
