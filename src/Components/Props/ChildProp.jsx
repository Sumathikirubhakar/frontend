import React from 'react'

export default function ChildProp(data) {
    const bike = data.bikes;
    return (
        <div>
            <h1>Child File</h1>
            <ul>
                {
                    bike.map((items, index) => {
                        return (
                            <li key={index}>{items}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
