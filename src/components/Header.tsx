import React from 'react'

export default function Header() {
  return (
    <header className='bg-slate-800'>
        <div className='mx-auto container px-5 py-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src="/logo.svg" alt="logotipo" className='w-32' />
                </div>

                <nav></nav>
            </div>
        </div>
    </header>
  )
}
