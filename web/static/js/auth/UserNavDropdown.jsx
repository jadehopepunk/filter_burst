import React from 'react'
import { NavDropdown, MenuItem } from 'react-bootstrap'
import LogoutMenuItem from './LogoutMenuItem'

const UserNavDropdown = (props) => {
  const profile = props.profile
  const avatar = <img src={profile.picture} width={40} height={40} />

  return (
    <NavDropdown className="picture-dropdown" eventKey="4" title={avatar} id="nav-dropdown">
      <LogoutMenuItem>Logout</LogoutMenuItem>
    </NavDropdown>
  )
}

export default UserNavDropdown
