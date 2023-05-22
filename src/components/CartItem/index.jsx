import React from 'react'
import Col from 'react-bootstrap/Col';
import image from '../../img/image.jpg';
import './style.css'

export default function CartItem({ title, price, description, count, special }) {

  return (
    <>
      <div className='card'>
        <div className='card__image'>
          <img src={image} />
          <div className='card_price'>€{price}</div>
        </div>
        <div className='card__wrapper-content'>
          <div className='card__content'>
            <div className='px-4 mt-4 text-start card__title'>
            Titel {title}
            </div>
            <div className='p-4 text-start card__description'>
              {description}

              <div className='cart__product-count'>
                {count}x toegevoegd
              </div>
            </div>
          </div>
        </div>
        {special && (
          <div className='card_special text-uppercase'>
            Speсial
          </div>
        )}
      </div>
    </>
  )
}
