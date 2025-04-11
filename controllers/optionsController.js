import asyncHandler from "../middleware/asyncHandler.js"
import { getDropdownOptions } from "../utils/dataUtils.js"

// @desc    Get options for dropdown fields
// @route   GET /api/options/:field
// @access  Public
const getOptions = asyncHandler(async (req, res) => {
  const { field } = req.params
  const options = getDropdownOptions(field)

  res.status(200).json({
    success: true,
    data: options,
  })
})

// @desc    Get cities based on country
// @route   GET /api/options/cities/:country
// @access  Public
const getCitiesByCountry = asyncHandler(async (req, res) => {
  const { country } = req.params
  const allCities = getDropdownOptions("cities")

  const cities = allCities[country] || []

  res.status(200).json({
    success: true,
    data: cities,
  })
})

export { getOptions, getCitiesByCountry }
