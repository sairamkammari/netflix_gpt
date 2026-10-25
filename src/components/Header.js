import React from 'react'
import { logo } from '../utils/constants'
const Header = () => {
  return (
    <div>
        <img  className="w-32 h-auto p-2 m-2" src={logo} alt="Netflix Logo" />
    </div>
  )
}

export default Header