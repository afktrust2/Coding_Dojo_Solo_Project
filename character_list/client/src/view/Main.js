import React, { useState, useEffect} from "react";
import NewCharacter from "../components/CreateCharacter";
import Display from "../components/DisplayAll";

const Main = (props) => {
    const [characterList, setCharacterList] = useState([]);

    return (
        <div>
            <NewCharacter characterList={characterList} setCharacterList={setCharacterList}/>
            <Display characterList={characterList} setCharacterList={setCharacterList}/>
        </div>
    )
}

export default Main;