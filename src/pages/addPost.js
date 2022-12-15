import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPosts } from '../store/reducers/posts/postSlice'

export const AddPosts = () => {
    const [postData, setPostData] = useState({title:'', body:''})
    const dispatch = useDispatch()

    const addPostHandler = () => {
        dispatch(addPosts())
    }

    const inputHandler = () => {
        
    }

    return(
        <>
            <input type="text" />
            <input type="text" />
            <button onClick={addPostHandler} />
        </>
    )
}