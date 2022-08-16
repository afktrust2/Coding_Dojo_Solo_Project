import React, { useState } from "react";
import axios from "axios";

const NewCharacter = (props) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    const submitHandler = (e)=>{
    e.preventDefault();

    axios.post("http://localhost:8000/api/Characters",{
        name, 
        age, 
        height
    })
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        setName("");
        setAge("");
        setHeight("");
    })
    .catch((err)=>{
        console.log(err);
    })
    }

    return (
        <div>
            
            <header>
            Character Manager
            </header>
            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name="name"
                        type="text"/>
                </div>
                <br/>
                <div className="form-fields">
                    <label>Age</label>
                    <input
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        name="age"
                        type="number"/>
                </div>
                <br/>
                <div className="form-fields">
                    <label>Height</label>
                    <input
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                        name="height"
                        type="number"/>
                </div>

                <br/>
                <input className="submit-input" type="submit" value="Create"/>
            </form>
        </div>
    );
    };

export default NewCharacter;