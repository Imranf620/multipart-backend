import { body, validationResult } from "express-validator"

const validateForm = [

  body("userProfile.fullName")
    .notEmpty()
    .withMessage("Full name is required"),
  body("userProfile.email").isEmail().withMessage("Please provide a valid email"),
  body("userProfile.password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body("userProfile.gender").isIn(["Male", "Female", "Other"]).withMessage("Gender must be Male, Female, or Other"),
  body("userProfile.dateOfBirth").isDate().withMessage("Please provide a valid date of birth"),

  body("contactInformation.phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required"),
  body("contactInformation.addressLine1").notEmpty().withMessage("Address line 1 is required"),
  body("contactInformation.city").notEmpty().withMessage("City is required"),
  body("contactInformation.postalCode").notEmpty().withMessage("Postal code is required"),
  body("contactInformation.country").notEmpty().withMessage("Country is required"),

  body("employmentInformation.jobTitle")
    .notEmpty()
    .withMessage("Job title is required"),
  body("employmentInformation.employmentStatus")
    .isIn(["Employed", "Unemployed", "Student"])
    .withMessage("Employment status must be Employed, Unemployed, or Student"),
  body("employmentInformation.companyName")
    .if(body("employmentInformation.employmentStatus").equals("Employed"))
    .notEmpty()
    .withMessage("Company name is required for employed individuals"),
  body("employmentInformation.yearsOfExperience").isNumeric().withMessage("Years of experience must be a number"),

  // Step 4: Financial Information validation
  body("financialInformation.monthlyIncome")
    .isNumeric()
    .withMessage("Monthly income must be a number"),
  body("financialInformation.loanStatus").isIn(["Yes", "No"]).withMessage("Loan status must be Yes or No"),
  body("financialInformation.loanAmount")
    .if(body("financialInformation.loanStatus").equals("Yes"))
    .isNumeric()
    .withMessage("Loan amount must be a number"),
  body("financialInformation.creditScore").isNumeric().withMessage("Credit score must be a number"),

  body("preferences.preferredContactMode")
    .isIn(["Email", "Phone", "SMS"])
    .withMessage("Preferred contact mode must be Email, Phone, or SMS"),
  body("preferences.hobbies").isArray({ min: 1 }).withMessage("At least one hobby is required"),
  body("preferences.newsletterSubscription").isBoolean().withMessage("Newsletter subscription must be a boolean"),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() })
    }
    next()
  },
]

export { validateForm }
