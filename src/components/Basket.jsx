import React from 'react'
import PropTypes from 'prop-types';
import ContentEmpty from './Basket-ContentEmpty';
import ContentBasic from './Basket-ContentBasic';
import Header from "./Header"

const Basket = (props) => {
  console.log(props)
  return (
    <div class="wrapper">
      <Header totalPrice={props.totalPriceValue} basket={props.Basket}/>
      {props.Basket < 1 ? <ContentEmpty /> : <ContentBasic Basket={props.Basket} deleteBasketFC={props.deleteBasketFC}/>}
    </div>

  )
}

export default Basket;
