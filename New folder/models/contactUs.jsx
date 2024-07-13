import {mongoose,Schema} from 'mongoose';

const ContactSchema = new Schema({
  email: {
    type: String,
    required: true,
  
  },
  firstName: {
    type: String,
    required: true,

  },
  lastName: {
    type: String,

  },
  message: {
    type: String,
    required: true,
 
  },
  companyName: {
    type: String,
 
  },
  phoneNumber: {
    type: String,
  
  },
  inquiryReason: {
    type: String,
    required: true,
 
  },
  businessType: {
    type: String,
    required: true,
   
  },
}, {
  timestamps: true, 
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;
