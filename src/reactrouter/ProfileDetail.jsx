import React from 'react'
import { useNavigate, useParams } from 'react-router'

const santri = {
   '1': 'Albar',
   '2': 'Abdul',
   '3': 'Malik',
}
function ProfileDetail() {
   const navigate = useNavigate()
   const { id } = useParams();
   const name = santri[id]
   return (
      <>
      <div>ProfileDetail</div>
      <h1>ID: {id}</h1>
      <h1>Nama: {name}</h1>
      <button onClick={() => navigate(-1)}>Kembali</button>
      </>
   )
}

export default ProfileDetail