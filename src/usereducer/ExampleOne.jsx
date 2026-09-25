import React, { useState } from 'react'

function ExampleOne() {
   const [number, setNumber] = useState(0)
   return (
      <div className='flex w-full h-screen justify-between items-end p-2 font-zld text-sm uppercase'>
         <h1 className='text-sky-300 font-black text-trim font-sky text-[300px] ml-6 mb-6'>{number}</h1>
         <div className="flex flex-col items-end">
            <div className=''>
               <h1 className='text-xs'>Config</h1>
               <button className='w-30 cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => setNumber(number + 1)}>Tambah</button>
               <button className='w-30 cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => setNumber(number - 1)}>Kurang</button>
            </div>
            <div className=''>
               <h1 className='text-xs'>Extra Config</h1>
               <button className='cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => setNumber(number + 5)}>Tambah 5</button>
               <button className='cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => setNumber(number - 5)}>Kurang 5</button>
               <button className='cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => setNumber(0)}>Reset</button>
            </div>
         </div>
      </div>
   )
}

export default ExampleOne