const mongoose = require('mongoose');
var userSchema = mongoose.Schema({

        labels: String,
        datasets: JSON


    }
);
User = mongoose.model('User', userSchema);
module.exports = User;
