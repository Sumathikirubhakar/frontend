import React from 'react'
import { useAxiosGet, useFetch } from './useFetch'

export default function CustomHook() {

    const [data] = useAxiosGet('https://668e7076bf9912d4c92e50df.mockapi.io/sample1');
    console.log(data);

    return (
        <div>
            <table border={2}>
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
