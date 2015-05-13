function ViewRender(c, h, m, s){
	this.c = c;
	this.h = h;
	this.m = m;
	this.s = s;
};

ViewRender.prototype.changeBG = function(){
	$('body').css("background-color", this.c);
	console.log("The color code for now is "+this.c);
};

ViewRender.prototype.printTime = function(){
	$('.time-zone').empty();
	$('.time-zone').append("<p>Now is #"+this.h+this.m+this.s+"</p>");
};




