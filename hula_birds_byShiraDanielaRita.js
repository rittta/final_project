(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"hula_birds_byShiraDanielaRita_atlas_", frames: [[7270,572,800,533],[5421,3984,422,715],[5348,1278,2000,1125],[6570,4944,148,149],[5305,5387,1066,425],[6857,4297,368,367],[6972,2774,367,367],[3169,5387,1066,426],[6602,3145,367,368],[6489,3558,368,368],[6602,2775,368,368],[5421,4701,220,95],[6972,2405,367,367],[6373,5236,692,212],[4237,5387,1066,425],[6489,3928,368,367],[6602,2405,368,368],[6487,4297,368,367],[5421,3558,1066,424],[6971,3145,367,367],[6971,3514,367,367],[6859,3883,367,367],[6452,4666,286,276],[6740,4666,347,223],[6740,4891,319,183],[6443,4944,125,188],[5643,4701,48,48],[0,3885,3167,2111],[5348,2405,1252,1151],[5845,3984,640,426],[7270,0,750,570],[0,0,5346,3883],[5421,4830,605,404],[6028,4830,413,404],[5348,0,1920,1276],[3169,3885,2250,1500],[5845,4412,605,416]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._800pxArdea_purpurea_Nagarhole_2010 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bird1908392_1280 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24copy = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30copy = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33copy = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35copy = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.icons8unavailable48 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.shaldag1 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.siksak1 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.sofit1 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.stonecurlew22copy1 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.רקעלריטה0101 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.ריטה1 = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.אנפתלילה = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.ברווזבלירגליים = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.דוכיפתקטן = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.כחל = function() {
	this.spriteSheet = ss["hula_birds_byShiraDanielaRita_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.txt_box2 = new cjs.Text("", "bold 12px 'Arial'", "#336633");
	this.txt_box2.name = "txt_box2";
	this.txt_box2.textAlign = "right";
	this.txt_box2.lineHeight = 14;
	this.txt_box2.lineWidth = 441;
	this.txt_box2.parent = this;
	this.txt_box2.setTransform(141.6,-8.9);

	this.txt_box1 = new cjs.Text("", "bold 12px 'Arial'", "#336633");
	this.txt_box1.name = "txt_box1";
	this.txt_box1.textAlign = "right";
	this.txt_box1.lineHeight = 14;
	this.txt_box1.lineWidth = 441;
	this.txt_box1.parent = this;
	this.txt_box1.setTransform(141.6,-23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_box1},{t:this.txt_box2}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(1,1,1,0.008)").ss(1,1,1).p("AjOhfQAQAuAAAxQAACwjDB9QgBAAgCABA2KjiQAngnA2gjQDDh8ETAAQEUAADCB8QCMBaAnBzQEDgxFQAAQGrAAEtBPQEuBOAABwQAABwkuBPQktBPmrAAQmpAAkuhPQgagHgYgHQjBB7kSAAQkTAAjDh8QgJgGgIgG");
	this.shape.setTransform(46.1,-17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("AlJEsIgSgLQkvAkl2AAQpAAAmXhVQmXhVAAh4QAAh3GXhVQGXhVJAAAQFIAAESAcQAmgnA3giQDCh9ETAAQETAADDB9QCMBZAnBzQAQAuAAAxQAACwjDB8IgDACIADgCQDDh8AAiwQAAgxgQguQEDgxFRAAQGrAAEtBPQEuBOAABwQAABwkuBPQktBPmrAAQmrAAkthPIgygOQjBB7kSAAQkTAAjCh9gAMVhfIAAAAg");
	this.shape_1.setTransform(-53.4,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_border, new cjs.Rectangle(-301.6,-61.4,490.7,87), null);


(lib.tenshemet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-16,-64,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tenshemet, new cjs.Rectangle(-16,-64,89.7,134.8), null);


(lib._switch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap26();
	this.instance.parent = this;
	this.instance.setTransform(-53.3,-53.7,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._switch, new cjs.Rectangle(-53.3,-53.7,106.7,107.5), null);


(lib.shaldag_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Bitmap29();
	this.instance.parent = this;
	this.instance.setTransform(-471,-463,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Bitmap30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-736,-338,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Bitmap31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-187,-539,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Bitmap27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-533,-212.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.shaldag_info, new cjs.Rectangle(-736,-539,1269,751.5), null);


(lib.restart_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("איפוס קיבועים", "15px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 56;
	this.text.parent = this;
	this.text.setTransform(1.3,-20.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AEiAAQAAB4hVBVQhVBVh4AAQhyAAhThNQgEgEgDgEQhFhEgNhcQgDgWAAgXQAAh3BVhVQBVhVB3AAQB4AABVBVQBVBVAAB3g");
	this.shape.setTransform(0.5,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AjEDVIgIgIQhEhFgNhbQgEgWAAgXQAAh3BVhVQBVhVB3AAQB4AABVBVQBVBVAAB3QAAB4hVBVQhVBVh4AAQhyAAhShNg");
	this.shape_1.setTransform(0.5,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-31.8,62,62);


(lib.no = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icons8unavailable48();
	this.instance.parent = this;
	this.instance.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.no, new cjs.Rectangle(-24,-24,48,48), null);


(lib.night_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap24copy();
	this.instance.parent = this;
	this.instance.setTransform(-484.4,-365.5,0.484,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-484.4,-365.5,969,731.2);


(lib.nameBubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap35();
	this.instance.parent = this;
	this.instance.setTransform(-79,-34,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-34,157.9,68.2);


(lib.invisible_halfSwitch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(68,68,68,0.008)").s().p("AmUEaIAAozIMpAAIAAIzg");
	this.shape.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.invisible_halfSwitch, new cjs.Rectangle(-40.4,-29.5,81,56.5), null);


(lib.hover_categ_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(67,154,58,0.698)").s().p("AlyBlIAAjJILlAAIAADJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hover_categ_line, new cjs.Rectangle(-37.1,-10,74.2,20.1), null);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.008)").ss(3,1,1).p("AhbAAIC3AA");
	this.shape.setTransform(-0.2,-8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(102,102,0,0.008)").ss(3,1,1).p("AAABcIAAi3");
	this.shape_1.setTransform(-9.4,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,255,102,0.008)").ss(3,1,1).p("ABcAAIi3AA");
	this.shape_2.setTransform(-0.2,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.008)").ss(3,1,1).p("AAAhbIAAC3");
	this.shape_3.setTransform(9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ag1A2IA1g2Ig1g1AAAAAIA2g1AA2A2Ig2g2");
	this.shape_4.setTransform(-0.1,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.008)").s().p("AhVBVIAAipICsAAIAACpgAAAACIA3A2Ig3g2IA3g1Ig3A1Ig1g1IA1A1Ig1A2IA1g2gAAAACg");
	this.shape_5.setTransform(-0.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-10,21.5,21.5);


(lib.duhifat_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap35copy();
	this.instance.parent = this;
	this.instance.setTransform(-484,-158,0.466,0.466);

	this.instance_1 = new lib.Bitmap34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-136,-282,0.466,0.466);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_2 = new lib.Bitmap33copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-316,-237,0.466,0.466);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Bitmap30copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-350,-79,0.628,0.638);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.duhifat_info, new cjs.Rectangle(-484,-282,803.9,474.9), null);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AmOGPQikilAAjqQAAjpCkilQClikDpAAQDqAAClCkQCkClAADpQAADqikClQilCkjqAAQjpAAilikg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(-56.3,-56.3,112.7,112.7), null);


(lib.baz_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap41();
	this.instance.parent = this;
	this.instance.setTransform(-163,-363,0.45,0.45);

	this.instance_1 = new lib.Bitmap40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-344,-314,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_2 = new lib.Bitmap39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-509,-235,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Bitmap38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-384,-159,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.baz_info, new cjs.Rectangle(-509,-363,798.4,472.5), null);


(lib.anafat_laila_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Bitmap43();
	this.instance.parent = this;
	this.instance.setTransform(-160,-231,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Bitmap44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-507,-104,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Bitmap45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-340,-183,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Bitmap42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-378,-24,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.anafat_laila_info, new cjs.Rectangle(-507,-231,800.3,474), null);


(lib.allday = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("כל הציפורים", "15px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 56;
	this.text.parent = this;
	this.text.setTransform(6.3,-39.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AEigGIAAAQQgDBWgvBEQgPAVgUAUQhVBVh4AAQhyAAhThNQgEgEgDgEQgUgUgPgVQglg2gKhBQgDgWAAgXQAAh3BVhVQBVhVB3AAQB4AABVBVQBSBSADB0g");
	this.shape.setTransform(6.1,-16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(66,66,66,0.008)").s().p("AEDDvQAvhEADhWIAACagAjcDvQglg2gJhBQgEgWAAgXQAAh3BVhVQBVhVB3AAQB4AABVBVQBSBTADByIAAARQgDBWgvBEgAk0DvIAAndIJpAAIAAEyQgDhyhShTQhVhVh4AAQh3AAhVBVQhVBVAAB3QAAAXAEAWQAJBBAlA2g");
	this.shape_1.setTransform(4.2,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-47.8,63.8,62.4);


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.water = new cjs.Text("מקורות מים וביצות", "14px 'Arial'", "#FFFFFF");
	this.water.name = "water";
	this.water.textAlign = "right";
	this.water.lineHeight = 18;
	this.water.lineWidth = 105;
	this.water.parent = this;
	this.water.setTransform(52.7,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.water).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,-0.1,1.511,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-10.5,109.3,21.1);


(lib.tenshemet_BTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(7,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// BTN
	this.tenshemet = new lib.tenshemet();
	this.tenshemet.parent = this;
	this.tenshemet.setTransform(-28.8,-3.4);
	new cjs.ButtonHelper(this.tenshemet, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tenshemet).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-67.4,89.7,134.8);


(lib.sofit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(11,-14);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// sofit
	this.instance_1 = new lib.sofit1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.9,-68.4,0.321,0.321,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.8,-68.4,205.7,136.9);


(lib.small = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.small = new cjs.Text("קטנה", "14px 'Arial'", "#FFFFFF");
	this.small.name = "small";
	this.small.textAlign = "right";
	this.small.lineHeight = 18;
	this.small.lineWidth = 58;
	this.small.parent = this;
	this.small.setTransform(30,-8.5,1.032,1);

	this.timeline.addTween(cjs.Tween.get(this.small).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,0.6,0.87,1,0,0,0,-0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-10.5,64.2,21.1);


(lib.siksak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(-4.6,-17.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// siksak
	this.instance_1 = new lib.siksak1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59.5,-54.7,0.095,0.095);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-54.7,119.1,109.5);


(lib.shrakrak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(-4.7,4.8,1,1,-50.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shrakrak
	this.instance_1 = new lib.ריטה1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(104.1,45.4,0.312,0.312,169.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-78.7,208.1,157.5);


(lib.shaldag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.text = new cjs.Text("שלדג אדום חזה", "18px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 127;
	this.text.parent = this;
	this.text.setTransform(-19.9,-90.1);

	this.instance = new lib.nameBubble();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-76.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text}]},1).to({state:[]},1).wait(1));

	// Shaldag
	this.instance_1 = new lib.shaldag1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115.9,-77.2,0.073,0.073);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.9,-77.2,231.8,154.5);


(lib.reptile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.reptile = new cjs.Text("זוחלים", "14px 'Arial'", "#FFFFFF");
	this.reptile.name = "reptile";
	this.reptile.textAlign = "right";
	this.reptile.lineHeight = 18;
	this.reptile.lineWidth = 72;
	this.reptile.parent = this;
	this.reptile.setTransform(36.1,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.reptile).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-1.6,0.5,1.07,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-10.5,76.1,21.1);


(lib.park = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.park = new cjs.Text("שדות פתוחים", "14px 'Arial'", "#FFFFFF");
	this.park.name = "park";
	this.park.textAlign = "right";
	this.park.lineHeight = 18;
	this.park.lineWidth = 105;
	this.park.parent = this;
	this.park.setTransform(52.7,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.park).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-0.8,0.1,1.522,1,0,0,0,-0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-10.5,109.3,21.1);


(lib.medium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.medium = new cjs.Text("בינונית", "14px 'Arial'", "#FFFFFF");
	this.medium.name = "medium";
	this.medium.textAlign = "right";
	this.medium.lineHeight = 18;
	this.medium.lineWidth = 60;
	this.medium.parent = this;
	this.medium.setTransform(30.1,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.medium).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(0.4,0.5,0.847,1,0,0,0,-0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-10.5,64.2,21.1);


(lib.mammal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.mammal = new cjs.Text("יונקים קטנים", "14px 'Arial'", "#FFFFFF");
	this.mammal.name = "mammal";
	this.mammal.textAlign = "right";
	this.mammal.lineHeight = 18;
	this.mammal.lineWidth = 73;
	this.mammal.parent = this;
	this.mammal.setTransform(36.6,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.mammal).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-1,1,1.064,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-11.3,77.1,22.8);


(lib.large = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.large = new cjs.Text("גדולה", "14px 'Arial'", "#FFFFFF");
	this.large.name = "large";
	this.large.textAlign = "right";
	this.large.lineHeight = 18;
	this.large.lineWidth = 58;
	this.large.parent = this;
	this.large.setTransform(30,-8.5,1.032,1);

	this.timeline.addTween(cjs.Tween.get(this.large).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.7,0.842,1,0,0,0,-0.2,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-10.5,64.2,21.1);


(lib.kahal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(-15.9,-3.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// kahal
	this.instance_1 = new lib.כחל();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.8,-43.2,0.161,0.208);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.8,-43.2,97.7,86.6);


(lib.hivai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(7.1,7.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// hivai
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-125.8,-40.2,0.641,0.641,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.8,-97.8,251.8,195.6);


(lib.hasida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(5,17.4,1,1,39.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// hasida
	this.instance_1 = new lib.Bitmap8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107.2,-61.5,0.672,0.672);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.2,-61.5,214.4,123);


(lib.flight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.flight = new cjs.Text("בעיקר בתעופה", "14px 'Arial'", "#FFFFFF");
	this.flight.name = "flight";
	this.flight.textAlign = "right";
	this.flight.lineHeight = 18;
	this.flight.lineWidth = 104;
	this.flight.parent = this;
	this.flight.setTransform(52.2,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.flight).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-1.1,0.2,1.519,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.1,-10.5,108.3,21.1);


(lib.fish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.fish = new cjs.Text("דגים ודו-חיים", "14px 'Arial'", "#FFFFFF");
	this.fish.name = "fish";
	this.fish.textAlign = "right";
	this.fish.lineHeight = 18;
	this.fish.parent = this;
	this.fish.setTransform(36.9,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.fish).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-0.8,0.5,1.065,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-10.5,75,21.1);


(lib.fall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.fall = new cjs.Text("רק בעונות מעבר", "14px 'Arial'", "#FFFFFF");
	this.fall.name = "fall";
	this.fall.textAlign = "right";
	this.fall.lineHeight = 18;
	this.fall.lineWidth = 89;
	this.fall.parent = this;
	this.fall.setTransform(39.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.fall).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-4.9,-0.6,1.256,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-10.5,93.3,19.6);


(lib.efroni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(1.7,3.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// efroni
	this.instance_1 = new lib.bird1908392_1280();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.5,-39.8,0.111,0.111);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-39.8,47,79.6);


(lib.duhifat_BTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TXT
	this.duhifat = new cjs.Text("דוכיפת", "18px 'Arial'", "#FFFFFF");
	this.duhifat.name = "duhifat";
	this.duhifat.textAlign = "center";
	this.duhifat.lineHeight = 22;
	this.duhifat.lineWidth = 92;
	this.duhifat.parent = this;
	this.duhifat.setTransform(1.2,-78.9);

	this.instance = new lib.nameBubble();
	this.instance.parent = this;
	this.instance.setTransform(1.2,-66.7,0.854,0.761);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.duhifat}]},1).to({state:[]},1).wait(1));

	// PIC
	this.instance_1 = new lib.דוכיפתקטן();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85.4,-56.9,0.076,0.076);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-56.9,170.9,113.9);


(lib.cron = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-7.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// cron
	this.instance_1 = new lib.stonecurlew22copy1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.6,-66.5,0.234,0.234,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-66.5,175.1,133.1);


(lib.bugs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.bug = new cjs.Text("חרקים", "14px 'Arial'", "#FFFFFF");
	this.bug.name = "bug";
	this.bug.textAlign = "right";
	this.bug.lineHeight = 18;
	this.bug.lineWidth = 72;
	this.bug.parent = this;
	this.bug.setTransform(36.1,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.bug).wait(3));

	// highlight
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0.3,1.066,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-10.5,76.1,21.1);


(lib.baz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TXT
	this.text = new cjs.Text("בז ערב", "24px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(18,96.6,1.439,1.439);

	this.instance = new lib.nameBubble();
	this.instance.parent = this;
	this.instance.setTransform(18,116.1,1.439,1.439,180);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text}]},1).to({state:[]},1).wait(1));

	// baz
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-108,-104.2,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-104.2,216.1,208.5);


(lib.barchiya = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(34.5,-7.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// barchiya
	this.instance_1 = new lib.ברווזבלירגליים();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.1,-79.5,0.092,0.092,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.4,-79.5,200.9,159);


(lib.anfa_argmanit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.instance = new lib.no();
	this.instance.parent = this;
	this.instance.setTransform(-71.3,-9.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// anfa_argmanit
	this.instance_1 = new lib._800pxArdea_purpurea_Nagarhole_2010();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-178.9,-119.2,0.447,0.447);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.9,-119.2,358,238.5);


(lib.anafat_laila = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TXT
	this.text = new cjs.Text("אנפת לילה", "18px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 91;
	this.text.parent = this;
	this.text.setTransform(-59,-104.2);

	this.instance = new lib.nameBubble();
	this.instance.parent = this;
	this.instance.setTransform(-59,-90.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text}]},1).to({state:[]},1).wait(1));

	// anafat_laila
	this.instance_1 = new lib.אנפתלילה();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-113.5,-111,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5,-111,227.1,222.2);


(lib.allyear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.allyear = new cjs.Text("כל השנה", "14px 'Arial'", "#FFFFFF");
	this.allyear.name = "allyear";
	this.allyear.textAlign = "right";
	this.allyear.lineHeight = 18;
	this.allyear.lineWidth = 83;
	this.allyear.parent = this;
	this.allyear.setTransform(41.4,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.allyear).wait(3));

	// bg
	this.instance = new lib.hover_categ_line();
	this.instance.parent = this;
	this.instance.setTransform(-2.8,0,1.255,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.3,-10.5,86.8,21.1);


// stage content:
(lib.birds_project_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		stage.enableMouseOver(24);
		
		if (!self.alreadyExecuted) //starts functions on load
		{
			self.alreadyExecuted = true;
		
			night_disabled_func();  //disables - night elements 
			
			restart_txt_func();		//disables - categories highlights 
			restart_circle_func();  // hide all circles (highlights)
			restart_x_func();  //disables - categories "x" buttons 
			info_disabled_func();
			disable_pointer();
			onload_txt_func(); //shows starting instruction
		}
		self.restart_birds_btn.visible = false;
		
		//txt functions////////////
		
		function onload_txt_func() //shows starting instruction
		{
			self.txt_border.txt_box1.text = "לחץ על התפריט או המתג כדי לסנן ציפורים";
			self.txt_border.txt_box2.text = "לחץ על ציפור זמינה לקבלת מידע נוסף עליה";
		}
		
		function more_info_txt_func() //shows instruction when "more info" shown
		{
			self.txt_border.txt_box1.text = " ";
			self.txt_border.txt_box2.text = " והמשך לחקור Xליציאה – לחץ על ה";
		}
		
		function fixed_categ_txt_func() //shows instruction when a category is fixed
		{
			self.txt_border.txt_box1.text = "לחץ על מאפיין נוסף להמשך הסינון או לחץ על ציפור זמינה למידע נוסף עליה";
			self.txt_border.txt_box2.text = " או על כפתור האיפוס Xלביטול הקיבוע – לחץ על ה";
		}
		
		function reset_txt_if() {
			if (categ_clicked == 0) // there's no categories's "x" visible
			{
				onload_txt_func(); //shows starting instruction
			}
		}
		
		
		//starting functions////////////
		
		function disable_pointer() //visually disables undeveloped birds
		{
			self.anfa_argmanit.cursor = "arrow";
			self.siksak.cursor = "arrow";
			self.barchiya.cursor = "arrow";
			self.sofit.cursor = "arrow";
			self.efroni.cursor = "arrow";
			self.cron.cursor = "arrow";
			self.shrakrak.cursor = "arrow";
			self.hivai.cursor = "arrow";
			self.kahal.cursor = "arrow";
			self.hasida.cursor = "arrow";
			self.tenshemet.cursor = "arrow";
		}
		
		function night_disabled_func() //disables - night elements 
		{
			self.night_switch.visible = false;
			self.night_bg.visible = false;
		}
		
		function info_disabled_func() //disables - more info elements 
		{
			self.duhifat_info.visible = false;
			self.shaldag_info.visible = false;
			self.baz_info.visible = false;
			self.anafat_laila_info.visible = false;
		
			self.exit_info.visible = false;
		}
		
		function restart_txt_func() //disables - categories highlights 
		{
			self.hover_small_ctg.visible = false;
			self.hover_medium_ctg.visible = false;
			self.hover_large_ctg.visible = false;
		
			self.hover_bugs_ctg.visible = false;
			self.hover_reptile_ctg.visible = false;
			self.hover_mammal_ctg.visible = false;
			self.hover_fish_ctg.visible = false;
		
			self.hover_fall_ctg.visible = false;
			self.hover_allyear_ctg.visible = false;
		
			self.hover_flight_ctg.visible = false;
			self.hover_park_ctg.visible = false;
			self.hover_water_ctg.visible = false;
		
			self.restart_txt_btn.visible = false;
		}
		
		
		function restart_circle_func() //disables - birds highlights
		{
			self.duhifat_circle.visible = false;
			self.shrakrak_circle.visible = false;
			self.shaldag_circle.visible = false;
			self.siksak_circle.visible = false;
			self.baz_circle.visible = false;
		
			self.sofit_circle.visible = false;
			self.kahal_circle.visible = false;
			self.barchiya_circle.visible = false;
			self.anafat_laila_circle.visible = false;
			self.hivai_circle.visible = false;
		
			self.efroni_circle.visible = false;
			self.cron_circle.visible = false
			self.tenshemet_circle.visible = false;
			self.hasida_circle.visible = false;
			self.anfa_argmanit_circle.visible = false;
		
		}
		
		function restart_x_func() //disables - categories "x" buttons 
		{
			self.exit_small.visible = false;
			self.exit_medium.visible = false;
			self.exit_large.visible = false;
		
			self.exit_bugs.visible = false;
			self.exit_reptile.visible = false;
			self.exit_mammal.visible = false;
			self.exit_fish.visible = false;
		
			self.exit_fall.visible = false;
			self.exit_allyear.visible = false;
		
			self.exit_flight.visible = false;
			self.exit_park.visible = false;
			self.exit_water.visible = false;
		
		}
		
		
		//day & night functions////////////
		
		
		//day filter
		
		self.invisible_day_btn.addEventListener("click", day_func);
		
		function day_func() //enables day birds & elements 
		{
			night_disabled_func();  //disables - night elements 
		
			self.day_switch.visible = true;
			self.restart_birds_btn.visible = true;
		
			disable_birds_func();
		
			self.siksak.visible = true;
			self.sofit.visible = true;
			self.barchiya.visible = true;
			self.anfa_argmanit.visible = true;
			self.shaldag.visible = true;
			self.shrakrak.visible = true;
			self.kahal.visible = true;
			self.duhifat.visible = true;
			self.efroni.visible = true;
			self.hivai.visible = true;
			self.hasida.visible = true;
		
			restart_circle_func();  // hide all circles (highlights)
		
		
		}
		
		
		//night filter
		
		self.invisible_night_btn.addEventListener("click", night_func);
		
		function night_func() {
		
			disable_birds_func();
		
			self.anafat_laila.visible = true;
			self.tenshemet.visible = true;
			self.baz.visible = true;
			self.cron.visible = true;
		
			self.night_bg.visible = true;
			self.night_switch.visible = true;
			self.day_switch.visible = false;
			self.restart_birds_btn.visible = true;
		
			restart_circle_func();  // hide all circles (highlights)
		
		
		}
		
		
		self.restart_birds_btn.addEventListener("click", all_birds_func);
		
		function all_birds_func() {
		
			self.siksak.visible = true;
			self.sofit.visible = true;
			self.barchiya.visible = true;
			self.anfa_argmanit.visible = true;
			self.shaldag.visible = true;
		
			self.shrakrak.visible = true;
			self.kahal.visible = true;
			self.duhifat.visible = true;
			self.efroni.visible = true;
			self.hivai.visible = true;
		
			self.hasida.visible = true;
			self.anafat_laila.visible = true;
			self.tenshemet.visible = true;
			self.baz.visible = true;
			self.cron.visible = true;
		
			self.restart_birds_btn.visible = false;
			restart_circle_func();  // hide all circles (highlights)
		
		}
		
		
		
		
		
		//active bird hover & click functions////////////
		
		function disable_birds_func() //disables - all birds 
		{
			self.siksak.visible = false;
			self.sofit.visible = false;
			self.barchiya.visible = false;
			self.anfa_argmanit.visible = false;
			self.shaldag.visible = false;
			self.shrakrak.visible = false;
			self.kahal.visible = false;
			self.duhifat.visible = false;
			self.efroni.visible = false;
			self.hivai.visible = false;
			self.hasida.visible = false;
		
			self.anafat_laila.visible = false;
			self.tenshemet.visible = false;
			self.baz.visible = false;
			self.cron.visible = false;
		}
		var bird_clicked = 0; //all active birds - click counter
		self.exit_info.addEventListener("click", exit_info_click);
		
		
		function unpressable_func() //disables - all buttons 
		
		{
			self.invisible_day_btn.visible = false;
			self.invisible_night_btn.visible = false;
			self.restart_birds_btn.visible = false;
		
			self.restart_txt_btn.visible = false;
		
			unpressable_txt_func();
		
		}
		
		function unpressable_txt_func() //disables - categories buttons 
		{
			self.small.mouseEnabled = false;
			self.medium.mouseEnabled = false;
			self.large.mouseEnabled = false;
		
			self.bugs.mouseEnabled = false;
			self.reptile.mouseEnabled = false;
			self.mammal.mouseEnabled = false;
			self.fish.mouseEnabled = false;
		
			self.fall.mouseEnabled = false;
			self.allyear.mouseEnabled = false;
		
			self.flight.mouseEnabled = false;
			self.park.mouseEnabled = false;
			self.water.mouseEnabled = false;
		
		}
		
		function pressable_txt_func() //Ensables - categories buttons 
		{
			self.small.mouseEnabled = true;
			self.medium.mouseEnabled = true;
			self.large.mouseEnabled = true;
		
			self.bugs.mouseEnabled = true;
			self.reptile.mouseEnabled = true;
			self.mammal.mouseEnabled = true;
			self.fish.mouseEnabled = true;
		
			self.fall.mouseEnabled = true;
			self.allyear.mouseEnabled = true;
		
			self.flight.mouseEnabled = true;
			self.park.mouseEnabled = true;
			self.water.mouseEnabled = true;
		
		}
		
		function exit_info_click() {
		
			info_disabled_func();
			all_birds_func();
			
			restart_txt_func();		//disables - categories highlights 
			
			pressable_txt_func();
			
			birds_unfade_func(); 		//restarts birds opacity
			
			enabled_bird_hover();
		
			bird_clicked = 0;
			self.invisible_day_btn.visible = true;
			self.invisible_night_btn.visible = true;
		
			onload_txt_func();
		
		}
		
		//duhifat
		
		self.duhifat.addEventListener("mouseover", duhifat_mouseIN);
		self.duhifat.addEventListener("mouseout", duhifat_mouseOUT);
		self.duhifat.addEventListener("click", duhifat_click);
		
		
		
		function duhifat_mouseIN() {
			self.hover_small_ctg.visible = true;
			self.hover_bugs_ctg.visible = true;
			self.hover_allyear_ctg.visible = true;
			self.hover_flight_ctg.visible = true;
		}
		
		function duhifat_mouseOUT() {
			if (bird_clicked == 0) {
				restart_txt_func(); 	//disables - categories highlights 
		
			}
		}
		
		function duhifat_click() {
			self.duhifat_info.visible = true;
			self.exit_info.visible = true;
		
			more_info_txt_func(); //shows instruction when "more info" shown
			disable_birds_func();
			duhifat_mouseIN();
			restart_circle_func();  // hide all circles (highlights)
			restart_x_func();  //disables - categories "x" buttons 
			unpressable_func();
		
			bird_clicked = 1;
		
		}
		
		
		//shaldag
		
		self.shaldag.addEventListener("mouseover", shaldag_mouseIN);
		self.shaldag.addEventListener("mouseout", shaldag_mouseOUT);
		self.shaldag.addEventListener("click", shaldag_click);
		
		
		function shaldag_mouseIN() {
			self.hover_medium_ctg.visible = true;
			self.hover_bugs_ctg.visible = true;
			self.hover_reptile_ctg.visible = true;
			self.hover_mammal_ctg.visible = true;
			self.hover_fish_ctg.visible = true;
			self.hover_allyear_ctg.visible = true;
			self.hover_park_ctg.visible = true;
		
		}
		
		function shaldag_mouseOUT() {
			if (bird_clicked == 0) {
				restart_txt_func();	//disables - categories highlights 
		
			}
		}
		
		function shaldag_click() {
		
			self.shaldag_info.visible = true;
			self.exit_info.visible = true;
		
			more_info_txt_func(); //shows instruction when "more info" shown
			disable_birds_func();
			shaldag_mouseIN();
			restart_circle_func();  // hide all circles (highlights)
			restart_x_func();  //disables - categories "x" buttons 
			unpressable_func();
		
			bird_clicked = 1;
		
		}
		
		
		
		
		//baz
		
		self.baz.addEventListener("mouseover", baz_mouseIN);
		self.baz.addEventListener("mouseout", baz_mouseOUT);
		self.baz.addEventListener("click", baz_click);
		
		
		
		function baz_mouseIN() {
			self.hover_medium_ctg.visible = true;
			self.hover_bugs_ctg.visible = true;
			self.hover_reptile_ctg.visible = true;
			self.hover_mammal_ctg.visible = true;
			self.hover_fall_ctg.visible = true;
			self.hover_flight_ctg.visible = true;
		
		}
		
		function baz_mouseOUT() {
			if (bird_clicked == 0) {
				restart_txt_func();	//disables - categories highlights 
		
			}
		}
		
		function baz_click() {
			self.baz_info.visible = true;
			self.exit_info.visible = true;
		
			more_info_txt_func(); //shows instruction when "more info" shown
			disable_birds_func();
			baz_mouseIN();
			restart_circle_func();  // hide all circles (highlights)
			restart_x_func();  //disables - categories "x" buttons 
			unpressable_func();
		
			bird_clicked = 1;
		
		}
		
		
		//anafat_laila
		
		self.anafat_laila.addEventListener("mouseover", anafat_laila_mouseIN);
		self.anafat_laila.addEventListener("mouseout", anafat_laila_mouseOUT);
		self.anafat_laila.addEventListener("click", anafat_laila_click);
		
		
		function anafat_laila_mouseIN() {
			self.hover_large_ctg.visible = true;
			self.hover_reptile_ctg.visible = true;
			self.hover_mammal_ctg.visible = true;
			self.hover_fish_ctg.visible = true;
			self.hover_allyear_ctg.visible = true;
			self.hover_water_ctg.visible = true;
		
		}
		
		function anafat_laila_mouseOUT() {
			if (bird_clicked == 0) {
				restart_txt_func();	//disables - categories highlights 
		
			}
		}
		
		function anafat_laila_click() {
		
			self.anafat_laila_info.visible = true;
			self.exit_info.visible = true;
		
			more_info_txt_func(); //shows instruction when "more info" shown
			disable_birds_func();
			anafat_laila_mouseIN();
			restart_circle_func();  // hide all circles (highlights)
			restart_x_func();  //disables - categories "x" buttons 
			unpressable_func();
		
			bird_clicked = 1;
		
		}
		
		
		
		
		
		
		//active categories hover & click functions////////////
		
		self.restart_txt_btn.addEventListener("click", exit_all_categ_func);
		
		var categ_clicked = 0; //counter for categories's "x" visible
		
		function reset_btn_if() {
			if (categ_clicked == 0) // there's no categories's "x" visible
			{
				self.restart_txt_btn.visible = false;
			} else //there are categories's "x" visible, so the restart button is needed
			{
				self.restart_txt_btn.visible = true;
			}
		}
		
		function unfade_if_func() //resets opacity -  specific birds
		{
			birds_unfade_func(); //restarts birds opacity
		
		
			//size category
		
			if (self.exit_small.visible == true) //if category is fixed
			{
				small_categ_fade(); //fade NOT small birds
			}
		
			if (self.exit_medium.visible == true) {
				medium_categ_fade();
			}
		
			if (self.exit_large.visible == true) {
				large_categ_fade();
			}
		
			//food category
		
			if (self.exit_bugs.visible == true) {
				bugs_categ_fade();
			}
		
			if (self.exit_reptile.visible == true) {
				reptile_categ_fade();
			}
		
			if (self.exit_mammal.visible == true) {
				mammal_categ_fade();
			}
		
			if (self.exit_fish.visible == true) {
				fish_categ_fade();
			}
		
			//when category
			if (self.exit_fall.visible == true) {
				fall_categ_fade();
			}
		
		
			if (self.exit_allyear.visible == true) {
				allyear_categ_fade();
			}
		
			//where category
			if (self.exit_flight.visible == true) {
				flight_categ_fade();
			}
		
			if (self.exit_park.visible == true) {
				park_categ_fade();
			}
		
			if (self.exit_water.visible == true) {
				water_categ_fade();
			}
		}
		
		
		function exit_all_categ_func() //restart all the categories
		{
			exit_size_func();
			exit_food_func();
			exit_when_func();
			exit_where_func();
		
			restart_txt_func(); //disables - categories highlights 
			
			enabled_bird_hover();
		
			categ_clicked = 0; //restart categories counter
		
		}
		
		function birds_unfade_func() //restarts birds opacity
		{
		
			self.siksak.alpha = 1;
			self.sofit.alpha = 1;
			self.barchiya.alpha = 1;
			self.anfa_argmanit.alpha = 1;
			self.shaldag.alpha = 1;
		
			self.shrakrak.alpha = 1;
			self.kahal.alpha = 1;
			self.duhifat.alpha = 1;
			self.efroni.alpha = 1;
			self.hivai.alpha = 1;
		
			self.hasida.alpha = 1;
			self.anafat_laila.alpha = 1;
			self.tenshemet.alpha = 1;
			self.baz.alpha = 1;
			self.cron.alpha = 1;
		
			disable_if_fade(); // disables faded birds & the opposite
		}
		
		function remove_bird_hover() // disables birds "brash & link" 
		{
			self.duhifat.removeEventListener("mouseover", duhifat_mouseIN);
			self.duhifat.removeEventListener("mouseout", duhifat_mouseOUT);
		
			self.shaldag.removeEventListener("mouseover", shaldag_mouseIN);
			self.shaldag.removeEventListener("mouseout", shaldag_mouseOUT);
		
			self.baz.removeEventListener("mouseover", baz_mouseIN);
			self.baz.removeEventListener("mouseout", baz_mouseOUT);
		
			self.anafat_laila.removeEventListener("mouseover", anafat_laila_mouseIN);
			self.anafat_laila.removeEventListener("mouseout", anafat_laila_mouseOUT);
		
		
		}
		
		function enabled_bird_hover() //enable event listener
		{
		
			self.duhifat.addEventListener("mouseover", duhifat_mouseIN);
			self.duhifat.addEventListener("mouseout", duhifat_mouseOUT);
		
			self.shaldag.addEventListener("mouseover", shaldag_mouseIN);
			self.shaldag.addEventListener("mouseout", shaldag_mouseOUT);
		
			self.baz.addEventListener("mouseover", baz_mouseIN);
			self.baz.addEventListener("mouseout", baz_mouseOUT);
		
			self.anafat_laila.addEventListener("mouseover", anafat_laila_mouseIN);
			self.anafat_laila.addEventListener("mouseout", anafat_laila_mouseOUT);
		
		}
		
		function restart_hover_if() //restarts birds "brash & link" 
		{
			if (self.restart_txt_btn.visible == false) // there's no fixed categories
			{
				enabled_bird_hover();
			}
		}
		
		function disable_if_fade() // disables faded birds & the opposite
		{
			if (self.duhifat.alpha == 0.3) { // disables faded birds
				self.duhifat.mouseEnabled = false;
			} else {
				self.duhifat.mouseEnabled = true; // enables full opacity birds
			}
		
			if (self.shaldag.alpha == 0.3) {
				self.shaldag.mouseEnabled = false;
			} else {
				self.shaldag.mouseEnabled = true;
			}
		
			if (self.baz.alpha == 0.3) {
				self.baz.mouseEnabled = false;
			} else {
				self.baz.mouseEnabled = true;
			}
		
			if (self.anafat_laila.alpha == 0.3) {
				self.anafat_laila.mouseEnabled = false;
			} else {
				self.anafat_laila.mouseEnabled = true;
			}
		}
		
		
		// size categories
		
		
		function exit_size_func() //restarts size category
		{
		
			categ_clicked--; //-1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		
			self.hover_small_ctg.visible = false;
			self.hover_medium_ctg.visible = false;
			self.hover_large_ctg.visible = false;
		
			self.exit_small.visible = false;
			self.exit_medium.visible = false;
			self.exit_large.visible = false;
		
		
			self.small.mouseEnabled = true;
			self.medium.mouseEnabled = true;
			self.large.mouseEnabled = true;
		
			restart_hover_if();  //restarts birds "brash & link" 
		
			unfade_if_func(); //resets opacity -  specific birds
		
			reset_txt_if(); //shows starting instruction if nothing's fixed
		
		}
		
		
		
		
		//small
		
		self.small.addEventListener("mouseover", small_mouseIN);
		self.small.addEventListener("mouseout", small_mouseOUT);
		self.small.addEventListener("click", small_fixed_func);
		self.exit_small.addEventListener("click", exit_size_func);
		
		function small_mouseIN() //hover on category: small
		{
			small_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function small_mouseOUT() {
			restart_circle_func();  // hide all circles (highlights) 
		}
		
		
		function small_fixed_func() //click on category: small
		{
			self.exit_small.visible = true;
		
			self.hover_small_ctg.visible = true;
			self.hover_medium_ctg.visible = false;
			self.hover_large_ctg.visible = false;
		
			restart_circle_func();  // hide all circles (highlights)
			small_categ_fade();
			remove_bird_hover(); // disables birds "brash & link" 
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
		
			self.medium.mouseEnabled = false;
			self.large.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		}
		
		
		
		function small_circle_time_filterd() //circles birds by category and daytime
		{
			restart_circle_func();  // hide all circles (highlights)
		
			if (self.night_switch.visible == true) //show small nighttime birds
			{
				self.cron_circle.visible = true;
			} else //show small daytime birds
			{
				self.duhifat_circle.visible = true;
				self.shrakrak_circle.visible = true;
				self.siksak_circle.visible = true;
			}
			if (self.restart_birds_btn.visible == false) //show all small birds
			{
				self.cron_circle.visible = true;
				self.duhifat_circle.visible = true;
				self.shrakrak_circle.visible = true;
				self.siksak_circle.visible = true;
			}
		}
		
		
		function small_categ_fade() //fade all NOT small birds
		{
			self.sofit.alpha = 0.3;
			self.barchiya.alpha = 0.3;
			self.anfa_argmanit.alpha = 0.3;
			self.shaldag.alpha = 0.3;
		
			self.kahal.alpha = 0.3;
			self.efroni.alpha = 0.3;
			self.hivai.alpha = 0.3;
		
			self.hasida.alpha = 0.3;
			self.anafat_laila.alpha = 0.3;
			self.tenshemet.alpha = 0.3;
			self.baz.alpha = 0.3;
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		//medium
		
		self.medium.addEventListener("mouseover", medium_mouseIN);
		self.medium.addEventListener("mouseout", medium_mouseOUT);
		self.medium.addEventListener("click", medium_fixed_func);
		self.exit_medium.addEventListener("click", exit_size_func);
		
		function medium_mouseIN() //hover on category: medium
		{
			medium_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function medium_mouseOUT() {
			restart_circle_func(); // hide all circles (highlights)
		}
		
		
		function medium_fixed_func() //click on category: medium
		{
			self.exit_medium.visible = true;
		
			self.hover_small_ctg.visible = false;
			self.hover_medium_ctg.visible = true;
			self.hover_large_ctg.visible = false;
		
			restart_circle_func();
			
			medium_categ_fade();
		
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.small.mouseEnabled = false;
			self.large.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		}
		
		function medium_circle_time_filterd() //circles birds by category and daytime
		{
			restart_circle_func();
			if (self.night_switch.visible == true) //show medium nighttime birds
			{
				self.baz_circle.visible = true;
			} else //show medium daytime birds
			{
				self.kahal_circle.visible = true;
				self.sofit_circle.visible = true;
				self.shaldag_circle.visible = true;
			}
			if (self.restart_birds_btn.visible == false) //show all medium birds
			{
				self.baz_circle.visible = true;
				self.kahal_circle.visible = true;
				self.sofit_circle.visible = true;
				self.shaldag_circle.visible = true;
			}
		}
		
		
		function medium_categ_fade() //fade all NOT medium birds
		{
		
			self.cron.alpha = 0.3;
			self.barchiya.alpha = 0.3;
			self.anfa_argmanit.alpha = 0.3;
			self.duhifat.alpha = 0.3;
		
			self.shrakrak.alpha = 0.3;
			self.efroni.alpha = 0.3;
			self.hivai.alpha = 0.3;
		
			self.hasida.alpha = 0.3;
			self.anafat_laila.alpha = 0.3;
			self.tenshemet.alpha = 0.3;
			self.siksak.alpha = 0.3;
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		
		//large
		
		self.large.addEventListener("mouseover", large_mouseIN);
		self.large.addEventListener("mouseout", large_mouseOUT);
		self.large.addEventListener("click", large_fixed_func);
		self.exit_large.addEventListener("click", exit_size_func);
		
		function large_mouseIN() //hover on category: large
		{
			large_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function large_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		
		}
		
		
		function large_fixed_func() //click on category: large
		{
			self.exit_large.visible = true;
		
			self.hover_small_ctg.visible = false;
			self.hover_medium_ctg.visible = false;
			self.hover_large_ctg.visible = true; //leave txt highlight
		
			restart_circle_func(); // hide all circle (highlights)
			large_categ_fade(); // fade unnecessary birds
			remove_bird_hover(); // disables birds "brash & link" 
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
		
			self.small.mouseEnabled = false;
			self.medium.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		}
		
		function large_circle_time_filterd() //circles birds by category and daytime
		{
			restart_circle_func();
			if (self.night_switch.visible == true) //show large nighttime birds
			{
				self.tenshemet_circle.visible = true;
				self.anafat_laila_circle.visible = true;
			} else //show large daytime birds
			{
				self.barchiya_circle.visible = true;
			}
			if (self.restart_birds_btn.visible == false) //show all large birds
			{
				self.anafat_laila_circle.visible = true;
				self.tenshemet_circle.visible = true;
				self.barchiya_circle.visible = true;
			}
		}
		
		
		function large_categ_fade() //fade all NOT large birds
		{
			self.sofit.alpha = 0.3;
			self.siksak.alpha = 0.3;
			self.anfa_argmanit.alpha = 0.3;
			self.shaldag.alpha = 0.3;
		
			self.kahal.alpha = 0.3;
			self.efroni.alpha = 0.3;
			self.hivai.alpha = 0.3;
			self.cron.alpha = 0.3;
		
			self.hasida.alpha = 0.3;
			self.shrakrak.alpha = 0.3;
			self.duhifat.alpha = 0.3;
			self.baz.alpha = 0.3;
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		// food categories
		
		
		function exit_food_func() {
		
			categ_clicked--; //-1 categories's "x" visible
		
			reset_btn_if(); //	show/hide "restart categories" button
		
			self.hover_bugs_ctg.visible = false;
			self.hover_reptile_ctg.visible = false;
			self.hover_mammal_ctg.visible = false;
			self.hover_fish_ctg.visible = false;
		
			self.exit_bugs.visible = false;
			self.exit_reptile.visible = false;
			self.exit_mammal.visible = false;
			self.exit_fish.visible = false;
		
		
			self.bugs.mouseEnabled = true;
			self.reptile.mouseEnabled = true;
			self.mammal.mouseEnabled = true;
			self.fish.mouseEnabled = true;
		
			unfade_if_func(); //resets opacity -  specific birds
		
			reset_txt_if(); //shows starting instruction if nothing's fixed
		
			restart_hover_if();  //restarts birds "brash & link" 
		}
		
		
		//bugs
		
		self.bugs.addEventListener("mouseover", bugs_mouseIN);
		self.bugs.addEventListener("mouseout", bugs_mouseOUT);
		self.bugs.addEventListener("click", bugs_fixed_func);
		self.exit_bugs.addEventListener("click", exit_food_func);
		
		function bugs_mouseIN() //hover on category: bugs
		{
			bugs_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function bugs_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		}
		
		
		function bugs_fixed_func() //click on category: bugs
		{
			self.exit_bugs.visible = true; //show "x" button (by the category)
		
			self.hover_bugs_ctg.visible = true;
			self.hover_reptile_ctg.visible = false; //disable category highlight in this saction
			self.hover_mammal_ctg.visible = false;
			self.hover_fish_ctg.visible = false;
		
			restart_circle_func(); // hide all circle (highlights)
		
			bugs_categ_fade(); // fade unnecessary birds
		
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.reptile.mouseEnabled = false; //disable other categoris in food section
			self.mammal.mouseEnabled = false;
			self.fish.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		
		
		}
		
		function bugs_circle_time_filterd() ////circles birds by category and daytime
		{
			restart_circle_func();
			if (self.night_switch.visible == true) //show bugs eating nighttime birds
			{
				self.cron_circle.visible = true;
				self.baz_circle.visible = true;
				self.tenshemet_circle.visible = true;
			} else //show bugs eating daytime birds
			{
				self.duhifat_circle.visible = true;
				self.shrakrak_circle.visible = true;
				self.siksak_circle.visible = true;
				self.kahal_circle.visible = true;
		
				self.shaldag_circle.visible = true;
				self.anfa_argmanit_circle.visible = true;
				self.efroni_circle.visible = true;
				self.hasida_circle.visible = true;
				self.sofit_circle.visible = true;
		
			}
			if (self.restart_birds_btn.visible == false) //show all bugs eating birds
			{
				self.cron_circle.visible = true;
				self.baz_circle.visible = true;
				self.tenshemet_circle.visible = true;
		
				self.duhifat_circle.visible = true;
				self.shrakrak_circle.visible = true;
				self.siksak_circle.visible = true;
				self.kahal_circle.visible = true;
		
				self.shaldag_circle.visible = true;
				self.anfa_argmanit_circle.visible = true;
				self.efroni_circle.visible = true;
				self.hasida_circle.visible = true;
				self.sofit_circle.visible = true;
		
			}
		}
		
		function bugs_categ_fade() //fade all NOT bugs eating birds
		{
			self.anafat_laila.alpha = 0.3;
			self.barchiya.alpha = 0.3;
			self.hivai.alpha = 0.3;
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		
		//reptile
		
		self.reptile.addEventListener("mouseover", reptile_mouseIN);
		self.reptile.addEventListener("mouseout", reptile_mouseOUT);
		self.reptile.addEventListener("click", reptile_fixed_func);
		self.exit_reptile.addEventListener("click", exit_food_func);
		
		function reptile_mouseIN() //hover on category: reptile
		{
			reptile_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function reptile_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		}
		
		
		function reptile_fixed_func() //click on category: reptile
		{
		
			self.exit_reptile.visible = true; //show "x" button (by the category)
		
			self.hover_reptile_ctg.visible = true;
			self.hover_bugs_ctg.visible = false; //disable category highlight in this section
			self.hover_mammal_ctg.visible = false;
			self.hover_fish_ctg.visible = false;
		
			restart_circle_func(); // hide all circle (highlights)
		
			reptile_categ_fade(); // fade unnecessary birds
		
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.bugs.mouseEnabled = false; //disable other categoris in food section
			self.mammal.mouseEnabled = false;
			self.fish.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		
		
		}
		
		function reptile_circle_time_filterd() ////circles birds by category and daytime
		{
			restart_circle_func();
		
			if (self.night_switch.visible == true) //show reptile eating nighttime birds
			{
				self.baz_circle.visible = true;
				self.anafat_laila_circle.visible = true;
			} else //show reptile eating daytime birds
			{
				self.shaldag_circle.visible = true;
				self.hivai_circle.visible = true;
			}
			if (self.restart_birds_btn.visible == false) //show all reptile eating birds
			{
				self.baz_circle.visible = true;
				self.anafat_laila_circle.visible = true;
				self.shaldag_circle.visible = true;
				self.hivai_circle.visible = true;
			}
		}
		
		function reptile_categ_fade() //fade all NOT reptile eating birds
		{
			self.siksak.alpha = 0.3;
			self.barchiya.alpha = 0.3;
		
			self.sofit.alpha = 0.3;
			self.anfa_argmanit.alpha = 0.3;
			self.shrakrak.alpha = 0.3;
		
			self.kahal.alpha = 0.3;
			self.duhifat.alpha = 0.3;
			self.efroni.alpha = 0.3;
		
			self.hasida.alpha = 0.3;
			self.tenshemet.alpha = 0.3;
			self.cron.alpha = 0.3;
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		
		//mammal
		
		self.mammal.addEventListener("mouseover", mammal_mouseIN);
		self.mammal.addEventListener("mouseout", mammal_mouseOUT);
		self.mammal.addEventListener("click", mammal_fixed_func);
		self.exit_mammal.addEventListener("click", exit_food_func);
		
		function mammal_mouseIN() //hover on category: mammal
		{
			mammal_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function mammal_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		}
		
		
		function mammal_fixed_func() //click on category: mammal
		{
		
			self.exit_mammal.visible = true; //show "x" button (by the category)
		
			self.hover_mammal_ctg.visible = true;
			self.hover_reptile_ctg.visible = false; //disable category highlight in this saction
			self.hover_bugs_ctg.visible = false;
			self.hover_fish_ctg.visible = false;
		
			restart_circle_func(); // hide all circle (highlights)
		
			mammal_categ_fade(); // fade unnecessary birds
		
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.reptile.mouseEnabled = false; //disable other categoris in food section
			self.bugs.mouseEnabled = false;
			self.fish.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		
		}
		
		function mammal_circle_time_filterd() ////circles birds by category and daytime
		{
			restart_circle_func();
			if (self.night_switch.visible == true) //show mammal eating nighttime birds
			{
				self.anafat_laila_circle.visible = true;
				self.baz_circle.visible = true;
				self.tenshemet_circle.visible = true;
			} else //show mammal eating daytime birds
			{
		
				self.shaldag_circle.visible = true;
				self.anfa_argmanit_circle.visible = true;
				self.hivai_circle.visible = true;
				self.hasida_circle.visible = true;
		
			}
			if (self.restart_birds_btn.visible == false) //show all mammal eating birds
			{
				self.anafat_laila_circle.visible = true;
				self.baz_circle.visible = true;
				self.tenshemet_circle.visible = true;
		
				self.shaldag_circle.visible = true;
				self.anfa_argmanit_circle.visible = true;
				self.hivai_circle.visible = true;
				self.hasida_circle.visible = true;
		
			}
		}
		
		function mammal_categ_fade() //fade all NOT mammal eating birds
		{
			self.cron.alpha = 0.3;
			self.barchiya.alpha = 0.3;
			self.siksak.alpha = 0.3;
			self.duhifat.alpha = 0.3;
			self.shrakrak.alpha = 0.3;
			self.kahal.alpha = 0.3;
			self.sofit.alpha = 0.3;
			self.efroni.alpha = 0.3;
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		//fish
		
		self.fish.addEventListener("mouseover", fish_mouseIN);
		self.fish.addEventListener("mouseout", fish_mouseOUT);
		self.fish.addEventListener("click", fish_fixed_func);
		self.exit_fish.addEventListener("click", exit_food_func);
		
		function fish_mouseIN() //hover on category: fish
		{
			fish_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function fish_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		}
		
		
		function fish_fixed_func() //click on category: fish
		{
		
			self.exit_fish.visible = true; //show "x" button (by the category)
		
			self.hover_fish_ctg.visible = true;
			self.hover_reptile_ctg.visible = false; //disable category highlight in this saction
			self.hover_bugs_ctg.visible = false;
			self.hover_mammal_ctg.visible = false;
		
			restart_circle_func(); // hide all circle (highlights)
		
			fish_categ_fade(); // fade unnecessary birds
		
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.reptile.mouseEnabled = false; //disable other categoris in food section
			self.bugs.mouseEnabled = false;
			self.mammal.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		
		}
		
		function fish_circle_time_filterd() ////circles birds by category and daytime
		{
			restart_circle_func();  // hide all circles (highlights)
			if (self.night_switch.visible == true) //show fish eating nighttime birds
			{
				self.anafat_laila_circle.visible = true;
				self.tenshemet_circle.visible = true;
			} else //show fish eating daytime birds
			{
		
				self.shaldag_circle.visible = true;
				self.anfa_argmanit_circle.visible = true;
				self.hasida_circle.visible = true;
				self.barchiya_circle.visible = true;
				self.sofit_circle.visible = true;
		
			}
			if (self.restart_birds_btn.visible == false) //show all fish eating birds
			{
				self.anafat_laila_circle.visible = true;
				self.tenshemet_circle.visible = true;
		
				self.shaldag_circle.visible = true;
				self.anfa_argmanit_circle.visible = true;
				self.hasida_circle.visible = true;
				self.barchiya_circle.visible = true;
				self.sofit_circle.visible = true;
		
			}
		}
		
		function fish_categ_fade() //fade all NOT fish eating birds
		{
			self.cron.alpha = 0.3;
			self.baz.alpha = 0.3;
		
			self.siksak.alpha = 0.3;
			self.duhifat.alpha = 0.3;
			self.shrakrak.alpha = 0.3;
			self.kahal.alpha = 0.3;
			self.hivai.alpha = 0.3;
			self.efroni.alpha = 0.3;
		
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		
		
		// when categories
		
		
		function exit_when_func() //restarts when category
		{
		
			categ_clicked--; //-1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		
			self.hover_fall_ctg.visible = false;
			self.hover_allyear_ctg.visible = false;
		
			self.exit_fall.visible = false;
			self.exit_allyear.visible = false;
		
		
			self.fall.mouseEnabled = true;
			self.allyear.mouseEnabled = true;
		
			restart_hover_if();  //restarts birds "brash & link" 
		
			unfade_if_func(); //resets opacity -  specific birds
		
			reset_txt_if(); //shows starting instruction if nothing's fixed
		
		}
		
		
		
		
		//fall
		
		self.fall.addEventListener("mouseover", fall_mouseIN);
		self.fall.addEventListener("mouseout", fall_mouseOUT);
		self.fall.addEventListener("click", fall_fixed_func);
		self.exit_fall.addEventListener("click", exit_when_func);
		
		function fall_mouseIN() //hover on category: fall
		{
			fall_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function fall_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		}
		
		
		function fall_fixed_func() //click on category: fall
		{
			self.exit_fall.visible = true;
		
			self.hover_fall_ctg.visible = true;
			self.hover_allyear_ctg.visible = false;
		
			restart_circle_func();  // hide all circles (highlights)
			fall_categ_fade();
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.allyear.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		}
		
		
		function fall_circle_time_filterd() //circles birds by category and daytime
		{
			restart_circle_func();  // hide all circles (highlights)
		
			if (self.night_switch.visible == true) //show fall-present nighttime birds
			{
				self.baz_circle.visible = true;
			} else //show fall-present daytime birds
			{
				self.hasida_circle.visible = true;
				self.anfa_argmanit_circle.visible = true;
				self.shrakrak_circle.visible = true;
				self.kahal_circle.visible = true;
				self.hivai_circle.visible = true;
		
			}
			if (self.restart_birds_btn.visible == false) //show all fall-present birds
			{
				self.baz_circle.visible = true;
				self.hasida_circle.visible = true;
				self.anfa_argmanit_circle.visible = true;
				self.shrakrak_circle.visible = true;
				self.kahal_circle.visible = true;
				self.hivai_circle.visible = true;
		
		
			}
		}
		
		
		function fall_categ_fade() //fade all NOT fall-present birds
		{
			self.sofit.alpha = 0.3;
			self.barchiya.alpha = 0.3;
			self.shaldag.alpha = 0.3;
		
			self.efroni.alpha = 0.3;
			self.anafat_laila.alpha = 0.3;
			self.tenshemet.alpha = 0.3;
		
			self.cron.alpha = 0.3;
			self.siksak.alpha = 0.3;
			self.duhifat.alpha = 0.3;
		
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		
		
		
		//allyear
		
		self.allyear.addEventListener("mouseover", allyear_mouseIN);
		self.allyear.addEventListener("mouseout", allyear_mouseOUT);
		self.allyear.addEventListener("click", allyear_fixed_func);
		self.exit_allyear.addEventListener("click", exit_when_func);
		
		function allyear_mouseIN() //hover on category: allyear
		{
			allyear_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function allyear_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		}
		
		
		function allyear_fixed_func() //click on category: allyear
		{
			self.exit_allyear.visible = true;
		
			self.hover_allyear_ctg.visible = true;
			self.hover_fall_ctg.visible = false;
		
			restart_circle_func();  // hide all circles (highlights)
			allyear_categ_fade();
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.fall.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		}
		
		
		function allyear_circle_time_filterd() //circles birds by category and daytime
		{
			restart_circle_func();  // hide all circles (highlights)
		
			if (self.night_switch.visible == true) //show allyear-present nighttime birds
			{
				self.anafat_laila_circle.visible = true;
				self.cron_circle.visible = true;
				self.tenshemet_circle.visible = true;
		
		
			} else //show allyear-present daytime birds
			{
				self.duhifat_circle.visible = true;
				self.shaldag_circle.visible = true;
				self.siksak_circle.visible = true;
				self.efroni_circle.visible = true;
				self.sofit_circle.visible = true;
				self.barchiya_circle.visible = true;
		
			}
			if (self.restart_birds_btn.visible == false) //show all allyear-present birds
			{
		
				self.anafat_laila_circle.visible = true;
				self.cron_circle.visible = true;
				self.tenshemet_circle.visible = true;
		
				self.duhifat_circle.visible = true;
				self.shaldag_circle.visible = true;
				self.siksak_circle.visible = true;
				self.efroni_circle.visible = true;
				self.sofit_circle.visible = true;
				self.barchiya_circle.visible = true;
		
			}
		}
		
		
		function allyear_categ_fade() //fade all NOT allyear-present birds
		{
			self.hasida.alpha = 0.3;
			self.baz.alpha = 0.3;
			self.anfa_argmanit.alpha = 0.3;
			self.shrakrak.alpha = 0.3;
			self.kahal.alpha = 0.3;
			self.hivai.alpha = 0.3;
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		// where categories
		
		
		function exit_where_func() //restarts where category
		{
		
			categ_clicked--; //-1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		
			self.hover_flight_ctg.visible = false;
			self.hover_park_ctg.visible = false;
			self.hover_water_ctg.visible = false;
		
			self.exit_flight.visible = false;
			self.exit_park.visible = false;
			self.exit_water.visible = false;
		
		
			self.flight.mouseEnabled = true;
			self.park.mouseEnabled = true;
			self.water.mouseEnabled = true;
		
			restart_hover_if();  //restarts birds "brash & link" 
		
			reset_txt_if(); //shows starting instruction if nothing's fixed
		
			unfade_if_func(); //resets opacity -  specific birds
		
		}
		
		
		
		
		//flight
		
		self.flight.addEventListener("mouseover", flight_mouseIN);
		self.flight.addEventListener("mouseout", flight_mouseOUT);
		self.flight.addEventListener("click", flight_fixed_func);
		self.exit_flight.addEventListener("click", exit_where_func);
		
		function flight_mouseIN() //hover on category: flight
		{
			flight_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function flight_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		}
		
		
		function flight_fixed_func() //click on category: flight
		{
			self.exit_flight.visible = true;
		
			self.hover_flight_ctg.visible = true;
			self.hover_park_ctg.visible = false;
			self.hover_water_ctg.visible = false;
		
			restart_circle_func();  // hide all circles (highlights)
			flight_categ_fade();
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.water.mouseEnabled = false;
			self.park.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		}
		
		function flight_circle_time_filterd() //circles birds by category and daytime
		{
			restart_circle_func();  // hide all circles (highlights)
		
			if (self.night_switch.visible == true) //show flight nighttime birds
			{
				self.baz_circle.visible = true;
		
			} else //show flight daytime birds
			{
				self.hasida_circle.visible = true;
				self.shrakrak_circle.visible = true;
				self.hivai_circle.visible = true;
				self.duhifat_circle.visible = true;
		
			}
			if (self.restart_birds_btn.visible == false) //show all flight birds
			{
				self.baz_circle.visible = true;
				self.hasida_circle.visible = true;
				self.shrakrak_circle.visible = true;
				self.hivai_circle.visible = true;
				self.duhifat_circle.visible = true;
		
			}
		}
		
		
		function flight_categ_fade() //fade all NOT flight birds
		{
			self.sofit.alpha = 0.3;
			self.barchiya.alpha = 0.3;
			self.anfa_argmanit.alpha = 0.3;
			self.shaldag.alpha = 0.3;
		
			self.kahal.alpha = 0.3;
			self.efroni.alpha = 0.3;
			self.siksak.alpha = 0.3;
		
			self.anafat_laila.alpha = 0.3;
			self.tenshemet.alpha = 0.3;
			self.cron.alpha = 0.3;
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		
		
		
		//park
		
		self.park.addEventListener("mouseover", park_mouseIN);
		self.park.addEventListener("mouseout", park_mouseOUT);
		self.park.addEventListener("click", park_fixed_func);
		self.exit_park.addEventListener("click", exit_where_func);
		
		function park_mouseIN() //hover on category: park
		{
			park_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function park_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		}
		
		
		function park_fixed_func() //click on category: park
		{
			self.exit_park.visible = true;
		
			self.hover_park_ctg.visible = true;
			self.hover_flight_ctg.visible = false;
			self.hover_water_ctg.visible = false;
		
			restart_circle_func();  // hide all circles (highlights)
			park_categ_fade();
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.water.mouseEnabled = false;
			self.flight.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		}
		
		function park_circle_time_filterd() //circles birds by category and daytime
		{
			restart_circle_func();  // hide all circles (highlights)
		
			if (self.night_switch.visible == true) //show park nighttime birds
			{
				self.tenshemet_circle.visible = true;
		
			} else //show park daytime birds
			{
				self.efroni_circle.visible = true;
				self.siksak_circle.visible = true;
				self.kahal_circle.visible = true;
				self.shaldag_circle.visible = true;
		
			}
			if (self.restart_birds_btn.visible == false) //show all park birds
			{
				self.tenshemet_circle.visible = true;
				self.efroni_circle.visible = true;
				self.siksak_circle.visible = true;
				self.kahal_circle.visible = true;
				self.shaldag_circle.visible = true;
		
			}
		}
		
		
		function park_categ_fade() //fade all NOT park birds
		{
			self.sofit.alpha = 0.3;
			self.barchiya.alpha = 0.3;
			self.anfa_argmanit.alpha = 0.3;
			self.shrakrak.alpha = 0.3;
		
			self.baz.alpha = 0.3;
			self.hasida.alpha = 0.3;
			self.hivai.alpha = 0.3;
		
			self.duhifat.alpha = 0.3;
			self.anafat_laila.alpha = 0.3;
			self.cron.alpha = 0.3;
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
		
		
		
		
		
		
		
		
		
		
		//water
		
		self.water.addEventListener("mouseover", water_mouseIN);
		self.water.addEventListener("mouseout", water_mouseOUT);
		self.water.addEventListener("click", water_fixed_func);
		self.exit_water.addEventListener("click", exit_where_func);
		
		function water_mouseIN() //hover on category: water
		{
			water_circle_time_filterd(); //circles birds by category and daytime
		}
		
		function water_mouseOUT() {
			restart_circle_func(); // hide all circle (highlights)
		}
		
		function water_fixed_func() //click on category: water
		{
			self.exit_water.visible = true;
		
			self.hover_water_ctg.visible = true;
			self.hover_flight_ctg.visible = false;
			self.hover_park_ctg.visible = false;
		
			restart_circle_func();  // hide all circles (highlights)
			water_categ_fade();
			remove_bird_hover(); // disables birds "brash & link" 
		
			fixed_categ_txt_func(); //shows instruction when a category is fixed
		
			self.park.mouseEnabled = false;
			self.flight.mouseEnabled = false;
		
			categ_clicked++; //  +1 categories's "x" visible
			reset_btn_if(); //	show/hide "restart categories button
		}
		
		function water_circle_time_filterd() //circles birds by category and daytime
		{
			restart_circle_func();  // hide all circles (highlights)
		
			if (self.night_switch.visible == true) //show water nighttime birds
			{
				self.anafat_laila_circle.visible = true;
		
			} else //show water daytime birds
			{
				self.anfa_argmanit_circle.visible = true;
				self.sofit_circle.visible = true;
				self.barchiya_circle.visible = true;
		
			}
			if (self.restart_birds_btn.visible == false) //show all water birds
			{
				self.anafat_laila_circle.visible = true;
				self.anfa_argmanit_circle.visible = true;
				self.sofit_circle.visible = true;
				self.barchiya_circle.visible = true;
		
			}
		}
		
		
		function water_categ_fade() //fade all NOT water birds
		{
			self.siksak.alpha = 0.3;
			self.efroni.alpha = 0.3;
			self.kahal.alpha = 0.3;
			self.shrakrak.alpha = 0.3;
		
			self.baz.alpha = 0.3;
			self.hasida.alpha = 0.3;
			self.hivai.alpha = 0.3;
		
			self.duhifat.alpha = 0.3;
			self.shaldag.alpha = 0.3;
			self.cron.alpha = 0.3;
			self.tenshemet.alpha = 0.3;
		
		
			disable_if_fade(); // disables faded birds & the opposite
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// x
	this.exit_info = new lib.exit();
	this.exit_info.parent = this;
	this.exit_info.setTransform(393.4,252.6);
	new cjs.ButtonHelper(this.exit_info, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.exit_info).wait(1));

	// duhifat_info
	this.duhifat_info = new lib.duhifat_info();
	this.duhifat_info.parent = this;
	this.duhifat_info.setTransform(506.8,305.3);

	this.timeline.addTween(cjs.Tween.get(this.duhifat_info).wait(1));

	// shaldag_info
	this.shaldag_info = new lib.shaldag_info();
	this.shaldag_info.parent = this;
	this.shaldag_info.setTransform(489.5,363.1,0.633,0.633,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shaldag_info).wait(1));

	// baz_info
	this.baz_info = new lib.baz_info();
	this.baz_info.parent = this;
	this.baz_info.setTransform(536,386.5);

	this.timeline.addTween(cjs.Tween.get(this.baz_info).wait(1));

	// anafat_laila_info
	this.anafat_laila_info = new lib.anafat_laila_info();
	this.anafat_laila_info.parent = this;
	this.anafat_laila_info.setTransform(531.4,253);

	this.timeline.addTween(cjs.Tween.get(this.anafat_laila_info).wait(1));

	// invisibleBTN
	this.invisible_day_btn = new lib.invisible_halfSwitch();
	this.invisible_day_btn.parent = this;
	this.invisible_day_btn.setTransform(810.4,587,1.09,0.926);
	new cjs.ButtonHelper(this.invisible_day_btn, 0, 1, 1);

	this.invisible_night_btn = new lib.invisible_halfSwitch();
	this.invisible_night_btn.parent = this;
	this.invisible_night_btn.setTransform(806.5,681.9,1,0.967);
	new cjs.ButtonHelper(this.invisible_night_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.invisible_night_btn},{t:this.invisible_day_btn}]}).wait(1));

	// exits
	this.exit_water = new lib.exit();
	this.exit_water.parent = this;
	this.exit_water.setTransform(227.7,674.5);
	new cjs.ButtonHelper(this.exit_water, 0, 1, 1);

	this.exit_park = new lib.exit();
	this.exit_park.parent = this;
	this.exit_park.setTransform(227.7,647.8);
	new cjs.ButtonHelper(this.exit_park, 0, 1, 1);

	this.exit_flight = new lib.exit();
	this.exit_flight.parent = this;
	this.exit_flight.setTransform(227.7,621);
	new cjs.ButtonHelper(this.exit_flight, 0, 1, 1);

	this.exit_allyear = new lib.exit();
	this.exit_allyear.parent = this;
	this.exit_allyear.setTransform(401.6,623.2);
	new cjs.ButtonHelper(this.exit_allyear, 0, 1, 1);

	this.exit_fall = new lib.exit();
	this.exit_fall.parent = this;
	this.exit_fall.setTransform(401.6,594.7);
	new cjs.ButtonHelper(this.exit_fall, 0, 1, 1);

	this.exit_fish = new lib.exit();
	this.exit_fish.parent = this;
	this.exit_fish.setTransform(564.6,676);
	new cjs.ButtonHelper(this.exit_fish, 0, 1, 1);

	this.exit_mammal = new lib.exit();
	this.exit_mammal.parent = this;
	this.exit_mammal.setTransform(564.6,648.9);
	new cjs.ButtonHelper(this.exit_mammal, 0, 1, 1);

	this.exit_reptile = new lib.exit();
	this.exit_reptile.parent = this;
	this.exit_reptile.setTransform(564.6,621.4);
	new cjs.ButtonHelper(this.exit_reptile, 0, 1, 1);

	this.exit_bugs = new lib.exit();
	this.exit_bugs.parent = this;
	this.exit_bugs.setTransform(564.6,593.3);
	new cjs.ButtonHelper(this.exit_bugs, 0, 1, 1);

	this.exit_large = new lib.exit();
	this.exit_large.parent = this;
	this.exit_large.setTransform(729.6,674.3);
	new cjs.ButtonHelper(this.exit_large, 0, 1, 1);

	this.exit_medium = new lib.exit();
	this.exit_medium.parent = this;
	this.exit_medium.setTransform(729.6,648.2);
	new cjs.ButtonHelper(this.exit_medium, 0, 1, 1);

	this.exit_small = new lib.exit();
	this.exit_small.parent = this;
	this.exit_small.setTransform(729.7,621.2);
	new cjs.ButtonHelper(this.exit_small, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exit_small},{t:this.exit_medium},{t:this.exit_large},{t:this.exit_bugs},{t:this.exit_reptile},{t:this.exit_mammal},{t:this.exit_fish},{t:this.exit_fall},{t:this.exit_allyear},{t:this.exit_flight},{t:this.exit_park},{t:this.exit_water}]}).wait(1));

	// buttons
	this.restart_txt_btn = new lib.restart_btn();
	this.restart_txt_btn.parent = this;
	this.restart_txt_btn.setTransform(59.9,660.3);
	new cjs.ButtonHelper(this.restart_txt_btn, 0, 1, 1);

	this.day = new cjs.Text("ציפורי יום", "16px 'Arial'", "#FFFFFF");
	this.day.name = "day";
	this.day.textAlign = "center";
	this.day.lineHeight = 20;
	this.day.lineWidth = 72;
	this.day.parent = this;
	this.day.setTransform(805.2,560.5);

	this.day_switch = new lib._switch();
	this.day_switch.parent = this;
	this.day_switch.setTransform(814.9,634.7);

	this.restart_birds_btn = new lib.allday();
	this.restart_birds_btn.parent = this;
	this.restart_birds_btn.setTransform(895.9,675.9);
	new cjs.ButtonHelper(this.restart_birds_btn, 0, 1, 1);

	this.night = new cjs.Text("ציפורי לילה", "16px 'Arial'", "#FFFFFF");
	this.night.name = "night";
	this.night.textAlign = "center";
	this.night.lineHeight = 20;
	this.night.lineWidth = 80;
	this.night.parent = this;
	this.night.setTransform(805.2,689.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.night},{t:this.restart_birds_btn},{t:this.day_switch},{t:this.day},{t:this.restart_txt_btn}]}).wait(1));

	// texts
	this.txt_border = new lib.txt_border();
	this.txt_border.parent = this;
	this.txt_border.setTransform(813,32.5);

	this.instance = new lib.Bitmap36();
	this.instance.parent = this;
	this.instance.setTransform(510,32,0.604,0.604);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(1,1,1,0.008)").ss(1,1,1).p("A2uAFIAAgJMAtdAAAIAAAJ");
	this.shape.setTransform(817.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.txt_border}]}).wait(1));

	// siksak
	this.siksak = new lib.siksak();
	this.siksak.parent = this;
	this.siksak.setTransform(738.5,461.7);
	new cjs.ButtonHelper(this.siksak, 0, 1, 2);

	this.siksak_circle = new lib.circle();
	this.siksak_circle.parent = this;
	this.siksak_circle.setTransform(736.8,453.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.siksak_circle},{t:this.siksak}]}).wait(1));

	// anafat_laila
	this.anafat_laila = new lib.anafat_laila();
	this.anafat_laila.parent = this;
	this.anafat_laila.setTransform(863.6,422.1);
	new cjs.ButtonHelper(this.anafat_laila, 0, 1, 2);

	this.anafat_laila_circle = new lib.circle();
	this.anafat_laila_circle.parent = this;
	this.anafat_laila_circle.setTransform(878.8,414.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.anafat_laila_circle},{t:this.anafat_laila}]}).wait(1));

	// barchiya
	this.barchiya = new lib.barchiya();
	this.barchiya.parent = this;
	this.barchiya.setTransform(858.1,307.8);
	new cjs.ButtonHelper(this.barchiya, 0, 1, 2);

	this.barchiya_circle = new lib.circle();
	this.barchiya_circle.parent = this;
	this.barchiya_circle.setTransform(886.3,295.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.barchiya_circle},{t:this.barchiya}]}).wait(1));

	// sofit
	this.sofit = new lib.sofit();
	this.sofit.parent = this;
	this.sofit.setTransform(155.9,285.5);
	new cjs.ButtonHelper(this.sofit, 0, 1, 2);

	this.sofit_circle = new lib.circle();
	this.sofit_circle.parent = this;
	this.sofit_circle.setTransform(171.9,266.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sofit_circle},{t:this.sofit}]}).wait(1));

	// efroni
	this.efroni = new lib.efroni();
	this.efroni.parent = this;
	this.efroni.setTransform(144.1,476.7);
	new cjs.ButtonHelper(this.efroni, 0, 1, 2);

	this.efroni_circle = new lib.circle();
	this.efroni_circle.parent = this;
	this.efroni_circle.setTransform(146.3,475.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.efroni_circle},{t:this.efroni}]}).wait(1));

	// cron
	this.cron = new lib.cron();
	this.cron.parent = this;
	this.cron.setTransform(116.6,421.6);
	new cjs.ButtonHelper(this.cron, 0, 1, 2);

	this.cron_circle = new lib.circle();
	this.cron_circle.parent = this;
	this.cron_circle.setTransform(88.2,417.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cron_circle},{t:this.cron}]}).wait(1));

	// anfa_argmanit
	this.anfa_argmanit = new lib.anfa_argmanit();
	this.anfa_argmanit.parent = this;
	this.anfa_argmanit.setTransform(121.4,285.8);
	new cjs.ButtonHelper(this.anfa_argmanit, 0, 1, 2);

	this.anfa_argmanit_circle = new lib.circle();
	this.anfa_argmanit_circle.parent = this;
	this.anfa_argmanit_circle.setTransform(59.1,258.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.anfa_argmanit_circle},{t:this.anfa_argmanit}]}).wait(1));

	// Shaldag
	this.shaldag = new lib.shaldag();
	this.shaldag.parent = this;
	this.shaldag.setTransform(647.9,474.3);
	new cjs.ButtonHelper(this.shaldag, 0, 1, 2);

	this.shaldag_circle = new lib.circle();
	this.shaldag_circle.parent = this;
	this.shaldag_circle.setTransform(639.1,467.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shaldag_circle},{t:this.shaldag}]}).wait(1));

	// shrakrak
	this.shrakrak = new lib.shrakrak();
	this.shrakrak.parent = this;
	this.shrakrak.setTransform(587.6,177.1,0.836,0.825,0,129.1,-50.9,0.1,-0.1);
	new cjs.ButtonHelper(this.shrakrak, 0, 1, 2);

	this.shrakrak_circle = new lib.circle();
	this.shrakrak_circle.parent = this;
	this.shrakrak_circle.setTransform(586.5,176.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shrakrak_circle},{t:this.shrakrak}]}).wait(1));

	// kahal
	this.kahal = new lib.kahal();
	this.kahal.parent = this;
	this.kahal.setTransform(54.9,115.3);
	new cjs.ButtonHelper(this.kahal, 0, 1, 2);

	this.kahal_circle = new lib.circle();
	this.kahal_circle.parent = this;
	this.kahal_circle.setTransform(56.3,119.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kahal_circle},{t:this.kahal}]}).wait(1));

	// duhifat
	this.duhifat = new lib.duhifat_BTN();
	this.duhifat.parent = this;
	this.duhifat.setTransform(258.7,472.5);
	new cjs.ButtonHelper(this.duhifat, 0, 1, 2);

	this.duhifat_circle = new lib.circle();
	this.duhifat_circle.parent = this;
	this.duhifat_circle.setTransform(231.9,469.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.duhifat_circle},{t:this.duhifat}]}).wait(1));

	// hivai
	this.hivai = new lib.hivai();
	this.hivai.parent = this;
	this.hivai.setTransform(856.8,173.4);
	new cjs.ButtonHelper(this.hivai, 0, 1, 2);

	this.hivai_circle = new lib.circle();
	this.hivai_circle.parent = this;
	this.hivai_circle.setTransform(872.3,174.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hivai_circle},{t:this.hivai}]}).wait(1));

	// baz
	this.baz = new lib.baz();
	this.baz.parent = this;
	this.baz.setTransform(313.4,114.4,0.55,0.55);
	new cjs.ButtonHelper(this.baz, 0, 1, 2);

	this.baz_circle = new lib.circle();
	this.baz_circle.parent = this;
	this.baz_circle.setTransform(313.8,107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.baz_circle},{t:this.baz}]}).wait(1));

	// hasida
	this.hasida = new lib.hasida();
	this.hasida.parent = this;
	this.hasida.setTransform(458.1,96.6,0.955,0.955,-38,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.hasida, 0, 1, 2);

	this.hasida_circle = new lib.circle();
	this.hasida_circle.parent = this;
	this.hasida_circle.setTransform(458.7,94.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hasida_circle},{t:this.hasida}]}).wait(1));

	// tenshemet
	this.tenshemet = new lib.tenshemet_BTN();
	this.tenshemet.parent = this;
	this.tenshemet.setTransform(160,105.6,0.881,0.881);
	new cjs.ButtonHelper(this.tenshemet, 0, 1, 2);

	this.tenshemet_circle = new lib.circle();
	this.tenshemet_circle.parent = this;
	this.tenshemet_circle.setTransform(165.3,107.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tenshemet_circle},{t:this.tenshemet}]}).wait(1));

	// categoryTXT
	this.text = new cjs.Text("קטנה מאד", "14px 'Arial'", "#999999");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.parent = this;
	this.text.setTransform(716,586.4);

	this.water = new lib.water();
	this.water.parent = this;
	this.water.setTransform(160.6,675.1);
	new cjs.ButtonHelper(this.water, 0, 1, 2);

	this.park = new lib.park();
	this.park.parent = this;
	this.park.setTransform(160.6,648.2);
	new cjs.ButtonHelper(this.park, 0, 1, 2);

	this.flight = new lib.flight();
	this.flight.parent = this;
	this.flight.setTransform(161.1,621.3);
	new cjs.ButtonHelper(this.flight, 0, 1, 2);

	this.allyear = new lib.allyear();
	this.allyear.parent = this;
	this.allyear.setTransform(347.1,623.9);
	new cjs.ButtonHelper(this.allyear, 0, 1, 2);

	this.fall = new lib.fall();
	this.fall.parent = this;
	this.fall.setTransform(349,595.9);
	new cjs.ButtonHelper(this.fall, 0, 1, 2);

	this.fish = new lib.fish();
	this.fish.parent = this;
	this.fish.setTransform(514.3,675.1);
	new cjs.ButtonHelper(this.fish, 0, 1, 2);

	this.mammal = new lib.mammal();
	this.mammal.parent = this;
	this.mammal.setTransform(514.6,649.1);
	new cjs.ButtonHelper(this.mammal, 0, 1, 2);

	this.reptile = new lib.reptile();
	this.reptile.parent = this;
	this.reptile.setTransform(515.1,621.3);
	new cjs.ButtonHelper(this.reptile, 0, 1, 2);

	this.large = new lib.large();
	this.large.parent = this;
	this.large.setTransform(685.9,675.1);
	new cjs.ButtonHelper(this.large, 0, 1, 2);

	this.medium = new lib.medium();
	this.medium.parent = this;
	this.medium.setTransform(685.9,648.2);
	new cjs.ButtonHelper(this.medium, 0, 1, 2);

	this.bugs = new lib.bugs();
	this.bugs.parent = this;
	this.bugs.setTransform(515.1,594.4);
	new cjs.ButtonHelper(this.bugs, 0, 1, 2);

	this.small = new lib.small();
	this.small.parent = this;
	this.small.setTransform(685.9,621.3);
	new cjs.ButtonHelper(this.small, 0, 1, 2);

	this.text_1 = new cjs.Text("איזורים עירוניים", "14px 'Arial'", "#999999");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 18;
	this.text_1.parent = this;
	this.text_1.setTransform(213.3,689.5);

	this.text_2 = new cjs.Text("חורשות ופארקים", "14px 'Arial'", "#999999");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 91;
	this.text_2.parent = this;
	this.text_2.setTransform(213.3,585.9);

	this.whereCateg = new cjs.Text("?איפה נראה אותה", "18px 'Arial'", "#FFFFFF");
	this.whereCateg.name = "whereCateg";
	this.whereCateg.textAlign = "right";
	this.whereCateg.lineHeight = 22;
	this.whereCateg.parent = this;
	this.whereCateg.setTransform(213.3,555);

	this.text_3 = new cjs.Text("חורף", "14px 'Arial'", "#999999");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 18;
	this.text_3.parent = this;
	this.text_3.setTransform(388.5,641);

	this.text_4 = new cjs.Text("קיץ", "14px 'Arial'", "#999999");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 18;
	this.text_4.parent = this;
	this.text_4.setTransform(388.5,665.3);

	this.text_5 = new cjs.Text("?מתי נראת בארץ", "18px 'Arial'", "#FFFFFF");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 22;
	this.text_5.parent = this;
	this.text_5.setTransform(387.9,555);

	this.text_6 = new cjs.Text("זרעים וצמחים", "14px 'Arial'", "#999999");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 18;
	this.text_6.parent = this;
	this.text_6.setTransform(551.1,689.5);

	this.text_7 = new cjs.Text("?מה היא אוכלת", "18px 'Arial'", "#FFFFFF");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 22;
	this.text_7.lineWidth = 113;
	this.text_7.parent = this;
	this.text_7.setTransform(551.1,555);

	this.text_8 = new cjs.Text("גדולה מאד", "14px 'Arial'", "#999999");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 18;
	this.text_8.parent = this;
	this.text_8.setTransform(716,689.5);

	this.text_9 = new cjs.Text("?מה הגודל שלה", "18px 'Arial'", "#FFFFFF");
	this.text_9.textAlign = "right";
	this.text_9.lineHeight = 22;
	this.text_9.lineWidth = 117;
	this.text_9.parent = this;
	this.text_9.setTransform(716,555);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.whereCateg},{t:this.text_2},{t:this.text_1},{t:this.small},{t:this.bugs},{t:this.medium},{t:this.large},{t:this.reptile},{t:this.mammal},{t:this.fish},{t:this.fall},{t:this.allyear},{t:this.flight},{t:this.park},{t:this.water},{t:this.text}]}).wait(1));

	// hoverGlow
	this.hover_water_ctg = new lib.hover_categ_line();
	this.hover_water_ctg.parent = this;
	this.hover_water_ctg.setTransform(159.8,675.3,1.523,1);

	this.hover_flight_ctg = new lib.hover_categ_line();
	this.hover_flight_ctg.parent = this;
	this.hover_flight_ctg.setTransform(160,621.5,1.523,1,0,0,0,0.1,0);

	this.hover_fall_ctg = new lib.hover_categ_line();
	this.hover_fall_ctg.parent = this;
	this.hover_fall_ctg.setTransform(343.5,595.6,1.27,1,0,0,0,0.1,0);

	this.hover_large_ctg = new lib.hover_categ_line();
	this.hover_large_ctg.parent = this;
	this.hover_large_ctg.setTransform(686.1,675,0.856,1);

	this.hover_medium_ctg = new lib.hover_categ_line();
	this.hover_medium_ctg.parent = this;
	this.hover_medium_ctg.setTransform(686.1,648.3,0.856,1);

	this.hover_fish_ctg = new lib.hover_categ_line();
	this.hover_fish_ctg.parent = this;
	this.hover_fish_ctg.setTransform(513.4,675.7,1.074,1);

	this.hover_mammal_ctg = new lib.hover_categ_line();
	this.hover_mammal_ctg.parent = this;
	this.hover_mammal_ctg.setTransform(513.4,649.6,1.074,1);

	this.hover_reptile_ctg = new lib.hover_categ_line();
	this.hover_reptile_ctg.parent = this;
	this.hover_reptile_ctg.setTransform(513.4,621.5,1.074,1);

	this.hover_park_ctg = new lib.hover_categ_line();
	this.hover_park_ctg.parent = this;
	this.hover_park_ctg.setTransform(160,648.4,1.523,1,0,0,0,0.1,0);

	this.hover_allyear_ctg = new lib.hover_categ_line();
	this.hover_allyear_ctg.parent = this;
	this.hover_allyear_ctg.setTransform(343.4,624.1,1.27,1);

	this.hover_bugs_ctg = new lib.hover_categ_line();
	this.hover_bugs_ctg.parent = this;
	this.hover_bugs_ctg.setTransform(513.4,595.1,1.074,1);

	this.hover_small_ctg = new lib.hover_categ_line();
	this.hover_small_ctg.parent = this;
	this.hover_small_ctg.setTransform(686.1,621.5,0.856,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hover_small_ctg},{t:this.hover_bugs_ctg},{t:this.hover_allyear_ctg},{t:this.hover_park_ctg},{t:this.hover_reptile_ctg},{t:this.hover_mammal_ctg},{t:this.hover_fish_ctg},{t:this.hover_medium_ctg},{t:this.hover_large_ctg},{t:this.hover_fall_ctg},{t:this.hover_flight_ctg},{t:this.hover_water_ctg}]}).wait(1));

	// nightBG
	this.night_switch = new lib._switch();
	this.night_switch.parent = this;
	this.night_switch.setTransform(814.9,634.7,1,1,0,180,0);

	this.night_bg = new lib.night_bg();
	this.night_bg.parent = this;
	this.night_bg.setTransform(485.5,359.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.night_bg},{t:this.night_switch}]}).wait(1));

	// BG
	this.instance_1 = new lib.רקעלריטה0101();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1,0.18,0.187);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(422.4,331.6,1059.1,753.6);
// library properties:
lib.properties = {
	width: 960,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/hula_birds_byShiraDanielaRita_atlas_.png", id:"hula_birds_byShiraDanielaRita_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;