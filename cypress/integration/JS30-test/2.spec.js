describe('01 - JavaScript Drum Kit App', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/02%20-%20JS%20and%20CSS%20Clock/index-START.html',  {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog')
        },
      })
    })
  
    it('3개 hand 가 존재', () => {
      cy.get('.hand').should('have.length', 3)
    })
    
    it('3개 hand 가 12시 방향에 위치', () => {
      cy.get('.hand.hour-hand').invoke('css', 'width').then(transform => { expect(transform).to.equal("rotate(90deg);")})
      cy.get('.hand.min-hand').invoke('css', 'transform').then(transform => { expect(transform).to.equal("rotate(90deg);")})
      cy.get('.hand.second-hand').invoke('css', 'transform').then(transform => { expect(transform).to.equal("rotate(90deg);")})

      // transform: rotate(90deg);
      // transform-origin: 100%;
    })

})