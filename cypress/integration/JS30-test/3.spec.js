
describe('01 - JavaScript Drum Kit App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/03%20-%20CSS%20Variables/index-START.html')
  })
  
  it('input 3개(Spacing, Blur, Base Color) 존재', () => {
    cy.get('input').should('have.length', 3)
  })

  it('Spacing 값만큼 이미지의 padding 값을 가진다..', () => {
    cy.get('#spacing').should('have.attr', 'value').then((spaceValue) => {
      cy.get('img').invoke('css', 'padding').then((padding) => {
        expect(padding).to.equal(`${spaceValue}px`)
      })
    })
  })

  it('Blur 값만큼 이미지의 filter 값을 가진다..', () => {
    cy.get('#spacing').should('have.attr', 'value').then((spaceValue) => {
      cy.get('img').invoke('css', 'filter').then((filter) => {
        expect(filter).to.equal(`blur(${spaceValue}px)`)
      })
    })
  })
})