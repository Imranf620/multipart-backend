import express from "express"
import { getOptions, getCitiesByCountry } from "../controllers/optionsController.js"

const router = express.Router()

router.get("/options/:field", getOptions)
router.get("/options/cities/:country", getCitiesByCountry)

export default router
