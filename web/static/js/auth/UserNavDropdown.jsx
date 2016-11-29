import React from 'react'
import { NavDropdown, MenuItem } from 'react-bootstrap'
import LogoutMenuItem from './LogoutMenuItem'
import AvatarImage from './AvatarImage'

const UserNavDropdown = (props) => {
  const profile = props.profile
  const avatar = <AvatarImage picture={profile.picture} />

  return (
    <NavDropdown className="picture-dropdown" eventKey="4" title={avatar} id="nav-dropdown">
      <LogoutMenuItem>Logout</LogoutMenuItem>
    </NavDropdown>
  )
}

export default UserNavDropdown
