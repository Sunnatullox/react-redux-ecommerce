import React from 'react'
import { GoogleLogout as IsGoogleLogout } from '@leecheuk/react-google-login';
const clientId = "604198012661-m2cnpb6f1r67k7fal1ocru6biu08eojd.apps.googleusercontent.com"

function GoogleLogout() {
    const handleLogout = () => {
        console.log("google logout successfully")
    }
  return (
    <div>
      <IsGoogleLogout clientId={clientId} buttonText='Logout' onLogoutSuccess={handleLogout}/> 
    </div>
  )
}

export default GoogleLogout
