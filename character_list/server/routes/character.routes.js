const CharacterController = require("../controllers/character.controller");

module.exports = (app)=>{
    app.post("/api/characters", CharacterController.createCharacter);
}