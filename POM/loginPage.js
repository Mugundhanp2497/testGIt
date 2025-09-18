import { test, expect } from '@playwright/test';
class loginPage
{
    constructor(page)
    {
        this.page=page;
        this.txt_userName= this.page.locator("//input[@id='empId']");
        this.txt_password= this.page.locator("//input[@id='password']");
        this.btn_login= this.page.locator("//button[@id='log-but']");
        this.lnk_dashboard= this.page.locator("//span[text()='Dashboard']");
        this.lnk_project= this.page.locator("//span[text()='Project']");
        this.lnk_timesheet= this.page.locator("//span[text()='Timesheet']");
        this.lnk_leave= this.page.getByRole('link', { name: 'Leave' });
        this.lnk_team= this.page.getByRole('link', { name: 'Team' });
        this.lnk_settings= this.page.getByRole('link', { name: 'Settings' });
        this.lnk_logout= this.page.getByRole('link', { name: 'Logout' });
        this.lnk_user= this.page.getByRole('link', { name: 'User' });
        this.lnk_adminTimesheet= this.page.getByRole('link', {name:'Time-Sheet'});
        this.lnk_adminleaves= this.page.getByRole('link', {name:'Our Leaves'});
    }

    async loginWithValidCredentials(username,password)
    {
        await this.txt_userName.fill(username);
        await this.txt_password.fill(password);
        await this.btn_login.click();
        await expect(this.lnk_dashboard).toBeVisible({timeout:90000});

    }
    async navDashboard()
    {
        expect(this.lnk_dashboard).toBeVisible();
        await this.lnk_dashboard.click();
    }
    async navProject()
    {
        expect(this.lnk_project).toBeVisible();
        await this.lnk_project.click();
    }
    async navTimesheet()
    {
        expect(this.lnk_timesheet).toBeVisible();
        await this.lnk_timesheet.click();
    }
    async navLeave()
    {
        expect(this.lnk_leave).toBeVisible();
        await this.lnk_leave.click();   
    }

    async navTeam()
    {
        expect(this.lnk_team).toBeVisible();
        await this.lnk_team.click();
    }
    async navSettings()
    {
        expect(this.lnk_settings).toBeVisible();
        await this.lnk_settings.click();
    }
    async logout()
    {
        expect(this.lnk_logout).toBeVisible();
        await this.lnk_logout.click();
    }
    async navUser()
    {
        expect(this.lnk_user).toBeVisible();
        await this.lnk_user.click();
    }
    async navAdminTimesheet()
    {
        expect(this.lnk_adminTimesheet).toBeVisible();
        await this.lnk_adminTimesheet.click();
    }
    async navadminLeaves()
    {
        expect(this.lnk_adminleaves).toBeVisible();
        await this.lnk_adminleaves.click();
    }
}
module.exports= {loginPage}