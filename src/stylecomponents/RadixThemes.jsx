import { Button, DropdownMenu } from '@radix-ui/themes'
import React from 'react'

function RadixThemes() {
   return (
      <div>
         <DropdownMenu.Root>
            <DropdownMenu.Trigger>
               <Button variant='classic'>Options</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className='w-50'>
               <DropdownMenu.Item>Albar</DropdownMenu.Item>
               <DropdownMenu.Item>Weakness</DropdownMenu.Item>
               <DropdownMenu.Item>Also</DropdownMenu.Item>
            </DropdownMenu.Content>
         </DropdownMenu.Root>
      </div>
   )
}

export default RadixThemes