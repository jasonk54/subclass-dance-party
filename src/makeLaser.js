var MakeLaser = function(top, left, timeBetweenSteps) {
	MakeDancer.call(this, top, left, timeBetweenSteps);
	this.$node.removeClass('dancer').addClass('laser');
};
MakeLaser.prototype = Object.create(MakeDancer.prototype);
MakeLaser.prototype.step = function() {
	MakeDancer.prototype.step.call(this);
	this.$node.toggle('fast');
};

var makeLaser = function(top, left, timeBetweenSteps) {
	return new MakeLaser(top, left, timeBetweenSteps);
};
