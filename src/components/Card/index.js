import React from 'react';
import styles from './Card.module.scss';

import heartUnliked from './../../assets/img/heart-unliked.svg';
import btnChecked from './../../assets/img/btn-checked.svg';
import btnPlus from './../../assets/img/btn-plus.svg';



function Card({ title, imageUrl, price, onFavorite, onPlus }){
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }

  return(
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src={heartUnliked} alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5 className="mb-15 mt-15">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img 
          className={styles.plus} 
          width={30} 
          height={30} 
          onClick={onClickPlus} 
          src={isAdded ? {btnChecked} : {btnPlus}} 
          alt={isAdded ? "Checked" : "Plus"} 
        />
      </div>
    </div>
  );
}
export default Card;


