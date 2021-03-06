var should = require('chai').should(),
    maths = require('../index');

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
  it('verifies standard deviation of [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4] = 3.0607876523260447', function() {
    var a = [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4];
    maths.sdeviation(a).should.equal(3.0607876523260447);
  });
  it('verifies population standard deviation of [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4] = 2.9832867780352594', function() {
    var a = [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4];
    maths.psdeviation(a).should.equal(2.9832867780352594);
  });
  it('verifies sdeviation to precision 5 = 3.06079', function() {
    var a = [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4];
    var psd = maths.sdeviation(a);
    maths.roundTo(psd, 5).should.equal(3.06079);
  });
  it('verifies psdeviation to precision 5 = 2.98329', function() {
    var a = [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4];
    var sd = maths.psdeviation(a);
    maths.roundTo(sd, 5).should.equal(2.98329);
  });
  it('verifies sdeviation variance to precision 4 is 9.3684', function() {
    var a = [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4];
    var variance = maths.variance(a, "standard")
    maths.roundTo(variance, 4).should.equal(9.3684);
  });
  it('verifies psdeviation variance is 8.9', function() {
    var a = [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4];
    maths.variance(a, "population").should.equal(8.9);
  });
  it('verifies random numbers fall within proper range', function() {
    var min = 1;
    var max = 100;
    var rand = maths.random(min, max);
    
    var mincheck = (rand - min) > 0;
    var maxcheck = (max - rand) > 0;

    mincheck.should.equal(true);
    maxcheck.should.equal(true);
  });
  it('verifies random number defaults are set to 1 and 10', function() {
    var rand = maths.random();
    
    var mincheck = (rand - 1) > 0;
    var maxcheck = (10 - rand) > 0;

    mincheck.should.equal(true);
    maxcheck.should.equal(true);
  });
  
});