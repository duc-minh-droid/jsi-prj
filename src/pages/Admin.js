import React, { useState } from 'react'
import { addDoc } from "firebase/firestore";
import { templatesDB } from "../firebase"
import PageTemplate from './PageTemplate';

function Admin() {
    const [link, setLink] = useState("")

    const handleAdd = async (data) => {
        await addDoc(templatesDB, data)
    }

    const resetForm = () => {
        setLink("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            link
        }
        handleAdd(data)
        resetForm()
    }


    return (
        <div>
            <PageTemplate>
                <form onSubmit={handleSubmit}>
                    Link
                    <input value={link} type="text" onChange={(e) => setLink(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
            </PageTemplate>
        </div>
    )
}

export default Admin