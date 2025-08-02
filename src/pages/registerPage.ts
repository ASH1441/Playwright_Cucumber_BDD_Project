import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

export default class RegisterPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
    registerLink: this.page.locator('#reglink'),
    usernameInput: this.page.locator('#register-username'),
    passwordInput: this.page.locator('#register-pw'),
    repeatPasswordInput: this.page.locator('#register-pwrep'),
    roleSelect: this.page.locator('#register-role'),
    checkBox: this.page.locator('#register-check'),
    registerButton: this.page.locator('//div[1]/div/form/div[5]/input'),
    confirmmessage: this.page.locator('//*[@id="register-overlay"]/div/h2'),
    errormessage: this.page.locator('//div/form/div[3]/div/span1')

    }

    async navigateToRegisterPage() {
        await this.base.goto("http://10.40.226.38/Coffeeshop/register.php")
    }

    async fillForm(username: string, password: string, repeatPassword: string) {
    try {
        fixture.logger.info("User filling the Registration Form");
        await this.Elements.usernameInput.fill(username); 
        await this.Elements.passwordInput.fill(password);
        await this.Elements.passwordInput.fill(repeatPassword);
        //await this.Elements.checkBox.click();
        await this.Elements.registerButton.click();
        fixture.logger.info("Registration Button clicked by the User: "+username);
        }catch(error)
        {
        fixture.logger.error("Error on filling the Registration Form: "+ error);
        throw error;
        }
    }

    async confirmMessage() {
    try {
    await this.Elements.confirmmessage.isVisible();
    fixture.logger.warn("Confirmation message of successful registration received by the User.");
    }catch(error)
        {
        fixture.logger.error("Error on confirmation message of successful registration: "+ error);
        throw error;
    }
    }
    
    async errorMessage() {
    try {
    await this.Elements.confirmmessage.isVisible();
    fixture.logger.warn("Error message Received.Either Username or Password in incorrect. ");

    }catch(error)
        {
        fixture.logger.error("Error Received: "+ error);
        throw error;
    }
}

}

