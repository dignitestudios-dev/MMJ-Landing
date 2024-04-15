import React from 'react'

const NavLink = ({label, id}) => {
  return (
    <a href={`${id}`} className='text-sm font-normal'>
      {label}
    </a>
  )
}

export default NavLink
