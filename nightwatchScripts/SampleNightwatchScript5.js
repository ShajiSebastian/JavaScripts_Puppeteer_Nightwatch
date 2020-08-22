describe('homepage test with describe', function() {

 
  test.only('startHomepage', () => {
    console.log('Only this test executes')
  });


  // skipped testcase: equivalent to: test.skip(), it.skip(), and xit()
  xtest('async testcase', async browser => {
    console.log('test skipped')
  });

})
