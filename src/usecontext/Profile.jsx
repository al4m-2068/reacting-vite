import React from 'react'
import ProfileDetail from './ProfileDetail'

function Profile(props) {
  return (
   <>
   <div>Ini adalah profile</div>
   <ProfileDetail nama={props.nama}/>
   </>
  )
}

export default Profile