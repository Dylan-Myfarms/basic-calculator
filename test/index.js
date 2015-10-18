var should = require('chai').should(),
    maths = require('../maths');

describe('#correct', function() {
  it('verifies 1 + 1 = 2', function() {
    a = 1;
    maths.add(a, a).should.equal(2);
  });
  it('verifies 1 - 1 = 0', function() {
    a = 1;
    maths.sub(a, a).should.equal(0);
  });  
  it('verifies 1 / 2 = 0.5', function() {
    maths.div(1, 2).should.equal(0.5);
  });
  it('verifies 5 * 2 = 10', function() {
    maths.mult(5, 2).should.equal(10);
  });
  it('verifies 10 is the max of [0,2,4,6,8,10]', function() {
    a = [0,2,4,6,8,10];
    maths.max(a).should.equal(10);
  });
  it('verifies 0 is the min of [0,2,4,6,8,10]', function() {
    a = [0,2,4,6,8,10];
    maths.min(a).should.equal(0);
  });
  it('verifies 5 % 2 = 1', function() {
    maths.mod(5, 2).should.equal(1);
  });
  it('verifies 2 ^ 10 = 1024', function() {
    maths.pow(2, 10).should.equal(1024);
  });
  it('verifies 1 is 20% of 5', function() {
    maths.perc(5, 1).should.equal(20);
  });
  it('verifies -1.2 is the slope of [1,-4],[-4,2]', function() {
    var a = [1, -4];
    var b = [-4, 2];
    maths.slope(a, b).should.equal(-1.2);
  });
  it('verifies 5 is the mean of [3,4,5,6,7]', function() {
    var a = [3,4,5,6,7];
    maths.mean(a).should.equal(5);
  });
  it('verifies [5] is the mode of [1,1,2,3,4,4,5,5,5]', function() {
    var a = [1,1,2,3,4,4,5,5,5];
    result = maths.mode(a)
    result[0].should.equal(5);
  });
  it('verifies [1, 5] is the mode of [1,1,1,2,3,4,4,5,5,5]', function() {
    var a = [1,1,1,2,3,4,4,5,5,5];
    result = maths.mode(a)
    result[0].should.equal(1);
    result[1].should.equal(5);
  });
  it('verifies 4 is the median of [1,1,4,1,1]', function() {
    var a = [1,1,4,1,1];
    maths.median(a).should.equal(4);
  });
  it('verifies 4,5 is the median of [1,1,4,5,1,1]', function() {
    var a = [1,1,4,5,1,1];
    result = maths.median(a);
    result[0].should.equal(5);
    result[1].should.equal(4);
  });
  it('verifies 6.5 is rounded to 7', function() {
    var a = 6.5;
    maths.round(a).should.equal(7);
  });
  it('verifies 6.49 is rounded to 6', function() {
    var a = 6.49;
    maths.round(a).should.equal(6);
  });
});