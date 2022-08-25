const mongoose = require("mongoose");
const CharacterSchema = new mongoose.Schema({
    name:{
        type: String,
    },

    age:{
        type: Number,
    },

    height:{
        type: Number,
    },

    }, 
    {timestamps: true},
);


const Character = mongoose.model("Character", CharacterSchema);


module.exports = Character;