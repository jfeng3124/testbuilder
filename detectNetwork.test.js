/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
var expect = chai.expect;

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901235') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});


describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  // var assert = function(isTrue) {
  //   // if(isTrue) {
  //   //   throw new Error('Test failed');
  //   // }

  // };

  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});


describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});


describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })

});


describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011451205869432')).to.equal("Discover");
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011459601294586719')).to.equal("Discover");
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6511451205869432')).to.equal("Discover")
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511459601294586719')).to.equal("Discover");
  });

  for (var prefix = 644; prefix <= 649; prefix++) {

    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
        expect(detectNetwork(prefix + '1239405869120')).to.equal("Discover")
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function () {
        expect(detectNetwork(prefix + '1239405869120512')).to.equal("Discover")
      });
    })(prefix)
  };


describe('Maestro', function() {
  // Write full test coverage for the Maestro card

  for (let length = 12; length <= 19; length++) {
    var str = '';
    for (let num = 0; num < length-4; num++) {
      str += '0';
    }
    (function(str) {
      it('has a prefix of 5018 and a length of ' + length, function () {
        expect(detectNetwork('5018' + str)).to.equal("Maestro")
      });
      it('has a prefix of 5020 and a length of ' + length, function () {
        expect(detectNetwork('5020' + str)).to.equal("Maestro")
      });
      it('has a prefix of 5038 and a length of ' + length, function() {
        expect(detectNetwork('5038' + str)).to.equal("Maestro");
      });
      it('has a prefix of 6304 and a length of ' + length, function() {
        expect(detectNetwork('6304' + str)).to.equal("Maestro");
      });
    })(str)
  }
});


describe('China UnionPay', function() {

  for (var prefix = 622126; prefix <= 622925; prefix++) {

  (function(prefix) {

    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '1239405869')).to.equal("China UnionPay")
    });
    it('has a prefix of ' + prefix + ' and a length of 17', function () {
      expect(detectNetwork(prefix + '12394058691')).to.equal("China UnionPay")
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function () {
      expect(detectNetwork(prefix + '123940586912')).to.equal("China UnionPay")
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix + '1239405869120')).to.equal("China UnionPay")
    });
    })(prefix)
  };

  for (var prefix = 624; prefix <= 626; prefix++) {

  (function(prefix) {

    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '1239405869123')).to.equal("China UnionPay")
    });
    it('has a prefix of ' + prefix + ' and a length of 17', function () {
      expect(detectNetwork(prefix + '12394058691123')).to.equal("China UnionPay")
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function () {
      expect(detectNetwork(prefix + '123940586912112')).to.equal("China UnionPay")
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix + '1239405869120123')).to.equal("China UnionPay")
    });
    })(prefix)
  };

  for (var prefix = 6282; prefix <= 6288; prefix++) {

  (function(prefix) {

    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '123940586912')).to.equal("China UnionPay")
    });
    it('has a prefix of ' + prefix + ' and a length of 17', function () {
      expect(detectNetwork(prefix + '1239405869112')).to.equal("China UnionPay")
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function () {
      expect(detectNetwork(prefix + '12394058691211')).to.equal("China UnionPay")
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix + '123940586912012')).to.equal("China UnionPay")
    });
    })(prefix)
  };
})


describe('Switch', function() {
  var prefixArr4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var prefixArr6 = ['564182', '633110'];

  for (let i = 0; i < prefixArr4.length; i++) {
    var prefix = prefixArr4[i];

    (function(prefix) {

      it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '123940586912')).to.equal("Switch")
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function () {
      expect(detectNetwork(prefix + '12394058691125')).to.equal("Switch")
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix + '123940586912167')).to.equal("Switch")
      });
      })(prefix)
  };

  for (let i = 0; i < prefixArr6.length; i++) {
    var prefix = prefixArr6[i];

    (function(prefix) {

      it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '1239405869')).to.equal("Switch")
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function () {
      expect(detectNetwork(prefix + '123940586911')).to.equal("Switch")
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix + '1239405869121')).to.equal("Switch")
      });
      })(prefix)
  };
})
})
