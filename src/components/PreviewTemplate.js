import React, { useEffect, useRef } from 'react'
import { useCurrentLetter, useSteps } from '../store/stores'
import { exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import { useNavigate } from 'react-router-dom'
import { AiFillPicture, AiFillFilePdf } from 'react-icons/ai'

function PreviewTemplate() {
  const template = useCurrentLetter(state => state.template)
  const content = useCurrentLetter(state => state.content)
  const resetStep = useSteps(state => state.resetStep)

  const nav = useNavigate()
  const pngRef = useRef()

  const handleClose = () => {
    nav('/letters')
    resetStep()
  }

  return (
    <div>

      <div className='flex items-center w-full justify-evenly pr-20'>
        <div ref={pngRef} className='relative '>
          <img src={template} alt='' className='rounded-2xl h-[600px] ' />
          <div className='absolute top-0 left-0 p-20'>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        <div className='flex flex-col items-center gap-20'>
          <div className='flex items-center flex-col gap-5 bg-white rounded-2xl p-10'>
            <p className='text-xl'>SAVE AS</p>
            <div className='flex gap-5'>
              <button onClick={() => exportComponentAsPDF(pngRef)}>
                <div className='bg-red-500 text-white rounded-full p-2 border-4 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 transition-colors'>
                  <AiFillFilePdf size={50} />
                </div>
              </button>
              <button onClick={() => exportComponentAsPNG(pngRef)}>
                <div className='bg-cyan-500 text-white rounded-full p-2 border-4 border-transparent hover:border-cyan-500 hover:bg-white hover:text-cyan-500 transition-colors'>
                  <AiFillPicture size={50} />
                </div>
              </button>
            </div>
          </div>

          <div className='text-xl bg-white border-4 border-red-500 p-3 rounded-full hover:border-transparent hover:text-white hover:bg-red-500 text-red-500 transition-colors'>
            <button onClick={handleClose}>Save and close</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PreviewTemplate