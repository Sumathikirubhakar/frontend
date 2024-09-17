import React, { useReducer } from 'react'

export default function UseReducerHook() {

    /* 
        const [var1,var2] = useReducer(function,initial value{object type});
    */
    const data = {
        Name: "",
        Email: "",
        Phone: ""
    }

    const [state, dispatch] = useReducer(reduce, data);

    function reduce(ins,outs){
        if(outs.type === "cgtext"){
            return{
                ...ins,
                [outs.field]:outs.values
            }
        }
        else{
            return false
        }
    }


    function handleChange(e){
        const {name,value} = e.target;

        dispatch({
            type:"cgtext",
            field:name,
            values:value
        })
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="Name"
                    value={state.Name}
                    onChange={handleChange}
                    id=""
                />

                <label htmlFor="">Email</label>
                <input
                    type="text"
                    name="Email"
                    value={state.Email}
                    onChange={handleChange}
                    id=""
                />

                <label htmlFor="">Phone</label>
                <input
                    type="number"
                    name="Phone"
                    value={state.Phone}
                    onChange={handleChange}
                    id=""
                />

            </form>

            <h1>
                Name: {state.Name} <br />
                Email: {state.Email} <br />
                Phone: {state.Phone}
            </h1>
        </div>
    )
}
