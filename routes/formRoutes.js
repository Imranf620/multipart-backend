import express from "express"
import { createForm, getForms, getForm, updateForm, deleteForm } from "../controllers/formController.js"
import upload from "../config/multerConfig.js"
import { validateForm } from "../middleware/validation.js"

const router = express.Router()

router.route("/").post(upload.single("resume"), validateForm, createForm).get(getForms)

router.route("/:id").get(getForm).put(upload.single("resume"), validateForm, updateForm).delete(deleteForm)

export default router
