import fs from "fs"

const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message
  
    console.error(err)
    if (req.file && req.file.path) {
      try {
        fs.unlinkSync(req.file.path)
        console.log(`Cleaned up uploaded file: ${req.file.path}`)
      } catch (cleanupError) {
        console.error("Error cleaning up file:", cleanupError)
      }
    }
    
  
    if (err.name === "CastError") {
      const message = `Resource not found`
      error = { message, statusCode: 404 }
    }
  
    if (err.code === 11000) {
      const rawKey = Object.keys(err.keyValue || {})[0] || "Field";
      const field = rawKey.split('.').pop(); 
      const message = `${field} already exists`;
      error = { message, statusCode: 400 }
    }
  
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message)
      error = { message, statusCode: 400 }
    }
  
    if (err.code === "LIMIT_FILE_SIZE") {
      const message = "File size too large. Maximum size is 5MB"
      error = { message, statusCode: 400 }
    }
  
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Server Error",
    })
  }
  
  export default errorHandler
  