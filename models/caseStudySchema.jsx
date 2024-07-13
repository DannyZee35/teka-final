const { Schema, mongoose } = require("mongoose");

const CaseStudySchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter a title."]
    },
    content: {
        type: String,
        required: [true, "Please enter the content of the Case Study."]
    },
 
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageUrl:{
        type: String,
        required:[true, "Please add a  Image."]
    },
    createdAt: {
        type: Date,
        default: Date.now  
    }
});

const Case = mongoose.models.cases || mongoose.model("cases", CaseStudySchema);

export default Case;
