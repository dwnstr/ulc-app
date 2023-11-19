import React from 'react'
import { ClipboardCopy } from 'lucide-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyButton = (props) => {

    const {content} = props

    return (
        <CopyToClipboard text={content}>
            <button className='flex gap-2 text-sm px-4 pb-1 items-center justify-center h-8 w-full aspect-square bg-shark-600 rounded hover:brightness-125 transition border-t border-shark-500'>
                Copy
                <ClipboardCopy size={17}/>
            </button>
        </CopyToClipboard>
    )
    
    
}

export default CopyButton;