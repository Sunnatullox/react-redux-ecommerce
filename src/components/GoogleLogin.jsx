import React from 'react'
import { GoogleLogin as IsGoogleLogin } from '@leecheuk/react-google-login';
import { useNavigate  } from "react-router-dom";
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

function GoogleLogin() {
    const naviget = useNavigate()
    const responseGoogle = (res) => {
        localStorage.setItem("user", JSON.stringify(res.profileObj))
        localStorage.setItem("token", JSON.stringify(res.tokenId))
        naviget("/")
    }

    const responseFailure = (res) => {
        console.log("Login Google! failure res: ", res)
    }

  return (
    <div>
      <IsGoogleLogin 
       clientId={clientId}
       buttonText="Login"
       onSuccess={responseGoogle}
       onFailure={responseFailure}
       cookiePolicy={'single_host_origin'}
       className='w-100 justify-content-center mb-2'
      />
    </div>
  )
}

export default GoogleLogin
