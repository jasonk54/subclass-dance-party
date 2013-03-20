var MonkeyDancer = function(top, left, timeBetweenSteps) {
	MakeDancer.call(this, top, left, timeBetweenSteps);
	this.$node.removeClass('dancer').addClass('monkey');
};
MonkeyDancer.prototype = Object.create(MakeDancer.prototype);
MonkeyDancer.prototype.step = function() {
	MakeDancer.prototype.step.call(this);
	this.$node.toggle();
};

var monkeyDancer = function (top, left, timeBetweenSteps) {
	return new MonkeyDancer(top, left, timeBetweenSteps);
};

