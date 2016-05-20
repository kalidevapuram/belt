var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    user_name: String,
    _poll: {type: Schema.Types.ObjectId, ref: 'Poll'},
});

mongoose.model('User', UserSchema);

