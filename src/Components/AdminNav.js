import React from 'react'
import AddItem from './AddItem'

import { Link } from 'react-router-dom'

const AdminNavBar = props =>
  <div className='nav AdminNav'>
    <div className='nav_logo' />
    <ul className='nav_list adminNavList'>
      <li className='nav_list_item'><Link exact to={`${props.match.path}/additem`}>Add Item</Link></li>
      <li className='nav_list_item'><Link exact to='/adminpage'>Sort-By</Link></li>
    </ul>

    <div className='nav_button adminButton'>
      { props.currentUser ?
        <Link to='/' onClick={() => props.signOutUser()}>Sign Out</Link>
          :
        <Link to='/signin' >Sales Target</Link>
      }
    </div>
  </div>

export default AdminNavBar
