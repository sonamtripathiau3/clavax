const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        min:10
    },
    studentName: {
        type: String,
        required: true,
        trim: true
    },
    fatherName: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: String,
        required: true,
        trim:true
    },
    address:{
        type: String,
        required: true,
        trim:true
    },
    city:{
        type: String,
        required: true,
        trim:true
    },
    state:{
        type: String,
        required: true,
        trim:true
    },
    classNo:{
        type: Number,
        required: true,
    },
    marks:{
        type: Number,
    },
    pin:{
        type: Number,
        required: true,
    },
    dateEnrolled:{
        type:Date,
        default:Date.now
    },
    
}, { timestamps: true, versionKey: false });


module.exports = mongoose.model('Students', studentSchema, 'students');

