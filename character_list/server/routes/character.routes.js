const CharacterController = require("../controllers/character.controller");

module.exports = (app)=>{
    app.post("/api/characters", CharacterController.createCharacter);
    app.post("/api/characters", CharacterController.allCharacters);
    app.get("/api/characters/:id", CharacterController.oneCharacter);
    app.put("/api/characters/:id", CharacterController.updateCharacter);
    app.delete("/api/characters/:id", CharacterController.deleteCharacter);
}