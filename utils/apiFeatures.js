class APIFeatures {
    constructor(query, queryString) {
      this.query = query
      this.queryString = queryString
    }
  
    /**
     * Filter results based on query parameters
     * @returns {APIFeatures} - Returns this for method chaining
     */
    filter() {
      const queryObj = { ...this.queryString }
      const excludedFields = ["page", "sort", "limit", "fields"]
      excludedFields.forEach((el) => delete queryObj[el])
  
      // Advanced filtering
      let queryStr = JSON.stringify(queryObj)
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)
  
      this.query = this.query.find(JSON.parse(queryStr))
  
      return this
    }
  
    /**
     * Sort results based on sort parameter
     * @returns {APIFeatures} - Returns this for method chaining
     */
    sort() {
      if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(",").join(" ")
        this.query = this.query.sort(sortBy)
      } else {
        this.query = this.query.sort("-createdAt")
      }
  
      return this
    }
  
    /**
     * Limit fields returned in response
     * @returns {APIFeatures} - Returns this for method chaining
     */
    limitFields() {
      if (this.queryString.fields) {
        const fields = this.queryString.fields.split(",").join(" ")
        this.query = this.query.select(fields)
      } else {
        this.query = this.query.select("-__v")
      }
  
      return this
    }
  
    /**
     * Implement pagination
     * @returns {APIFeatures} - Returns this for method chaining
     */
    paginate() {
      const page = Number.parseInt(this.queryString.page, 10) || 1
      const limit = Number.parseInt(this.queryString.limit, 10) || 10
      const skip = (page - 1) * limit
  
      this.query = this.query.skip(skip).limit(limit)
  
      return this
    }
  }
  
  export default APIFeatures
  