const mongoose = require('mongoose')
const rantSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Rant', rantSchema, 'rants')