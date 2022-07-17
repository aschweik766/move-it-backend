const mongoose = require('mongoose');

const FactsSchema = new mongoose.Schema({
    fact: {
        type: String,
        required: [true, 'fact cannot be empty']
    }
},
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Fact = mongoose.model('Fact', FactsSchema);

module.exports = Fact;