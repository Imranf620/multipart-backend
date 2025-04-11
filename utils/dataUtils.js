// Utility functions for data manipulation and processing

/**
 * Sanitize form data by removing sensitive information
 * @param {Object} formData - The form data to sanitize
 * @returns {Object} - Sanitized form data
 */
export const sanitizeFormData = (formData) => {
    const sanitized = { ...formData }
  
    // Remove password from response
    if (sanitized.userProfile && sanitized.userProfile.password) {
      delete sanitized.userProfile.password
    }
  
    return sanitized
  }
  
  /**
   * Get predefined options for dropdown fields
   * @param {String} field - The field name to get options for
   * @returns {Array} - Array of options
   */
  export const getDropdownOptions = (field) => {
    const options = {
      countries: [
        "Australia",
        "Brazil",
        "Canada",
        "China",
        "France",
        "Germany",
        "India",
        "Japan",
        "Pakistan",
        "United Kingdom",
        "United States",
      ],
      cities: {
        Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
        Brazil: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"],
        Canada: ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa"],
        China: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu"],
        France: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
        Germany: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
        India: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"],
        Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Sapporo"],
        Pakistan: ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad"],
        "United Kingdom": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool"],
        "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
      },
      employmentStatus: ["Employed", "Unemployed", "Student"],
      hobbies: ["Sports", "Music", "Reading", "Cooking", "Travel", "Photography", "Gaming", "Art", "Dancing", "Hiking"],
    }
  
    return options[field] || []
  }
  
  