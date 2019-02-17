let mongoose= require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
    
});

// TODO new user model
// TODO email properties, required, trim
// TODO minlength 1 and set type

// let newUser = new User({
//     email: 'inderpal.chauhan@gmail.com'
// });

// newUser.save().then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
// }, (e) => {
//     console.log('Unable to save the user', e);
// })

module.exports = {User};

