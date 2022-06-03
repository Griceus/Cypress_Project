export class LoginPage {

    loginPage_email = '[data-cy="login-email"] > .vs-component > .vs-con-input > .vs-inputx'
    loginPage_pass = '.vx-input-group-default > .vs-component > .vs-con-input > .vs-inputx'
    loginPage_loginButton = '[data-cy="login-btn-login"]'

    navigate(url : string){
        cy.visit(url)
    }

    enterEmail(email : string){
        cy.get(this.loginPage_email).type(email)
    }

    enterPassword(pass : string){
        cy.get(this.loginPage_pass).type(pass)
    }

    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
}