const Character = require("../models/character.model.js");

module.exports = {
    createCharacter: (req, res) => { 
        Character.create(req.body) 
            .then((newCharacter) => res.json(newCharacter)) 
            .catch((err) => console.log(err));
    },

    allCharacters: (req, res) => {
        Character.find({}) 
            .then((allCharacters) => res.json(allCharacters))
            .catch((err) => console.log(err));
    },

    oneCharacter: (req, res) => {
        Character.findOne({ _id: req.params.id })
            .then((oneCharacter) => res.json(oneCharacter))
            .catch((err) => console.log(err));
    },

    updateCharacter: (req, res) => {
        Character.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true, 
            runValidators: true,
        })
            .then((updatedCharacter) => res.json(updatedCharacter))
            .catch((err) => console.log(err));
    },

    deleteCharacter: (req, res) => {
        Character.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));
    },
};