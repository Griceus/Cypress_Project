export class ModalAddEmployeePage {

    mad_Head = '/html/body/div[1]/div[2]/div/div/div[2]/div[3]/div/div[1]/header/div'
    mad_Team = '/html/body/div[1]/div[2]/div/div/div[2]/div[3]/div/div[2]/header/div'
    mad_Sup = '/html/body/div[1]/div[2]/div/div/div[2]/div[3]/div/div[3]/header/div'
    mad_AddEmployeeNameHead = '/html/body/div[1]/div[2]/div/div/div[2]/div[3]/div/div[1]/div/div/div/div[2]/ul/div/div[1]/div[1]/li/div/div[1]/div'
    mad_AddEmployeeNameTeam = '/html/body/div[1]/div[2]/div/div/div[2]/div[3]/div/div[2]/div/div/div/div[2]/ul/div/div[1]/div[3]/li/div/div[1]/div'
    mad_AddEmployeeNameSup = '/html/body/div[1]/div[2]/div/div/div[2]/div[3]/div/div[3]/div/div/div/div[2]/ul/div/div[1]/div[4]/li/div/div[1]'
    mad_SearchBoxHead = '.open-item > .vs-collapse-item--content > .con-content--item > .vx-row > .search > .vs-component > .vs-con-input > .vs-inputx'
    mad_BobotAsesor = '/html/body/div[1]/div[2]/div/div/div[4]/div[3]/div/div[1]/header/div'
    mad_BobotKompetensi = '/html/body/div[1]/div[2]/div/div/div[4]/div[3]/div/div[2]/header/div'
    mad_BobotHead = '/html/body/div[1]/div[2]/div/div/div[4]/div[3]/div/div[1]/div/div/ul/li[1]/div/div[2]/div/div/input'
    mad_BobotSelf = '/html/body/div[1]/div[2]/div/div/div[4]/div[3]/div/div[1]/div/div/ul/li[2]/div/div[2]/div/div/input'
    mad_BobotTeam = '/html/body/div[1]/div[2]/div/div/div[4]/div[3]/div/div[1]/div/div/ul/li[3]/div/div[2]/div/div/input'
    mad_BobotSup = '/html/body/div[1]/div[2]/div/div/div[4]/div[3]/div/div[1]/div/div/ul/li[4]/div/div[2]/div/div/input'
    mad_AddButton = '/html/body/div[1]/div[2]/div/div/div[5]/button[2]'
    
    clickHead(){
        cy.xpath(this.mad_Head).click()
    }

    clickTeam(){
        cy.xpath(this.mad_Team).click()
    }

    clickSup(){
        cy.xpath(this.mad_Sup).click()
    }

    SelectEmployeeHead(){
        cy.xpath(this.mad_AddEmployeeNameHead).click()
    }

    SelectEmployeeTeam(){
        cy.xpath(this.mad_AddEmployeeNameTeam).click()
    }

    SelectEmployeeSup(){
        cy.xpath(this.mad_AddEmployeeNameSup).click()
    }

    clickBobot(){
        cy.xpath(this.mad_BobotAsesor).click()
    }

    enterBobotHead(bobotHead : string){
        cy.xpath(this.mad_BobotHead).clear()
        cy.xpath(this.mad_BobotHead).type(bobotHead)
    }

    enterBobotSelf(bobotSelf: string){
        cy.xpath(this.mad_BobotSelf).clear()
        cy.xpath(this.mad_BobotSelf).type(bobotSelf)
    }

    enterBobotTeam(bobotTeam: string){
        cy.xpath(this.mad_BobotTeam).clear()
        cy.xpath(this.mad_BobotTeam).type(bobotTeam)
    }

    enterBobotSup(bobotSup: string){
        cy.xpath(this.mad_BobotSup).clear()
        cy.xpath(this.mad_BobotSup).type(bobotSup)
    }

    clickAddButton(){
        cy.xpath(this.mad_AddButton).click()
    }
}