const { chromium } = require("@playwright/test");
const config= require('../config.json')
const {loginPage} = require('../POM/loginPage');

module.exports=async ()=>{
    const browser= await chromium.launch({headless:true,args: ['--start-maximized']});
    {
    const context= await browser.newContext({viewport: null,});
    const page= await context.newPage();
    //await page.evaluate(()=>{document.body.style.zoom='80%';});
    let employeeconfig= config['Admin'];
    let url= employeeconfig.baseUrl;
    let username= employeeconfig.userName;
    let password= employeeconfig.passWord;
    await page.goto(url);
    let LoginPage= new loginPage(page);
    await LoginPage.loginWithValidCredentials(username,password);
    await page.context().storageState({path:'admin.json'});
    await context.close();
    }
    {
    const context= await browser.newContext({viewport: null,});
    const page= await context.newPage();
    //await page.evaluate(()=>{document.body.style.zoom='80%';});
    let employeeconfig= config['Employee'];
    let url= employeeconfig.baseUrl;
    let username= employeeconfig.userName;
    let password= employeeconfig.passWord;
    await page.goto(url);
    let LoginPage= new loginPage(page);
    await LoginPage.loginWithValidCredentials(username,password);
    await page.context().storageState({path:'employee.json'});
    await context.close();
    }
    await browser.close();
}