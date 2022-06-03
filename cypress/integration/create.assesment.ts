/// <reference types="cypress" />

import {LoginPage} from "../pages/login_page"
import {DashboardPage} from "../pages/dashboard_page"
import {ModalAddEmployeePage} from "../pages/modaladdemployee_page"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const MADPage = new ModalAddEmployeePage()

it('Create Assessment', function () {

    //login
    loginPage.navigate('https://dev-company.profesi.io/auth/login')
    loginPage.enterEmail('recruitmentqaprofesi@yopmail.com')
    loginPage.enterPassword('Qapr0fes1')
    loginPage.clickLogin()

    cy.wait(2000)

    //dashboard
    dashboardPage.clickAddAsesmen()
    dashboardPage.enterTitle('Testing Cypress ' + Date)
    dashboardPage.enterSDate()
    dashboardPage.enterEDate()
    dashboardPage.clickEmployee()

    cy.wait(1000)

    //ModalEmployee
    MADPage.clickHead()
    MADPage.SelectEmployeeHead()
    MADPage.clickTeam()
    MADPage.SelectEmployeeTeam()
    MADPage.clickBobot()
    MADPage.enterBobotHead('45')
    MADPage.enterBobotTeam('35')
    MADPage.enterBobotSup('0')
    MADPage.clickAddButton()

    //publish
    cy.wait(1000)
    dashboardPage.clickPublish()
    cy.wait(500)
    dashboardPage.clickdialogYes()
})