import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Display = (props) => {
    
    const { characterList, setCharacterList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/characters")
            .then((res) => {
                console.log(res.data);
                setCharacterList(res.data); 
            })
            .catch((err) => console.log(err));
    }, []); 

    return (
        <div>
            <header>
                All Characters:
            </header>
            {
                characterList.map((character, index) => 
                    <div key={index}>
                        <Link to={`/characters/${character._id}`}>
                            {character.name}
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default Display;