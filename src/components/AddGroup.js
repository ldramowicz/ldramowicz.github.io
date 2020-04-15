import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const AddGroup = ({addGroup}) => {
    const defaultFormInfo = {value: null, label: ''};
    const [group, setGroup] = useState(defaultFormInfo);
    const [error, setError] = useState(false);

    const onInputChange = event => {
        const {name, value} = event.target;
        console.log("name = ", name, value);
        setGroup({...group, [name]: value})
    };

    return (
        <div>
            {error && <Alert variant="warning">All fields are mandatory!</Alert>}
            <form
                onSubmit={event => {
                    event.preventDefault();
                    if (!group.label) {
                        setError(true);
                        return;
                    }
                    console.log("asdasdasd");
                    addGroup(group);
                    setGroup(defaultFormInfo);
                    setError(false);
                }}
            >
                <label>Group name</label>{' '}
                <input type="text" name="label" value={group.label} onChange={onInputChange} />{' '}
                <Button type="submit" variant="outline-primary">Add Group</Button>
            </form>
        </div>
    )
};

export default AddGroup
