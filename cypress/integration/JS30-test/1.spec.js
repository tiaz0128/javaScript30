
describe('01 - JavaScript Drum Kit App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5500/01%20-%20JavaScript%20Drum%20Kit/index-START.html',  {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog')
        },
      })
    })
  
    it('9개 key 가 존재', () => {
      cy.get('.key').should('have.length', 9)
    })

    it('키보드 입력 a가 발생시 keycode 값 65 콘솔출력', () => {
      cy.get('body').type('a')
      cy.get('@consoleLog').should('be.calledWith', 65)
    })
})