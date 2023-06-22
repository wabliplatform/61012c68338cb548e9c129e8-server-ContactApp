
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
Underscoreid:String , 


fullname:String , 


company:String , 


comment:String 



})

module.exports = {
  Contact : mongoose.model('contact', contactSchema),
}

