/// <reference types="Cypress" />

describe('Website Tests', () => {
    beforeEach(() => {
      // Visit the website before each test
      cy.visit('https://butopea.com');
    });
  
    it('should load the website and check for certain elements', () => {
      // Check if the website loads successfully
      cy.url().should('eq', 'https://butopea.com/');
  
      // Interact with certain elements (assuming they exist on the website)
      cy.get('.navbar-toggler').click(); // Click the navbar toggler
  
      // Check for the existence of certain elements
      cy.get('.nav-link').should('exist'); // Check if nav-links exist
  
      // Extract data from the page and log it
      cy.get('.product-title').then(($products) => {
        // Extract product titles and log them
        const productTitles = $products.map((index, el) => Cypress.$(el).text()).get();
        cy.log('Product Titles:', productTitles);
      });
  
      cy.get('.product-price').then(($prices) => {
        // Extract product prices and log them
        const productPrices = $prices.map((index, el) => Cypress.$(el).text()).get();
        cy.log('Product Prices:', productPrices);
      });
    });
  });