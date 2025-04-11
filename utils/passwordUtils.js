import bcrypt from "bcryptjs"

/**
 * Hash a password
 * @param {String} password - The password to hash
 * @returns {String} - Hashed password
 */
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

/**
 * Compare a password with a hash
 * @param {String} enteredPassword - The password to compare
 * @param {String} hashedPassword - The hashed password to compare against
 * @returns {Boolean} - True if passwords match, false otherwise
 */
export const comparePassword = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword)
}
