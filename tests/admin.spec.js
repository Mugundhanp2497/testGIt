import { test, expect } from '@playwright/test';
const {loginPage} = require('../POM/loginPage');
const {userPage}= require('../POM/userPage');
const {mailPage}= require('../POM/mailPage');
const {adminLeavePage}= require('../POM/adminLeavePage');
const {adminTimesheet}= require('../POM/adminTimesheet');

test.beforeEach('login',async({page})=>
{
await page.goto('/#/employer/dashboard');
await page.evaluate(()=>{document.body.style.zoom='80%';});
});


test('01. Create USer @p1',async({page})=>
{
    let LoginPage= new loginPage(page);
    const UserPage= new userPage(page);
    await LoginPage.navUser();
    await UserPage.saveUSer();
    await page.waitForTimeout(5000);
});

test('02. get Username and password @p2',async({page})=>
{
   await page.goto('https://www.mailinator.com/v4/public/inboxes.jsp');
   let MailPage= new mailPage(page);
   await MailPage.getCredentials();

});

test('04. approve the request @p4', async({page})=>
{
    let LoginPage= new loginPage(page);
    await LoginPage.navAdminTimesheet();
    const AdminTimesheet= new adminTimesheet(page);
    const AdminLeavePage= new adminLeavePage(page);
    await AdminTimesheet.approveTimesheet();
    await LoginPage.navadminLeaves();
    await AdminLeavePage.aproveLeave();

});