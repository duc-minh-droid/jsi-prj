import React, { useEffect, useState } from 'react'
import { lettersDB } from '../firebase'
import {getDocs, orderBy, where, doc, deleteDoc} from 'firebase/firestore'
import { useUser } from '../store/stores'
import PageTemplate from './PageTemplate'
import LetterTemplate from '../components/LetterTemplate'

function Letters() {
  const [letters, setLetters] = useState([])
  const user = useUser(state => state.user)

  const getLetters = async () => {
    const lettersRef = await getDocs(lettersDB, where('uid', '==', user.uid), orderBy('createdAt', 'desc'))
    const lettersTemp = lettersRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setLetters(lettersTemp)
  }

  useEffect(()=> {
    getLetters()
  }, [])

  const handleDelete = (id) => {
    const del = async (id) => {
      await deleteDoc(doc(lettersDB, id))
    }
    del(id)
  }

  const [joke, setJoke] = useState("")
  useEffect(()=>{
    const getJoke = async () => {
      fetch('https://icanhazdadjoke.com/slack')
        .then(res => res.json())
        .then(res => setJoke(res.attachments[0].text))
    }
    getJoke()
  }, [])

  return (
    <PageTemplate>
      <div className='text-center mb-16 flex flex-col gap-5'>
        <p className='text-4xl font-bold text-fuchsia-600'>My letters</p>
        <p className='font-serif italic'>"{joke}"</p>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {letters ? letters.map(letter =><div key={letter.createdAt}> 
          <LetterTemplate content={letter.content} template={letter.template} handleDelete={()=>handleDelete(letter.id)}/>
        </div>) : "You haven't written any letter for your mother! :)"}
      </div>
    </PageTemplate>
  )
}

export default Letters