import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = (props) => {
    
    const { characterList, setcharacterList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/characters")
            .then((res) => {
                console.log(res.data);
                setcharacterList(res.data);
                
            })
            .catch((err) => console.log(err));
    }, []); 

    return (
        <div>
            <header>
                All Characters:
            </header>
            {
                characterList.map((character, index) => (
                    <div key={index}>
                        <Link to={`/character/${character._id}`}>
                            {character.name}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Characters;