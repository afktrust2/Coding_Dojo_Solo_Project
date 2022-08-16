const CharacterController = require("../controllers/character.controller");

module.exports = (app)=>{
    app.post("/api/characters", CharacterController.createCharacter);
    app.post("/api/characters", CharacterController.allCharacter);
    app.get("/api/character/:id", CharacterController.oneCharacter);
    app.put("/api/character/:id", CharacterController.updateCharacter);
    app.delete("/api/character/:id", CharacterController.deleteCharacter);
}