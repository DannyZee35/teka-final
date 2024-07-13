const { Schema, mongoose } = require("mongoose");

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter a title."]
    },
    content: {
        type: String,
        required: [true, "Please enter the content of the blog."]
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

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);

export default Blog;
