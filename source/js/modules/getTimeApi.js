//This is the class of the API to get the current time.
function GetTimeApi(){
	var h, m, s;
};

GetTimeApi.prototype.getCurrentTime = function(){
	var d = new Date();
	this.h = d.getHours();
	this.m = d.getMinutes();
	this.s = d.getSeconds();
};