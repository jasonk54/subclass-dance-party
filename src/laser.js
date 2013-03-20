var Laser = function(top, left, timeBetweenSteps) {
	MakeDancer.call(this, top, left, timeBetweenSteps);
	this.$node.removeClass('dancer').addClass('laser');
};

Laser.prototype = Object.create(MakeDancer.prototype);
Laser.prototype.step = function() {
	MakeDancer.prototype.step.call(this);
	this.$node.toggle('fast');
};

var laser = function(top, left, timeBetweenSteps) {
	return new Laser(top, left, timeBetweenSteps);
};
