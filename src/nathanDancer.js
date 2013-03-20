var MakeNathanDancer = function(top, left, timeBetweenSteps) {
	MakeDancer.call(this, top, left, timeBetweenSteps);
	this.$node.removeClass('dancer').addClass('nathan');
};
MakeNathanDancer.prototype = Object.create(MakeDancer.prototype);
MakeNathanDancer.prototype.step = function() {
	MakeDancer.prototype.step.call(this);
	this.$node.animate({
		left: '+=500'
	},10);
};

var makeNathanDancer = function(top, left, timeBetweenSteps) {
	return new MakeNathanDancer(top, left, timeBetweenSteps);
};