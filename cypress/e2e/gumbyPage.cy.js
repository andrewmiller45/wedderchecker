/// <reference types="cypress" />


describe('Home view', () => {
    beforeEach(() => {
      // cy.intercept('GET','api.openweathermap.org/data/2.5/forecast?lat=25.5788&lon=91.8933&appid=d58003e6ade0f906bde1fcfb2fe9449b&units=standard', {fixture: `recentData.json`}) //This link is dynamic and will change tomorrow.
      cy.visit('http://localhost:3000/gumby')
    })

    it('should display predictable text on page load', () => {
        cy.get('h1[class=new]').should('contain', 'New to Washington? Start here:')
    })

    it('should return user home', () => {
        cy.get('a[id=homeLink]').click()
        cy.url().should('include', '/')
    })

    it.skip('should link to external web pages on click', () => {
        cy.get('a[id=tester]').click()
        cy.url().should('eq', 'https://www.mountainproject.com/area/106288739/bouldering-in-icicle-creek')
        //cypress does not allow for external link testing in a single test, find a way to break this down as you refactor 
    })

    
})