import React, {Component} from 'react'
import Logo from '../../static/images/Logo-Liftit.svg'

export default class Header extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img src={Logo} alt='' />
          </a>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <a href='/' className='navbar-item navbar-item-active '>
                Change Log
              </a>
              <a href='#comunicados' className='navbar-item'>
                Comunicados
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
