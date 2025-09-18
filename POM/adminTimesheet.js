class adminTimesheet
{
    constructor(page)
    {
        this.page=page;
        this.chk_approve= this.page.locator("(//span)[11]");
        this.btn_submit= this.page.getByRole('button',{name:'Submit'});
    }

    async approveTimesheet()
    {
        await this.chk_approve.click();
        await this.btn_submit.click();
    }
}
module.exports= {adminTimesheet};