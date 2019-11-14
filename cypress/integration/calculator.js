describe('Calculator', () => {
  it('should perform operations', () => {
    cy.visit('/');

    cy.performOperation({
      leftOperand: 1,
      rightOperand: 2,
      operation: '+',
    })
      .get('[data-testid="result"]')
      .should('have.value', '3')
      .get('[value="AC"')
      .click();

    cy.performOperation({
        leftOperand: 4,
        rightOperand: 4,
        operation: 'x',
      })
      .get('[data-testid="result"]')
      .should('have.value', '16')
      .get('[value="AC"')
      .click();

    cy.performOperation({
      leftOperand: 4,
      rightOperand: 4,
      operation: '-',
    })
    .get('[data-testid="result"]').should('have.value', '0')
    .get('[value="AC"')
    .click();

    cy.performOperation({
      leftOperand: 4,
      rightOperand: 4,
      operation: '÷',
    })
    .get('[data-testid="result"]').should('have.value', '1')
    .get('[value="AC"')
    .click();
  });

  it('should separate digits with coma', () => {
    cy.visit('/')
      .clickTimes('[value="3"]:not(#output)', 5)
      .get('[data-testid="result"]')
      .should('have.value', '33,333');
  });

  it('should decreaase font size of the output after 6 digits', () => {
    cy.visit('/')
      .clickTimes('[value="3"]:not(#output)', 6)
      .get('[data-testid="result"]')
      .should('have.css', 'font-size', '76px')

      .clickTimes('[value="3"]:not(#output)', 1)
      .get('[data-testid="result"]')
      .should('have.css', 'font-size', '64px')

      .clickTimes('[value="3"]:not(#output)', 1)
      .get('[data-testid="result"]')
      .should('have.css', 'font-size', '56px')

      .clickTimes('[value="3"]:not(#output)', 1)
      .get('[data-testid="result"]')
      .should('have.css', 'font-size', '52px');
  });

  it('should not display more then 9 digits', () => {
    cy.visit('/')
      .clickTimes('[value="3"]:not(#output)', 9)
      .get('[data-testid="result"]')
      .should('have.value', '333,333,333')

      .clickTimes('[value="3"]:not(#output)', 1)
      .get('[data-testid="result"]')
      .should('have.value', '333,333,333');
  });
});
