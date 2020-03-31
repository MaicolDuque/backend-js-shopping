/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 * Product email
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmailSchema = new Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true }
}, { timestamps: true });




module.exports = mongoose.model('Email', EmailSchema);
