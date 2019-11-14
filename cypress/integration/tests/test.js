describe('Hello world', () => {
    it('works', () => {
      cy.visit('https://applitools.com/helloworld');
      cy.eyesOpen({
        appName: 'Hello World!',
        testName: 'My first JavaScript test!',
        browser: { width: 800, height: 600 },
      });
      cy.eyesCheckWindow('Main Page');
      cy.get('button').click();
      cy.eyesCheckWindow('Click!');
      cy.eyesClose();
    });
  });