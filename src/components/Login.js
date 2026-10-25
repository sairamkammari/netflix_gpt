import React, { useRef, useState } from 'react'
import Header from './Header'
import { loginFormValidation } from '../utils/validations'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMessage,setErrorMessage] = useState("")
    const name = useRef("")
    const email = useRef("")
    const password = useRef("")

    const handleSubmitButton = ()=>{
      const message = loginFormValidation(name.current.value , email.current.value, password.current.value)
      setErrorMessage(message)
    }
    const handleSubmitPrevent = (e)=>{
      e.preventDefault();
    }
    const togglesignin = ()=>{
       setIsSignIn(!isSignIn) 
    }
  return (
    <div>
      <Header />

      <form className='flex flex-col items-center w-full max-w-md mx-auto my-40 bg-gray-800 gap-4 font-bold p-10 rounded-lg'
      onSubmit={handleSubmitPrevent}
      >
        <h1 className='text-left text-lg text-white'>{isSignIn?"Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input
        ref={name}
          className='w-full px-4 py-3 text-base border-2 border-gray-400 rounded-md'
          type='text'
          placeholder='Enter Full Name'
        />}
        <input
        ref={email}
          className='w-full px-4 py-3 text-base border-2 border-gray-400 rounded-md'
          type='text'
          placeholder='Email address'
        />
        <input
        ref={password}
          className='w-full px-4 py-3 text-base border-2 border-gray-400 rounded-md'
          type='password'
          placeholder='Enter password'
        />
        <button onClick={handleSubmitButton} className='w-full border-2 rounded-md border-gray-400 bg-red-600 text-lg px-4 py-3 text-white'>
          Sign In
        </button>
        <p className='text-red-600'>{errorMessage}</p>
        <p className='text-white cursor-pointer' onClick={togglesignin}>{isSignIn? " already register please :sign-in now":"New to Netflix: Sign-up now"}</p>
      </form>
    </div>
  )
}

export default Login