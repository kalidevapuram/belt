var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var Schema = mongoose.Schema;


var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [4, 50],
    error: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    error: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];



var PollSchema = new mongoose.Schema({
    question: {type: String, required: true, validate: nameValidator},
    option1: {type: String, required: true, validate: nameValidator},
    option2: {type: String, required: true, validate: nameValidator},
    option3: {type: String, required: true, validate: nameValidator},
    option4: {type: String, required: true, validate: nameValidator},
    
    vote1: Number,
    vote2: Number,
    vote3: Number,
    vote4: Number,
    
    date: {type:Date, default:Date.now},
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
    
});

mongoose.model('Poll', PollSchema);




