import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    const navigate = useNavigate();

    const [headerName, setHeaderName] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/characters/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setAge(res.data.age);
                setHeight(res.data.height);
                setHeaderName(res.data.name);
            })
            .catch((err) => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/characters/${id}`, {
                name, 
                age,
                height,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/"); 
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>Edit {headerName}</header>

            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name="name"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Age</label>
                    <input
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        name="age"
                        type="number"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Height</label>
                    <input
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                        name="height"
                        type="number"
                    />
                </div>

                <br />
                <input class="submit-input" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;