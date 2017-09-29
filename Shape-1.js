(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



// stage content:
(lib.Shape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEj+YAAAAhCAAh7ABYhfABiLACiyACYg0ABg6ABg/ABYgNAAgMAAgOABYgLAAgLAAgMABYgDAAgEAAgEAAYgDAAgDAAgCAAYgEABgCAAACAAIABABIADAAYADAAADAAADAAYAKABAJAAAKABYAaAAAZABAbABYALAAALAAALABYAKAAAGABAGAAYAKABALABAKAAYBVAHBjAIBqAIYAHAAAHABAHABYAIAAAIABAJAAYAQABARABARABYAiACAiACAjADIAXABIAKABIAJABYAMABANABAHABYARACAIADABACIAAAGYAAABAAAAAAABIgCACIgCADYgCABAAABgCABIgFADIgGADYgBABgEACgCABYgKAEgNAEgPADYgEABgEABgEABYgEABgDABgGABYgJACgKABgJACYgEABgFABgEAAYgEABgEABgGABYgKABgLACgJABYgFABgEAAgFABYgCAAgCABgCAAYgDAAgDAAgCABYgKABgJABgJABYgEAAgEABgDAAYgFABgEAAgEABYgIAAgGABgGAAYgLABgGABAAAAYAADMCmCmDMAAYDNAAClimAAjMYAAAAgFgBgLgBYgGAAgGgBgIAAYgEgBgEAAgFgBYgDAAgEgBgEAAYgJgBgJgBgKgBYgCgBgDAAgDAAYgCAAgCgBgCAAYgFgBgEAAgFgBYgJgBgLgCgKgBYgGgBgEgBgEgBYgEAAgFgBgEgBYgJgCgKgBgJgCYgGgBgDgBgEgBYgEgBgEgBgEgBYgPgDgNgEgKgEYgCgBgEgCgBgBIgGgDIgFgDYgCgBAAgBgCgBIgCgDIgCgCYAAgBAAAAAAgBIAAgGYABgCAIgDARgCYAHgBANgBAMgBIAJgBIAKgBIAXgBYAjgDAigCAigCYARgBARgBAQgBYAJAAAIgBAIAAYAHgBAHgBAHAAYBqgIBjgIBVgHYAKAAALgBAKgBYAGAAAGgBAKAAYALgBALAAALAAYAbgBAZgBAaAAYAKgBAJAAAKgBYADAAADAAADAAIADAAIABgBYACAAgCAAgEgBYgCAAgDAAgDAAYgEAAgEAAgDAAYgMgBgLAAgLAAYgOgBgMAAgNAAYg/gBg6gBg0gBYiygCiLgChfgBYh7gBhCAAAAAAYgCgBgFAAgCAB");
	this.shape.setTransform(174.4,115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEsdIjnAAIg5AAIgdAAIgHAAIgFAAIgKAAIhRADIigAGIgUAAIgPABIgdADIg6AEIgPABIgHABIgEAAIgCAAIgWADIgqAGYgOABgPACgNACIgQAEIgDAAIgDABIgFACIgFACYgCABgBAAgBABYgBAAgBABAAABYgBABgBAAAAABYgBADABADAEADIAIAFYADACAFACAEABIANAGYACABADABACABIABAAIAAAAYgBAJAJhVgEAkIAAAAIABAAIADABIAEACIMuOZIAAgBIsxtxIAUAHIADAAIABABIABAAYAAgCAAACAAgBIABAAIAFACIAKAEYAHACAHACAGACIARAHYAZAJAMAIAIAIIA4AvIBxBfIA4AvIAcAYYAJAIAKAIAKAIIAPALIACACIABABIAAAAIABAAIAAAAYAAAAAAACAAgBIAEADIAHAGYAKAIANAIALAIYAMAIALAIAMAIIAlAYIgBATIAtAaYAEACADACAEACIAKAGIATANIAKAGIAFADYABABABABACABIAPANIAPANYACACACACACACIAFAGYAOARAJARABAQYACAJAAAIAAAJIAAAZYgBAQACARgDARIgFAzYgCAQgEAQgCARYgCAIgBAJgCAIIgEANIgBAGIgBADIgBACIAAABIAAAAYAAABAAgCAAAAIAAABYgFAQgEARgHARIgJAZYgEAJgCAIgFAJIgLAZIgGAMYgCAFgCAEgDAEIgeAyIgPAaYgCAEgCAEgDAEIgKANIgnAyIgFAGYgBACgDADgCACIgLAMIgYAZYgHAJgLAIgJAJIgdAZYjrDNgYFkDMDrYDNDrFkAYDqjNYDrjNAZlkjNjrYgRgTgUgUgSgQIgdgZYgKgIgKgJgHgIIgYgZIgMgNYgCgCgCgCgCgCIgFgGIgngzIgJgMYgDgEgCgFgDgEIgPgZIgegyYgDgEgCgFgCgEIgGgMIgLgaYgFgIgCgJgDgHIgKgZYgHgRgDgRgFgRIAAAAYAAAAAAgCAAABIAAAAIgBgBIAAgCIgBgDIgCgGIgDgNYgCgIgCgIgCgJYgDgRgEgQgCgQIgFgyYgCgRABgRAAgQIAAgZYAAgJgBgIACgJYACgQAJgRANgRIAGgGYACgCABgCADgCIAPgNIAPgNYABgBABgBACgBIAFgDIAJgGIAUgNIAKgGYADgCAEgCAEgCIAtgaIgBAUIAogTYANgGANgGAMgGYANgHANgGALgGIAJgFIAEgCYAAgBAAACAAAAIAAgBIAAAAIABAAIABgBIACgBIAQgJYALgGALgHALgGIAfgTIA/gmIB+hMIA/gmYAKgGAMgHAagFIASgEYAGgBAIgBAHgBIALgCIAFgBIAAAAYAAgBAAACABgCIAAAAIACAAIACgBIAWgEIsxtyIAAgBIMtOaIAFAAIACgBIABAAIAAAAYgDAkAIhVAAAJIAAAAIAAAAYADgBADAAACgBIAOgDYAEgBAFgBAEgBIAIgEYAEgDACgDgBgDYAAAAAAgBgBgBYgBgBAAgBgBAAYgBgBgBgBgBgBIgFgCIgFgDIgCgBIgEgCIgPgFYgMgEgPgEgNgEIgqgMIgUgGIgDgBIgEgBIgHgBIgOgEIg5gNIgcgGIgPgEIgTgDIiegeIhPgPIgKgCIgFAAIgHgCIgcgEIg6gJIjkgjYgDAAgEAAgDAA");
	this.shape_1.setTransform(177.2,263.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFRVIDQgLIBpgGIAMgBIAJgBIASgBIAkgDICRgLIAkgDIASgBIAJgBYADAAABAAADgBIA0gFYBOgIApgHA0gIIAFAAIADgBIAHgBIAHgCIADgBIACAAIAJgDYACgBABAAABgBYABAAABAAAAgBYADgCAAgCgBgCYgBAAgBgBgCgBIgHgDYgBgBgCAAgCgBIgGgBIgMgDIgGgBIgIgCIgPgCIgggGYgKgCgLgCgIgCIgagFYgHgCgHgCgEgCYgCgBgDgBgCgBIgGgCIgLgGIhZgtIiyhaIgvgWIgLgGIgOgGIgbgLYgRgHgUgIgTgHIg5gXYgKgEgHgDgJgEIgYgLIgDgCIgDgBIgEgDIgKgGIgTgLYgVgPgLgPgCgPYgBgEAAgDAAgEIAAgLIAAgXIAAgLYAAgEABgDAAgEIADgXYACgHAAgIACgHIAGgXYACgHACgIACgHIAJgXYADgHADgIADgHIAMgXYAHgPALgPAKgOIgBALYADgEACgDAEgEIALgLIAWgXIAWgWYAEgDAFgEAEgEIAOgLIAcgVYACgCACgCADgCIAIgFIARgLIARgLIAIgFIAKgFIAogVYFci0CHmpizlbYi0lbmriIlaCzYlbC0iIGrC0FbYA0BkBMBVBXA+IAkAbIAJAHIAIAGIAPANIAPANIAHAHYADACACACACACIAYAaIAMANYAEAEAFAEADAEIASAaIASAZIAJAMYAEAFABAEADAEIgBAMYAKAOALAPAHAPIAMAXYADAHADAIADAHIAJAXYACAHACAIACAHIAGAXYACAHAAAIACAHIADAXYAAAEABADAAAEIAAALIAAAXIAAALYAAAEAAADgBAEYgCAPgLAPgVAPIgTALIgKAGIgEADIgDABIgDACIgYALYgJAEgHADgKAEIg5AXYgTAHgUAIgRAHIgbALIgOAGIgLAGIgvAWIiyBaIhZAtIgLAGIgGACYgCABgDABgCABYgEACgHACgHACIgaAFYgIACgLACgKACIggAGIgPACIgIACIgGABIgMADIgGABYgCABgCAAgBABIgHADYgCABgBABgBAAYgBACAAACADACYAAABABAAABAAYABABABAAACABIAJADIACAAIADABIAHACIAHABIADABIAFAAYA0AIApAHBOAIIA0AFYADABABAAADAAIAJABIASABIAkADICRALIAkADIASABIAJABIAMABIBpAGIDQALYADAAADAAADAA");
	this.shape_2.setTransform(174.4,121.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("An3ggQg9gzhphMQiEhggegXQiyiHgqhbQg4h4CChsQCUh6GWpbQFooZGCFqQAwAtAwA6QAMAPAMAPQGjH8CRD8QCVEDAlCTQAlCSgWCMQgvEtkYCZIgEACQj9CIgrByQgYBAAyBCQAPAVgEAEQgGAGgvgGQingXjTERQg6kzg+gIQl4gulaEtQjrDMjKFbQgsBLg6BvQgQAggEAEQgEAGAGgVQBbkZCLnsQBelNB9kIQB2j3COixQATgZAUgXIAmgrIAygiIgHgDIgXAQIgQAMQhKA2gBADQgBACBIgyIAUgVIATgTQg2gggEgiQgGhCDtgNQAhgVAngWQBLhlgQh0QgFgngQguQgSgugFgQQgHgZAJgIQALgIApAKQA2ANDOBPQAHACAHADIAAAAIAICaIACArIABANIABAKIAAgKQAIAAAJABQAFAAAGABIAPCEIACAWQAaAFApALQAZAHAOAGQAbAMgNAJQgEACgKgXQgRgrgkiCQBqAXBeA8QAoBgBCCAQBtDShSC3QhJChi6BPQhiAphfAEQgBAhgBAhIABhCQgBAAgBABQgBgBgBABQhPAChOgXQi9g4hJjBQgghShLhWQg/hIhlhRgAECpzQAJAEAKADIADBLQgLgmgLgsgADJqJQAIADAIADQAQAGAQAHQAFABAEACQgEgRgFAOQgHAWgIBtIAAAEIAGAzQgFgBgFgCQAAAEAAAFQgEBAgEBVQAOACANACQgGATgJAWIgKAXQgDAFgDAGQgFAJgGAKQgFAJgGAJQgEAGgFAGQifDNmUjJIBohJQA3glAogqQB4gEB3AIQBCAEA7AHQAFABAFABQAGAAAHABQAFABAFABQABAAABAAQAAAJgBAJQgBAdgCAgQgCA6gDBEQAAABAAACQAAADAAAEQAAAJgBAJIABgZIAAgCIAAgBIgGhrIADhkIADiKIAHCMIABASIADAyAElntQBNACAtgRQAZgKAMgLQABgBAIAjQANA8AlBbQChBpBhDAQBlDHALD/AElntQgGgZgHgbIABA0QAGAAAGAAgAEZntQgBAjgBASIgBAFIAAACQgEAngFAfQgFAegIAcQgDAKgEAKIAJACIALhQAEWmxQARADAQADQgIgegKgkADHnHIAAgoQAFAAAFAAQADAAACAAQAJAAALAAQAAAAAAAAQAWABAZABADVnDIABgsIADiUIARCQQAAACAAACQgCAXgCAZQgJgCgIgCQgBgBgBAAQgGgCgGgBQgGgCgGgCQgRgFgMgFQg5gXBkidIgCCaADwm8IABAHQATABASADADUm3QABAAAAAAIAAgMADHm4QAGAAAHABAhKmAQCDg3CCgBQAGAAAGAAIAAgPADEitIABh3IACiUAEWmzQgUgFgSgEAl/igIgEgDQBThSBag/IAlgBQAUgVAPgVQAjgTAhgOQgoAcg/AvgAC7KWIAChnIADl0IAEloADAIuQAAAAgBAAIACgwQAAAYgBAYgAC7LjIADhzADBH+IATo2ABXn0QiDBfgeAV");
	this.shape_3.setTransform(155.7,206.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9933").s().p("AlGJIQiIiIAAi/QAAjACIiGQCHiIC/AAQDAAACHCIQCICGgBDAQABC/iICIQiHCHjAAAQi/AAiHiHgAnOkvIAAk9IEuhiIC6EBIi6EAg");
	this.shape_4.setTransform(410.3,233.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(308.1,210.2,423.5,374.7);
// library properties:
lib.properties = {
	id: '0660EF8B6B2E724FB98BB3C52008F659',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0660EF8B6B2E724FB98BB3C52008F659'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;