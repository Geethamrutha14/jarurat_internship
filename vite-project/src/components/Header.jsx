import React from 'react'

export default function Header() {
  return (
    <div>
      <header className='bg-slate-200 shadow-md font-sans'>
        <div className='flex items-center justify-between max-w-6xl mx-auto p-3'>
            {/* logo */}
            <div className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <h1>
                    <span className='text-slate-500'>Jarurat</span>
                    <span className='text-slate-700'>Care</span>
                </h1>
            </div>

            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Patients</li>
            </ul>
        </div>

      </header>
    </div>
  )
}
