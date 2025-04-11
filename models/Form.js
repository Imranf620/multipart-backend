import mongoose from "mongoose"

const formSchema = new mongoose.Schema(
  {
    // Step 1: User Profile
    userProfile: {
      fullName: {
        type: String,
        required: [true, "Full name is required"],
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"],
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: [true, "Gender is required"],
      },
      dateOfBirth: {
        type: Date,
        required: [true, "Date of birth is required"],
      },
    },

    // Step 2: Contact Information
    contactInformation: {
      phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
      },
      alternatePhoneNumber: {
        type: String,
      },
      addressLine1: {
        type: String,
        required: [true, "Address line 1 is required"],
      },
      addressLine2: {
        type: String,
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
      postalCode: {
        type: String,
        required: [true, "Postal code is required"],
      },
      country: {
        type: String,
        required: [true, "Country is required"],
      },
    },

    // Step 3: Employment Information
    employmentInformation: {
      jobTitle: {
        type: String,
        required: [true, "Job title is required"],
      },
      employmentStatus: {
        type: String,
        enum: ["Employed", "Unemployed", "Student"],
        required: [true, "Employment status is required"],
      },
      companyName: {
        type: String,
      },
      yearsOfExperience: {
        type: Number,
        required: [true, "Years of experience is required"],
      },
      resumePath: {
        type: String,
        required: [true, "Resume is required"],
      },
    },

    // Step 4: Financial Information
    financialInformation: {
      monthlyIncome: {
        type: Number,
        required: [true, "Monthly income is required"],
      },
      loanStatus: {
        type: String,
        enum: ["Yes", "No"],
        required: [true, "Loan status is required"],
      },
      loanAmount: {
        type: Number,
      },
      creditScore: {
        type: Number,
        required: [true, "Credit score is required"],
      },
    },

    // Step 5: Preferences
    preferences: {
      preferredContactMode: {
        type: String,
        enum: ["Email", "Phone", "SMS"],
        required: [true, "Preferred contact mode is required"],
      },
      hobbies: {
        type: [String],
        required: [true, "At least one hobby is required"],
      },
      newsletterSubscription: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  },
)

const Form = mongoose.models.Form || mongoose.model("Form", formSchema)

export default Form
