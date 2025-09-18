class userPage
{
    constructor(page)
    {
  this.page=page;
  this.btn_addEmployee= this.page.getByRole('button', { name: 'Add Employee' });
  this.file_profilePic= this.page.locator('input[name="profilePicFile"]');
  this.txt_userName= this.page.getByRole('textbox', { name: 'Enter Employee Name' });
  this.txt_Designation= this.page.getByRole('textbox', { name: 'Enter Designation' });
  this.txt_department= this.page.getByRole('textbox', { name: 'Enter Department' });
  this.txt_DOJ= this.page.locator('input[name="dateOfJoining"]');
  this.txt_location= this.page.getByRole('textbox', { name: 'Enter Work Location' });
  this.txt_fullName= this.page.getByRole('textbox', { name: 'Enter Full Name' });
  this.txt_DOB= this.page.locator('input[name="dateOfBirth"]');
  this.txt_email= this.page.getByRole('textbox', { name: 'Enter Email' });
  this.txt_contactNo= this.page.locator('input[name="contactNumber"]');
  this.txt_address= this.page.getByRole('textbox', { name: 'Enter Address' });
  this.slt_gender= this.page.locator('select[name="gender"]');
  this.slt_blooadGrp= this.page.locator('select[name="bloodGroup"]');
  this.slt_mrtStatus= this. page.locator('select[name="maritalStatus"]');
  this.txt_nation= this.page.getByRole('textbox', { name: 'Enter Nationality' });
  this.txt_religion= this.page.getByRole('textbox', { name: 'Enter Religion' });
  this.txt_fatherName= this.page.getByRole('textbox', { name: 'Enter Father\'s Name' });
  this.txt_motherName= this.page.getByRole('textbox', { name: 'Enter Mother\'s Name' });
  this.txt_contactName= this.page.getByRole('textbox', { name: 'Enter Contact Name' });
  this.txt_contactRelation= this.page.getByRole('textbox', { name: 'Enter Relation' });
  this.txt_emergencyContactNo= this.page.locator('input[name="emergencyContactNumber"]');
  this.txt_aadharNo= this.page.getByRole('textbox', { name: 'Enter Aadhar Number' });
  this.txt_panNo= this.page.getByRole('textbox', { name: 'Enter PAN Number' });
  this.txt_passportNo= this.page.getByRole('textbox', { name: 'Enter Passport Number' });
  this.txt_licenseNo= this.page.getByRole('textbox', { name: 'Enter Driving License Number' });
  this.txt_schoolName= this.page.getByRole('textbox', { name: 'Enter school/college name' });
  this.txt_degreeName= this.page.getByRole('textbox', { name: 'Enter degree' });
  this.txt_YOP= this.page.getByRole('textbox', { name: 'Enter year of passing' });
  this.txt_fieldOfStudy= this.page.getByRole('textbox', { name: 'Enter field of study' });
  this.txt_cgpa= this.page.getByRole('textbox', { name: 'Enter percentage/cgpa' });
  this.slt_docProof= this.page.locator("//select[@name='documentProof']");
  this.file_educationDetails= this.page.locator('form div').filter({ hasText: 'Education DetailsSchool/' }).locator('input[type="file"]');
  this.txt_bankName= this.page.getByRole('textbox', { name: 'Enter Bank Name' });
  this.txt_accountName= this.page.getByRole('textbox', { name: 'Enter Account Name' });
  this.txt_accountNo= this.page.getByRole('textbox', { name: 'Enter Account Number' });
  this.txt_branch= this.page.getByRole('textbox', { name: 'Enter Branch Name' });
  this.txt_pfNo= this.page.getByRole('textbox', { name: 'Enter PF Number' });
  this.txt_ifscCode= this.page.getByRole('textbox', { name: 'Enter IFSC Code' });
  this.txt_uanNo= this.page.getByRole('textbox', { name: 'Enter UAN Number' });
  this.txt_companyName= this.page.getByRole('textbox', { name: 'Enter Company Name' });
  this.txt_position= this.page.getByRole('textbox', { name: 'Enter Position' });
  this.slt_typeOfWork= this.page.locator('div').filter({ hasText: /^Type of workSelectFull-timePart-timeContractInternship$/ }).getByRole('combobox');
  this.txt_duration= this.page.getByRole('textbox', { name: 'Enter Duration (e.g. 2 years)' });
  this.dt_startDate= this.page.locator('div').filter({ hasText: /^Start Date$/ }).getByRole('textbox');
  this.dt_endDate= this.page.locator('div').filter({ hasText: /^End Date$/ }).getByRole('textbox');
  this.txt_location= this.page.getByRole('textbox', { name: 'Enter Location' });
  this.file_expLetter= this.page.locator('div').filter({ hasText: /^Experience Letter$/ }).getByRole('button');
  this.file_payslip= this.page.locator('div').filter({ hasText: /^PayslipUpload payslips for at least 3 months$/ }).getByRole('button');
  this.file_aadhar= this.page.locator('input[name="documents.aadharFile"]');
  this.file_pan= this.page.locator('input[name="documents.panFile"]');
  this.file_passport= this.page.locator('input[name="documents.passportFile"]');
  this.file_license= this.page.locator('input[name="documents.drivingLicenseFile"]');
  this.btn_addEmploye= this.page.locator('form').getByRole('button', { name: 'Add Employee' });

    }
    async saveUSer()
    {
  await this.btn_addEmployee.click();
  //await this.file_profilePic.setInputFiles('./resource/Timesheet_Mugundhan.pdf');
  await this.txt_userName.fill('Test user');
  await this.txt_Designation.fill('Test Designation');
  await this.txt_department.fill('Test Department');
  await this.txt_DOJ.fill('2025-08-02');
  await this.txt_location.fill('Test Location');
  await this.txt_fullName.fill('Test User');
  await this.txt_DOB.fill('2012-12-12');
  await this.txt_email.fill('mytestuser123@mailinator.com');
  await this.txt_contactNo.fill('9876543210');
  await this.txt_address.fill('test address');
  await this.slt_gender.selectOption('Male');
  await this.slt_blooadGrp.selectOption('O+');
  await this.slt_mrtStatus.selectOption('Single');
  await this.txt_nation.fill('Indian');
  await this.txt_religion.fill('Test Religion');
  await this.txt_fatherName.fill('Test Father');
  await this.txt_motherName.fill('Test Mother');
  await this.txt_contactName.fill('test name');
  await this.txt_contactRelation.fill('Test Relation');
  await this.txt_emergencyContactNo.fill('7654321890');
  await this.txt_aadharNo.fill('6636356236521');
  await this.txt_panNo.fill('FFGG25412');
  await this.txt_passportNo.fill('78727323713123');
  await this.txt_licenseNo.fill('8732642f2872');
  await this.txt_schoolName.fill('Test School');
  await this.txt_degreeName.fill('Test Degree');
  await this.txt_YOP.fill('2015');
  await this.txt_fieldOfStudy.fill('Test Field');
  await this.txt_cgpa.fill('88');
  await this.slt_docProof.selectOption('12th Certificate');
  await this.file_educationDetails.setInputFiles('./resource/Timesheet_Mugundhan.pdf');
   await this.slt_docProof.selectOption('12th Certificate');
  await this.txt_bankName.fill('Test Bank');
  await this.txt_accountName.fill('Test account');
  await this.txt_accountNo.fill('27864287941');
  await this.txt_branch.fill('Test Branch');
  await this.txt_pfNo.fill('87327293122');
  await this.txt_ifscCode.fill('testIFSC001');
  await this.txt_uanNo.fill('871648725184');
  await this.txt_companyName.fill('test company');
  await this.txt_position.fill('test position');
  await this.slt_typeOfWork.selectOption('Full-time');
  await this.txt_duration.fill('221');
  await this.dt_startDate.fill('2017-12-12');
  await this.dt_endDate.fill('2019-12-12');
  await this.txt_location.fill('Test Location');
  await this.file_expLetter.setInputFiles('./resource/Timesheet_Mugundhan.pdf');
  await this.file_payslip.setInputFiles('./resource/Timesheet_Mugundhan.pdf');
  await this.file_aadhar.setInputFiles('./resource/Timesheet_Mugundhan.pdf');
  await this.file_pan.setInputFiles('./resource/Timesheet_Mugundhan.pdf');
  await this.file_passport.setInputFiles('./resource/Timesheet_Mugundhan.pdf');
  await this.file_license.setInputFiles('./resource/Timesheet_Mugundhan.pdf');
  await this.btn_addEmploye.click();


    }
}
module.exports={userPage};
