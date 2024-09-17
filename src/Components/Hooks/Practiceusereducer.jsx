import React, { useReducer } from 'react';
import UseReducerHook from './UseReducerHook'

export default function Practiceusereducer() {
    const data = {
        Fathername: "",
        Mothername: "",
        Gender: ""
    }

    const [Name, Username] = useReducer(reduce, data);

    function handleChange(e) {
        const { name, value } = e.target;

        Username({
            type: "text",
            field: name,
            values: value
        })
    }

    function reduce(ins, outs) {
        if (outs.type === "text") {
            return {
                ...ins,
                [outs.field]: outs.values
            }
        }
        else {
            return false
        }
    }



    return (
        <div>
            <form action="">
                <label htmlFor="">Fathername</label>
                <input
                    type="text"
                    name="Fathername"
                    value={Name.Fathername}
                    onChange={handleChange}
                />

                <label htmlFor="">Mothername</label>
                <input
                    type="text"
                    name="Mothername"
                    value={Name.Mothername}
                    onChange={handleChange}
                />

                <label htmlFor="">Gender</label>
                <input
                    type="text"
                    Name="Gender"
                    value={Name.Gender}
                    onChange={handleChange}
                />

            </form>

            <h2>
                Fathername: {Name.Fathername} <br />
                Mothername: {Name.Mothername} <br />
                Gender: {Name.Gender} <br />
            </h2>
        </div>
    )
}
