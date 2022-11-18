/* Testing titles and links */

const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  .its('0.contentDocument').should('exist');
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
}

const URL = 'pages/underwear-subscription-membership'

describe('Exit iframe', () => {

  const $el = '#btnMenuMobile';

  it('exit from iframe if any',() => {
    cy.visit(URL);
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
      // https://cdn.shopify.com/s/files/1/0313/4062/5964/files/logo-dark-22.svg?v=1666920606
  });
});

const pdpCustom = {
  0: ["button[data-prodid='5307437383724']","button[data-prodid='5307437383724']","button[data-prodid='5307437383724']"],
  1: ["button[data-prodid='6626687975468']","button[data-prodid='6626687975468']","button[data-prodid='6626687975468']"],
  2: ["button[data-prodid='5441467842604']","button[data-prodid='5441467842604']","button[data-prodid='5441467842604']"],
  3: ["button[data-prodid='5408843104300']","button[data-prodid='5408843104300']","button[data-prodid='5408843104300']"],
  4: ["button[data-prodid='6626687975468']","button[data-prodid='6626687975468']","button[data-prodid='6626687975468']"],
  5: ["button[data-prodid='5437827940396']","button[data-prodid='5437827940396']","button[data-prodid='5437827940396']"],
  6: ["button[data-prodid='6591639912492']","button[data-prodid='6591639912492']","button[data-prodid='6591639912492']"],
  7: ["button[data-prodid='5408843104300']","button[data-prodid='5408843104300']","button[data-prodid='5408843104300']"],
}


const size = {
  0:'XS',
  1:'S',
  2:'M',
  3:'L',
  4:'XL',
  5:'2X',
  6:'3X',
  7:'4X',
}

const boxType = '#makeMyCustomBoxBtn';

for(let index = 0; index < 8; index++){

  describe(`Subscription Funnel for ${boxType} size ${size[index]}`, () => {

    const subscriptionButton = '.membership-cols-2022 button.eby-membership-button.ebyMicroBtn';
    const cartIcon = '.eby-mobile-nav #hcw .cart-link.jsDrawerOpenRight';
    const sizes = 'ul.sizeOptListing > li.sortOpt.alt';
    const addToCart = '#ebyAddToCartPopupSaveBtn'

    it(`Funnel works properly adding to cart at the end`, () => {
      cy.get(subscriptionButton).click({ force: true })
      cy.wait(2000)
      cy.get(boxType).click({ force: true })
      cy.wait(1000)
      cy.get(sizes).then( el => {
        cy.wrap(el[index]).click();
      })

      cy.wait(3000)
      cy.get('#allPrefGroupChoicePanties ' + pdpCustom[index][0]).click( { force: true })
      cy.wait(5000)
      cy.get('#allPrefGroupChoicePanties ' + pdpCustom[index][1]).click( { force: true })
      cy.wait(1000)
      cy.get('#allPrefGroupChoicePanties ' + pdpCustom[index][2]).click( { force: true })
      cy.wait(1000)
      cy.get(addToCart).click({ force: true })
      cy.wait(5000)

    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('---------------------------------');
        console.log(err);
        console.log(runnable);
        console.log('---------------------------------');
        return false
    })
  });
}








