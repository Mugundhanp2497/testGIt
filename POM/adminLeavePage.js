class adminLeavePage
{
    constructor(page)
    {
        this.page= page;
        this.btn_pending= this.page.locator('div').filter({ hasText: /^Pending$/ });
        this.slt_approve= this.page.getByRole('combobox').first();
    }

    async aproveLeave()
    {
        await this.btn_pending.click();
        await this.slt_approve.selectOption('Approved');
    }
}
module.exports= {adminLeavePage};