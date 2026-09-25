import React, { useReducer } from 'react'

function reducer(state, action) {
   if (action.type == 'subtract') {
      return action.subWith !== undefined ? state - action.subWith : state - 1;
   } if (action.type == 'add') {
      return action.addWith !== undefined ? state + action.addWith : state + 1;
   } if (action.type == 'reset') {
      return 0;
   }
   return state;
}
function ExampleTwo() {
   const [state, dispatch] = useReducer(reducer, 0)

   return (
      <div className='flex w-full h-screen justify-between items-end p-2 font-zld text-sm uppercase'>
         <h1 className='text-sky-300 font-black text-trim font-sky text-[300px] ml-6 mb-6'>{state}</h1>
         <div className="flex flex-col items-end">
            <div className=''>
               <h1 className='text-xs'>Config</h1>
               <button className='w-30 cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => dispatch({type: 'add'})}>Tambah</button>
               <button className='w-30 cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => dispatch({type: 'subtract'})}>Kurang</button>
            </div>
            <div className=''>
               <h1 className='text-xs'>Extra Config</h1>
               <button className='cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => dispatch({type: 'add', addWith: 5})}>Tambah 5</button>
               <button className='cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => dispatch({type: 'subtract', subWith: 5})}>Kurang 5</button>
               <button className='cursor-pointer py-1 px-2 bg-blue-400 text-white' onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
         </div>
      </div>
   )
}

export default ExampleTwo