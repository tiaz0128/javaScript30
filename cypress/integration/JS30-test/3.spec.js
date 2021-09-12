const SPACE_VALUE = 150
const BLUR_VALUE  = 20
const BASE_VALUE  = '#FFFFFF'

function hex2rgb(baseValue){
  return baseValue.match(/[A-Z0-9]{2}/gi)?.map(hex => parseInt(hex, 16))
}

describe('03 - CSS Variables', () => {
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
    cy.get('#blur').should('have.attr', 'value').then((blurValue) => {
      cy.get('img').invoke('css', 'filter').then((filter) => {
        expect(filter).to.equal(`blur(${blurValue}px)`)
      })
    })
  })

  it.only('Base Color 와 같은 background-color 값을 가진다.', () => {
    cy.get('#base').should('have.attr', 'value').then((baseValue) => {
      cy.get('img').invoke('css', 'background-color').then((backgroundColor) => {
        const [R,G,B] = hex2rgb(baseValue)
        expect(backgroundColor).to.equal(`rgb(${R}, ${G}, ${B})`)
      })
    })
  })

  it('Spacing-input 에 입력된 값만큼 이미지의 padding 값을 가진다.', () => {
    cy.get('#spacing').invoke('val', SPACE_VALUE).trigger('change')
    cy.get('img').invoke('css', 'padding').should('eq', `${SPACE_VALUE}px`)  
  })

  it('Blur-input 에 입력된 값만큼 이미지의 filter 값을 가진다.', () => {
    cy.get('#blur').invoke('val', BLUR_VALUE).trigger('change')
    cy.get('img').invoke('css', 'filter').should('eq', `blur(${BLUR_VALUE}px)`)  
  })

  it('Base-input 에 입력된 RGB 색상값으로 이미지의 background-color 값을 가진다.', () => {
    cy.get('#base').invoke('val', BASE_VALUE).trigger('change')
    const [R,G,B] = hex2rgb(BASE_VALUE)
    cy.get('img').invoke('css', 'background-color').should('eq', `rgb(${R}, ${G}, ${B})`)  
  })
})