import { test, expect } from '@playwright/test';
class timesheetPage
{
    constructor(page)
    {
        this.page=page;
        this.btn_addEntry= this.page.getByRole('button',{name:'+ Add Entry'});
        this.txt_date= this.page.locator('#addDatePicker');
        this.slt_project= this.page.locator("//select[@name='project']").last();
        this.txt_task= this.page.locator("//input[@name='task']");
        this.txt_duration= this.page.locator("//input[@name='duration']");
        this.txt_remark= this.page.locator("//textarea[@name='remarks']");
        this.btn_add= this.page.getByRole('button',{name:'Add',exact:true});
        this.icn_edit= this.page.getByRole('row', { name: '20-08-2025 Coding Test Task' }).locator('path').first();
        this.btn_save= this.page.getByRole('button',{name:'Save',exact:true});
        this.icn_delete= this.page.getByRole('row', { name: '20-08-2025 Coding Test Task' }).locator('path').nth(1);
        this.btn_exportPdf= this.page.getByRole('button', { name: 'Export PDF' });
        this.btn_exportXl=this.page.getByRole('button', { name: 'Export Excel' });

    }

    async addTimesheet()
    {
        await this.btn_addEntry.click();
        await this.txt_date.fill(new Date().toISOString().slice(0, 10));
        await this.slt_project.selectOption({index:1});
        await this.txt_task.fill('Test Task');
        await this.txt_duration.fill('Test Duration');
        await this.txt_remark.fill('Test Remarks');
        await this.btn_add.click();
        await expect(this.btn_addEntry).toBeEnabled();
        await this.icn_edit.click();
        await this.txt_remark.fill('Test Remarks edited');
        await this.btn_save.click();
        await this.btn_exportPdf.click();
        await this.btn_exportXl.click();

    }
}
module.exports={timesheetPage}