var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
// MakeBlinkyDancer.prototype.constructor = MakeDancer;

MakeBlinkyDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  return new MakeBlinkyDancer(top, left, timeBetweenSteps);
};
