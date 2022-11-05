import React from 'react'
import ChooseTemplate from '../components/ChooseTemplate'
import { useSteps } from '../store/stores'
import EditTemplate from '../components/EditTemplate'
import PreviewTemplate from '../components/PreviewTemplate'
import PageTemplate from './PageTemplate'
import {AiFillBackward} from 'react-icons/ai'

function Create() {
  const step = useSteps(state => state.step)
  // const nextStep = useSteps(state => state.nextStep)
  const prevStep = useSteps(state => state.prevStep)

  return (
    <PageTemplate>
      <div>
        {step > 1 && <button onClick={prevStep} className='bg-red-500 text-white rounded-full p-2 border-4 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 transition-colors'>
          <AiFillBackward size={30}/>
        </button>}
        {step === 1 && <ChooseTemplate />}
        {step === 2 && <EditTemplate />}
        {step === 3 && <PreviewTemplate />}
      </div>
    </PageTemplate>
  )
}

export default Create