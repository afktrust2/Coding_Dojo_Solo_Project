import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneCharacter = (props) => {
    const { id } = useParams();
    const [oneCharacter, setOneCharacter] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/characters/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneCharacter(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); 
    return (
        <div className="oneCharacter-component">
            <h2>{oneCharacter.name}</h2>
            <p>Age:{oneCharacter.age}</p>
            <p>Height: {oneCharacter.height}</p>
        </div>
    );
};

export default OneCharacter;