const { isRegExp } = require("util")

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

    it.only('키보드 a 입력시 해당하는 오디오 DOM 객체가 play 상태가 된다.', () => {
      cy.get('body').type('a')
      cy.get('audio[data-key="65"]').invoke('prop', 'paused').should('eq', false)
    })

})