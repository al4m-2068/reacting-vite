import React, { useContext } from 'react'
import { HomeContext } from './Context'

function ProfileDetail(props) {
   const {nama, setNama} = useContext(HomeContext)
   return (
      <div>
         <p>Halo, {props.nama || nama}!</p>
         <button onClick={() => setNama('Albar')}>Set</button>
      </div>
   )
}

export default ProfileDetail