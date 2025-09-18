class mailPage
{
    constructor(page)
    {
        this.page=page;
        this.txt_mail= this.page.locator("//input[@id='inbox_field']");
        this.btn_go= this.page.locator("//button[@class='primary-btn']");
        this.tr_firstEmail= this.page.locator("//tbody/tr").nth(1);
        this.txt_empId= this.page.locator('iframe[name="html_msg_body"]').contentFrame().locator('(//div/p)[3]');
        this.txt_pass= this.page.locator('iframe[name="html_msg_body"]').contentFrame().locator('(//div/p)[4]');
   
    }
    async getCredentials()
    {
        await this.txt_mail.fill('mytestuser123@mailinator.com');
        await this.btn_go.click();
        await this.tr_firstEmail.click();
        let user= (await this.txt_empId.textContent()).split(':')[1].trim();
        let pass= (await this.txt_pass.textContent()).split(':')[1].trim(); 
        return (user,pass);
    }
}
module.exports= {mailPage};