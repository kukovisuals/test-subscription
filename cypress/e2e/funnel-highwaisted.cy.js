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
/*
  dash-boxChoiceOption primeOpt custom #makeMyCustomBoxBtn
  .dash-boxChoiceOption.secOpt.curate.mx
  .dash-boxChoiceOption.secOpt.curate.ab
  .dash-boxChoiceOption.secOpt.curate.ahw
  .dash-boxChoiceOption.secOpt.curate.at
  .dash-boxChoiceOption.secOpt.curate.fc

  1. Each one should go to cart
  2. Every size should work if it has any 

 */

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

const boxType = '.dash-boxChoiceOption.secOpt.curate.ahw';

for(let index = 0; index < 8; index++){

  describe(`Subscription Funnel for ${boxType} size ${size[index]}`, () => {

    const subscriptionButton = '.membership-cols-2022 button.eby-membership-button.ebyMicroBtn';
    const cartIcon = '.eby-mobile-nav #hcw .cart-link.jsDrawerOpenRight';
    const sizes = 'ul.sizeOptListing > li.sortOpt.alt';
    const addToCart = '#ebyAddToCartPopupSaveBtn'
    // const naturlMixedColors = '#eby-subscriptionColor21';
    const naturlMixedColors = '#eby-subscriptionColor22';

    it(`Funnel works properly adding to cart at the end`, () => {
      cy.get(subscriptionButton).click()
      cy.wait(2000)
      cy.get(boxType).click()
      cy.wait(500)
      cy.get(sizes).then( el => {
        cy.wrap(el[index]).click();
      })

      switch(index){
        case 0:
        case 5:
        case 6:
        case 7:
            cy.wait(5000)
            cy.get(addToCart).click({ force: true })
            cy.wait(5000)
          break; 
        case 1:
        case 2:
        case 3:
        case 4:
            cy.wait(1000)
            cy.get(naturlMixedColors).click( { force: true })

            cy.wait(5000)
            cy.get(addToCart).click({ force: true })

            cy.wait(5000)
          break;   
        default:
          console.error('Size was not found')
          break;
      }

      // cy.scrollTo(0, 10);
      // cy.scrollTo(0, 0);
      // cy.get(cartIcon).click({ force: true });
      // cy.get(cartIcon).click();

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








