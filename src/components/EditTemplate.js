import React, { useState } from 'react'
import { useCurrentLetter, useSteps } from '../store/stores'
import ReactQuill from 'react-quill';
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { lettersDB } from '../firebase'
import { useUser } from '../store/stores'
import Editor from './Editor';

function EditTemplate() {
  const template = useCurrentLetter(state => state.template)
  const setContent = useCurrentLetter(state => state.setContent)
  const nextStep = useSteps(state => state.nextStep)
  const user = useUser(state => state.user)

  const [value, setValue] = useState('')

  const handleSubmit = () => {
    const addLetter = async () => {
      addDoc(lettersDB, {
        createdAt: serverTimestamp(),
        content: value, template, uid: user ? user.uid : "unknown"
      })
    }
    addLetter()
    setContent(value)
    nextStep()
  }

  return (
    <div className='pt-5 flex justify-evenly pr-30 items-center gap-10'>
      {template && <div className='bg-no-repeat bg-cover bg-center h-[50rem] w-[40rem] rounded-2xl'
        style={{ backgroundImage: `url(${template})` }}>
        <Editor value={value} onChange={setValue} />
      </div>}

      <div className='text-center flex flex-col gap-10'>
        <div className='w-80 bg-white p-10 rounded-2xl border-4 border-rose-500'>
          <p className='text-4xl text-rose-600 font-serif italic'>Write the most heart-warming letter for your mother</p>
        </div>
        <div>
          <button onClick={handleSubmit}
            className='text-xl bg-white border-4 border-green-500 p-3 rounded-full hover:border-transparent hover:text-white hover:bg-green-500 text-green-500 transition-colors px-10'>Done</button>
        </div>
      </div>
    </div>
  )
}

export default EditTemplate