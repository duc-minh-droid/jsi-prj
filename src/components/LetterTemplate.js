import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

function LetterTemplate({ content, handleDelete, template }) {
    return (
        <div>
            <button onClick={handleDelete}
            className='bg-red-500 text-white rounded-full p-1 border-4 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 transition-colors'>
                <AiFillDelete size={20}/>
            </button>
            <div className='relative w-60'>
                <img src={template} alt='' className='rounded-2xl h-96 w-60' />
                <div className='absolute top-0 left-0 p-5'>
                    <span dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </div>
    )
}

export default LetterTemplate