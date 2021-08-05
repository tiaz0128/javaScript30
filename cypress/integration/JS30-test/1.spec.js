
describe('01 - JavaScript Drum Kit App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5500/01%20-%20JavaScript%20Drum%20Kit/index-START.html')
    })
  
    it('9개 key 가 존재', () => {
      cy.get('.key').should('have.length', 9)
    })

    it('9개의 키보드 입력가 발생시 콘솔에 keycode 값 출력', () => {
      cy.get('body').type('a')//.tigger('keydown', {})
      // cy.get('.key').then((ele) => {
      //   const key = ele[random(0, 9)]
      //   const keyCode = key.dataset.key
        
      //   cy.get('body').type(String.fromCharCode(keyCode))
      // })
    })
})