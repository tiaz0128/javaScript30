
describe('01 - JavaScript Drum Kit App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/03%20-%20CSS%20Variables/index-START.html')
  })
  
  it('input 3개(Spacing, Blur, Base Color) 존재', () => {
    cy.get('input').should('have.length', 3)
  })


})