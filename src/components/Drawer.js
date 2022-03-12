import React from 'react'

import btnRemove from './../assets/img/btn-remove.svg'
// import emptyCart from './../assets/img/empty-cart.jpg'
import arrow from './../assets/img/arrow.svg'

export default function Drawer({ onClose, onRempve, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="removeBtn cu-p" src={btnRemove} alt="Remove"/>
        </h2>

        <div className="cartEmpty d-flex align-center justify-content flex-column flex">
          {/* <img className="mb-20" width="120px" height="120px" src={emptyCart} alt=""/> */}
          <h2>Корзина пустая</h2>
          <p className='opacity-6'>Добавьте хотя бы одну пару крассовок, чтобы сделать заказ</p>
          <button className="greenButton">
            <img src={arrow} alt="Arrow" />
            Вернутся назад
          </button>
        </div>
          
        <div className="items">
          {
            items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>  
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img 
                  className="removeBtn" 
                  onClick={() => onRempve(obj.id)} 
                  src="" 
                  alt="Remove"/>
              </div>
            ))
          }

        </div>
              
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ 
            <img src={arrow} alt="Arrow"/> 
          </button>  
        </div>      
      </div>
    </div>
  )
}
