import Form from "../models/Form.js"
import asyncHandler from "../middleware/asyncHandler.js"
import fs from "fs"
import path from "path"

// @desc    Create a new form submission
// @route   POST /api/forms
// @access  Public
const createForm = asyncHandler(async (req, res) => {
  const formData = req.body
  // Add resume file path if uploaded
  console.log(req.file)
  if (req.file) {
    formData.employmentInformation.resumePath = req.file.path
  }

  const form = await Form.create(formData)

  res.status(201).json({
    success: true,
    data: form,
  })
})

// @desc    Get all form submissions
// @route   GET /api/forms
// @access  Public
const getForms = asyncHandler(async (req, res) => {
  const forms = await Form.find({})

  res.status(200).json({
    success: true,
    count: forms.length,
    data: forms,
  })
})

// @desc    Get single form submission
// @route   GET /api/forms/:id
// @access  Public
const getForm = asyncHandler(async (req, res) => {
  const form = await Form.findById(req.params.id)

  if (!form) {
    return res.status(404).json({
      success: false,
      error: "Form not found",
    })
  }

  res.status(200).json({
    success: true,
    data: form,
  })
})

// @desc    Update form submission
// @route   PUT /api/forms/:id
// @access  Public
const updateForm = asyncHandler(async (req, res) => {
  let form = await Form.findById(req.params.id)

  if (!form) {
    return res.status(404).json({
      success: false,
      error: "Form not found",
    })
  }

  const formData = req.body

  // Handle resume file update
  if (req.file) {
    // Delete old resume file if it exists
    if (form.employmentInformation.resumePath) {
      const oldFilePath = path.join(process.cwd(), form.employmentInformation.resumePath)
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath)
      }
    }

    formData.employmentInformation.resumePath = req.file.path
  }

  form = await Form.findByIdAndUpdate(req.params.id, formData, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: form,
  })
})

// @desc    Delete form submission
// @route   DELETE /api/forms/:id
// @access  Public
const deleteForm = asyncHandler(async (req, res) => {
  const form = await Form.findById(req.params.id)

  if (!form) {
    return res.status(404).json({
      success: false,
      error: "Form not found",
    })
  }

  // Delete resume file if it exists
  if (form.employmentInformation.resumePath) {
    const filePath = path.join(process.cwd(), form.employmentInformation.resumePath)
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
    }
  }

  await form.deleteOne()

  res.status(200).json({
    success: true,
    data: {},
  })
})

export { createForm, getForms, getForm, updateForm, deleteForm }
