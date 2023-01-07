const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const contactSchema = new Schema({
    todo:[{
        Task : {type: String, required :true },
        Status : {type : String, required : true},
        TimeTaken:{type:String,required:true}
    }],
    
    userId : {type :mongoose.Schema.Types.ObjectId, ref : "user"}
})
const todo = mongoose.model("todo_details", contactSchema);
module.exports =todo;