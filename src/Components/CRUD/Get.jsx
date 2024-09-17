import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const api = 'https://668e7076bf9912d4c92e50df.mockapi.io/sample'

export default function Get() {

    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const nav = useNavigate()

    // to post data
    const handlesubmit = async () => {
        await axios.post(api, {
            Name: Name,
            Phone: Phone,
            Email: mail
        })
        nav('/');
    }

    //  to get data 
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(api)
            .then(res => setData(res.data))
    }, [])

    // setup edit method
    const [edit,setEdit] = useState(false);
    function setupEdit(){
        const id = localStorage.getItem("_id");

        axios.get(`${api}/${id}`)
        .then((res)=>{
            setName(res.data.Name);
            setMail(res.data.Email);
            setPhone(res.data.Phone);
            setEdit(true);
        })
    }

    //to edit a data
    function handelUpdate(){
        const id = localStorage.getItem("_id");

        axios.put(`${api}/${id}`,{
            Name: Name,
            Phone: Phone,
            Email: mail
        })
        .then(()=>{
            alert("data updated");
            setEdit(false);
            localStorage.clear()
            window.location.reload()
        })
    }

    // to delete a data
    function handleDelete(id){
        axios.delete(api+`/${id}`)
        .then(()=>{
            window.location.reload()
            
        })
    }
    return (
        <div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} /> <br />
                <label htmlFor="">phone</label>
                <input type="text" value={Phone} onChange={(e) => { setPhone(e.target.value) }} /> <br />
                <label htmlFor="">Email</label>
                <input type="text" value={mail} onChange={(e) => { setMail(e.target.value) }} /> <br />

                <button onClick={
                    edit?
                    handelUpdate:
                    handlesubmit
                }>
                    {
                        edit?
                        "Update Data":
                        "Create Data"
                    }
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((items, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{items.Name}</td>
                            <td>{items.Email}</td>
                            <td>{items.Phone}</td>
                            <td>
                                <button
                                    onClick={()=>{
                                        setupEdit();
                                        localStorage.setItem("_id",items.id)
                                    }}
                                >Edit</button>
                                <button
                                    onClick={()=>{
                                        handleDelete(items.id)
                                    }}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}



