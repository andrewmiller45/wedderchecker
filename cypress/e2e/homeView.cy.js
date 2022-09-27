/// <reference types="cypress" />


describe('Home view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays the main page with a consistent phrasing' , () => {
      cy.contains('h1', 'Wedder')
  })

  it('should render weather data on user click', () => {
    cy.get('[id=zone]')
      .select('Levy')
      .get('button').click()
          
    cy.intercept('https://api.openweathermap.org/data/2.5/forecast?lat=47.542&lon=-120.728&appid=d58003e6ade0f906bde1fcfb2fe9449b&units=standard', {fixture: `weather`})
    //this fetch data is dynamic and will likely change, hoping this will not fail later.
      .get('.card').eq(0).contains('2022-09-28 00:00:00')
      .get('.card').eq(0).contains('clear sky')
  })

  it('should display area information on zone click', () => {
    cy.get('[id=zone]')
      .select('Lost Ledge')
      .get('button').click()
      .get('div[class=area-details]').contains( 'This zone is comprised of some of the best bouldering in the Bellingham area. There are dozens of problems on Chuckanut Sandstone, with more being developed all the time. Much of the rock in the area is sandstone so, please do NOT climb when wet! Allow 2-3 days after the last rain before climbing. Just because the road is dry does not mean the boulders are. The boulders are nestled in the trees, and the area is quite aesthetic, as is the approach. Please note that you\'ll need a Discover Pass to park at the trailhead.')
  })

  it('should take user to gumby page on button click', () => {
    cy.get('a[id=gumby]').click()
    cy.url().should('include', '/gumby')
  })

  it('should display an error message if a bad url is passed', () => {
    cy.visit('http://localhost:3000/andrewisbald')
    cy.get('h3').should('contain', 'Error 404: Sorry, that page that doesn\'t exist.')
  })
})

