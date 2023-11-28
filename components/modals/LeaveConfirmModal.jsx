'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { ModalContext } from '@/context/modal.context'

const LeaveConfirmModal = (props) => {
    const { href } = props
    const { setModalOpen } = useContext(ModalContext)

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl text-shark-100 font-bold'>Leaving site!</h1>
            <p className='text-shark-300'>This link will take you to:</p>
            <p className='w-full bg-shark-950 p-2 rounded-lg text-shark-300 border border-shark-700 line-clamp-1 my-2 -mx-1'>{href}</p>
            <p className='text-xs text-shark-300'>We screen links before they're posted but you can double check!</p>
            <div className='w-full flex gap-2 mt-2 justify-end'>
                <button 
                    onClick={() => {setModalOpen(false)}}
                    className=' h-8 px-4 py-1 rounded  hover:brightness-125 transition'>
                    Go back
                </button>
                <Link
                    href={href}
                    target="_blank" 
                    className='bg-emerald-500 h-8 px-4 py-1 rounded border-t border-white/30 hover:brightness-125 transition'>
                    Proceed
                </Link>
            </div>
        </div>
    )
}

export default LeaveConfirmModal;