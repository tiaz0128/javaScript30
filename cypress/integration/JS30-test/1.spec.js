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

    it('키보드 a 입력시 해당하는 오디오 DOM 객체가 play 상태가 된다.', () => {
      cy.get('body').type('a')
      cy.get('audio[data-key="65"]').invoke('prop', 'paused').should('eq', false)
    })

    it('같은 키보드 입력시 이전에 오디오가 연주 중인 경우 다시 처음부터 play한다.', () => {
      cy.get('body').type('a')
      cy.get('body').type('a')
      cy.get('@consoleLog').should('be.calledWith', 0)
    })

    it('키보드 입력에 해당하는 div는 playing class 가 추가', () => {
      cy.get('body').type('a')
      cy.get('div[data-key="65"]').invoke('prop', 'classList').should((classList) => {
        expect(classList.value).to.contain('playing')
      })
    })

    it('css transition 이 끝나면 playing class 제거', () => {
      cy.get('body').type('a')
      cy.get('div[data-key="65"]').invoke('prop', 'classList').should((classList) => {
        expect(classList.value).not.contain('playing')
      })
    })
})