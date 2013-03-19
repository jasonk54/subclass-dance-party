var MakeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top,left);
};

MakeDancer.prototype.step = function(){
  var self = this; // instance of MakeDancer
  setTimeout(function(){
    self.step();
  }, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left){
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
