describe('Creating a message to convert a uppercase', () => {
    it('Displays the message', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="messageText"]').type('New text');
  
      cy.get('[data-testid="sendButton"]').click();
  
      cy.get('[data-testid="messageTexToUpperCase"]').should('have.value', '');
  
      cy.contains('Get New message');
    });
  });