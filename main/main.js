const Vibrant = require("node-vibrant");
const getGr = require("./getGr.js");
const grFunc = require("./grFunc.js");



module.exports ={
	gr:(imgUrl)=>{
		const img = new Image();
    		img.crossOrigin = 'Anonymous';
    		img.src = imgUrl;
    		const vibrant = new Vibrant(img);
		
		return vibrant.getPalette()
		  .then((palette) => {
		  	// ading for this value
		  	grFunc.init(palette);


		  	let data = {
		  		vibrant:grFunc.vibrantGr(),
		  		relevant:grFunc.relevantGr(),
		  		getTextClr:grFunc.getTextClr
		  	}
		  	return data;
		  }).catch(e=>{
		  	let error = {error:"blocked by CORS policy or invalid url"}
		  	return error;
		  })
	},
	solid:(imgUrl)=>{
		const img = new Image();
    		img.crossOrigin = 'Anonymous';
    		img.src = imgUrl;
    		const vibrant = new Vibrant(img);
		
		return vibrant.getPalette()
		  .then((palette) => {

		  	for(p in palette){
		  		if(palette[p]){
		  			palette[p].getHex();
		  		}
		  	}

		  	palette.getTextClr = grFunc.getTextClr;

		  	return palette;
		  }).catch(e=>{
		  	let error = {error:"blocked by CORS policy or invalid url"}
		  	return error;
		  })
	},
	Vibrant
}


