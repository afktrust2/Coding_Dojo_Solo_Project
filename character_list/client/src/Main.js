import React, { useState } from "react";
import NewCharacter from "../components/CreateCharacter";
import Display from "../components/DisplayAll";

const Main = (props) => {
    const [characterList, setCharacterList] = useState([]);

    return (
        <div>
            <NewCharacter
                CharacterList={characterList}
                setCharacterList={setCharacterList}
            />
            <Display
                CharacterList={characterList}
                setCharacterList={setCharacterList}
            />
        </div>
    );
};