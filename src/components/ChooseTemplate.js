import React, { useEffect, useState } from 'react'
import { getDocs } from 'firebase/firestore'
import { templatesDB } from "../firebase"
import { useCurrentLetter, useSteps } from "../store/stores"

function ChooseTemplate() {
  const nextStep = useSteps(state => state.nextStep)
  const setTemplate = useCurrentLetter(state => state.setTemplate)
  
  const [templates, setTemplates] = useState([])
  
  const getTemplates = async () => {
    const templatesRef = await getDocs(templatesDB)
    const tempRef = templatesRef.docs.map(doc=>({id: doc.id, ...doc.data()}))
    setTemplates(tempRef)
  }

  useEffect(()=>{
    getTemplates()
  }, [])

  const handleChooseTemplate = ({link}) => {
    setTemplate(link)
    nextStep()
  }

  return (
    <div>
      <div className='text-center flex flex-col gap-5 mb-16'>
        <p className='text-4xl text-violet-500'>Choose your template</p>
        <p className='text-xl italic font-serif'>~ Pick a template wisely for your letter ~</p>
      </div>

      <div className='grid grid-cols-5 gap-5'>
      {templates && templates.map((e,id)=>(<div key={id}
      onClick={()=>handleChooseTemplate(e)}>
        <img src={e.link} alt="" className='h-80 hover:shadow-xl rounded-2xl transition-shadow cursor-pointer'/>
      </div>))} 
      </div>
    </div>
  )
}

export default ChooseTemplate