var MakeNextDancer = function(top, left, timeBetweenSteps) {
	MakeDancer.call(this, top, left, timeBetweenSteps);
	this.$node.removeClass('dancer').addClass('monkey');
};
MakeNextDancer.prototype = Object.create(MakeDancer.prototype);
MakeNextDancer.prototype.step = function() {
	MakeDancer.prototype.step.call(this);
	this.$node.toggle();
};

var makeNextDancer = function (top, left, timeBetweenSteps) {
	return new MakeNextDancer(top, left, timeBetweenSteps);
};

