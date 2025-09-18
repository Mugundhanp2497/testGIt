class leaveTestPage
{
    constructor(page)
    {
        this.page= page;
        this.btn_requestLeave= this.page.getByRole('link', { name: 'Request Leave' });
        this.rdo_cl= this.page.getByRole('radio', { name: 'Casual Leave (CLR)' });
        this.lnk_leaveDetails= this.page.getByRole('heading', { name: 'Casual Leave –' });
        this.txt_from= this.page.getByRole('textbox', { name: 'From' });
        this.txt_to= this.page.getByRole('textbox', { name: 'To' });
        this.txt_leaveTotal= this.page.getByText('Leave Details−FromToNo of');
        this.rdo_fullDay= this.page.locator("//input[@value='Full Day']");
        this.txt_reason= this.page.locator('#reasons');
        this.txt_comment= this.page.locator("//textarea[@id='comments']");
        this.btn_applyLeave= this.page.getByRole('button', { name: 'Apply Leave' });
        this.icn_edit= this.page.locator('#ed').getByRole('img').first();

    }

    async addLeaveRequest()
    {
        await this.btn_requestLeave.click();
        await this.rdo_cl.click();
        await this.lnk_leaveDetails.click();
        await this.txt_from.fill(new Date().toISOString().slice(0, 10));
        await this.txt_to.fill(new Date().toISOString().slice(0, 10));
        let leaveTotal= await this.txt_leaveTotal.textContent();
        await this.rdo_fullDay.click();
        await this.txt_reason.fill('personal visit');
        await this.txt_comment.fill('Kindly consider my request');
        await this.btn_applyLeave.click();
        await this.icn_edit.click();
        await this.txt_reason.fill('personal visit edited');
        await this.btn_applyLeave.click();

    }
}
module.exports = leaveTestPage;