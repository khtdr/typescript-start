import * as React from 'react'
import * as Icons from 'react-zondicons'
import './style.css'

export default () => (
    <div className='h-screen bg-orange p-10'>
        <div className='h-full bg-orange-lighter rounded-lg text-center p-10'>
            what could go wrong
            <Icons.Bug size={80} className='my-3 mx-auto block text-teal-darker fill-current'/>
        </div>
    </div>
)
