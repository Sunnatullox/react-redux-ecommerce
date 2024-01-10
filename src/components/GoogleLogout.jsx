import React from 'react'
import { GoogleLogout as IsGoogleLogout } from '@leecheuk/react-google-login';
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

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
