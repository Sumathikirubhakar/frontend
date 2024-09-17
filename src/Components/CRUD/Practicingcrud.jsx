import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
const api = 'https://668e7076bf9912d4c92e50df.mockapi.io/sample1'


export default function Practicingcrud() {

    const [Name, setName] = useState("")
    const [Gender, setGender] = useState("")
    const [Age, setAge] = useState("")
    const [Mobile, setMobile] = useState("")
    // const nav = useNavigate()


    //TO POST METHOD ----> crete a new data
    const handlesubmit = async () => {
        await axios.post(api, {
            Name: Name,
            Gender: Gender,
            Age: Age,
            Mobile: Mobile,
        })
        // nav('/');
    }

    // TO GET METHOD -----> Get all data from the storage (like DATABASE, LINK)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(api)
            .then(res => setData(res.data))
    }, [])
    return (

        //POST METHOD:
        <div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} /> <br />
                <label htmlFor="">Gender</label>
                <input type="text" value={Gender} onChange={(e) => { setGender(e.target.value) }} /> <br />
                <label htmlFor="">Age</label>
                <input type="number" value={Age} onChange={(e) => { setAge(e.target.value) }} /> <br />
                <label htmlFor="">Mobile</label>
                <input type="text" value={Mobile} onChange={(e => { setMobile(e.target.value) })} /> <br />

                <button onClick={
                    handlesubmit
                }>
                    create
                </button>
            </div>

            {/* //GET METHOD: */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((items, index) =>
                        <tr key={index}>
                            <td>{items.Name}</td>
                            <td>{items.Gender}</td>
                            <td>{items.Age}</td>
                            <td>{items.Mobile}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
