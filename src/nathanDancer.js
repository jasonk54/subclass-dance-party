var MakeNathanDancer = function(top, left, timeBetweenSteps) {
	MakeDancer.call(this, top, left, timeBetweenSteps);
	this.$node.addClass('nathan');
};
MakeNathanDancer.prototype = Object.create(MakeDancer.prototype);
MakeNathanDancer.prototype.step = function() {
	MakeDancer.prototype.step.call(this);
	this.$node.toggle();
};

var makeNathanDancer = function(top, left, timeBetweenSteps) {
	return new MakeNathanDancer(top, left, timeBetweenSteps);
};