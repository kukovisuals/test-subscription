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

const boxType = '.dash-boxChoiceOption.secOpt.curate.at';


for(let index = 3; index < 5; index++){

  describe(`Subscription Funnel for Thongs size ${size[index]} only Natural Colors`, () => {

    const subscriptionButton = '.membership-cols-2022 button.eby-membership-button.ebyMicroBtn';
    const cartIcon = '.eby-mobile-nav #hcw .cart-link.jsDrawerOpenRight';
    const sizes = 'ul.sizeOptListing > li.sortOpt.alt';
    const addToCart = '#ebyAddToCartPopupSaveBtn'

    const naturalColors = 'label[for="only-neutrals"].sadOptLabel';

    it(`Funnel works properly adding to cart at the end`, () => {
      cy.get(subscriptionButton).click({ force: true })
      cy.wait(2000)
      cy.get(boxType).click()
      cy.wait(500)
      cy.get(sizes).then( el => {
        cy.wrap(el[index]).click();
      })

      cy.wait(1000)
      cy.get(naturalColors).click( { force: true })

      cy.wait(5000)
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






