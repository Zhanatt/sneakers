import React from 'react'

import logo from './../assets/img/logo.png'
import cart from './../assets/img/cart.svg'
import favorite from './../assets/img/favorite.svg'
import user from './../assets/img/user.svg'


console.log(logo)

export default function Header(props) {
  return (
    <header className="d-flex justify-between">
      <div className="d-flex align-center headerLeft">
        <img width={40} height={40} src={logo} />
        <div>
          <h3>React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
       
      <ul className="d-flex align-center headerRight">
        <li className='cu-p' onClick={props.onClickCart}>
          <img width={18} height={18} src={cart} />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={20} height={20} src={favorite} />
        </li>
        <li>
          <img width={20} height={20} src={user} />
        </li>
      </ul>
    </header>
  )
}
 