import React from 'react'
import './Css/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
     
       <button>Continue</button> 
       <div className="agree"></div>
            <p className='para'>Already have an account? <span>Login here</span></p>
            <input type="checkbox" />
             <p>By continuing, i agree to the terms of use & privacy policy.</p>
            {/* <div className="loginsignup-agree">
              <input type="checkbox" />
              <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div> */}
             </div>
    </div>
    
  )
}

export default LoginSignup