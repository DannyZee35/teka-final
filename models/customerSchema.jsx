const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  annualSales: {
    type: String,
    required: true,
  },
  amazonBudget: {
    type: String,
    required: true,
  },
  amazonAdvertisement: {
    type: String,
    required: true,
  },
  businessModel: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema);

module.exports = Customer;
