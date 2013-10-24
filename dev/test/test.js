module.exports = {
  // Checks if the <title> of ´google.com´ has the expected value
  'Page title is correct': function (test) {
    test
      .open('http://google.com')
      .assert.title('Google')
      .done();
  }
};
