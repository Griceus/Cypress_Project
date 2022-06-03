export class DashboardPage {

    dashboard_AddAsesmen = '[data-cy="side-nav-assessment-create"]'
    dashboard_TitleAsesmen = ':nth-child(1) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx'
    dashboard_StartDate = '//*[@id="content-area"]/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div/form/div/div[1]/div[2]/div[1]/div/div/div[1]/input'
    dashboard_SDateSelect = '//*[@id="content-area"]/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div/form/div/div[1]/div[2]/div[1]/div/div/div[2]/div/span[20]'
    dashboard_EndDate = '//*[@id="content-area"]/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div/form/div/div[1]/div[2]/div[2]/div/div/div[1]/input'
    dashboard_EDateSelect = '//*[@id="content-area"]/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div/form/div/div[1]/div[2]/div[2]/div/div/div[2]/div/span[27]'
    dashboard_ToggSelfAses = ':nth-child(1) > :nth-child(2) > :nth-child(1) > .assm-checkbox > :nth-child(2) > .vs-component > .input-switch'
    dashboard_ToggComment = ':nth-child(2) > :nth-child(2) > .vx-row > .assm-checkbox > :nth-child(2) > .vs-component > .input-switch'
    dashboard_ToggScoring = ':nth-child(3) > .vx-row > .assm-checkbox > :nth-child(2) > .vs-component > .input-switch'
    dashboard_SearchBox = '.mt-4 > .col-select > .search > .vs-component > .vs-con-input > .vs-inputx'
    dashboard_AddEmployee = '[style="transform: translateY(0px);"] > .item > :nth-child(2) > [data-cy="btn"]'
    dashboard_buttonPublish = '//*[@id="content-area"]/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div/form/div/div[4]/button[2]'
    dashboard_dialogYes = '/html/body/div[1]/div[2]/footer/button[1]'
    dashboard_dialogNo = '/html/body/div[1]/div[2]/footer/button[2]'

    clickAddAsesmen(){
        cy.get(this.dashboard_AddAsesmen).click()
    }

    enterTitle(title : string){
        cy.get(this.dashboard_TitleAsesmen).type(title)
    }

    enterSDate(){
        cy.xpath(this.dashboard_StartDate).click()
        cy.xpath(this.dashboard_SDateSelect).click()
    }

    enterEDate(){
        cy.xpath(this.dashboard_EndDate).click()
        cy.xpath(this.dashboard_EDateSelect).click()
    }

    clickEmployee(){
        cy.get(this.dashboard_AddEmployee).click()
    }

    clickPublish(){
        cy.xpath(this.dashboard_buttonPublish).click()
    }

    clickdialogYes(){
        cy.xpath(this.dashboard_dialogYes).click()
    }

    clickdialogNo(){
        cy.xpath(this.dashboard_dialogNo).click()
    }
}