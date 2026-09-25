import { DropdownMenu } from 'radix-ui'
import React from 'react'

function RadixPrimitives() {
  return (
    <div>
      <DropdownMenu.Root>
         <DropdownMenu.Trigger className='w-50 py-2 bg-blue-400 text-white'>
            Options
         </DropdownMenu.Trigger>
         <DropdownMenu.Portal>
            <DropdownMenu.Content className='w-50 *:bg-blue-300 text-white flex flex-col gap-2'>
               <DropdownMenu.Item className='py-2 px-5'>Edit</DropdownMenu.Item>
               <DropdownMenu.Item className='py-2 px-5'>Select</DropdownMenu.Item>
               <DropdownMenu.Item className='py-2 px-5'>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
         </DropdownMenu.Portal>
      </DropdownMenu.Root>

    </div>
  )
}

export default RadixPrimitives