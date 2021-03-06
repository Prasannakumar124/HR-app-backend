const mongoose = require('mongoose');
	var education=mongoose.Schema(
	{ 
		qualification:String,
		from:Number,
		to:Number,
		institute:String,
		remarks:String
	});
	var SeparatedEmployee=mongoose.Schema(
		{
			"EmployeeNo": String,
			"ResignationSubmittedOn":String,
			"ReasonForLeaving":{type:String,required: true},
			"NoticePeriod":Number,
			"TentativeLeavingDate":String,
			 "Remarks" :String,
			//Exit details
			"InterviewDate":String,
			"Notes":String,
			"LeavingDate":String,
			"SettledOn":String,
			  "Employee has left organization":Boolean,
			 "Notice Served":Boolean,
			 "Fit to be rehired":Boolean
			 });
	var Address=mongoose.Schema(
	{
		Name:String,
		Address:String,
		City:String,
		State:String,
		Country:String,
		Pin:Number,
		Phone1:Number,
		Phone2:Number,
		Ext:Number,
		Fax:Number, 
		Mobile:Number,
		Email:String
	});
	
	var backgroundcheck=mongoose.Schema(
	{
		VerificationStatus:String,
		VerificationCompletedon:String,
		AgencyName:String,
		remarks:String
		
	})
	var remarks=mongoose.Schema(
	{
		remarks:String
	})

	var  basicinfoSchema=mongoose.Schema(
	{
		//basic info
		//_id:String,
		EmployeeNumberSeries:{type:String,require:true},
		ProfileImg:{ data: Buffer, contentType: String },
		EmployeeNo:{type:String,require:true},
		Name:{type:String,require:true},
		DateOfBirth:String,
		Gender:{type:String,require:true},
		ReportingManager:String,
		Status:String,
		CompanyStatus:String,
		DateOfJoining:{type:String,require:true},
		ProbationPeriod:Number,
		//Extend probition period
		ReasonforExtension:String,
		ConfirmationDate:String,
		Note:String,
		Email:String,
		MobileNumber:Number,
		EmergencyContactName:String,
		EmergencyContactNumber:Number,
		FatherName:String,
		SpouseName:String,
		//category
		Designation:String,
		Department:String,
		Grade:String,  
		Location:String,
		Attendance:String,
		//PF ESI
		PANnumber:String,
		PFNumber:String,
		UANnumber:Number,
		ESInumber:String,
		LWF:Boolean,
		// Payment
		Salary:String,
		BankName:String,
		BankBranch:String,
		BankAccountNo:Number,
		IFSCode:String,
		AccountType:String,
		PaymentType:String,
		NameAsPerBankRecords:String,
		//personal information
		Birthday:String,
		BloodGroup:String,
		MaritialStatus:String,
		MarriageDate:String,
		ResidentialStatus:String,
		PlaceOfBirth:String,
		CountryOfOrigin:String,
		Religion:String,
		PersonalEmail:String,
		//EMPLOYEE IDENTITY
		DocumentType:String,
		AadhaarNumber:Number,
		NameInAadhaar:String,
		AadhaarEnrolmentNo:Number,
		DLnumber:Number,
		nameinDL:String,
		ExpiryDate:String,
		ECnumber:Number,
		NPRnumber:Number,
		NameinNPR:String,
		PassportNumber:Number,
		NameInPassport:String,
		ExpiryOn:String,
		RationCardNumber:Number,
		NameInRationcard:String,
		"EDUCATION":education,
		//Address
		Present:Address,
		Permanent:Address,
		Emergency:Address,
		"BACKGROUND CHECK":backgroundcheck,
		"REMARKS":remarks,
		ResignationDetails:SeparatedEmployee
			
	});
mongoose.model("Addemployee",basicinfoSchema,"employeedetails")