const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advisersSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const Advisers = mongoose.model('Advisers', advisersSchema);

module.exports = Advisers;