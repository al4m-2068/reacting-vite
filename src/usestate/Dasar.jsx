import { ArrowCounterClockwiseIcon, PlusIcon } from '@phosphor-icons/react';
import React from 'react'

function Dasar() {
   let angka = 0
   function tambah() {
      setAngka(angka + 1)
      console.log(angka);
   }
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      <h1 className='font-mono font-bold uppercase'><span className="text-blue-400">{'<'}</span> {'(Console)'} Num Counta <span className="text-blue-400">{'>'}</span></h1>
      <h1 className='font-black text-blue-400 text-[400px]'>{angka}</h1>
      <button onClick={tambah} className='flex items-center gap-1 px-2 py-1 text-xs uppercase border cursor-pointer hover:text-white hover:border-blue-400 hover:bg-blue-400 border-zinc-400'><PlusIcon size={12}/> Tambah</button>
    </div>
  )
}

export default Dasar