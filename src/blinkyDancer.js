var BlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
};
BlinkyDancer.prototype = Object.create(MakeDancer.prototype);
// MakeBlinkyDancer.prototype.constructor = MakeDancer;

BlinkyDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

var blinkyDancer = function (top, left, timeBetweenSteps) {
  return new BlinkyDancer(top, left, timeBetweenSteps);
};

