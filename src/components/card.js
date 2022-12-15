import React from 'react'

export const Card = ({data}) => {
    return(
        <div className="border-2 border-[#442445] mb-6 min-h-[100px] py-6 px-2"> 
            <h1 className="font-bold mb-4">{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}