const { test, expect }= require('@playwright/test');
const {loginPage} = require('../POM/loginPage');
const {timesheetPage}= require('../POM/timesheetPage');
const leavePage= require('../POM/leaveTestPage');



test.beforeEach('login',async({page})=>
{
await page.goto('/#/employee/dashboard');
await page.evaluate(()=>{document.body.style.zoom='90%';});
});

test('03. Employee transactions @p3',async({page})=>
{
let LoginPage= new loginPage(page);
let TimesheetPage= new timesheetPage(page);
let LeavePage= new leavePage(page);
await LoginPage.navDashboard();
await LoginPage.navProject();
await LoginPage.navTimesheet();
await TimesheetPage.addTimesheet();
await LoginPage.navLeave();
await LeavePage.addLeaveRequest();
await LoginPage.navTeam();
await LoginPage.navSettings();
await LoginPage.logout();


});